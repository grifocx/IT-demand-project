import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * A container for content that is displayed in a card.
 *
 * @param props - The props for the component.
 * @param props.className - Additional classes to apply to the component.
 * @param props.children - The content of the card.
 * @returns The card component.
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
 * The header of the card.
 *
 * @param props - The props for the component.
 * @param props.className - Additional classes to apply to the component.
 * @param props.children - The content of the card header.
 * @returns The card header component.
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
 * The title of the card.
 *
 * @param props - The props for the component.
 * @param props.className - Additional classes to apply to the component.
 * @param props.children - The content of the card title.
 * @returns The card title component.
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
 * The description of the card.
 *
 * @param props - The props for the component.
 * @param props.className - Additional classes to apply to the component.
 * @param props.children - The content of the card description.
 * @returns The card description component.
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
 * The content of the card.
 *
 * @param props - The props for the component.
 * @param props.className - Additional classes to apply to the component.
 * @param props.children - The content of the card content.
 * @returns The card content component.
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

/**
 * The footer of the card.
 *
 * @param props - The props for the component.
 * @param props.className - Additional classes to apply to the component.
 * @param props.children - The content of the card footer.
 * @returns The card footer component.
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
