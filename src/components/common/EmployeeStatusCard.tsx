import { Fragment, type ComponentProps, type ReactNode } from "react"
import {
  Calendar,
  Clock,
  CreditCard,
  Fingerprint,
  LogIn,
  LogOut,
  MapPin,
  ScanFace,
  ScanLine,
  Smartphone,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

type BadgeVariant = ComponentProps<typeof Badge>["variant"]

// Single source of truth para cada estado del empleado.
// Agregar/cambiar un status = una sola entrada acá.
const STATUS_TOKENS = {
  working: {
    ring: "ring-success",
    accent: "text-working",
    footer: "bg-working-bg text-working",
    label: "Trabajando",
  },
  worked: {
    ring: "ring-worked",
    accent: "text-worked",
    footer: "bg-worked-bg text-worked",
    label: "Trabajó",
  },
  absent: {
    ring: "ring-absent",
    accent: "text-absent",
    footer: "bg-absent-bg text-absent",
    label: "Ausente",
  },
  permit: {
    ring: "ring-permit",
    accent: "text-permit",
    footer: "bg-permit-bg text-permit",
    label: "Permiso",
  },
} as const

type EmployeeStatus = keyof typeof STATUS_TOKENS

// Vocabulario fijo del DS: orden de filas + ícono de cada concepto.
// Los íconos de Lucide son placeholders hasta tener los del sistema.
const ROW_CONFIG = [
  { key: "clockin", icon: <LogIn /> },
  { key: "clockout", icon: <LogOut /> },
  { key: "planned", icon: <Calendar /> },
  { key: "hours", icon: <Clock /> },
  { key: "location", icon: <MapPin /> },
] as const

type EmployeeRowKey = (typeof ROW_CONFIG)[number]["key"]
type EmployeeStatusData = Partial<Record<EmployeeRowKey, ReactNode>>

// Cada método de fichaje se representa con un par [método, dispositivo].
const DEVICE_CONFIG = {
  faceMobile: {
    icons: [<ScanFace />, <Smartphone />],
    label: "Reconocimiento facial por celular",
  },
  proximityBiometric: {
    icons: [<CreditCard />, <ScanLine />],
    label: "Tarjeta de proximidad por biométrico",
  },
  fingerprintBiometric: {
    icons: [<Fingerprint />, <ScanLine />],
    label: "Huella por biométrico",
  },
} satisfies Record<
  string,
  { icons: readonly [ReactNode, ReactNode]; label: string }
>

type EmployeeDevice = keyof typeof DEVICE_CONFIG

interface EmployeeRoleBadge {
  icon: ReactNode
  variant?: BadgeVariant
  label?: string
  key?: string | number
}

interface EmployeeStatusCardProps
  extends Omit<ComponentProps<typeof Card>, "size"> {
  name: string
  avatarSrc?: string
  avatarFallback?: string
  status?: EmployeeStatus
  statusLabel?: string
  roleBadges?: EmployeeRoleBadge[]
  data?: EmployeeStatusData
  devices?: EmployeeDevice[]
}

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")

const EmployeeStatusCard = ({
  name,
  avatarSrc,
  avatarFallback,
  status = "working",
  statusLabel,
  roleBadges,
  data,
  devices,
  className,
  ...props
}: EmployeeStatusCardProps) => {
  const fallback = avatarFallback ?? getInitials(name)
  const tokens = STATUS_TOKENS[status]
  const label = statusLabel ?? tokens.label

  return (
    <Card
      data-slot="employee-status-card"
      data-status={status}
      size="sm"
      className={cn("max-w-[250px] w-full border-2 justify-between", className)}
      {...props}
    >
      <CardHeader>
        <CardTitle className="text-base font-bold">{name}</CardTitle>
        {roleBadges && roleBadges.length > 0 && (
          <CardAction className="flex items-center gap-1">
            {roleBadges.map((badge, i) => (
              <Badge
                key={badge.key ?? i}
                variant={badge.variant ?? "info"}
                className="size-5! w-auto rounded-full px-0 [&_svg]:size-2.5"
                aria-label={badge.label}
              >
                {badge.icon}
              </Badge>
            ))}
          </CardAction>
        )}
      </CardHeader>

      <CardContent className="flex items-center gap-3">
        <Avatar size="xxl" className={cn("ring-2", tokens.ring)}>
          {avatarSrc && <AvatarImage src={avatarSrc} alt={name} />}
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        {data && (
          <ul className="flex-1 space-y-0.5 text-foreground">
            {ROW_CONFIG.map(({ key, icon }) => {
              const value = data[key]
              if (value == null) return null
              return (
                <li
                  key={key}
                  className="flex items-center gap-1.5 text-xs"
                >
                  <span
                    className={cn(
                      "inline-flex shrink-0 [&_svg]:size-3.5",
                      tokens.accent,
                    )}
                  >
                    {icon}
                  </span>
                  {value}
                </li>
              )
            })}
          </ul>
        )}
      </CardContent>

      <CardFooter
        className={cn(
          "justify-center gap-2 border-t-0 rounded-none py-1.5! text-base! font-bold",
          tokens.footer,
        )}
      >
        {label}
        {devices?.map((deviceKey) => {
          const device = DEVICE_CONFIG[deviceKey]
          return (
            <div
              key={deviceKey}
              className={cn(
                "inline-flex items-center gap-1 [&_svg]:size-4",
                tokens.accent,
              )}
              aria-label={device.label}
              title={device.label}
            >
              {device.icons.map((icon, i) => (
                <Fragment key={i}>{icon}</Fragment>
              ))}
            </div>
          )
        })}
      </CardFooter>
    </Card>
  )
}

export default EmployeeStatusCard
export type {
  EmployeeStatus,
  EmployeeStatusCardProps,
  EmployeeStatusData,
  EmployeeDevice,
  EmployeeRoleBadge,
}
