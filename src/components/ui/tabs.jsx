import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-12 w-full items-center justify-center p-1 shadow-md border border-border",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        "dark:data-[state=active]:bg-input dark:data-[state=active]:text-foreground",
        "text-muted-foreground inline-flex h-10 px-6 items-center justify-center text-[15px] font-semibold tracking-wide uppercase transition-all hover:bg-muted/80 hover:text-foreground",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none text-base text-foreground", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
