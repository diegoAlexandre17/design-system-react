import { Checkbox } from "@/components/ui/checkbox"

export default function CheckBoxPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Checkbox</h1>
      </div>

      {/* Basic */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Basic
        </h2>
        <div className="flex items-center gap-6 p-6 rounded-xl border border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <Checkbox id="basic" />
            <label htmlFor="basic" className="text-sm text-foreground">
              Default
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="basic-checked" checked />
            <label htmlFor="basic-checked" className="text-sm text-foreground">
              Checked
            </label>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Sizes
        </h2>
        <div className="flex items-center gap-8 p-6 rounded-xl border border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <Checkbox id="size-sm" className="size-3" />
            <label htmlFor="size-sm" className="text-sm text-foreground">
              Small
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="size-md" />
            <label htmlFor="size-md" className="text-sm text-foreground">
              Default
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="size-lg" className="size-5" />
            <label htmlFor="size-lg" className="text-sm text-foreground">
              Large
            </label>
          </div>
        </div>
      </section>

      {/* Disabled */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Disabled
        </h2>
        <div className="flex items-center gap-6 p-6 rounded-xl border border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <Checkbox id="disabled" disabled />
            <label htmlFor="disabled" className="text-sm text-muted-foreground">
              Disabled
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-checked" checked disabled />
            <label
              htmlFor="disabled-checked"
              className="text-sm text-muted-foreground"
            >
              Disabled checked
            </label>
          </div>
        </div>
      </section>

      {/* With Description */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          With Description
        </h2>
        <div className="space-y-4 p-6 rounded-xl border border-border bg-muted/30">
          <label className="flex items-start gap-3">
            <Checkbox id="terms" className="mt-0.5" />
            <span className="space-y-1">
              <span className="block text-sm font-medium text-foreground">
                Accept terms
              </span>
              <span className="block text-xs text-muted-foreground">
                You agree to the terms of service and privacy policy.
              </span>
            </span>
          </label>
          <label className="flex items-start gap-3">
            <Checkbox id="updates" checked className="mt-0.5" />
            <span className="space-y-1">
              <span className="block text-sm font-medium text-foreground">
                Product updates
              </span>
              <span className="block text-xs text-muted-foreground">
                Receive occasional updates and feature announcements.
              </span>
            </span>
          </label>
        </div>
      </section>
    </div>
  )
}
