import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page"

type ColorToken = {
  name: string
  variable: string
  swatchClass: string
}

type BadgeColorToken = {
  name: string
  bgVariable: string
  bgSwatchClass: string
  textVariable: string
  textSwatchClass: string
}

const primaryPalette: ColorToken[] = [
  {
    name: "Primary",
    variable: "--primary",
    swatchClass: "bg-[var(--primary)]",
  },
  {
    name: "Primary Light",
    variable: "--primary-light",
    swatchClass: "bg-[var(--primary-light)]",
  },
  {
    name: "Primary Foreground",
    variable: "--primary-foreground",
    swatchClass: "bg-[var(--primary-foreground)]",
  },
  { name: "Ring", variable: "--ring", swatchClass: "bg-[var(--ring)]" },
]

const secondaryPalette: ColorToken[] = [
  {
    name: "Secondary",
    variable: "--secondary",
    swatchClass: "bg-[var(--secondary)]",
  },
  {
    name: "Secondary Foreground",
    variable: "--secondary-foreground",
    swatchClass: "bg-[var(--secondary-foreground)]",
  },
  {
    name: "Success",
    variable: "--success",
    swatchClass: "bg-[var(--success)]",
  },
  {
    name: "Success Foreground",
    variable: "--success-foreground",
    swatchClass: "bg-[var(--success-foreground)]",
  },
  {
    name: "Warning",
    variable: "--warning",
    swatchClass: "bg-[var(--warning)]",
  },
  {
    name: "Warning Foreground",
    variable: "--warning-foreground",
    swatchClass: "bg-[var(--warning-foreground)]",
  },
  {
    name: "Destructive",
    variable: "--destructive",
    swatchClass: "bg-[var(--destructive)]",
  },
  {
    name: "Destructive Foreground",
    variable: "--destructive-foreground",
    swatchClass: "bg-[var(--destructive-foreground)]",
  },
]

const neutralPalette: ColorToken[] = [
  {
    name: "Background",
    variable: "--background",
    swatchClass: "bg-[var(--background)]",
  },
  {
    name: "Background Gray",
    variable: "--background-gray",
    swatchClass: "bg-[var(--background-gray)]",
  },
  {
    name: "Foreground",
    variable: "--foreground",
    swatchClass: "bg-[var(--foreground)]",
  },
  { name: "Card", variable: "--card", swatchClass: "bg-[var(--card)]" },
  {
    name: "Card Foreground",
    variable: "--card-foreground",
    swatchClass: "bg-[var(--card-foreground)]",
  },
  {
    name: "Popover",
    variable: "--popover",
    swatchClass: "bg-[var(--popover)]",
  },
  {
    name: "Popover Foreground",
    variable: "--popover-foreground",
    swatchClass: "bg-[var(--popover-foreground)]",
  },
  { name: "Muted", variable: "--muted", swatchClass: "bg-[var(--muted)]" },
  {
    name: "Muted Foreground",
    variable: "--muted-foreground",
    swatchClass: "bg-[var(--muted-foreground)]",
  },
  { name: "Accent", variable: "--accent", swatchClass: "bg-[var(--accent)]" },
  {
    name: "Accent Foreground",
    variable: "--accent-foreground",
    swatchClass: "bg-[var(--accent-foreground)]",
  },
  { name: "Border", variable: "--border", swatchClass: "bg-[var(--border)]" },
  { name: "Input", variable: "--input", swatchClass: "bg-[var(--input)]" },
  {
    name: "Black Light",
    variable: "--black-light",
    swatchClass: "bg-[var(--black-light)]",
  },
  {
    name: "Gray Medium",
    variable: "--gray-medium",
    swatchClass: "bg-[var(--gray-medium)]",
  },
]

const badgePalette: BadgeColorToken[] = [
  {
    name: "Success",
    bgVariable: "--success-badge",
    bgSwatchClass: "bg-[var(--success-badge)]",
    textVariable: "--success-badge-text",
    textSwatchClass: "bg-[var(--success-badge-text)]",
  },
  {
    name: "Warning",
    bgVariable: "--warning-badge",
    bgSwatchClass: "bg-[var(--warning-badge)]",
    textVariable: "--warning-badge-text",
    textSwatchClass: "bg-[var(--warning-badge-text)]",
  },
  {
    name: "Error",
    bgVariable: "--error-badge",
    bgSwatchClass: "bg-[var(--error-badge)]",
    textVariable: "--error-badge-text",
    textSwatchClass: "bg-[var(--error-badge-text)]",
  },
  {
    name: "Info",
    bgVariable: "--info-badge",
    bgSwatchClass: "bg-[var(--info-badge)]",
    textVariable: "--info-badge-text",
    textSwatchClass: "bg-[var(--info-badge-text)]",
  },
  {
    name: "Orange",
    bgVariable: "--orange-badge",
    bgSwatchClass: "bg-[var(--orange-badge)]",
    textVariable: "--orange-badge-text",
    textSwatchClass: "bg-[var(--orange-badge-text)]",
  },
  {
    name: "Cyan",
    bgVariable: "--cyan-badge",
    bgSwatchClass: "bg-[var(--cyan-badge)]",
    textVariable: "--cyan-badge-text",
    textSwatchClass: "bg-[var(--cyan-badge-text)]",
  },
  {
    name: "Sky",
    bgVariable: "--sky-badge",
    bgSwatchClass: "bg-[var(--sky-badge)]",
    textVariable: "--sky-badge-text",
    textSwatchClass: "bg-[var(--sky-badge-text)]",
  },
  {
    name: "Neutral",
    bgVariable: "--neutral-badge",
    bgSwatchClass: "bg-[var(--neutral-badge)]",
    textVariable: "--neutral-badge-text",
    textSwatchClass: "bg-[var(--neutral-badge-text)]",
  },
  {
    name: "Blue",
    bgVariable: "--blue-badge",
    bgSwatchClass: "bg-[var(--blue-badge)]",
    textVariable: "--blue-badge-text",
    textSwatchClass: "bg-[var(--blue-badge-text)]",
  },
  {
    name: "Indigo",
    bgVariable: "--indigo-badge",
    bgSwatchClass: "bg-[var(--indigo-badge)]",
    textVariable: "--indigo-badge-text",
    textSwatchClass: "bg-[var(--indigo-badge-text)]",
  },
  {
    name: "Purple",
    bgVariable: "--purple-badge",
    bgSwatchClass: "bg-[var(--purple-badge)]",
    textVariable: "--purple-badge-text",
    textSwatchClass: "bg-[var(--purple-badge-text)]",
  },
]

function ColorSwatches({ colors }: { colors: ColorToken[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {colors.map((color) => (
        <div
          key={color.variable}
          className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
        >
          <div
            className={`h-10 w-10 shrink-0 rounded-md border border-border ${color.swatchClass}`}
            aria-hidden="true"
          />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">
              {color.name}
            </p>
            <p className="text-xs text-muted-foreground">{color.variable}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function BadgeColorPairs({ colors }: { colors: BadgeColorToken[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {colors.map((color) => (
        <div
          key={color.bgVariable}
          className="space-y-2 rounded-lg border border-border bg-card p-3"
        >
          <p className="text-sm font-semibold text-foreground">{color.name}</p>
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

export default function ColorsPage() {
  return (
    <ShowcasePage
      title="Colors"
      description="Theme color tokens grouped by palette using the variables defined in App.css."
    >
      <ShowcaseSection title="Primary Palette">
        <ColorSwatches colors={primaryPalette} />
      </ShowcaseSection>

      <ShowcaseSection title="Secondary Palette">
        <ColorSwatches colors={secondaryPalette} />
      </ShowcaseSection>

      <ShowcaseSection title="Neutral Palette">
        <ColorSwatches colors={neutralPalette} />
      </ShowcaseSection>

      <ShowcaseSection title="Badge Palette">
        <BadgeColorPairs colors={badgePalette} />
      </ShowcaseSection>
    </ShowcasePage>
  )
}
