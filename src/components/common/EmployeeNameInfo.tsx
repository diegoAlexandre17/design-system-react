import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Text } from "../ui/text";

interface EmployeeNameInfoProps {
  img: string;
  name: string;
  position: string;
}

const EmployeeNameInfo = ({ img, name, position }: EmployeeNameInfoProps) => {
  return (
    <div className="flex gap-2">
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
        <div className="flex flex-col items-start justify-center gap-2">
            <Text variant='span-13' className="font-semibold text-primary">{name}</Text>
            <Text variant='small-11'>{position}</Text>
        </div>
    </div>
  )
}

export default EmployeeNameInfo