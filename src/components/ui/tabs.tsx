"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsContextValue {
  selected: string;
  setSelected: (v: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
}

export function Tabs({ defaultValue, className, children }: TabsProps) {
  const [selected, setSelected] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ selected, setSelected }}>
      <div className={cn(className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)}>
      {children}
    </div>
  );
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function TabsTrigger({ value, className, children, ...props }: TabsTriggerProps) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) return null;
  const { selected, setSelected } = ctx;
  const isActive = selected === value;
  return (
    <button
      type="button"
      onClick={() => setSelected(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-background text-foreground shadow" : "text-muted-foreground hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function TabsContent({ value, className, children, ...props }: TabsContentProps) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) return null;
  const { selected } = ctx;
  if (selected !== value) return null;
  return (
    <div className={cn("mt-2", className)} {...props}>
      {children}
    </div>
  );
}
