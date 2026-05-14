import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const iconTileCardVariants = cva(
  "group/tile relative flex w-50 flex-col items-center justify-center rounded-xl border-2 px-4 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      size: {
        default: "h-20 gap-1",
        lg: "h-[155px] gap-2",
      },
      selected: {
        true: "",
        false: "border-border-light bg-white",
      },
      clickable: {
        true: "cursor-pointer",
      },
    },
    compoundVariants: [
      {
        clickable: true,
        selected: false,
        class: "hover:border-primary hover:bg-primary-light",
      },
    ],
    defaultVariants: {
      size: "default",
      selected: false,
    },
  }
)

const labelVariants = cva("text-xs font-semibold leading-tight", {
  variants: {
    variant: {
      tangerine: "text-tangerine-badge-text",
      error: "text-error-badge-text",
      purple: "text-purple-badge-text",
      mustard: "text-mustard-badge-text",
      forest: "text-forest-badge-text",
      slate: "text-slate-badge-text",
      blue: "text-blue-badge-text",
      success: "text-success-badge-text",
      violet: "text-violet-badge-text",
      teal: "text-teal-badge-text",
    },
  },
  defaultVariants: { variant: "success" },
})

type IconTileCardVariant = NonNullable<
  VariantProps<typeof labelVariants>["variant"]
>

type IconTileCardSize = NonNullable<
  VariantProps<typeof iconTileCardVariants>["size"]
>

const selectedClasses: Record<IconTileCardVariant, string> = {
  tangerine: "border-tangerine-badge-text bg-tangerine-badge",
  error: "border-error-badge-text bg-error-badge",
  purple: "border-purple-badge-text bg-purple-badge",
  mustard: "border-mustard-badge-text bg-mustard-badge",
  forest: "border-forest-badge-text bg-forest-badge",
  slate: "border-slate-badge-text bg-slate-badge",
  blue: "border-blue-badge-text bg-blue-badge",
  success: "border-success-badge-text bg-success-badge",
  violet: "border-violet-badge-text bg-violet-badge",
  teal: "border-teal-badge-text bg-teal-badge",
}

type IconTileCardProps = Omit<React.HTMLAttributes<HTMLElement>, "onClick"> & {
  variant?: IconTileCardVariant
  size?: IconTileCardSize
  selected?: boolean
  icon: React.ReactNode
  label: React.ReactNode
  count?: number
  onClick?: React.MouseEventHandler<HTMLElement>
}

function IconTileCard({
  variant = "success",
  size = "default",
  selected = false,
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
      data-size={size}
      data-selected={selected ? "true" : undefined}
      data-clickable={clickable ? "true" : undefined}
      type={clickable ? "button" : undefined}
      onClick={onClick}
      aria-pressed={clickable ? selected : undefined}
      className={cn(
        iconTileCardVariants({ size, clickable, selected }),
        selected && selectedClasses[variant],
        className
      )}
      {...props}
    >
      <Badge
        variant={variant}
        aria-hidden
        className={cn(
          "size-10 rounded-lg p-0 [&>svg]:size-5",
          "group-data-[size=lg]/tile:size-20 group-data-[size=lg]/tile:rounded-2xl group-data-[size=lg]/tile:[&>svg]:size-[46px]",
          selected && "bg-white",
          clickable && "group-hover/tile:bg-white"
        )}
      >
        {icon}
      </Badge>
      <span
        className={cn(
          labelVariants({ variant }),
          "group-data-[size=lg]/tile:text-base"
        )}
      >
        {label}
      </span>

      {showCount && (
        <span
          aria-label={`${count} novedades`}
          className="absolute top-2 right-2 ring-2 ring-white inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-destructive px-1 text-[11px] font-semibold text-destructive-foreground group-data-[size=lg]/tile:h-[30px] group-data-[size=lg]/tile:min-w-[30px] group-data-[size=lg]/tile:text-xs"
        >
          {count}
        </span>
      )}
    </Comp>
  )
}

export {
  IconTileCard,
  type IconTileCardProps,
  type IconTileCardSize,
  type IconTileCardVariant,
}
