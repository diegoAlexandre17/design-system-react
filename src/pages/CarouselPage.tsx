import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  IconTileCard,
  type IconTileCardVariant,
} from "@/components/ui/icon-tile-card"
import { StatusTile, STATUS_KEYS } from "@/components/common/StatusTile"
import EmployeeStatusCard from "@/components/common/EmployeeStatusCard"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page"
import { Backpack, FileText, Square } from "lucide-react"

const STATUS_COUNTS: Partial<Record<(typeof STATUS_KEYS)[number], number>> = {
  tardanzas: 3,
  ausencias: 1,
  permisos: 4,
  tiempoLibre: 2,
  fueraGeocerca: 7,
  horasExtras: 12,
}

const allVariants: IconTileCardVariant[] = [
  "info",
  "success",
  "warning",
  "error",
  "orange",
  "cyan",
  "sky",
  "neutral",
  "blue",
  "indigo",
  "purple",
  "tangerine",
  "mustard",
  "forest",
  "slate",
  "violet",
  "teal",
]

const TEAM = [
  {
    name: "Jose Blanco",
    avatarSrc: "https://github.com/shadcn.png",
    status: "working" as const,
    data: {
      clockin: "07:43 am",
      hours: "3.32 hrs",
      location: "Oficina Colombia",
    },
    roleBadges: [
      { icon: <Backpack />, label: "Equipo de campo", variant: "info" as const },
    ],
    devices: ["faceMobile" as const],
  },
  {
    name: "Ana Torres",
    status: "absent" as const,
    data: { planned: "08:00 am", hours: "6.00 hrs", location: "Eeuu" },
  },
  {
    name: "Carlos Ruiz",
    status: "permit" as const,
    data: { planned: "Diario", location: "Permiso médico" },
    roleBadges: [
      {
        icon: <FileText />,
        label: "Permiso documentado",
        variant: "orange" as const,
      },
    ],
  },
  {
    name: "Mario Díaz",
    status: "worked" as const,
    data: {
      clockin: "07:43 am",
      clockout: "16:50 pm",
      hours: "9.07 hrs",
      location: "Valencia",
    },
    devices: ["fingerprintBiometric" as const],
  },
  {
    name: "Lucía Pérez",
    status: "working" as const,
    data: { clockin: "08:10 am", hours: "2.15 hrs", location: "Bogotá" },
    devices: ["proximityBiometric" as const],
  },
  {
    name: "Pedro Gómez",
    status: "worked" as const,
    data: {
      clockin: "06:55 am",
      clockout: "15:30 pm",
      hours: "8.35 hrs",
      location: "Medellín",
    },
  },
]

const PLANS = [
  {
    name: "Starter",
    description: "Para equipos chicos que recién arrancan",
    price: "$0",
    period: "/mes",
    features: ["Hasta 5 usuarios", "Reportes básicos", "Soporte por mail"],
    variant: "default" as const,
    cta: "Empezar",
  },
  {
    name: "Pro",
    description: "Lo más elegido por equipos en crecimiento",
    price: "$29",
    period: "/mes",
    features: [
      "Hasta 50 usuarios",
      "Reportes avanzados",
      "Integraciones",
      "Soporte 24/5",
    ],
    variant: "primary" as const,
    cta: "Probar Pro",
  },
  {
    name: "Business",
    description: "Para operaciones medianas con procesos definidos",
    price: "$79",
    period: "/mes",
    features: [
      "Hasta 250 usuarios",
      "SSO + roles avanzados",
      "API ilimitada",
      "Soporte 24/7",
    ],
    variant: "outline" as const,
    cta: "Hablar con ventas",
  },
  {
    name: "Enterprise",
    description: "Plan a medida para grandes organizaciones",
    price: "Custom",
    period: "",
    features: [
      "Usuarios ilimitados",
      "SLA dedicado",
      "On-premise opcional",
      "Customer success manager",
    ],
    variant: "muted" as const,
    cta: "Contactar",
  },
]

const TEAM_MEMBERS = [
  { name: "Sofía Ramírez", role: "Product Manager", src: "https://github.com/shadcn.png" },
  { name: "Lucas Fernández", role: "Frontend Engineer" },
  { name: "Camila Suárez", role: "UX Designer" },
  { name: "Diego López", role: "Backend Engineer" },
  { name: "Valeria Castro", role: "QA Lead" },
  { name: "Tomás Herrera", role: "DevOps Engineer" },
  { name: "Florencia Núñez", role: "Data Analyst" },
  { name: "Martín Acosta", role: "Tech Lead" },
]

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")

export default function CarouselPage() {
  const [selectedStatus, setSelectedStatus] = useState<
    (typeof STATUS_KEYS)[number] | null
  >("permisos")

  return (
    <ShowcasePage
      title="Carousel"
      description="Carrusel deslizable basado en Embla. Útil para listar elementos con flechas de navegación cuando no entran en una sola fila."
      wide
    >
      <ShowcaseSection
        title="Status tiles (novedades)"
        description="Caso real: 11 statuses del dominio renderizados con StatusTile. El componente conoce el mapping status→variant+icon+label internamente."
      >
        <div className="px-4">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {STATUS_KEYS.map((status) => (
                <CarouselItem key={status} className="basis-auto">
                  <StatusTile
                    status={status}
                    count={STATUS_COUNTS[status]}
                    selected={selectedStatus === status}
                    onClick={() => setSelectedStatus(status)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="IconTileCard (todas las variantes)"
        description="Demo del primitive con sus 17 variantes de color. StatusTile es solo un wrapper que elige una de estas."
      >
        <div className="px-4">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {allVariants.map((variant) => (
                <CarouselItem key={variant} className="basis-auto">
                  <IconTileCard
                    variant={variant}
                    icon={<Square />}
                    label={variant}
                    onClick={() => {}}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Estado del equipo (EmployeeStatusCard)"
        description="Caso real: roster de un equipo con su estado actual. El carousel resuelve cuando no entran todos en una fila."
      >
        <div className="px-4">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {TEAM.map((member) => (
                <CarouselItem key={member.name} className="basis-[25%]">
                  <EmployeeStatusCard
                    name={member.name}
                    avatarSrc={member.avatarSrc}
                    status={member.status}
                    data={member.data}
                    roleBadges={member.roleBadges}
                    devices={member.devices}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Planes (Card primitive)"
        description="Carousel con el Card base usando header + content + footer. Útil para listados de planes, features o contenido extenso."
      >
        <div className="px-4">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {PLANS.map((plan) => (
                <CarouselItem
                  key={plan.name}
                  className="basis-auto"
                >
                  <Card variant={plan.variant} className="w-72 h-full">
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-3">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-foreground">
                          {plan.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {plan.period}
                        </span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {plan.features.map((feature) => (
                          <li key={feature}>• {feature}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full font-normal shadow-none"
                      >
                        {plan.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Miembros del equipo (Avatar)"
        description="Carousel compacto: avatar + nombre + rol. Útil para directorios o listados de personas cuando no entran en una fila."
      >
        <div className="px-4">
          <Carousel
            opts={{ align: "start", containScroll: "keepSnaps" }}
            className="w-full"
          >
            <CarouselContent>
              {TEAM_MEMBERS.map((member) => (
                <CarouselItem key={member.name} className="basis-[17%]">
                  <div className="flex w-36 flex-col items-center gap-2 rounded-xl border border-border bg-white p-4 text-center">
                    <Avatar size="xl">
                      {member.src && (
                        <AvatarImage src={member.src} alt={member.name} />
                      )}
                      <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-0.5">
                      <p className="text-sm font-semibold text-foreground leading-tight">
                        {member.name}
                      </p>
                      <p className="text-xs text-muted-foreground leading-tight">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
