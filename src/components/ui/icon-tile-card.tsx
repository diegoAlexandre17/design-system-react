import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const iconTileCardVariants = cva(
  "group/tile relative flex h-20 w-50 flex-col items-center justify-center gap-1 rounded-xl border-2 border-border-light bg-white px-4 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      clickable: {
        true: "cursor-pointer hover:border-primary hover:bg-primary-light",
      },
    },
  }
)

const labelVariants = cva("text-xs font-semibold leading-tight", {
  variants: {
    variant: {
      info: "text-info-badge-text",
      success: "text-success-badge-text",
      warning: "text-warning-badge-text",
      error: "text-error-badge-text",
      orange: "text-orange-badge-text",
      cyan: "text-cyan-badge-text",
      sky: "text-sky-badge-text",
      neutral: "text-neutral-badge-text",
      blue: "text-blue-badge-text",
      indigo: "text-indigo-badge-text",
      purple: "text-purple-badge-text",
      tangerine: "text-tangerine-badge-text",
      mustard: "text-mustard-badge-text",
      forest: "text-forest-badge-text",
      slate: "text-slate-badge-text",
      violet: "text-violet-badge-text",
      teal: "text-teal-badge-text",
    },
  },
  defaultVariants: { variant: "info" },
})

type IconTileCardVariant = NonNullable<
  VariantProps<typeof labelVariants>["variant"]
>

type IconTileCardProps = Omit<React.HTMLAttributes<HTMLElement>, "onClick"> & {
  variant?: IconTileCardVariant
  icon: React.ReactNode
  label: React.ReactNode
  count?: number
  onClick?: React.MouseEventHandler<HTMLElement>
}

function IconTileCard({
  variant = "info",
  icon,
  label,
  count,
  onClick,
  className,
  ...props
}: IconTileCardProps) {
  const clickable = typeof onClick === "function"
  const Comp: React.ElementType = clickable ? "button" : "div"
  const showCount = typeof count === "number" && count > 0

  return (
    <Comp
      data-slot="icon-tile-card"
      data-variant={variant}
      data-clickable={clickable ? "true" : undefined}
      type={clickable ? "button" : undefined}
      onClick={onClick}
      className={cn(iconTileCardVariants({ clickable }), className)}
      {...props}
    >
      <Badge
        variant={variant}
        aria-hidden
        className={cn(
          "size-10 rounded-lg p-0 [&>svg]:size-5",
          clickable && "group-hover/tile:bg-white"
        )}
      >
        {icon}
      </Badge>
      <span className={labelVariants({ variant })}>{label}</span>

      {showCount && (
        <span
          aria-label={`${count} novedades`}
          className="absolute top-2 right-2 ring-2 ring-white inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-destructive px-1 text-[11px] font-semibold text-destructive-foreground"
        >
          {count}
        </span>
      )}
    </Comp>
  )
}

export { IconTileCard, type IconTileCardProps, type IconTileCardVariant }
