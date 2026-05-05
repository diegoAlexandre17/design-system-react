import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      p: "text-base leading-7",
      span: "text-base",
      small: "text-sm font-medium leading-none",
      "span-table": "text-[12px] leading-none",
      "span-13": "text-[13px] leading-none",
      "span-15": "text-[15px] leading-none",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

const tagMap: Record<NonNullable<VariantProps<typeof textVariants>["variant"]>, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  p: "p",
  span: "span",
  small: "small",
  "span-table": "span",
  "span-13": "span",
  "span-15": "span",
}

type TextProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof textVariants> & {
    as?: React.ElementType
  }

function Text({ className, variant = "p", as, children, ...props }: TextProps) {
  const Comp = as ?? tagMap[variant ?? "p"]

  return (
    <Comp
      data-slot="text"
      data-variant={variant}
      className={cn(textVariants({ variant }), className)}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Text, textVariants }
