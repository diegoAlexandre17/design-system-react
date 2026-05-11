import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Text } from "../ui/text";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EmployeeNameInfoProps {
  img: string;
  name: string;
  position?: string;
}

const EmployeeNameInfo = ({ img, name, position }: EmployeeNameInfoProps) => {
  return (
    <div className="flex gap-2 min-w-0">
        <Avatar size="lg">
          {img && (
            <AvatarImage
              src={img}
              alt={name}
            />
          )}
          <AvatarFallback>{name[0]}</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <div className="flex flex-col items-start justify-center gap-1 min-w-0 w-full">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Text variant='span-13' className="font-semibold text-primary truncate max-w-full">{name}</Text>
                </TooltipTrigger>
                <TooltipContent arrow>{name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {position && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Text variant='small-11' className="truncate max-w-full">{position}</Text>
                  </TooltipTrigger>
                  <TooltipContent arrow>{position}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
        </div>
    </div>
  )
}

export default EmployeeNameInfo