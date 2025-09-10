import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const hashedPassword = await hash('admin123', 12);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@demandit.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@demandit.com',
      password: hashedPassword,
      role: 'ADMIN',
      skills: JSON.stringify(['Project Management', 'System Architecture', 'DevOps']),
      capacity: 40,
    },
  });

  // Create priorities
  const priorities = await Promise.all([
    prisma.priority.upsert({
      where: { name: 'Critical' },
      update: {},
      create: {
        name: 'Critical',
        level: 1,
        color: '#ef4444', // red-500
      },
    }),
    prisma.priority.upsert({
      where: { name: 'High' },
      update: {},
      create: {
        name: 'High',
        level: 2,
        color: '#f97316', // orange-500
      },
    }),
    prisma.priority.upsert({
      where: { name: 'Medium' },
      update: {},
      create: {
        name: 'Medium',
        level: 3,
        color: '#eab308', // yellow-500
      },
    }),
    prisma.priority.upsert({
      where: { name: 'Low' },
      update: {},
      create: {
        name: 'Low',
        level: 4,
        color: '#64748b', // slate-500
      },
    }),
  ]);

  // Create statuses
  const demandStatuses = await Promise.all([
    prisma.status.upsert({
      where: { name_type: { name: 'New', type: 'DEMAND' } },
      update: {},
      create: {
        name: 'New',
        type: 'DEMAND',
        order: 1,
        color: '#94a3b8', // slate-400
      },
    }),
    prisma.status.upsert({
      where: { name_type: { name: 'Under Review', type: 'DEMAND' } },
      update: {},
      create: {
        name: 'Under Review',
        type: 'DEMAND',
        order: 2,
        color: '#60a5fa', // blue-400
      },
    }),
    prisma.status.upsert({
      where: { name_type: { name: 'Approved', type: 'DEMAND' } },
      update: {},
      create: {
        name: 'Approved',
        type: 'DEMAND',
        order: 3,
        color: '#22c55e', // green-500
      },
    }),
    prisma.status.upsert({
      where: { name_type: { name: 'Rejected', type: 'DEMAND' } },
      update: {},
      create: {
        name: 'Rejected',
        type: 'DEMAND',
        order: 4,
        color: '#ef4444', // red-500
      },
    }),
  ]);

  const projectStatuses = await Promise.all([
    prisma.status.upsert({
      where: { name_type: { name: 'Not Started', type: 'PROJECT' } },
      update: {},
      create: {
        name: 'Not Started',
        type: 'PROJECT',
        order: 1,
        color: '#94a3b8', // slate-400
      },
    }),
    prisma.status.upsert({
      where: { name_type: { name: 'In Progress', type: 'PROJECT' } },
      update: {},
      create: {
        name: 'In Progress',
        type: 'PROJECT',
        order: 2,
        color: '#3b82f6', // blue-500
      },
    }),
    prisma.status.upsert({
      where: { name_type: { name: 'On Hold', type: 'PROJECT' } },
      update: {},
      create: {
        name: 'On Hold',
        type: 'PROJECT',
        order: 3,
        color: '#f59e0b', // amber-500
      },
    }),
    prisma.status.upsert({
      where: { name_type: { name: 'Completed', type: 'PROJECT' } },
      update: {},
      create: {
        name: 'Completed',
        type: 'PROJECT',
        order: 4,
        color: '#10b981', // emerald-500
      },
    }),
  ]);

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { name: 'Infrastructure' },
      update: {},
      create: {
        name: 'Infrastructure',
        description: 'Server, network, and infrastructure related demands',
        color: '#6366f1', // indigo-500
      },
    }),
    prisma.category.upsert({
      where: { name: 'Application Development' },
      update: {},
      create: {
        name: 'Application Development',
        description: 'New application development or major enhancements',
        color: '#ec4899', // pink-500
      },
    }),
    prisma.category.upsert({
      where: { name: 'Security' },
      update: {},
      create: {
        name: 'Security',
        description: 'Security related improvements and patches',
        color: '#f43f5e', // rose-500
      },
    }),
    prisma.category.upsert({
      where: { name: 'Business Process' },
      update: {},
      create: {
        name: 'Business Process',
        description: 'Improvements to business processes',
        color: '#14b8a6', // teal-500
      },
    }),
  ]);

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
