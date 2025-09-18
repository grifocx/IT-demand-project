import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
/**
 * A utility function to merge Tailwind CSS classes.
 *
 * @param inputs - The class values to merge.
 * @returns The merged class values.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date to a string (e.g., "Jan 1, 2023").
 *
 * @param date - The date to format.
 * @returns The formatted date.
 */
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Formats a date and time to a string (e.g., "Jan 1, 2023, 12:00 PM").
 *
 * @param date - The date to format.
 * @returns The formatted date and time.
 */
export function formatDateTime(date: Date | string): string {
  return new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Formats a number as a currency string (e.g., "$1,000.00").
 *
 * @param amount - The amount to format.
 * @returns The formatted currency.
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

/**
 * Gets the initials from a full name.
 *
 * @param name - The name to get the initials from.
 * @returns The initials from the name (e.g., "John Doe" -> "JD").
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

/**
 * Gets the Tailwind CSS classes for a status color.
 *
 * @param status - The status to get the color for.
 * @returns The Tailwind CSS classes for the status color.
 */
export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'completed':
    case 'approved':
      return 'bg-green-100 text-green-800';
    case 'in progress':
    case 'under review':
      return 'bg-blue-100 text-blue-800';
    case 'on hold':
      return 'bg-yellow-100 text-yellow-800';
    case 'rejected':
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

/**
 * Gets the Tailwind CSS classes for a priority color.
 *
 * @param priority - The priority to get the color for.
 * @returns The Tailwind CSS classes for the priority color.
 */
export function getPriorityColor(priority: string): string {
  switch (priority.toLowerCase()) {
    case 'critical':
      return 'bg-red-100 text-red-800';
    case 'high':
      return 'bg-orange-100 text-orange-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

/**
 * Gets the Tailwind CSS classes for a complexity color.
 *
 * @param complexity - The complexity to get the color for.
 * @returns The Tailwind CSS classes for the complexity color.
 */
export function getComplexityColor(complexity: string): string {
  switch (complexity.toLowerCase()) {
    case 'high':
      return 'bg-red-100 text-red-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

/**
 * Calculates a percentage value.
 *
 * @param completed - The number of completed items.
 * @param total - The total number of items.
 * @param precision - The number of decimal places to round to.
 * @returns The progress percentage.
 */
export function calculateProgress(
  completed: number,
  total: number,
  precision: number = 0
): number {
  if (total === 0) return 0;
  const progress = (completed / total) * 100;
  return Number(progress.toFixed(precision));
}

/**
 * Truncates a string to a specified length and appends "..." if it exceeds the length.
 *
 * @param str - The string to truncate.
 * @param length - The maximum length of the string.
 * @returns The truncated string.
 */
export function truncate(str: string, length: number): string {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

/**
 * Generates a URL-friendly slug from a string.
 *
 * @param str - The string to generate a slug from.
 * @returns The slug.
 */
export function generateSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');
}

/**
 * Debounces a function.
 *
 * @param func - The function to debounce.
 * @param wait - The time to wait before executing the function.
 * @returns The debounced function.
 * @see https://www.joshwcomeau.com/snippets/react/use-debounce/
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): T {
  let timeout: NodeJS.Timeout;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  } as T;
}
