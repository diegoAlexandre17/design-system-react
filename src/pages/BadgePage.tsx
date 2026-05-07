import { Badge } from "@/components/ui/badge"
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page"

type BadgeColorToken = {
  name: string
  variant:
    | "success"
    | "warning"
    | "error"
    | "info"
    | "orange"
    | "cyan"
    | "sky"
    | "neutral"
    | "blue"
    | "indigo"
    | "purple"
  bgVariable: string
  bgSwatchClass: string
  textVariable: string
  textSwatchClass: string
}

const badgePalette: BadgeColorToken[] = [
  {
    name: "Success",
    variant: "success",
    bgVariable: "--success-badge",
    bgSwatchClass: "bg-[var(--success-badge)]",
    textVariable: "--success-badge-text",
    textSwatchClass: "bg-[var(--success-badge-text)]",
  },
  {
    name: "Warning",
    variant: "warning",
    bgVariable: "--warning-badge",
    bgSwatchClass: "bg-[var(--warning-badge)]",
    textVariable: "--warning-badge-text",
    textSwatchClass: "bg-[var(--warning-badge-text)]",
  },
  {
    name: "Error",
    variant: "error",
    bgVariable: "--error-badge",
    bgSwatchClass: "bg-[var(--error-badge)]",
    textVariable: "--error-badge-text",
    textSwatchClass: "bg-[var(--error-badge-text)]",
  },
  {
    name: "Info",
    variant: "info",
    bgVariable: "--info-badge",
    bgSwatchClass: "bg-[var(--info-badge)]",
    textVariable: "--info-badge-text",
    textSwatchClass: "bg-[var(--info-badge-text)]",
  },
  {
    name: "Orange",
    variant: "orange",
    bgVariable: "--orange-badge",
    bgSwatchClass: "bg-[var(--orange-badge)]",
    textVariable: "--orange-badge-text",
    textSwatchClass: "bg-[var(--orange-badge-text)]",
  },
  {
    name: "Cyan",
    variant: "cyan",
    bgVariable: "--cyan-badge",
    bgSwatchClass: "bg-[var(--cyan-badge)]",
    textVariable: "--cyan-badge-text",
    textSwatchClass: "bg-[var(--cyan-badge-text)]",
  },
  {
    name: "Sky",
    variant: "sky",
    bgVariable: "--sky-badge",
    bgSwatchClass: "bg-[var(--sky-badge)]",
    textVariable: "--sky-badge-text",
    textSwatchClass: "bg-[var(--sky-badge-text)]",
  },
  {
    name: "Neutral",
    variant: "neutral",
    bgVariable: "--neutral-badge",
    bgSwatchClass: "bg-[var(--neutral-badge)]",
    textVariable: "--neutral-badge-text",
    textSwatchClass: "bg-[var(--neutral-badge-text)]",
  },
  {
    name: "Blue",
    variant: "blue",
    bgVariable: "--blue-badge",
    bgSwatchClass: "bg-[var(--blue-badge)]",
    textVariable: "--blue-badge-text",
    textSwatchClass: "bg-[var(--blue-badge-text)]",
  },
  {
    name: "Indigo",
    variant: "indigo",
    bgVariable: "--indigo-badge",
    bgSwatchClass: "bg-[var(--indigo-badge)]",
    textVariable: "--indigo-badge-text",
    textSwatchClass: "bg-[var(--indigo-badge-text)]",
  },
  {
    name: "Purple",
    variant: "purple",
    bgVariable: "--purple-badge",
    bgSwatchClass: "bg-[var(--purple-badge)]",
    textVariable: "--purple-badge-text",
    textSwatchClass: "bg-[var(--purple-badge-text)]",
  },
]

function BadgePaletteGrid({ colors }: { colors: BadgeColorToken[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {colors.map((color) => (
        <div
          key={color.bgVariable}
          className="space-y-2 rounded-lg border border-border bg-card p-3"
        >
          <Badge variant={color.variant}>{color.name}</Badge>
          <div className="flex items-center gap-2">
            <div
              className={`h-8 w-8 shrink-0 rounded-md border border-border ${color.bgSwatchClass}`}
              aria-hidden="true"
            />
            <span className="text-xs text-muted-foreground">
              {color.bgVariable}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`h-8 w-8 shrink-0 rounded-md border border-border ${color.textSwatchClass}`}
              aria-hidden="true"
            />
            <span className="text-xs text-muted-foreground">
              {color.textVariable}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function BadgePage() {
  return (
    <ShowcasePage title="Badge" description="Badges Calendarios - Tablas">
      <ShowcaseSection>
        <div className="flex flex-col items-center gap-3">
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="orange">Superada</Badge>
          <Badge variant="cyan">Sin Iniciar</Badge>
          <Badge variant="sky">Sin Publicar</Badge>
          <Badge variant="neutral">Finalizado</Badge>
        </div>
      </ShowcaseSection>
      <ShowcaseSection title="Badges Solicitudes - Tablas">
        <div className="flex flex-col items-center gap-3">
          <Badge variant="blue">En Petición</Badge>
          <Badge variant="error">Incompleta</Badge>
          <Badge variant="info">Completa</Badge>
          <Badge variant="orange">Superada</Badge>
          <Badge variant="cyan">Sin Iniciar</Badge>
          <Badge variant="sky">Sin Publicar</Badge>
          <Badge variant="neutral">Finalizado</Badge>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Badge Palette Tokens">
        <BadgePaletteGrid colors={badgePalette} />
      </ShowcaseSection>
    </ShowcasePage>
  )
}
