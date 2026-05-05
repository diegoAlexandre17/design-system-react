import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'

export default function SelectPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Select</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Displays a list of options for the user to pick from—triggered by a button.
        </p>
      </div>

      {/* Default — replica de la captura */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Default</h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <div className="max-w-xs space-y-1.5">
            <Label htmlFor="tipo-doc" required className="text-xs text-muted-foreground">
              Tipo de Documento
            </Label>
            <Select>
              <SelectTrigger id="tipo-doc">
                <SelectValue placeholder="Cédula" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cedula">Cédula</SelectItem>
                <SelectItem value="pasaporte">Pasaporte</SelectItem>
                <SelectItem value="dni">DNI</SelectItem>
                <SelectItem value="rut">RUT</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          h-[34px] · text-xs · border-secondary (default) · border-accent (hover) · border-primary (focus / open)
        </p>
      </section>

      {/* States */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">States</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-6 rounded-xl border border-border bg-muted/30">
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Placeholder</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Opción 1</SelectItem>
                <SelectItem value="2">Opción 2</SelectItem>
                <SelectItem value="3">Opción 3</SelectItem>
                <SelectItem value="4">Opción 4</SelectItem>
                <SelectItem value="5">Opción 5</SelectItem>
                <SelectItem value="6">Opción 6</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Con valor</Label>
            <Select defaultValue="cedula">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cedula">Cédula</SelectItem>
                <SelectItem value="pasaporte">Pasaporte</SelectItem>
                <SelectItem value="dni">DNI</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Disabled</Label>
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="No disponible" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Opción 1</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label required className="text-xs text-muted-foreground">
              Inválido
            </Label>
            <Select>
              <SelectTrigger aria-invalid="true">
                <SelectValue placeholder="Campo requerido" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Opción 1</SelectItem>
                <SelectItem value="2">Opción 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Sizes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-xl border border-border bg-muted/30">
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">sm (28px)</Label>
            <Select>
              <SelectTrigger size="sm">
                <SelectValue placeholder="Pequeño" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Opción 1</SelectItem>
                <SelectItem value="2">Opción 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">default (34px)</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Opción 1</SelectItem>
                <SelectItem value="2">Opción 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">lg (36px)</Label>
            <Select>
              <SelectTrigger size="lg">
                <SelectValue placeholder="Grande" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Opción 1</SelectItem>
                <SelectItem value="2">Opción 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Grouped + separator */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Grouped options</h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <div className="max-w-xs space-y-1.5">
            <Label className="text-xs text-muted-foreground">País</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar país" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>América</SelectLabel>
                  <SelectItem value="ar">Argentina</SelectItem>
                  <SelectItem value="uy">Uruguay</SelectItem>
                  <SelectItem value="br">Brasil</SelectItem>
                  <SelectItem value="cl">Chile</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Europa</SelectLabel>
                  <SelectItem value="es">España</SelectItem>
                  <SelectItem value="fr">Francia</SelectItem>
                  <SelectItem value="it">Italia</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
    </div>
  )
}
