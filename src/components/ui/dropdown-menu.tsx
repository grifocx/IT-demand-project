import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';

import { cn } from '@/lib/utils';

/**
 * @description A component that displays a dropdown menu.
 * @param {React.ReactNode} children - The content of the dropdown menu.
 * @returns {React.ReactElement} - The dropdown menu component.
 */
const DropdownMenu = DropdownMenuPrimitive.Root;

/**
 * @description A component that triggers the dropdown menu.
 * @param {React.ReactNode} children - The content of the dropdown menu trigger.
 * @returns {React.ReactElement} - The dropdown menu trigger component.
 */
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

/**
 * @description A component that groups dropdown menu items.
 * @param {React.ReactNode} children - The content of the dropdown menu group.
 * @returns {React.ReactElement} - The dropdown menu group component.
 */
const DropdownMenuGroup = DropdownMenuPrimitive.Group;

/**
 * @description A component that portals the dropdown menu.
 * @param {React.ReactNode} children - The content of the dropdown menu portal.
 * @returns {React.ReactElement} - The dropdown menu portal component.
 */
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

/**
 * @description A component that displays a sub-menu of the dropdown menu.
 * @param {React.ReactNode} children - The content of the dropdown menu sub-menu.
 * @returns {React.ReactElement} - The dropdown menu sub-menu component.
 */
const DropdownMenuSub = DropdownMenuPrimitive.Sub;

/**
 * @description A component that groups dropdown menu radio items.
 * @param {React.ReactNode} children - The content of the dropdown menu radio group.
 * @returns {React.ReactElement} - The dropdown menu radio group component.
 */
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

/**
 * @description A component that triggers a sub-menu of the dropdown menu.
 * @param {string} className - The class name to apply to the component.
 * @param {boolean} inset - Whether the sub-menu trigger should be inset.
 * @param {React.ReactNode} children - The content of the dropdown menu sub-menu trigger.
 * @returns {React.ReactElement} - The dropdown menu sub-menu trigger component.
 */
const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

/**
 * @description A component that displays the content of a sub-menu of the dropdown menu.
 * @param {string} className - The class name to apply to the component.
 * @param {React.ReactNode} children - The content of the dropdown menu sub-menu content.
 * @returns {React.ReactElement} - The dropdown menu sub-menu content component.
 */
const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

/**
 * @description A component that displays the content of the dropdown menu.
 * @param {string} className - The class name to apply to the component.
 * @param {number} sideOffset - The offset of the dropdown menu content from the trigger.
 * @param {React.ReactNode} children - The content of the dropdown menu content.
 * @returns {React.ReactElement} - The dropdown menu content component.
 */
const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

/**
 * @description A component that displays an item in the dropdown menu.
 * @param {string} className - The class name to apply to the component.
 * @param {boolean} inset - Whether the dropdown menu item should be inset.
 * @param {React.ReactNode} children - The content of the dropdown menu item.
 * @returns {React.ReactElement} - The dropdown menu item component.
 */
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

/**
 * @description A component that displays a checkbox item in the dropdown menu.
 * @param {string} className - The class name to apply to the component.
 * @param {boolean} checked - Whether the checkbox item is checked.
 * @param {React.ReactNode} children - The content of the dropdown menu checkbox item.
 * @returns {React.ReactElement} - The dropdown menu checkbox item component.
 */
const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

/**
 * @description A component that displays a radio item in the dropdown menu.
 * @param {string} className - The class name to apply to the component.
 * @param {React.ReactNode} children - The content of the dropdown menu radio item.
 * @returns {React.ReactElement} - The dropdown menu radio item component.
 */
const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

/**
 * @description A component that displays a label in the dropdown menu.
 * @param {string} className - The class name to apply to the component.
 * @param {boolean} inset - Whether the dropdown menu label should be inset.
 * @param {React.ReactNode} children - The content of the dropdown menu label.
 * @returns {React.ReactElement} - The dropdown menu label component.
 */
const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

/**
 * @description A component that displays a separator in the dropdown menu.
 * @param {string} className - The class name to apply to the component.
 * @returns {React.ReactElement} - The dropdown menu separator component.
 */
const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

/**
 * @description A component that displays a shortcut in the dropdown menu.
 * @param {string} className - The class name to apply to the component.
 * @returns {React.ReactElement} - The dropdown menu shortcut component.
 */
const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
