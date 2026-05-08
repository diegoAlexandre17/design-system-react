import { Icon } from "@/components/icons/IconWrapper"
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page"
import { ActiveIcon } from "@/components/icons-components/all-icons/ActiveIcon"
import { InactiveIcon } from "@/components/icons-components/all-icons/InactiveIcon"
import { PendingIcon } from "@/components/icons-components/all-icons/PendingIcon"

function IconsPage() {
  return (
    <ShowcasePage
      title="Icons"
      description="Displays the custom SVG icons available through the shared Icon wrapper."
    >
      <ShowcaseSection
        title="IconWrapper sizes"
        description="Example using ActiveIcon with the size prop exposed by the shared Icon wrapper."
      >
        <div className="space-y-6">
          <div className="space-y-3 rounded-lg border border-border bg-card p-4">
            <p className="text-sm font-medium text-foreground">Basic usage</p>
            <pre className="overflow-x-auto rounded-md bg-background p-3 text-xs text-muted-foreground">
              <code>{`<Icon icon={ActiveIcon} size="lg" className="text-primary" />`}</code>
            </pre>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            <div className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card px-4 py-5">
              <Icon icon={ActiveIcon} size="xs" className="text-primary" />
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                xs
              </span>
            </div>
            <div className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card px-4 py-5">
              <Icon icon={InactiveIcon} size="sm" className="text-primary" />
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                sm
              </span>
            </div>
            <div className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card px-4 py-5">
              <Icon icon={ActiveIcon} size="md" className="text-primary" />
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                md
              </span>
            </div>
            <div className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card px-4 py-5">
              <Icon icon={ActiveIcon} size="lg" className="text-primary" />
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                lg
              </span>
            </div>
            <div className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card px-4 py-5">
              <Icon icon={ActiveIcon} size="xl" className="text-primary" />
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                xl
              </span>
            </div>
            <div className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card px-4 py-5">
              <Icon icon={ActiveIcon} size="2xl" className="text-primary" />
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                2xl
              </span>
            </div>
            <div className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card px-4 py-5">
              <Icon icon={ActiveIcon} size="3xl" className="text-primary" />
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                3xl
              </span>
            </div>
            <div className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card px-4 py-5">
              <Icon icon={ActiveIcon} size="4xl" className="text-primary" />
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                4xl
              </span>
            </div>
            <div className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card px-4 py-5">
              <Icon icon={PendingIcon} size="5xl" className="text-primary" />
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                5xl
              </span>
            </div>
          </div>
        </div>
      </ShowcaseSection>

    </ShowcasePage>
  )
}

export default IconsPage
