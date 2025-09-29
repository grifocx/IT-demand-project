import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth-options';
import { prisma } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId') || undefined;
    const projectId = searchParams.get('projectId') || undefined;
    const from = searchParams.get('from');
    const to = searchParams.get('to');

    const where: any = {};
    if (userId) where.userId = userId;
    if (projectId) where.projectId = projectId;
    if (from || to) {
      where.AND = [
        from ? { endDate: { gte: new Date(from) } } : {},
        to ? { startDate: { lte: new Date(to) } } : {},
      ];
    }

    const allocations = await prisma.resourceAllocation.findMany({
      where,
      include: {
        user: { select: { id: true, name: true, email: true } },
        project: { select: { id: true, name: true } },
        demand: { select: { id: true, title: true } },
      },
      orderBy: { startDate: 'asc' },
    });

    return NextResponse.json(allocations);
  } catch (err) {
    console.error('GET /api/allocations error', err);
    return NextResponse.json({ error: 'Failed to fetch allocations' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const role = (session.user as any)?.role;
    if (!['ADMIN', 'MANAGER'].includes(role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const { userId, projectId, demandId, startDate, endDate, allocatedHours, role: allocationRole } = body || {};

    if (!userId || !projectId || !startDate || !endDate || typeof allocatedHours !== 'number') {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (allocatedHours < 0) {
      return NextResponse.json({ error: 'allocatedHours must be >= 0' }, { status: 400 });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
      return NextResponse.json({ error: 'Invalid date range' }, { status: 400 });
    }

    const created = await prisma.resourceAllocation.create({
      data: {
        userId,
        projectId,
        demandId: demandId || null,
        startDate: start,
        endDate: end,
        allocatedHours,
        role: allocationRole || 'Contributor',
        status: 'PLANNED',
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error('POST /api/allocations error', err);
    return NextResponse.json({ error: 'Failed to create allocation' }, { status: 500 });
  }
}
