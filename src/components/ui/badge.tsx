import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-44 rounded-lg h-7 shrink-0 items-center justify-center gap-1 overflow-hidden r  border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
        published: "bg-[#EFF9EF] text-[#5EC85E] hover:bg-[#D1E9C6]",
        pending: "bg-[#FEFAE6] text-[#F1CC05] hover:bg-[#FFF6C6]",
        incomplete: "bg-[#FFEEEE] text-[#FD5656] hover:bg-[#FFD9D9]",
        complete: "bg-[#EDF7F9] text-[#33B7C9] hover:bg-[#D9EFF3]",
        surpassed: "bg-[#FFF0EC] text-[#FF885C] hover:bg-[#FFDCCF]",
        notStarted: "bg-[#E9FCFC] text-[#00D7D7] hover:bg-[#D2F8F8]",
        unpublished: "bg-[#DDF0FF] text-[#55ADFF] hover:bg-[#C7E5FF]",
        finalized: "bg-[#E8EBF2] text-[#5C6696] hover:bg-[#D7DCE8]",
        petition: "bg-[#E5F0FE] text-[#2485F4] hover:bg-[#C7E5FF]",
        active: "bg-[#EFF1FA] text-[#6176CE] hover:bg-[#C7E5FF]",
        aprobed: "bg-[#DFF4DF] text-[#5EC85E] hover:bg-[#C7E5FF]",
        rejected: "bg-[#FFEBEB] text-[#FD5656] hover:bg-[#C7E5FF]",
        verified: "bg-[#B66DFF] text-[#B66DFF] hover:bg-[#C7E5FF]",
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
