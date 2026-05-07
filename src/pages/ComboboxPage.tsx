import * as React from "react"
import {
  ComboboxField,
  AsyncComboboxField,
  type ComboboxFieldGroup,
  type ComboboxFieldOption,
} from "@/components/ui/combobox"
import { Label } from "@/components/ui/label"
import { SearchIcon } from "lucide-react"

const frameworks: ComboboxFieldOption[] = [
  { label: "Next.js", value: "next" },
  { label: "SvelteKit", value: "sveltekit" },
  { label: "Nuxt.js", value: "nuxt" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
  { label: "Vite", value: "vite" },
  { label: "Gatsby", value: "gatsby" },
  { label: "Solid Start", value: "solid-start" },
]

const groupedTechs: ComboboxFieldGroup[] = [
  {
    label: "Frontend",
    items: [
      { label: "React", value: "react" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
      { label: "Solid", value: "solid" },
    ],
  },
  {
    label: "Backend",
    items: [
      { label: "Node.js", value: "node" },
      { label: "Bun", value: "bun" },
      { label: "Deno", value: "deno" },
      { label: "Go", value: "go" },
    ],
  },
  {
    label: "Bases de datos",
    items: [
      { label: "PostgreSQL", value: "pg" },
      { label: "MySQL", value: "mysql" },
      { label: "SQLite", value: "sqlite" },
      { label: "MongoDB", value: "mongo" },
    ],
  },
]

const countries: ComboboxFieldOption[] = [
  { label: "Argentina", value: "ar" },
  { label: "Uruguay", value: "uy" },
  { label: "Brasil", value: "br" },
  { label: "Chile", value: "cl" },
  { label: "Paraguay", value: "py" },
  { label: "Bolivia", value: "bo" },
  { label: "Perú", value: "pe" },
  { label: "Colombia", value: "co" },
  { label: "Ecuador", value: "ec" },
  { label: "Venezuela", value: "ve" },
  { label: "México", value: "mx" },
  { label: "España", value: "es" },
  { label: "Francia", value: "fr" },
  { label: "Italia", value: "it" },
  { label: "Alemania", value: "de" },
]

// Simula un fetch a un backend con latencia de 500ms.
async function fakeSearchUsers(
  query: string
): Promise<ComboboxFieldOption[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const pool: ComboboxFieldOption[] = [
    { label: "Ada Lovelace", value: "ada" },
    { label: "Alan Turing", value: "alan" },
    { label: "Grace Hopper", value: "grace" },
    { label: "Linus Torvalds", value: "linus" },
    { label: "Dennis Ritchie", value: "dennis" },
    { label: "Margaret Hamilton", value: "margaret" },
    { label: "Donald Knuth", value: "donald" },
    { label: "Tim Berners-Lee", value: "tim" },
    { label: "Barbara Liskov", value: "barbara" },
    { label: "Ken Thompson", value: "ken" },
  ]
  const q = query.toLowerCase()
  return pool.filter((u) => u.label.toLowerCase().includes(q))
}

export default function ComboboxPage() {
  const [singleAsync, setSingleAsync] = React.useState<ComboboxFieldOption | null>(null)
  const [multiAsync, setMultiAsync] = React.useState<ComboboxFieldOption[]>([])

  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Combobox</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Input con búsqueda integrada que reemplaza al{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">Select</code>{" "}
          cuando se necesita filtrar listas largas, selección múltiple o carga
          asíncrona desde un backend.
        </p>
      </div>

      {/* Single sync */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Single — datos en memoria
        </h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <div className="max-w-xs space-y-1.5">
            <Label
              htmlFor="cb-framework"
              className="text-xs text-muted-foreground"
            >
              Framework
            </Label>
            <ComboboxField
              id="cb-framework"
              items={frameworks}
              placeholder="Buscar framework..."
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Filtra a medida que el usuario tipea. Botón clear visible al
          seleccionar.
        </p>
      </section>

      {/* Multiple sync */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Multiple — datos en memoria
        </h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <div className="max-w-md space-y-1.5">
            <Label htmlFor="cb-countries" className="text-xs text-muted-foreground">
              Países
            </Label>
            <ComboboxField
              id="cb-countries"
              multiple
              items={countries}
              placeholder="Selecciona uno o más países..."
              defaultValue={[countries[0], countries[2]]}
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Render como chips removibles. Backspace en input vacío borra el último
          chip.
        </p>
      </section>

      {/* Single async */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Single — async (controlado)
        </h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30 space-y-3">
          <div className="max-w-xs space-y-1.5">
            <Label htmlFor="cb-user-single" className="text-xs text-muted-foreground">
              Asignar revisor
            </Label>
            <AsyncComboboxField
              id="cb-user-single"
              loadOptions={fakeSearchUsers}
              value={singleAsync}
              onValueChange={setSingleAsync}
              placeholder="Buscar persona..."
              promptMessage="Escribe al menos un carácter."
              loadingMessage="Buscando personas..."
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Valor seleccionado:{" "}
            <code className="rounded bg-muted px-1 py-0.5">
              {singleAsync?.label ?? "ninguno"}
            </code>
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          Debounce 300ms · cancela peticiones en vuelo con AbortController · 500ms
          simulados de latencia.
        </p>
      </section>

      {/* Multiple async */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Multiple — async (controlado)
        </h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30 space-y-3">
          <div className="max-w-md space-y-1.5">
            <Label htmlFor="cb-user-multi" className="text-xs text-muted-foreground">
              Asignar varios revisores
            </Label>
            <AsyncComboboxField
              id="cb-user-multi"
              multiple
              loadOptions={fakeSearchUsers}
              value={multiAsync}
              onValueChange={setMultiAsync}
              placeholder="Buscar personas..."
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Seleccionados ({multiAsync.length}):{" "}
            <code className="rounded bg-muted px-1 py-0.5">
              {multiAsync.length === 0
                ? "ninguno"
                : multiAsync.map((o) => o.label).join(", ")}
            </code>
          </p>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Tamaños
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 p-6 rounded-xl border border-border bg-muted/30">
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Small</Label>
            <ComboboxField
              size="sm"
              items={frameworks}
              placeholder="Buscar framework..."
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Default</Label>
            <ComboboxField
              items={frameworks}
              placeholder="Buscar framework..."
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Large</Label>
            <ComboboxField
              size="lg"
              items={frameworks}
              placeholder="Buscar framework..."
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Sizes: <code className="rounded bg-muted px-1 py-0.5 text-xs">sm</code>{" "}
          (h-7) · <code className="rounded bg-muted px-1 py-0.5 text-xs">default</code>{" "}
          (h-[34px]) · <code className="rounded bg-muted px-1 py-0.5 text-xs">lg</code>{" "}
          (h-9). Mismo set que el <code className="rounded bg-muted px-1 py-0.5 text-xs">Select</code>.
        </p>
      </section>

      {/* Grouped options */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Grouped options
        </h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <div className="max-w-xs space-y-1.5">
            <Label htmlFor="cb-grouped" className="text-xs text-muted-foreground">
              Stack tecnológico
            </Label>
            <ComboboxField
              id="cb-grouped"
              items={groupedTechs}
              placeholder="Elegí una tecnología..."
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Pasá <code className="rounded bg-muted px-1 py-0.5 text-xs">items</code> como
          un array de <code className="rounded bg-muted px-1 py-0.5 text-xs">{"{ label, items }"}</code>{" "}
          y el componente arma los grupos automáticamente con sus headers.
        </p>
      </section>

      {/* Icon + sin chevron */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Con icon · sin chevron
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-6 rounded-xl border border-border bg-muted/30">
          <div className="space-y-1.5">
            <Label htmlFor="cb-search-left" className="text-xs text-muted-foreground">
              Single — icon izquierda, sin chevron
            </Label>
            <ComboboxField
              id="cb-search-left"
              items={frameworks}
              placeholder="Buscar..."
              startIcon={<SearchIcon />}
              showTrigger={false}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cb-search-right" className="text-xs text-muted-foreground">
              Single — icon derecha, sin chevron y sin clear
            </Label>
            <ComboboxField
              id="cb-search-right"
              items={frameworks}
              placeholder="Filtrar..."
              endIcon={<SearchIcon />}
              showTrigger={false}
              showClear={false}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cb-search-multi" className="text-xs text-muted-foreground">
              Multi — icon izquierda, sin chevron
            </Label>
            <ComboboxField
              id="cb-search-multi"
              multiple
              items={countries}
              placeholder="Filtrar países..."
              startIcon={<SearchIcon />}
              showTrigger={false}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cb-search-multi-async" className="text-xs text-muted-foreground">
              Multi async — icon izquierda, sin chevron
            </Label>
            <AsyncComboboxField
              id="cb-search-multi-async"
              multiple
              loadOptions={fakeSearchUsers}
              placeholder="Buscar personas..."
              startIcon={<SearchIcon />}
              showTrigger={false}
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Usá <code className="rounded bg-muted px-1 py-0.5 text-xs">startIcon</code>{" "}
          / <code className="rounded bg-muted px-1 py-0.5 text-xs">endIcon</code> para los
          íconos y <code className="rounded bg-muted px-1 py-0.5 text-xs">showTrigger=false</code>{" "}
          / <code className="rounded bg-muted px-1 py-0.5 text-xs">showClear=false</code>{" "}
          para esconder los botones nativos. Funciona igual en single, multi y multi async.
        </p>
      </section>

      {/* States */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Estados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-6 rounded-xl border border-border bg-muted/30">
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Disabled</Label>
            <ComboboxField
              items={frameworks}
              placeholder="No disponible"
              disabled
            />
          </div>

          <div className="space-y-1.5">
            <Label required className="text-xs text-muted-foreground">
              Inválido
            </Label>
            <ComboboxField
              items={frameworks}
              placeholder="Campo requerido"
              aria-invalid
            />
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">
              Multiple disabled
            </Label>
            <ComboboxField
              multiple
              items={countries}
              placeholder="No disponible"
              defaultValue={[countries[0]]}
              disabled
            />
          </div>

          <div className="space-y-1.5">
            <Label required className="text-xs text-muted-foreground">
              Multiple inválido
            </Label>
            <ComboboxField
              multiple
              items={countries}
              placeholder="Selecciona al menos uno"
              aria-invalid
            />
          </div>
        </div>
      </section>
    </div>
  )
}
