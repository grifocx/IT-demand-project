import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth-options';
import { prisma } from '@/lib/db';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NewAllocationForm } from '@/components/new-allocation-form';

export default async function NewAllocationPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/auth/signin');

  const role = (session?.user as any)?.role;
  if (!['ADMIN', 'MANAGER'].includes(role)) {
    redirect('/');
  }

  const [users, projects, demands] = await Promise.all([
    prisma.user.findMany({ select: { id: true, name: true, email: true } }),
    prisma.project.findMany({ select: { id: true, name: true } }),
    prisma.demand.findMany({ select: { id: true, title: true } }),
  ]);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>New Allocation</CardTitle>
          <CardDescription>Assign a team member to a project or demand for a date range with weekly hours.</CardDescription>
        </CardHeader>
        <CardContent>
          <NewAllocationForm users={users} projects={projects} demands={demands} />
        </CardContent>
      </Card>
    </div>
  );
}
