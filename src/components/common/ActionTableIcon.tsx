import { Loader2 } from "lucide-react"
import { Icon, type IconProps } from "@/components/icons/IconWrapper"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface ActionTableIconProps {
  icon: IconProps["icon"]
  tooltip: string
  disabled?: boolean
  loading?: boolean
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ActionTableIcon = ({
  icon,
  tooltip,
  disabled = false,
  loading = false,
  className,
  onClick,
}: ActionTableIconProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            disabled={disabled || loading}
            onClick={onClick}
            className={cn(
              "inline-flex items-center cursor-pointer justify-center text-primary transition-colors",
              "hover:text-primary/80 disabled:pointer-events-none disabled:opacity-50",
              className
            )}
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <Icon icon={icon} size='md' />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent arrow>{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ActionTableIcon