import { CalendarIcon, Map, Spline, TriangleAlert } from "lucide-react"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Text } from "@/components/ui/text"
import { Badge } from "@/components/ui/badge"

interface ProfilePanelSectionProps {
  name: string
  job: string
  department: string
  location: string
  avatarFallback: string
  BadgeState?: React.ReactNode
}

export default function ProfilePanelSection({
  avatarFallback,
  department,
  job,
  location,
  name,
}: ProfilePanelSectionProps) {
  return (
    <Card className="w-full rounded-lg border bg-card p-4">
      <div className="flex justify-between items-center pr-8">
        <div className="flex">
          <div className="ml-8">
            <Avatar size="profile">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>{avatarFallback}</AvatarFallback>
              <AvatarBadge />
            </Avatar>
          </div>
          <div className="flex flex-col justify-center ml-6">
            <Text variant="h4" as="h2" className="font-normal text-foreground">
              {name}
            </Text>
            <div className="flex flex-col gap-1.5 mt-2">
              <div className="flex items-center text-muted-foreground">
                <CalendarIcon className="size-4 text-blue-600 mr-2" />
                <Text variant="span">{job}</Text>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Spline className="size-4 text-blue-600 mr-2" />
                <Text variant="span">{department}</Text>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Map className="size-4 text-blue-600 mr-2" />
                <Text variant="span">{location}</Text>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Estado */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5">
            <TriangleAlert className="size-4 text-blue-600 fill-blue-600 stroke-white" />
            <Text variant="span-14" className="font-medium text-slate-700">
              Estado
            </Text>
          </div>
          <Badge variant="error" className="w-auto px-4 py-1.5 ">
            Sin Gestionar
          </Badge>
        </div>
      </div>
    </Card>
  )
}
