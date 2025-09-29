import { Icons } from '@/components/icons';

/**
 * Represents a main navigation item.
 */
export interface MainNavItem {
  /** The title of the navigation item. */
  title: string;
  /** The URL of the navigation item. */
  href: string;
  /** Whether the navigation item is disabled. */
  disabled?: boolean;
  /** Whether the navigation item is only visible to admins. */
  adminOnly?: boolean;
  /** The icon of the navigation item. */
  icon?: keyof typeof Icons;
}

/**
 * Represents a user's skill.
 */
export interface Skill {
  /** The unique identifier of the skill. */
  id: string;
  /** The name of the skill. */
  name: string;
}

/**
 * Represents a user.
 */
export interface User {
  /** The unique identifier of the user. */
  id: string;
  /** The name of the user. */
  name: string;
  /** The email of the user. */
  email: string;
  /** The role of the user. */
  role: 'admin' | 'manager' | 'team_member';
  /** The skills of the user. */
  skills: Skill[];
  /** The capacity of the user in hours per week. */
  capacity: number;
}

/**
 * Represents a category.
 */
export interface Category {
  /** The unique identifier of the category. */
  id: string;
  /** The name of the category. */
  name: string;
  /** The description of the category. */
  description: string;
  /** The color of the category. */
  color: string;
}

/**
 * Represents a priority.
 */
export interface Priority {
  /** The unique identifier of the priority. */
  id: string;
  /** The name of the priority. */
  name: 'Critical' | 'High' | 'Medium' | 'Low';
  /** The level of the priority. */
  level: number;
  /** The color of the priority. */
  color: string;
}

/**
 * Represents a status.
 */
export interface Status {
  /** The unique identifier of the status. */
  id: string;
  /** The name of the status. */
  name: string;
  /** The type of the status. */
  type: 'demand' | 'project' | 'task';
  /** The order of the status. */
  order: number;
  /** The color of the status. */
  color: string;
}

/**
 * Represents a tag.
 */
export interface Tag {
  /** The unique identifier of the tag. */
  id: string;
  /** The name of the tag. */
  name: string;
}

/**
 * Represents an attachment.
 */
export interface Attachment {
  /** The unique identifier of the attachment. */
  id: string;
  /** The name of the file. */
  fileName: string;
  /** The URL of the attachment. */
  url: string;
  /** The date the attachment was created. */
  createdAt: Date;
}

/**
 * Represents a demand.
 */
export interface Demand {
  /** The unique identifier of the demand. */
  id:string;
  /** The title of the demand. */
  title: string;
  /** The description of the demand. */
  description: string;
  /** The ID of the category of the demand. */
  categoryId: string;
  /** The ID of the priority of the demand. */
  priorityId: string;
  /** The ID of the status of the demand. */
  statusId: string;
  /** The user who requested the demand. */
  requestedBy: string;
  /** The date the demand was requested. */
  requestedAt: Date;
  /** The business value of the demand. */
  businessValue: number;
  /** The complexity of the demand. */
  complexity: 'Low' | 'Medium' | 'High';
  /** The estimated effort of the demand in hours. */
  estimatedEffort: number; // in hours
  /** The actual effort of the demand in hours. */
  actualEffort?: number;
  /** The due date of the demand. */
  dueDate?: Date;
  /** The users assigned to the demand. */
  assignedTo?: string[];
  /** The ID of the related project. */
  relatedProjectId?: string;
  /** The tags of the demand. */
  tags: Tag[];
  /** The attachments of the demand. */
  attachments: Attachment[];
  /** The date the demand was created. */
  createdAt: Date;
  /** The date the demand was last updated. */
  updatedAt: Date;
}

/**
 * Represents a project.
 */
export interface Project {
  /** The unique identifier of the project. */
  id: string;
  /** The name of the project. */
  name: string;
  /** The description of the project. */
  description: string;
  /** The ID of the status of the project. */
  statusId: string;
  /** The ID of the priority of the project. */
  priorityId: string;
  /** The start date of the project. */
  startDate: Date;
  /** The target end date of the project. */
  targetEndDate: Date;
  /** The actual end date of the project. */
  actualEndDate?: Date;
  /** The budget of the project. */
  budget: number;
  /** The amount spent on the project. */
  spent: number;
  /** The ID of the manager of the project. */
  managerId: string;
  /** The team members of the project. */
  teamMembers: string[];
  /** The demands of the project. */
  demands: string[];
  /** The tags of the project. */
  tags: Tag[];
  /** The attachments of the project. */
  attachments: Attachment[];
  /** The date the project was created. */
  createdAt: Date;
  /** The date the project was last updated. */
  updatedAt: Date;
}

/**
 * Represents a resource allocation.
 */
export interface ResourceAllocation {
  /** The unique identifier of the resource allocation. */
  id: string;
  /** The ID of the user. */
  userId: string;
  /** The ID of the project. */
  projectId: string;
  /** The ID of the demand. */
  demandId?: string;
  /** The start date of the allocation. */
  startDate: Date;
  /** The end date of the allocation. */
  endDate: Date;
  /** The allocated hours. */
  allocatedHours: number;
  /** The actual hours. */
  actualHours?: number;
  /** The role of the user in the allocation. */
  role: string;
  /** The status of the allocation. */
  status: 'planned' | 'in_progress' | 'completed' | 'on_hold';
  /** The date the allocation was created. */
  createdAt: Date;
  /** The date the allocation was last updated. */
  updatedAt: Date;
}

/**
 * Represents a comment.
 */
export interface Comment {
  /** The unique identifier of the comment. */
  id: string;
  /** The content of the comment. */
  content: string;
  /** The ID of the user who created the comment. */
  userId: string;
  /** The ID of the demand the comment belongs to. */
  demandId?: string;
  /** The ID of the project the comment belongs to. */
  projectId?: string;
  /** The date the comment was created. */
  createdAt: Date;
  /** The date the comment was last updated. */
  updatedAt: Date;
}

/**
 * Represents the dashboard statistics.
 */
export interface DashboardStats {
  /** The total number of demands. */
  totalDemands: number;
  /** The number of active projects. */
  activeProjects: number;
  /** The total capacity of the team. */
  teamCapacity: number;
  /** The resource utilization of the team. */
  resourceUtilization: number;
  /** The number of demands by status. */
  demandsByStatus: { status: string; count: number }[];
  /** The number of projects by status. */
  projectsByStatus: { status: string; count: number }[];
  /** The upcoming milestones. */
  upcomingMilestones: { id: string; name: string; dueDate: Date; type: 'demand' | 'project' }[];
}
