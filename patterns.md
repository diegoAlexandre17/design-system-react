# Patrones de Composición — MyIntelli Design System

Patrones recurrentes del sistema para construir interfaces consistentes.

---

## 1. Formulario estándar

Usar `FieldGroup` + `Field` para todos los formularios. El componente `Field` maneja el layout, `FieldLabel` el label, `FieldError` los mensajes de validación.

```tsx
import { FieldGroup, Field, FieldLabel, FieldError, FieldDescription } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

function FormularioUsuario() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nuevo usuario</CardTitle>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="nombre">Nombre completo</FieldLabel>
            <Input id="nombre" placeholder="Ej: Ana García" />
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" placeholder="ana@empresa.com" />
            <FieldDescription>Recibirá las notificaciones aquí.</FieldDescription>
          </Field>

          <Field>
            <FieldLabel>Rol</FieldLabel>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar rol..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Administrador</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="viewer">Visualizador</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Cancelar</Button>
        <Button variant="default">Guardar</Button>
      </CardFooter>
    </Card>
  )
}
```

**Reglas:**
- Un `Field` por control
- `aria-invalid={true}` en el input cuando hay error, activa estilos automáticos
- `FieldError` con prop `errors` para errores de react-hook-form: `errors={[formState.errors.campo]}`

---

## 2. Tabla con toolbar

Patrón para listas de datos con acciones sobre filas.

```tsx
import { DataTable } from "@/components/common/DataTable"
import { ToolbarButton } from "@/components/common/ToolbarButton"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import type { ColumnDef } from "@tanstack/react-table"

interface Registro {
  id: string
  nombre: string
  estado: "published" | "pending" | "rejected"
}

const columns: ColumnDef<Registro>[] = [
  {
    accessorKey: "nombre",
    header: "Nombre",
    cell: ({ row }) => (
      <Text variant="span-table">{row.getValue("nombre")}</Text>
    ),
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => (
      <Badge variant={row.getValue("estado")}>
        {row.getValue("estado")}
      </Badge>
    ),
  },
]

function TablaRegistros({ data }: { data: Registro[] }) {
  return (
    <Card>
      {/* Toolbar */}
      <CardHeader className="flex-row items-center justify-between">
        <Input placeholder="Buscar..." className="w-56" />
        <div className="flex gap-2">
          <ToolbarButton icon={<FilterIcon />} label="Filtrar" />
          <Button size="sm">Nuevo</Button>
        </div>
      </CardHeader>

      <CardContent>
        <DataTable
          columns={columns}
          data={data}
          enableRowSelection
        />
      </CardContent>
    </Card>
  )
}
```

---

## 3. Card de estadística / KPI

```tsx
<Card variant="default" size="sm">
  <CardHeader>
    <CardTitle>Total usuarios</CardTitle>
    <CardAction>
      <Badge variant="published">+12%</Badge>
    </CardAction>
  </CardHeader>
  <CardContent>
    <Text variant="h2">1,284</Text>
    <Text variant="small" className="text-muted-foreground">
      vs. mes anterior
    </Text>
  </CardContent>
</Card>
```

---

## 4. Modal de confirmación destructiva

```tsx
function ModalEliminar({ onConfirm }: { onConfirm: () => void }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size="sm">Eliminar</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>¿Eliminar este registro?</DialogTitle>
          <DialogDescription>
            Esta acción es permanente y no se puede deshacer.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button variant="destructive" onClick={onConfirm}>
            Eliminar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

---

## 5. Toggle de tabs con ButtonGroup

Usar `variant="tab"` y `variant="tab-active"` para construir grupos de pestañas inline sin componente Tab propio.

```tsx
function TabsInline({ activeTab, onChange }) {
  const tabs = ["Activos", "Pendientes", "Archivados"]
  return (
    <ButtonGroup>
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant={activeTab === tab ? "tab-active" : "tab"}
          size="sm"
          onClick={() => onChange(tab)}
        >
          {tab}
        </Button>
      ))}
    </ButtonGroup>
  )
}
```

---

## 6. Header de página con breadcrumb

```tsx
function PageHeader({ title, breadcrumbs }) {
  return (
    <div className="flex flex-col gap-1 mb-6">
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((crumb, i) => (
            <React.Fragment key={crumb.href}>
              <BreadcrumbItem>
                {i < breadcrumbs.length - 1 ? (
                  <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {i < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <Text variant="h2">{title}</Text>
    </div>
  )
}
```

---

## 7. Avatar con nombre (patrón de usuario)

```tsx
function UserCell({ nombre, email, avatarUrl }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="default">
        <AvatarImage src={avatarUrl} alt={nombre} />
        <AvatarFallback>
          {nombre.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <Text variant="span-13" className="font-medium text-foreground">{nombre}</Text>
        <Text variant="span-table" className="text-muted-foreground">{email}</Text>
      </div>
    </div>
  )
}
```

---

## 8. Campo de búsqueda con acción

```tsx
<ButtonGroup>
  <Input placeholder="Buscar registros..." className="rounded-r-none" />
  <Button variant="default" size="icon">
    <SearchIcon />
  </Button>
</ButtonGroup>
```

---

## Convenciones generales

- **Jerarquía visual:** `Card` > `CardHeader/CardContent` para toda sección de contenido con borde.
- **Estados en tablas:** siempre `Badge` semántico, nunca texto plano de color.
- **Acciones secundarias:** `Button variant="ghost"` o `variant="outline"`, nunca dos botones `default` juntos.
- **Errores de formulario:** `aria-invalid` en el input + `FieldError` visible — no solo color.
- **Loading states:** `disabled` en botones + `opacity-50` es suficiente para la mayoría de casos.
- **Texto en tablas:** usar `Text variant="span-table"` (12px) para datos de celda, no `text-sm` libre.
