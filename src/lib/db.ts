import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

// Helper function to calculate resource utilization
export async function calculateResourceUtilization(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      allocations: {
        where: {
          status: 'IN_PROGRESS',
          startDate: { lte: new Date() },
          endDate: { gte: new Date() },
        },
      },
    },
  });

  if (!user) return 0;

  const totalAllocatedHours = user.allocations.reduce(
    (sum, alloc) => sum + alloc.allocatedHours,
    0
  );

  return Math.min(Math.round((totalAllocatedHours / user.capacity) * 100), 100);
}

// Helper function to get dashboard statistics
export async function getDashboardStats() {
  const [
    totalDemands,
    activeProjects,
    teamMembers,
    demandsByStatus,
    projectsByStatus,
  ] = await Promise.all([
    prisma.demand.count(),
    prisma.project.count({
      where: {
        status: {
          name: { in: ['In Progress', 'On Hold'] },
        },
      },
    }),
    prisma.user.findMany({
      where: { role: 'TEAM_MEMBER' },
      include: {
        allocations: {
          where: {
            status: 'IN_PROGRESS',
            startDate: { lte: new Date() },
            endDate: { gte: new Date() },
          },
        },
      },
    }),
    prisma.status.findMany({
      where: { type: 'DEMAND' },
      include: {
        _count: {
          select: { demands: true },
        },
      },
    }),
    prisma.status.findMany({
      where: { type: 'PROJECT' },
      include: {
        _count: {
          select: { projects: true },
        },
      },
    }),
  ]);

  const teamCapacity = teamMembers.reduce((sum, member) => sum + member.capacity, 0);
  const totalAllocatedHours = teamMembers.reduce(
    (sum, member) =>
      sum + member.allocations.reduce((a, b) => a + b.allocatedHours, 0),
    0
  );
  const resourceUtilization = Math.min(
    Math.round((totalAllocatedHours / teamCapacity) * 100) || 0,
    100
  );

  const upcomingMilestones = await prisma.$queryRaw`
    (SELECT 
      id, 
      name, 
      dueDate as "dueDate", 
      'DEMAND' as type
    FROM "Demand" 
    WHERE "dueDate" >= NOW() 
    ORDER BY "dueDate" ASC 
    LIMIT 5)
    
    UNION ALL
    
    (SELECT 
      id, 
      name, 
      "targetEndDate" as "dueDate", 
      'PROJECT' as type
    FROM "Project" 
    WHERE "targetEndDate" >= NOW() 
    ORDER BY "targetEndDate" ASC 
    LIMIT 5)
    
    ORDER BY "dueDate" ASC 
    LIMIT 5
  `;

  return {
    totalDemands,
    activeProjects,
    teamCapacity,
    resourceUtilization,
    demandsByStatus: demandsByStatus.map((status) => ({
      status: status.name,
      count: status._count.demands,
    })),
    projectsByStatus: projectsByStatus.map((status) => ({
      status: status.name,
      count: status._count.projects,
    })),
    upcomingMilestones: (upcomingMilestones as any[]).map((milestone) => ({
      id: milestone.id,
      name: milestone.name,
      dueDate: milestone.dueDate,
      type: milestone.type,
    })),
  };
}
