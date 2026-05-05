import * as React from "react"
import { Slot } from "radix-ui"
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type BreadcrumbVariant = "default" | "primary"

function Breadcrumb({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"nav"> & { variant?: BreadcrumbVariant }) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      data-variant={variant}
      className={cn("group/breadcrumb", className)}
      {...props}
    />
  )
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground group-data-[variant=primary]/breadcrumb:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn(
        "font-semibold inline-flex items-center gap-1 mt-1 first:text-xl first:leading-tight first:mt-0",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  active,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  active?: boolean
}) {
  const Comp = asChild ? Slot.Root : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      data-active={active || undefined}
      className={cn(
        "transition-colors hover:text-foreground",
        "data-[active=true]:text-primary data-[active=true]:font-semibold",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(
        "font-semibold text-foreground",
        "group-data-[variant=primary]/breadcrumb:text-primary group-data-[variant=primary]/breadcrumb:font-semibold",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("self-center mt-1 [&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn(
        "flex size-5 items-center justify-center [&>svg]:size-4",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
