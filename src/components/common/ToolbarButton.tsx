import React from 'react'
import { cn } from '@/lib/utils'

interface ToolbarButtonProps {
  icon: React.ReactNode
  /** Tailwind color suffix, e.g. "blue-600", "primary", "red-500" */
  color: string
  active?: boolean
  onClick?: () => void
  title?: string
}

const ToolbarButton = ({ icon, color, active = false, onClick, title }: ToolbarButtonProps) => {
  return (
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
}

export default ToolbarButton
