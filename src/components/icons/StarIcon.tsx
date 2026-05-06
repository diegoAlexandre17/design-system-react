import { useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function StarIcon() {
  //TODO agregar el isLoading rotador
  const [selected, setSelected] = useState<boolean>(false)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <svg
            onClick={() => setSelected(!selected)}
            className="cursor-pointer transition-colors duration-200"
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.53711 0.944336C9.62934 0.752357 9.90289 0.752353 9.99512 0.944336L12.1523 5.43262C12.4226 5.99518 12.9576 6.38458 13.5762 6.46777L18.5117 7.13184C18.7226 7.16027 18.807 7.41933 18.6533 7.56641L15.0498 11.0049C14.5985 11.4357 14.3949 12.0649 14.5068 12.6787L15.4004 17.5781C15.4386 17.7875 15.2176 17.9483 15.0303 17.8477L10.6465 15.4834C10.0972 15.1872 9.43598 15.1872 8.88672 15.4834L4.50293 17.8477C4.31553 17.9485 4.0946 17.7876 4.13281 17.5781L5.02637 12.6787C5.13828 12.0648 4.93387 11.4357 4.48242 11.0049L0.879883 7.56641C0.726057 7.41933 0.810485 7.16021 1.02148 7.13184L5.95703 6.46777C6.57558 6.38458 7.1106 5.99518 7.38086 5.43262L9.53711 0.944336Z"
              fill={selected ? "#2385F4" : "none"}
              stroke="#2385F4"
              strokeWidth="1.6"
            />
          </svg>
        </TooltipTrigger>
        <TooltipContent side="bottom" arrow>
          {selected ? "Quitar de favoritos" : "Favorito"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
