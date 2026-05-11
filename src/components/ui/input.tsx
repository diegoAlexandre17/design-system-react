import * as React from "react"

import { cn } from "@/lib/utils"

type InputSize = "sm" | "md" | "lg"

const sizeClasses: Record<InputSize, string> = {
  sm: "h-6 px-2 text-xs",
  md: "h-8.5 px-2.5 py-1 text-sm",
  lg: "h-10 px-3 text-base",
}

export interface InputProps extends Omit<
  React.ComponentProps<"input">,
  "size"
> {
  size?: InputSize
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

function Input({
  className,
  type,
  size = "md",
  startIcon,
  endIcon,
  ...props
}: InputProps) {
  if (startIcon || endIcon) {
    return (
      <div className={cn("relative flex items-center w-full", className)}>
        {startIcon && (
          <div className="absolute left-2.5 flex items-center justify-center text-muted-foreground pointer-events-none">
            {startIcon}
          </div>
        )}
        <input
          type={type}
          data-slot="input"
          className={cn(
            "w-full min-w-0 rounded-sm bg-white text-foreground border border-secondary font-medium leading-5 tracking-tight transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:border-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 read-only:text-gray-ultra-light read-only:focus:border-secondary aria-invalid:border-destructive aria-invalid:focus:border-destructive",
            sizeClasses[size],
            startIcon && "pl-8",
            endIcon && "pr-8",
          )}
          {...props}
        />
        {endIcon && (
          <div className="absolute right-2.5 flex items-center justify-center text-muted-foreground pointer-events-none">
            {endIcon}
          </div>
        )}
      </div>
    )
  }

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full min-w-0 rounded-sm bg-white text-foreground border border-secondary font-medium leading-5 tracking-tight transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:border-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 read-only:text-gray-ultra-light read-only:focus:border-secondary aria-invalid:border-destructive aria-invalid:focus:border-destructive",
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  )
}

export { Input, type InputSize }
