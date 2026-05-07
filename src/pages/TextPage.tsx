import { Text } from "@/components/ui/text"

type TextRow = {
  variant: Parameters<typeof Text>[0]["variant"]
  label: string
  size: string
  lineHeight: string
  weight: string
  useCase: string
}

const rows: TextRow[] = [
  {
    variant: "h1",
    label: "Heading 1",
    size: "36px / 2.25rem",
    lineHeight: "40px",
    weight: "600 Semibold",
    useCase: "Page titles and primary hero headings",
  },
  {
    variant: "h2",
    label: "Heading 2",
    size: "30px / 1.875rem",
    lineHeight: "36px",
    weight: "600 Semibold",
    useCase: "Section headings a level below Heading 1",
  },
  {
    variant: "h3",
    label: "Heading 3",
    size: "24px / 1.5rem",
    lineHeight: "32px",
    weight: "600 Semibold",
    useCase: "Subsection headings and card titles",
  },
  {
    variant: "h4",
    label: "Heading 4",
    size: "20px / 1.25rem",
    lineHeight: "28px",
    weight: "600 Semibold",
    useCase: "Group labels and widget titles",
  },
  {
    variant: "h5",
    label: "Heading 5",
    size: "18px / 1.125rem",
    lineHeight: "28px",
    weight: "600 Semibold",
    useCase: "Minor headings and sidebar section titles",
  },
  {
    variant: "p",
    label: "Paragraph",
    size: "16px / 1rem",
    lineHeight: "28px",
    weight: "400 Regular",
    useCase: "Body text, descriptions and form help text",
  },
  {
    variant: "span-15",
    label: "15px Text",
    size: "15px / 0.9375rem",
    lineHeight: "15px",
    weight: "400 Regular",
    useCase: "Medium body text and navigation items",
  },
  {
    variant: "span",
    label: "Span",
    size: "16px / 1rem",
    lineHeight: "24px",
    weight: "400 Regular",
    useCase: "Inline text and general labels",
  },
  {
    variant: "span-13",
    label: "13px Text",
    size: "13px / 0.8125rem",
    lineHeight: "13px",
    weight: "400 Regular",
    useCase: "Secondary labels and metadata",
  },
  {
    variant: "small",
    label: "Small",
    size: "14px / 0.875rem",
    lineHeight: "14px",
    weight: "500 Medium",
    useCase: "Disclaimers, helper text and captions",
  },
  {
    variant: "span-table",
    label: "Table Text",
    size: "12px / 0.75rem",
    lineHeight: "12px",
    weight: "400 Regular",
    useCase: "Table cell text and compact data displays",
  },
  {
    variant: "card-title-graph",
    label: "Card Title Graph",
    size: "15px / 0.9375rem",
    lineHeight: "15px",
    weight: "600 Semibold",
    useCase: "Chart titles and card headers",
  },
]

const TextPage = () => {
  return (
    <div className="p-8 max-w-5xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Text</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Typography scale used across the design system.
        </p>
      </div>

      <section className="space-y-0">
        {/* Column headers */}
        <div className="grid grid-cols-[180px_1fr_220px] gap-8 pb-3 border-b border-border">
          <span className="text-sm text-muted-foreground font-medium">
            Specs
          </span>
          <span className="text-sm text-muted-foreground font-medium">
            Style
          </span>
          <span className="text-sm text-muted-foreground font-medium">
            Sample use cases
          </span>
        </div>

        {rows.map((row) => (
          <div
            key={row.variant}
            className="grid grid-cols-[180px_1fr_220px] gap-8 py-6 border-b border-border items-center"
          >
            {/* Specs */}
            <div className="flex flex-col gap-0.5 text-[13px] text-muted-foreground leading-5">
              <span>Variant: {row.variant}</span>
              <span>Size: {row.size}</span>
              <span>Line-height: {row.lineHeight}</span>
              <span>Weight: {row.weight}</span>
            </div>

            {/* Style — rendered text */}
            <div>
              <Text variant={row.variant}>{row.label}</Text>
            </div>

            {/* Sample use cases */}
            <p className="text-[13px] text-muted-foreground leading-5">
              {row.useCase}
            </p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default TextPage
