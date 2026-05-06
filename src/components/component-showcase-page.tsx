import type { ReactNode } from "react"

//Layout del componente showcase, con título, descripción y secciones para cada variante o caso de uso del componente.

type ShowcasePageProps = {
  title: string
  description: string
  children: ReactNode
  wide?: boolean
}

type ShowcaseSectionProps = {
  title?: string
  description?: string
  children: ReactNode
}

function ShowcaseSection({
  title = "",
  description = "",
  children,
}: ShowcaseSectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
        {title}
      </h2>
      <div className="rounded-xl border border-border bg-muted/30 p-6">
        {children}
      </div>
      {description ? (
        <p className="text-xs text-muted-foreground">{description}</p>
      ) : null}
    </section>
  )
}

function ShowcasePage({
  title,
  description,
  children,
  wide = false,
}: ShowcasePageProps) {
  return (
    <div
      className={`${wide ? "max-w-6xl" : "max-w-3xl"} space-y-10 p-8`}
    >
      <div>
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>

      {children}
    </div>
  )
}

export { ShowcasePage, ShowcaseSection }
