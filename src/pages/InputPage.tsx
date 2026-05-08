import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Info, Eye, AlertTriangle, Check } from "lucide-react"
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page"

export default function InputPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <ShowcasePage
      title="Input"
      description="Displays a form input field or a component that looks like an input field."
    >
      <ShowcaseSection title="Sizes">
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex flex-col space-y-1.5">
            <Label>Small</Label>
            <Input size="sm" placeholder="Small" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label>Medium (Default)</Label>
            <Input size="md" placeholder="Medium" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label>Large</Label>
            <Input size="lg" placeholder="Large" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Label Variants">
        <div className="flex flex-wrap items-start gap-6">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="required-input" required>
              Primer nombre
            </Label>
            <Input id="required-input" placeholder="Karen" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="optional-input">Descripción</Label>
            <Input id="optional-input" placeholder="Descripción" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center justify-between px-1">
              <Label htmlFor="trabajar-dia" required>
                Trabajar Día Libre
              </Label>
              <Info className="size-3.5 text-[#8e8e8e]" />
            </div>
            <Input id="trabajar-dia" defaultValue="Media" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Input Types">
        <div className="flex flex-wrap items-start gap-6">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password-input" required>
              Contraseña
            </Label>
            <div className="relative">
              <Input
                id="password-input"
                type={showPassword ? "text" : "password"}
                defaultValue="mypassword123"
                className="pr-8"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-2 flex items-center text-muted-foreground hover:text-foreground"
              >
                {" "}
                <Eye className="size-3.5" />
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="date-input">Fecha de nacimiento</Label>
            <Input id="date-input" type="date" defaultValue="2001-12-11" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email-input" required>
              Correo principal
            </Label>
            <Input
              id="email-input"
              type="email"
              placeholder="karen@gmail.com"
            />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="States">
        <div className="flex flex-wrap items-start gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-base font-medium text-foreground">
              Default
            </span>
            <div className="flex flex-col space-y-1.5">
              <Label required>Title</Label>
              <Input defaultValue="Text" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-base font-medium text-foreground">Focus</span>
            <div className="flex flex-col space-y-1.5">
              <Label required>Title</Label>
              <Input defaultValue="Text" className="border-primary" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-base font-medium text-foreground">Error</span>
            <div className="flex flex-col space-y-1.5">
              <Label required>Title</Label>
              <Input defaultValue="Text" aria-invalid="true" />
              <p className="flex items-center gap-1 text-xs text-destructive">
                <AlertTriangle className="size-3" />
                Help text
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-base font-medium text-foreground">
              Success
            </span>
            <div className="flex flex-col space-y-1.5">
              <Label required>Title</Label>
              <Input defaultValue="Text" className="border-green-500" />
              <p className="flex items-center gap-1 text-xs text-green-600">
                <Check className="size-3" />
                Help text
              </p>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Read Only">
        <p className="mb-4 text-xs text-muted-foreground">
          Informative inputs — you can click and select the text, but cannot
          edit the value. Different from disabled, which is fully
          non-interactive.
        </p>
        <div className="flex flex-wrap items-start gap-6">
          <div className="flex flex-col space-y-1.5">
            <Label required>Correo principal</Label>
            <Input type="email" placeholder="karen@gmail.com" readOnly />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Props">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 pr-6 text-left font-semibold text-foreground">
                  Prop
                </th>
                <th className="py-2 pr-6 text-left font-semibold text-foreground">
                  Type
                </th>
                <th className="py-2 pr-6 text-left font-semibold text-foreground">
                  Default
                </th>
                <th className="py-2 text-left font-semibold text-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                {
                  prop: "size",
                  type: '"sm" | "md" | "lg"',
                  default: '"md"',
                  description: "Controls height and text size.",
                },
                {
                  prop: "type",
                  type: "string",
                  default: '"text"',
                  description:
                    'HTML input type — "text", "email", "password", "date", "time", etc.',
                },
                {
                  prop: "placeholder",
                  type: "string",
                  default: "—",
                  description: "Hint text shown when the input is empty.",
                },
                {
                  prop: "disabled",
                  type: "boolean",
                  default: "false",
                  description:
                    "Prevents all interaction. Applies reduced opacity and blocks pointer events.",
                },
                {
                  prop: "aria-invalid",
                  type: "boolean",
                  default: "false",
                  description:
                    "Applies error border styling. Pair with a help text message below the input.",
                },
                {
                  prop: "className",
                  type: "string",
                  default: "—",
                  description:
                    "Extra Tailwind classes merged via cn(). Use to override width, colors, or spacing.",
                },
              ].map(({ prop, type, default: def, description }) => (
                <tr key={prop} className="align-top">
                  <td className="py-2.5 pr-6 font-mono text-xs text-foreground">
                    {prop}
                  </td>
                  <td className="py-2.5 pr-6 font-mono text-xs text-primary whitespace-nowrap">
                    {type}
                  </td>
                  <td className="py-2.5 pr-6 font-mono text-xs text-muted-foreground">
                    {def}
                  </td>
                  <td className="py-2.5 text-xs text-muted-foreground">
                    {description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 pr-6 text-left font-semibold text-foreground">
                  Size
                </th>
                <th className="py-2 pr-6 text-left font-semibold text-foreground">
                  Height
                </th>
                <th className="py-2 pr-6 text-left font-semibold text-foreground">
                  Font size
                </th>
                <th className="py-2 text-left font-semibold text-foreground">
                  Use case
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                {
                  size: "sm",
                  height: "24px",
                  font: "12px (xs)",
                  use: "Compact layouts, tables, inline edits.",
                },
                {
                  size: "md",
                  height: "34px",
                  font: "14px (sm)",
                  use: "Default for all standard forms.",
                },
                {
                  size: "lg",
                  height: "40px",
                  font: "16px (base)",
                  use: "Prominent fields, login / hero forms.",
                },
              ].map(({ size, height, font, use }) => (
                <tr key={size} className="align-top">
                  <td className="py-2.5 pr-6 font-mono text-xs text-foreground">
                    {size}
                  </td>
                  <td className="py-2.5 pr-6 font-mono text-xs text-muted-foreground">
                    {height}
                  </td>
                  <td className="py-2.5 pr-6 font-mono text-xs text-muted-foreground">
                    {font}
                  </td>
                  <td className="py-2.5 text-xs text-muted-foreground">
                    {use}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
