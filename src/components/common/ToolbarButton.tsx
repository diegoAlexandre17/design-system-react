import React from 'react'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface ToolbarButtonProps {
  icon: React.ReactNode
  /** Tailwind color suffix, e.g. "blue-600", "primary", "red-500" */
  color: string
  active?: boolean
  onClick?: () => void
  title?: string
  tooltipText?: string
}

const ToolbarButton = ({ icon, color, active = false, onClick, title, tooltipText }: ToolbarButtonProps) => {
  const button = (
    <button
      title={title}
      onClick={onClick}
      className={cn(
        'flex items-center justify-center size-8 rounded border transition-colors cursor-pointer',
        active
          ? [`bg-${color}`, `border-${color}`, 'text-white']
          : ['bg-white', `border-${color}`, `text-${color}`],
      )}
    >
      {icon}
    </button>
  )

  if (!tooltipText) return button

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent arrow>{tooltipText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ToolbarButton
