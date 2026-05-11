import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import EmployeeStatusCard from "@/components/common/EmployeeStatusCard"
import { Backpack, FileText } from "lucide-react"
import ProfilePanelSection from "./ProfilePanelSection"
import ProfileShiftSection from "./ProfileShiftSection"

export default function CardPage() {
  return (
    <div className="p-8 max-w-4xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Card</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Container component to group related content. Composed of header,
          content and footer slots.
        </p>
      </div>

      {/* Employee status */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Employee status
        </h2>
        <div className="flex flex-wrap gap-4 p-6 rounded-xl border border-border bg-muted/30">
          <EmployeeStatusCard
            name="Jose Blanco"
            avatarSrc="https://github.com/shadcn.png"
            status="working"
            data={{
              clockin: "07:43 am",
              hours: "3.32 hrs",
              location: "Oficina Colombia",
            }}
            roleBadges={[
              { icon: <Backpack />, label: "Equipo de campo", variant: "info" },
            ]}
            devices={["faceMobile"]}
          />

          <EmployeeStatusCard
            name="Ana Torres"
            status="absent"
            data={{
              planned: "08:00 am",
              hours: "6.00 hrs",
              location: "Eeuu",
            }}
          />

          <EmployeeStatusCard
            name="Carlos Ruiz"
            status="permit"
            data={{
              planned: "Diario",
              location: "Permiso médico",
            }}
            roleBadges={[
              {
                icon: <FileText />,
                label: "Permiso documentado",
                variant: "orange",
              },
              {
                icon: <Backpack />,
                label: "Equipo de campo",
                variant: "info",
              },
            ]}
          />

          <EmployeeStatusCard
            name="Mario Díaz"
            status="worked"
            data={{
              clockin: "07:43 am",
              clockout: "16:50 pm",
              hours: "9.07 hrs",
              location: "Valencia",
            }}
            devices={["fingerprintBiometric"]}
          />
        </div>
        <p className="text-xs text-muted-foreground">
          working · absent · permit · worked
        </p>
      </section>

      {/* Default */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Default
        </h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Notificaciones</CardTitle>
              <CardDescription>Tenés 3 mensajes sin leer.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Revisá tu bandeja para ver las últimas actualizaciones de tus
                proyectos.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                size="sm"
                variant="outline"
                className="font-normal shadow-none"
              >
                Ver todo
              </Button>
            </CardFooter>
          </Card>
        </div>
        <p className="text-xs text-muted-foreground">
          bg <code>white</code> + <code>border-secondary</code>
        </p>
      </section>

      {/* Variants */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Variants
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-xl border border-border bg-muted/30">
          <Card>
            <CardHeader>
              <CardTitle>Default</CardTitle>
              <CardDescription>White + border-secondary</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Variante por defecto.</p>
            </CardContent>
          </Card>

          <Card variant="muted">
            <CardHeader>
              <CardTitle>Muted</CardTitle>
              <CardDescription>Fondo neutro</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Para contenido secundario.
              </p>
            </CardContent>
          </Card>

          <Card variant="primary">
            <CardHeader>
              <CardTitle>Primary</CardTitle>
              <CardDescription>Tinte de marca</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Resalta acciones o anuncios destacados.
              </p>
            </CardContent>
          </Card>

          <Card variant="outline">
            <CardHeader>
              <CardTitle>Outline</CardTitle>
              <CardDescription>Borde más suave</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Igual que default pero con border-border.
              </p>
            </CardContent>
          </Card>

          <Card variant="ghost">
            <CardHeader>
              <CardTitle>Ghost</CardTitle>
              <CardDescription>Sin fondo ni borde</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Útil cuando se anida en otros contenedores.
              </p>
            </CardContent>
          </Card>

          <Card variant="borderless">
            <CardHeader>
              <CardTitle>Borderless</CardTitle>
              <CardDescription>Fondo blanco sin borde</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Limpio para superficies que ya tienen contorno.
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="text-xs text-muted-foreground">
          default · muted · primary · outline · ghost · borderless
        </p>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Sizes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-xl border border-border bg-muted/30">
          <Card size="default">
            <CardHeader>
              <CardTitle>Default size</CardTitle>
              <CardDescription>gap 4 · padding 4</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Tamaño base del card.</p>
            </CardContent>
          </Card>

          <Card size="sm">
            <CardHeader>
              <CardTitle>Small size</CardTitle>
              <CardDescription>gap 3 · padding 3</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Compacto para listas densas.
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="text-xs text-muted-foreground">default · sm</p>
      </section>

      {/* With action */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          With action
        </h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Equipo de diseño</CardTitle>
              <CardDescription>5 miembros activos</CardDescription>
              <CardAction>
                <Button
                  size="sm"
                  variant="outline"
                  className="font-normal shadow-none"
                >
                  Editar
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Espacio compartido para gestionar componentes y tokens del
                design system.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Header only */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Header only
        </h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Plan Pro</CardTitle>
              <CardDescription>Renueva el 15/05/2026</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Card Profile Monitoreo */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Panel Monitoreo
        </h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <ProfilePanelSection
            name="Luis Agustin Linares Novellino"
            job="Diseño Gráfico"
            department="Diseño"
            location="Venezuela"
            avatarFallback="LN"
          />
        </div>
      </section>
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Panel Planificación y Tiempos
        </h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <ProfileShiftSection />
        </div>
      </section>
    </div>
  )
}
