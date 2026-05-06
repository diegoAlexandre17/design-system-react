import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge  inline-flex w-44 rounded-lg h-6 shrink-0 items-center justify-center gap-1 overflow-hidden r  border border-transparent px-2 py-0.5 text-xs font-bold whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
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
        success: "bg-[#EFF9EF] text-[#5EC85E] ",
        warning: "bg-[#FEFAE6] text-[#F1CC05] ",
        error: "bg-[#FFEEEE] text-[#FD5656] ",
        info: "bg-[#EDF7F9] text-[#33B7C9] ",
        orange: "bg-[#FFF0EC] text-[#FF885C] ",
        cyan: "bg-[#E9FCFC] text-[#00D7D7] ",
        sky: "bg-[#DDF0FF] text-[#55ADFF] ",
        neutral: "bg-[#E8EBF2] text-[#5C6696] ",
        blue: "bg-[#E5F0FE] text-[#2485F4] ",
        indigo: "bg-[#EFF1FA] text-[#6176CE] ",
        mint: "bg-[#DFF4DF] text-[#5EC85E] ",
        rose: "bg-[#FFEBEB] text-[#FD5656] ",
        purple: "bg-[#B66DFF] text-[#B66DFF] ",
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
