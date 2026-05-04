import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

export default function TooltipPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Tooltip</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          A small popup that appears on hover/focus to give the user contextual information.
        </p>
      </div>

      {/* Default */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Default</h2>
        <div className="flex items-center gap-4 p-12 rounded-xl border border-border bg-muted/30">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>Tooltip por defecto</TooltipContent>
          </Tooltip>
        </div>
        <p className="text-xs text-muted-foreground">
          bg <code>black/80</code> + texto blanco · sin arrow
        </p>
      </section>

      {/* Sides without arrow */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Sides — without arrow</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-12 rounded-xl border border-border bg-muted/30">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top">Tooltip top</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">Tooltip right</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Tooltip bottom</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">Tooltip left</TooltipContent>
          </Tooltip>
        </div>
      </section>

      {/* Sides with arrow */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Sides — with arrow</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-12 rounded-xl border border-border bg-muted/30">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top" arrow>
              Tooltip top
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right" arrow>
              Tooltip right
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" arrow>
              Tooltip bottom
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left" arrow>
              Tooltip left
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="text-xs text-muted-foreground">
          La prop <code>arrow</code> es opcional. Cuando está presente, se posiciona automáticamente según <code>side</code>.
        </p>
      </section>

      {/* Variants */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Variants</h2>
        <div className="flex flex-wrap items-center gap-4 p-12 rounded-xl border border-border bg-muted/30">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Default</Button>
            </TooltipTrigger>
            <TooltipContent arrow>Default variant</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Gray</Button>
            </TooltipTrigger>
            <TooltipContent variant="gray" arrow>
              Gray variant
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="text-xs text-muted-foreground">
          default · gray
        </p>
      </section>

      {/* Long content */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Long content</h2>
        <div className="flex items-center gap-4 p-12 rounded-xl border border-border bg-muted/30">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent side="right" arrow>
              Esto es un tooltip más largo para mostrar el comportamiento del max-width al envolver el texto en varias líneas.
            </TooltipContent>
          </Tooltip>
        </div>
      </section>
    </div>
  )
}
