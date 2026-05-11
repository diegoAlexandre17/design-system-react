import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge  inline-flex w-40 rounded-lg h-6 shrink-0 items-center justify-center gap-1 overflow-hidden r  border border-transparent px-2 py-0.5 text-xs font-bold whitespace-nowrap transition-all",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground  ",
        secondary: "bg-secondary text-secondary-foreground  ",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40  ",
        outline: "border-border text-foreground  ",
        ghost: "hover:bg-muted hover:text-muted-foreground  ",
        link: "text-primary underline-offset-4 ",
        success: "bg-success-badge text-success-badge-text",
        warning: "bg-warning-badge text-warning-badge-text",
        error: "bg-error-badge text-error-badge-text",
        info: "bg-info-badge text-info-badge-text",
        orange: "bg-orange-badge text-orange-badge-text",
        cyan: "bg-cyan-badge text-cyan-badge-text",
        sky: "bg-sky-badge text-sky-badge-text",
        neutral: "bg-neutral-badge text-neutral-badge-text",
        blue: "bg-blue-badge text-blue-badge-text",
        indigo: "bg-indigo-badge text-indigo-badge-text",
        purple: "bg-purple-badge text-purple-badge-text",
        tangerine: "bg-tangerine-badge text-tangerine-badge-text",
        mustard: "bg-mustard-badge text-mustard-badge-text",
        forest: "bg-forest-badge text-forest-badge-text",
        slate: "bg-slate-badge text-slate-badge-text",
        violet: "bg-violet-badge text-violet-badge-text",
        teal: "bg-teal-badge text-teal-badge-text",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge }
