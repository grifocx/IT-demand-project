import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth-options';
import { prisma } from '@/lib/db';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { PlusCircle, Users, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams?: { userId?: string; projectId?: string; from?: string; to?: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/auth/signin');

  const filters = {
    userId: searchParams?.userId || undefined,
    projectId: searchParams?.projectId || undefined,
    from: searchParams?.from ? new Date(searchParams.from) : undefined,
    to: searchParams?.to ? new Date(searchParams.to) : undefined,
  };

  const teamMembers = await prisma.user.findMany({
    include: {
      allocations: {
        include: { project: true, demand: true },
        where: {
          AND: [
            { endDate: { gte: filters.from || new Date() } },
            filters.to ? { startDate: { lte: filters.to } } : {},
            filters.projectId ? { projectId: filters.projectId } : {},
            filters.userId ? { userId: filters.userId } : {},
          ],
        },
      },
    },
    orderBy: { name: 'asc' },
  });

  const teamWithAvailability = teamMembers.map((member) => {
    const totalAllocatedHours = member.allocations.reduce((sum, a) => sum + a.allocatedHours, 0);
    const availability = Math.max(0, member.capacity - totalAllocatedHours);
    const utilization = member.capacity > 0 ? Math.min(100, Math.round((totalAllocatedHours / member.capacity) * 100)) : 0;
    return { ...member, availability, utilization };
  });

  const allUsers = await prisma.user.findMany({ select: { id: true, name: true } });
  const allProjects = await prisma.project.findMany({ select: { id: true, name: true } });

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Resource Management</h2>
          <p className="text-muted-foreground">View and manage team member allocations and availability</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button asChild>
            <Link href="/resources/allocate">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Allocation
            </Link>
          </Button>
        </div>
      </div>

      <form className="grid gap-4 md:grid-cols-5" action="/resources" method="get">
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="userId">User</label>
          <select id="userId" name="userId" className="w-full rounded-md border bg-background px-3 py-2 text-sm">
            <option value="">All</option>
            {allUsers.map((u) => (
              <option key={u.id} value={u.id} selected={filters.userId === u.id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="projectId">Project</label>
          <select id="projectId" name="projectId" className="w-full rounded-md border bg-background px-3 py-2 text-sm">
            <option value="">All</option>
            {allProjects.map((p) => (
              <option key={p.id} value={p.id} selected={filters.projectId === p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="from">From</label>
          <input id="from" name="from" type="date" className="w-full rounded-md border bg-background px-3 py-2 text-sm" defaultValue={filters.from ? new Date(filters.from).toISOString().substring(0,10) : ''} />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="to">To</label>
          <input id="to" name="to" type="date" className="w-full rounded-md border bg-background px-3 py-2 text-sm" defaultValue={filters.to ? new Date(filters.to).toISOString().substring(0,10) : ''} />
        </div>
        <div className="flex items-end gap-2">
          <Button type="submit">Apply</Button>
          <Button type="button" variant="outline" asChild>
            <Link href="/resources">Reset</Link>
          </Button>
        </div>
      </form>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="team">Team View</TabsTrigger>
          <TabsTrigger value="projects">Project View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{teamMembers.length}</div>
                <p className="text-xs text-muted-foreground">Active team members</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Capacity</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {teamMembers.reduce((sum, member) => sum + member.capacity, 0)} hrs
                </div>
                <p className="text-xs text-muted-foreground">Weekly capacity</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Allocated Hours</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {teamMembers.reduce((sum, member) => {
                    const memberAllocations = member.allocations.reduce((allocSum, alloc) => allocSum + alloc.allocatedHours, 0);
                    return sum + memberAllocations;
                  }, 0)} hrs
                </div>
                <p className="text-xs text-muted-foreground">Total allocated hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Utilization</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {teamWithAvailability.length > 0
                    ? Math.round(
                        teamWithAvailability.reduce((sum, member) => sum + member.utilization, 0) / teamWithAvailability.length
                      )
                    : 0}%
                </div>
                <p className="text-xs text-muted-foreground">Average team utilization</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Team Workload</CardTitle>
                <CardDescription>Current weekly allocation vs. capacity</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="space-y-4">
                  {teamWithAvailability.map((member) => (
                    <div key={member.id} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <div className="w-48 font-medium">{member.name}</div>
                        <div className="flex-1 px-2">
                          <div className="h-4 w-full bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${member.utilization}%` }} />
                          </div>
                        </div>
                        <div className="w-32 text-right text-xs text-muted-foreground">
                          {member.capacity - member.availability}h / {member.capacity}h
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Allocations</CardTitle>
                <CardDescription>Recent and upcoming resource assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers
                    .flatMap((member) => member.allocations.map((a) => ({ ...a, memberName: member.name })))
                    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
                    .slice(0, 5)
                    .map((allocation) => (
                      <div key={allocation.id} className="flex items-center">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {allocation.memberName} → {allocation.project?.name || 'Unassigned'}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {allocation.allocatedHours}h/week • {allocation.role}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(allocation.startDate).toLocaleDateString()} - {new Date(allocation.endDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>View and manage team member allocations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamWithAvailability.map((member) => (
                  <div key={member.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.email}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{member.availability}h available</div>
                        <div className="text-sm text-muted-foreground">{member.utilization}% utilized</div>
                      </div>
                    </div>

                    {member.allocations.length > 0 && (
                      <div className="mt-4 border-t pt-4">
                        <h4 className="text-sm font-medium mb-2">Current Allocations</h4>
                        <div className="space-y-2">
                          {member.allocations.map((allocation) => (
                            <div key={allocation.id} className="flex items-center justify-between text-sm">
                              <div>
                                <span className="font-medium">{allocation.project?.name || 'Unassigned'}</span>
                                {allocation.demand && (
                                  <span className="text-muted-foreground ml-2">({allocation.demand.title})</span>
                                )}
                              </div>
                              <div className="text-muted-foreground">{allocation.allocatedHours}h/week • {allocation.role}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Allocations</CardTitle>
              <CardDescription>View resource allocation by project</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Project allocation view coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resource Calendar</CardTitle>
              <CardDescription>View team availability and allocations on a calendar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] flex items-center justify-center bg-muted/50 rounded-md">
                <div className="text-center space-y-2">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">Calendar view coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
