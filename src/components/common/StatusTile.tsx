import {
  Clock,
  UserX,
  LogOut,
  FileText,
  CalendarDays,
  RefreshCcw,
  EyeOff,
  MapPinOff,
  Pencil,
  Timer,
  CalendarOff,
} from "lucide-react"

import {
  IconTileCard,
  type IconTileCardVariant,
} from "@/components/ui/icon-tile-card"

type StatusConfig = {
  variant: IconTileCardVariant
  icon: React.ReactNode
  label: string
}

const STATUS_CONFIG = {
  tardanzas: {
    variant: "tangerine",
    icon: <Clock />,
    label: "Tardanzas",
  },
  ausencias: {
    variant: "error",
    icon: <UserX />,
    label: "Ausencias",
  },
  salidasIntempestivas: {
    variant: "purple",
    icon: <LogOut />,
    label: "Salidas Intempestivas",
  },
  permisos: {
    variant: "mustard",
    icon: <FileText />,
    label: "Permisos",
  },
  tiempoLibre: {
    variant: "forest",
    icon: <CalendarDays />,
    label: "Tiempo libre",
  },
  cambioTurno: {
    variant: "slate",
    icon: <RefreshCcw />,
    label: "Cambio de turno",
  },
  impares: {
    variant: "blue",
    icon: <EyeOff />,
    label: "Impares",
  },
  fueraGeocerca: {
    variant: "error",
    icon: <MapPinOff />,
    label: "Fuera de geocerca",
  },
  manuales: {
    variant: "success",
    icon: <Pencil />,
    label: "Manuales",
  },
  horasExtras: {
    variant: "violet",
    icon: <Timer />,
    label: "Horas extras",
  },
  sinProgramacion: {
    variant: "teal",
    icon: <CalendarOff />,
    label: "Sin programación",
  },
} as const satisfies Record<string, StatusConfig>

type StatusKey = keyof typeof STATUS_CONFIG

const STATUS_KEYS = Object.keys(STATUS_CONFIG) as StatusKey[]

type StatusTileProps = {
  status: StatusKey
  count?: number
  selected?: boolean
  onClick?: () => void
  className?: string
}

function StatusTile({
  status,
  count,
  selected,
  onClick,
  className,
}: StatusTileProps) {
  const config = STATUS_CONFIG[status]
  return (
    <IconTileCard
      variant={config.variant}
      icon={config.icon}
      label={config.label}
      count={count}
      selected={selected}
      onClick={onClick}
      className={className}
    />
  )
}

export { StatusTile, STATUS_KEYS, type StatusKey }
