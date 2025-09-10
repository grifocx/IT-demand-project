export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'team_member';
  skills: string[];
  capacity: number; // hours per week
}

export interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface Priority {
  id: string;
  name: 'Critical' | 'High' | 'Medium' | 'Low';
  level: number;
  color: string;
}

export interface Status {
  id: string;
  name: string;
  type: 'demand' | 'project' | 'task';
  order: number;
  color: string;
}

export interface Demand {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  priorityId: string;
  statusId: string;
  requestedBy: string;
  requestedAt: Date;
  businessValue: number;
  complexity: 'Low' | 'Medium' | 'High';
  estimatedEffort: number; // in hours
  actualEffort?: number;
  dueDate?: Date;
  assignedTo?: string[];
  relatedProjectId?: string;
  tags: string[];
  attachments: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  statusId: string;
  priorityId: string;
  startDate: Date;
  targetEndDate: Date;
  actualEndDate?: Date;
  budget: number;
  spent: number;
  managerId: string;
  teamMembers: string[];
  demands: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ResourceAllocation {
  id: string;
  userId: string;
  projectId: string;
  demandId?: string;
  startDate: Date;
  endDate: Date;
  allocatedHours: number;
  actualHours?: number;
  role: string;
  status: 'planned' | 'in_progress' | 'completed' | 'on_hold';
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  content: string;
  userId: string;
  entityType: 'demand' | 'project' | 'task';
  entityId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DashboardStats {
  totalDemands: number;
  activeProjects: number;
  teamCapacity: number;
  resourceUtilization: number;
  demandsByStatus: { status: string; count: number }[];
  projectsByStatus: { status: string; count: number }[];
  upcomingMilestones: { id: string; name: string; dueDate: Date; type: 'demand' | 'project' }[];
}
