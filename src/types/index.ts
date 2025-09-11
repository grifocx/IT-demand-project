import { Icons } from '@/components/icons';

/**
 * @description The main navigation item.
 */
export interface MainNavItem {
  title: string;
  href: string;
  disabled?: boolean;
  adminOnly?: boolean;
  icon?: keyof typeof Icons;
}

/**
 * @description The user.
 */
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'team_member';
  skills: string[];
  capacity: number; // hours per week
}

/**
 * @description The category.
 */
export interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
}

/**
 * @description The priority.
 */
export interface Priority {
  id: string;
  name: 'Critical' | 'High' | 'Medium' | 'Low';
  level: number;
  color: string;
}

/**
 * @description The status.
 */
export interface Status {
  id: string;
  name: string;
  type: 'demand' | 'project' | 'task';
  order: number;
  color: string;
}

/**
 * @description The demand.
 */
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

/**
 * @description The project.
 */
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

/**
 * @description The resource allocation.
 */
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

/**
 * @description The comment.
 */
export interface Comment {
  id: string;
  content: string;
  userId: string;
  entityType: 'demand' | 'project' | 'task';
  entityId: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * @description The dashboard statistics.
 */
export interface DashboardStats {
  totalDemands: number;
  activeProjects: number;
  teamCapacity: number;
  resourceUtilization: number;
  demandsByStatus: { status: string; count: number }[];
  projectsByStatus: { status: string; count: number }[];
  upcomingMilestones: { id: string; name: string; dueDate: Date; type: 'demand' | 'project' }[];
}
