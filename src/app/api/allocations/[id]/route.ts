import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth-options';
import { prisma } from '@/lib/db';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  try {
    const allocation = await prisma.resourceAllocation.findUnique({
      where: { id: params.id },
      include: {
        user: { select: { id: true, name: true, email: true } },
        project: { select: { id: true, name: true } },
        demand: { select: { id: true, title: true } },
      },
    });
    if (!allocation) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(allocation);
  } catch (err) {
    console.error('GET /api/allocations/[id] error', err);
    return NextResponse.json({ error: 'Failed to fetch allocation' }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const role = (session.user as any)?.role;
    if (!['ADMIN', 'MANAGER'].includes(role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const data: any = {};
    if (typeof body.allocatedHours === 'number') {
      if (body.allocatedHours < 0) return NextResponse.json({ error: 'allocatedHours must be >= 0' }, { status: 400 });
      data.allocatedHours = body.allocatedHours;
    }
    if (typeof body.role === 'string') data.role = body.role;
    if (typeof body.status === 'string') data.status = body.status;
    if (typeof body.startDate === 'string') {
      const sd = new Date(body.startDate);
      if (isNaN(sd.getTime())) return NextResponse.json({ error: 'Invalid startDate' }, { status: 400 });
      data.startDate = sd;
    }
    if (typeof body.endDate === 'string') {
      const ed = new Date(body.endDate);
      if (isNaN(ed.getTime())) return NextResponse.json({ error: 'Invalid endDate' }, { status: 400 });
      data.endDate = ed;
    }
    if (data.startDate && data.endDate && data.startDate > data.endDate) {
      return NextResponse.json({ error: 'Invalid date range' }, { status: 400 });
    }

    const updated = await prisma.resourceAllocation.update({
      where: { id: params.id },
      data,
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error('PATCH /api/allocations/[id] error', err);
    return NextResponse.json({ error: 'Failed to update allocation' }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const role = (session.user as any)?.role;
    if (!['ADMIN', 'MANAGER'].includes(role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    await prisma.resourceAllocation.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('DELETE /api/allocations/[id] error', err);
    return NextResponse.json({ error: 'Failed to delete allocation' }, { status: 500 });
  }
}
