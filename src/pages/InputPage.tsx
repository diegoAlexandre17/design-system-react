import { Input } from "@/components/ui/input"

export default function InputPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Input</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Captures user text in a single-line field with built-in focus,
          disabled and invalid states.
        </p>
      </div>

      {/* Basic */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Basic
        </h2>
        <div className="space-y-3 p-6 rounded-xl border border-border bg-muted/30">
          <Input placeholder="Your name" />
          <Input type="email" placeholder="name@example.com" />
        </div>
        <p className="text-xs text-muted-foreground">
          Default text and email usage.
        </p>
      </section>

      {/* Types */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Types
        </h2>
        <div className="space-y-3 p-6 rounded-xl border border-border bg-muted/30">
          <Input type="text" placeholder="Text input" />
          <Input type="password" placeholder="Password" />
          <Input type="number" placeholder="Number" />
          <Input type="date" />
        </div>
        <p className="text-xs text-muted-foreground">
          text · password · number · date
        </p>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Sizes
        </h2>
        <div className="space-y-3 p-6 rounded-xl border border-border bg-muted/30">
          <Input className="h-7 text-xs" placeholder="Small" />
          <Input placeholder="Default" />
          <Input className="h-10 text-base" placeholder="Large" />
        </div>
        <p className="text-xs text-muted-foreground">
          Controlled with <code>className</code> overrides.
        </p>
      </section>

      {/* Disabled */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Disabled
        </h2>
        <div className="space-y-3 p-6 rounded-xl border border-border bg-muted/30">
          <Input disabled placeholder="Disabled input" />
          <Input disabled value="readonly@example.com" />
        </div>
        <p className="text-xs text-muted-foreground">
          Disabled fields prevent editing and pointer interactions.
        </p>
      </section>

      {/* Invalid */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Invalid
        </h2>
        <div className="space-y-3 p-6 rounded-xl border border-border bg-muted/30">
          <Input aria-invalid placeholder="email@domain" />
          <Input aria-invalid value="invalid-email" readOnly />
        </div>
        <p className="text-xs text-muted-foreground">
          Uses <code>aria-invalid</code> for destructive border and ring styles.
        </p>
      </section>

      {/* With Label */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          With Label
        </h2>
        <div className="space-y-4 p-6 rounded-xl border border-border bg-muted/30">
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email
            </label>
            <Input id="email" type="email" placeholder="you@company.com" />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="username"
              className="text-sm font-medium text-foreground"
            >
              Username
            </label>
            <Input id="username" placeholder="@username" />
          </div>
        </div>
      </section>
    </div>
  )
}
