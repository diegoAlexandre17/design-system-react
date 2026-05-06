import { Switch } from "@/components/ui/switch"
import { Info } from "lucide-react"

export default function SwitchPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Switch</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          A control that allows the user to toggle between checked and not
          checked.
        </p>
      </div>

      {/* Examples */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Examples
        </h2>
        <div className="flex flex-wrap items-start gap-12 p-12 rounded-xl border border-border bg-muted/30">
          <div className="flex flex-col gap-3 min-w-30">
            <span className="text-sm font-medium text-muted-foreground">
              Control de Acceso
            </span>
            <Switch defaultChecked color="white" />
          </div>

          <div className="flex flex-col gap-3 min-w-30">
            <span className="text-sm font-medium text-muted-foreground">
              ¿Extras antes del turno?
            </span>
            <Switch />
          </div>

          <div className="flex flex-col gap-3 min-w-30">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">
                Cont. Servicio
              </span>
              <Info className="w-4 h-4 text-zinc-400" />
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </section>

      {/* Turno Abierto */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Turno Abierto
        </h2>
        <div className="flex items-start gap-4 p-12 rounded-xl border border-border bg-muted/30">
          <div className="flex flex-col gap-3 min-w-30">
            <span className="text-sm font-medium text-muted-foreground">
              Turno abierto
            </span>
            <Switch size="default" />
          </div>
        </div>
      </section>

      {/* Tamaño */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Size
        </h2>
        <div className="flex flex-wrap items-start gap-12 p-12 rounded-xl border border-border bg-muted/30">
          <div className="flex flex-col gap-3 min-w-30">
            <span className="text-sm font-medium text-muted-foreground">
              Small
            </span>
            <Switch defaultChecked color="white" size="sm" />
          </div>

          <div className="flex flex-col gap-3 min-w-30">
            <span className="text-sm font-medium text-muted-foreground">
              Default
            </span>
            <Switch />
          </div>
        </div>
      </section>

      {/* Disabled */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Disabled
        </h2>
        <div className="flex flex-wrap items-start gap-12 p-12 rounded-xl border border-border bg-muted/30">
          <div className="flex flex-col gap-3 min-w-30">
            <span className="text-sm font-medium text-muted-foreground">
              Disabled Off
            </span>
            <Switch disabled />
          </div>

          <div className="flex flex-col gap-3 min-w-30">
            <span className="text-sm font-medium text-muted-foreground">
              Disabled On
            </span>
            <Switch disabled defaultChecked />
          </div>
        </div>
      </section>
    </div>
  )
}
