import StarIcon from "../components/icons/StarIcon"
import TrashIcon from "../components/icons/TrashIcon"

function IconsPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Icons</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Showcase of the custom SVG icons available.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Star Icon
        </h2>
        <div className="flex items-center gap-4 p-12 rounded-xl border border-border bg-muted/30">
          <StarIcon />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Trash Icon
        </h2>
        <div className="flex items-center gap-4 p-12 rounded-xl border border-border bg-muted/30">
          <TrashIcon />
        </div>
      </section>
    </div>
  )
}

export default IconsPage
