import { Switch } from "@/components/ui/switch"
import { Info } from "lucide-react"

export default function SwitchPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Switch</h1>
      </div>

      {/* Examples */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-start gap-12 p-6 rounded-xl  bg-muted/30">
          <div className="flex flex-col gap-3 min-w-30">
            <span className="text-lg text-zinc-500">Control de Acceso</span>
            <Switch defaultChecked color="white" />
          </div>

          <div className="flex flex-col gap-3 min-w-30">
            <span className="text-lg text-zinc-500">
              ¿Extras antes del turno?
            </span>
            <Switch />
          </div>

          <div className="flex flex-col gap-3 min-w-30">
            <div className="flex items-center gap-2">
              <span className="text-lg text-zinc-500">Cont. Servicio</span>
              <Info className="w-4 h-4 text-zinc-400" />
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </section>

      {/* Turno Abierto */}
      <section className="space-y-3">
        <div className="flex items-start p-6 rounded-xl bg-muted/30">
          <div className="flex flex-col gap-2 min-w-30">
            <span className="text-base text-zinc-600">Turno abierto</span>
            <Switch size="default" />
          </div>
        </div>
      </section>
    </div>
  )
}
