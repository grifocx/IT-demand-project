import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth-options';
import { prisma } from '@/lib/db';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Calendar, Clock, Users, FileText } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the chart component with no SSR
const DemandChart = dynamic(
  () => import('@/components/demand-chart').then((mod) => mod.DemandChart),
  { ssr: false, loading: () => <div className="h-[300px] flex items-center justify-center">Loading...</div> }
);

const ProjectChart = dynamic(
  () => import('@/components/project-chart').then((mod) => mod.ProjectChart),
  { ssr: false, loading: () => <div className="h-[300px] flex items-center justify-center">Loading...</div> }
);

/**
 * @description The home page of the application.
 * @returns {Promise<React.ReactElement>} - The home page component.
 */
export default async function Home() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect('/auth/signin');
  }

  const stats = await prisma.$queryRaw`
    WITH 
    demand_stats AS (
      SELECT 
        s.name as status,
        COUNT(d.id) as count
      FROM "Status" s
      LEFT JOIN "Demand" d ON s.id = d."statusId"
      WHERE s.type = 'DEMAND'
      GROUP BY s.name, s.order
      ORDER BY s.order
    ),
    project_stats AS (
      SELECT 
        s.name as status,
        COUNT(p.id) as count
      FROM "Status" s
      LEFT JOIN "Project" p ON s.id = p."statusId"
      WHERE s.type = 'PROJECT'
      GROUP BY s.name, s.order
      ORDER BY s.order
    )
    
    SELECT 
      (SELECT COUNT(*) FROM "User") as total_users,
      (SELECT COUNT(*) FROM "Demand") as total_demands,
      (SELECT COUNT(*) FROM "Project") as total_projects,
      (SELECT json_agg(row_to_json(demand_stats)) FROM demand_stats) as demand_stats,
      (SELECT json_agg(row_to_json(project_stats)) FROM project_stats) as project_stats
  `;

  const [data] = stats as any[];

  const demandChartData = (data.demand_stats || []).map((stat: any) => ({
    name: stat.status,
    count: stat.count,
  }));

  const projectChartData = (data.project_stats || []).map((stat: any) => ({
    name: stat.status,
    count: stat.count,
  }));

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button asChild>
            <Link href="/demands/new">New Demand</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/projects/new">New Project</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Number(data.total_users) || 0}</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Demands</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Number(data.total_demands) || 0}</div>
            <p className="text-xs text-muted-foreground">+12.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Number(data.total_projects) || 0}</div>
            <p className="text-xs text-muted-foreground">+8.7% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Resolution Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2 days</div>
            <p className="text-xs text-muted-foreground">-0.5 days from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Demands by Status</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <DemandChart data={demandChartData} />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Projects by Status</CardTitle>
            <CardDescription>Current project distribution across statuses</CardDescription>
          </CardHeader>
          <CardContent>
            <ProjectChart data={projectChartData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
