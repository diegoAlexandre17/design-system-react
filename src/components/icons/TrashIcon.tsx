import { useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

export default function TrashIcon() {
  const [selected, setSelected] = useState<boolean>(false)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <svg
            onClick={() => setSelected(!selected)}
            className="cursor-pointer transition-all duration-200"
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background fill that appears when selected */}
            {selected && (
              <path
                d="M3.2 4.90909V15.5455C3.2 15.9973 3.5584 16.3636 4 16.3636H12C12.4416 16.3636 12.8 15.9973 12.8 15.5455V4.90909H3.2Z M0.8 3.27273V4.90909H15.2V3.27273H0.8Z M5.6 1.63636V3.27273H10.4V1.63636H5.6Z"
                fill="#2385F4"
              />
            )}
            <path
              fill={selected ? "#2385F4" : "none"}
              stroke="#2385F4"
              strokeWidth="1.6"
              d="M3.2 4.90909V15.5455C3.2 15.7713 3.2888 15.975 3.4344 16.1239C3.58 16.2728 3.7792 16.3636 4 16.3636H12C12.2208 16.3636 12.42 16.2728 12.5656 16.1239C12.7112 15.975 12.8 15.7713 12.8 15.5455V4.90909H3.2ZM4 3.27273V2.45455C4 1.77709 4.2696 1.16182 4.7032 0.719182C5.1368 0.276545 5.7376 0 6.4 0H9.6C10.2624 0 10.864 0.275727 11.2968 0.719182C11.7296 1.16264 12 1.77709 12 2.45455V3.27273H15.2C15.6416 3.27273 16 3.63927 16 4.09091C16 4.54255 15.6416 4.90909 15.2 4.90909H14.4V15.5455C14.4 16.2229 14.1304 16.8382 13.6968 17.2808C13.2632 17.7235 12.6624 18 12 18H4C3.3376 18 2.736 17.7243 2.3032 17.2808C1.8704 16.8374 1.6 16.2229 1.6 15.5455V4.90909H0.8C0.358399 4.90909 0 4.54255 0 4.09091C0 3.63927 0.358399 3.27273 0.8 3.27273H4ZM10.4 3.27273V2.45455C10.4 2.22873 10.3112 2.025 10.1656 1.87609C10.02 1.72718 9.8208 1.63636 9.6 1.63636H6.4C6.1792 1.63636 5.98 1.72718 5.8344 1.87609C5.6888 2.025 5.6 2.22873 5.6 2.45455V3.27273H10.4Z"
            />
          </svg>
        </TooltipTrigger>
        <TooltipContent side="bottom" arrow>
          {selected ? "Eliminar de favoritos" : "Eliminar"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
