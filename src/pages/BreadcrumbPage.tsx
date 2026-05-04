import { SlashIcon } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'

export default function BreadcrumbsPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Breadcrumb</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Navigation path showing the user's current location within a hierarchy.
        </p>
      </div>

      {/* Default */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Default</h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Componentes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <p className="text-xs text-muted-foreground">
          Items en <code>muted-foreground</code> · página actual en <code>foreground</code>
        </p>
      </section>

      {/* Primary variant — matches the screenshot */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Primary variant</h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <Breadcrumb variant="primary">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Ordenes de trabajo</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Editar</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>2026-05-04</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <p className="text-xs text-muted-foreground">
          <code>variant="primary"</code> — la página actual (<code>BreadcrumbPage</code>) se tinta en <code>primary</code>.
        </p>
      </section>

      {/* Active link via prop */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Active link (prop)</h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" active>
                  Componentes
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <p className="text-xs text-muted-foreground">
          <code>{'<BreadcrumbLink active>'}</code> — útil para resaltar un link que matchea la ruta actual sin que sea el último item.
        </p>
      </section>

      {/* With ellipsis */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Collapsed</h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Componentes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <p className="text-xs text-muted-foreground">
          Para rutas profundas, <code>BreadcrumbEllipsis</code> reemplaza items intermedios.
        </p>
      </section>

      {/* Custom separator */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Custom separator</h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Componentes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <p className="text-xs text-muted-foreground">
          El separador acepta <code>children</code>; podés pasar cualquier ícono.
        </p>
      </section>
    </div>
  )
}
