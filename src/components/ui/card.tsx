import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * @description A component that displays a card.
 * @param {string} className - The class name to apply to the component.
 * @param {React.ReactNode} children - The content of the card.
 * @returns {React.ReactElement} - The card component.
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

/**
 * @description A component that displays the header of a card.
 * @param {string} className - The class name to apply to the component.
 * @param {React.ReactNode} children - The content of the card header.
 * @returns {React.ReactElement} - The card header component.
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

/**
 * @description A component that displays the title of a card.
 * @param {string} className - The class name to apply to the component.
 * @param {React.ReactNode} children - The content of the card title.
 * @returns {React.ReactElement} - The card title component.
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

/**
 * @description A component that displays the description of a card.
 * @param {string} className - The class name to apply to the component.
 * @param {React.ReactNode} children - The content of the card description.
 * @returns {React.ReactElement} - The card description component.
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

/**
 * @description A component that displays the content of a card.
 * @param {string} className - The class name to apply to the component.
 * @param {React.ReactNode} children - The content of the card content.
 * @returns {React.ReactElement} - The card content component.
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

/**
 * @description A component that displays the footer of a card.
 * @param {string} className - The class name to apply to the component.
 * @param {React.ReactNode} children - The content of the card footer.
 * @returns {React.ReactElement} - The card footer component.
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
