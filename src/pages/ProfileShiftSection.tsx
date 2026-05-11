import { Card } from "@/components/ui/card"
import { Text } from "@/components/ui/text"
import { CalendarIcon, Clock, Waypoints } from "lucide-react"
import React from "react"

export interface ProfileShiftSectionProps {
  shiftName?: string
  plannedTime?: string
  breakTime?: string
  news?: string
  workedTime?: string
  extraTime?: string
  absenceTime?: string
  permit?: string
}

export default function ProfileShiftSection({
  shiftName = "Personal Colombia Viernes 08:00 Am - ...",
  plannedTime = "8 Hrs 0 Min",
  breakTime = "1 Hrs 0 Min",
  news = "--",
  workedTime = "0 Hrs 10 Min",
  extraTime = "0 Hrs 0 Min",
  absenceTime = "0 Hrs 0 Min",
  permit = "--",
}: ProfileShiftSectionProps) {
  return (
    <Card className="w-full rounded-lg border bg-card p-6 shadow-sm">
      {/* Planificación Section */}
      <div className="flex items-center gap-2 mb-4">
        <CalendarIcon className="size-5 text-blue-600" />
        <Text variant="h5" as="h3" className="font-medium">
          Planificación
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-6 pl-7">
        <div className="flex flex-col gap-1.5 md:col-span-1">
          <Text variant="span-13" className="font-medium text-muted-foreground">
            Turno
          </Text>
          <Text
            variant="span-14"
            className="truncate text-foreground"
            title={shiftName}
          >
            {shiftName}
          </Text>
        </div>
        <div className="flex flex-col gap-1.5 md:col-span-1">
          <Text variant="span-13" className="font-medium text-muted-foreground">
            Planificadas
          </Text>
          <Text variant="span-14" className="text-foreground">
            {plannedTime}
          </Text>
        </div>
        <div className="flex flex-col gap-1.5 md:col-span-1">
          <Text variant="span-13" className="font-medium text-muted-foreground">
            Descansos
          </Text>
          <Text variant="span-14" className="text-foreground">
            {breakTime}
          </Text>
        </div>
        <div className="flex flex-col gap-1.5 md:col-span-1">
          <Text variant="span-13" className="font-medium text-muted-foreground">
            Novedades
          </Text>
          <Text variant="span-14" className="text-foreground">
            {news}
          </Text>
        </div>
        <div className="flex justify-end pr-8 md:col-span-1">
          <button className="bg-blue-500 text-white p-1.5 rounded hover:bg-blue-600 transition-colors">
            <Waypoints className="size-4" />
          </button>
        </div>
      </div>

      {/* Tiempos Section with Divider */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2 shrink-0">
          <div className="bg-blue-500 rounded-full p-1 flex items-center justify-center">
            <Clock className="size-3.5 text-white" />
          </div>
          <Text variant="h5" as="h3" className="font-medium">
            Tiempos
          </Text>
        </div>
        <div className="h-px bg-border w-full mt-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pl-9">
        <div className="flex flex-col gap-1.5 md:col-span-1">
          <Text variant="span-13" className="font-medium text-muted-foreground">
            Trabajadas
          </Text>
          <Text variant="span-14" className="text-foreground">
            {workedTime}
          </Text>
        </div>
        <div className="flex flex-col gap-1.5 md:col-span-1">
          <Text variant="span-13" className="font-medium text-muted-foreground">
            Extras
          </Text>
          <Text variant="span-14" className="text-foreground">
            {extraTime}
          </Text>
        </div>
        <div className="flex flex-col gap-1.5 md:col-span-1">
          <Text variant="span-13" className="font-medium text-muted-foreground">
            Ausencias
          </Text>
          <Text variant="span-14" className="text-foreground">
            {absenceTime}
          </Text>
        </div>
        <div className="flex flex-col gap-1.5 md:col-span-1">
          <Text variant="span-13" className="font-medium text-muted-foreground">
            Permiso
          </Text>
          <Text variant="span-14" className="text-foreground">
            {permit}
          </Text>
        </div>
      </div>
    </Card>
  )
}
