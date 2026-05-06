# Inventario de Componentes — MyIntelli Design System

Todos los componentes se importan desde `@/components/ui/` o `@/components/common/`.

---

## Button

**Import:** `import { Button } from "@/components/ui/button"`

### Variantes (`variant`)
| Variante | Descripción |
|---|---|
| `default` | Botón primario con fondo `--primary` |
| `destructive` | Acción destructiva, fondo `--destructive` |
| `success` | Confirmación, fondo `--success` |
| `outline` | Borde con fondo transparente |
| `secondary` | Fondo `--secondary` |
| `ghost` | Sin fondo, solo hover |
| `link` | Apariencia de enlace con subrayado |
| `tab` | Borde primario sin relleno (toggle inactivo) |
| `tab-active` | Borde + relleno primario (toggle activo) |

### Tamaños (`size`)
| Tamaño | Altura | Uso |
|---|---|---|
| `default` | `h-8` | Estándar |
| `sm` | `h-7` | Compacto |
| `lg` | `h-10` | Prominente |
| `icon` | `size-8` | Solo ícono |
| `icon-lg` | `size-10` | Ícono grande |

```tsx
<Button variant="default" size="default">Guardar</Button>
<Button variant="destructive">Eliminar</Button>
<Button variant="outline" size="sm">Cancelar</Button>
<Button variant="ghost" size="icon"><PlusIcon /></Button>
<Button variant="tab">Inactivo</Button>
<Button variant="tab-active">Activo</Button>
```

---

## ButtonGroup

**Import:** `import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group"`

Agrupa botones eliminando los radii intermedios para formar una unidad visual.

### Orientaciones (`orientation`)
- `horizontal` (default) — fila
- `vertical` — columna

```tsx
<ButtonGroup>
  <Button variant="outline">Anterior</Button>
  <ButtonGroupSeparator />
  <Button variant="outline">Siguiente</Button>
</ButtonGroup>

<ButtonGroup orientation="vertical">
  <Button variant="outline">Opción A</Button>
  <Button variant="outline">Opción B</Button>
</ButtonGroup>
```

---

## Badge

**Import:** `import { Badge } from "@/components/ui/badge"`

Ancho fijo de `w-44`, altura `h-7`, `rounded-lg`. Se usa para estados semánticos de registros.

### Variantes de estado (semánticas)
| Variante | Fondo | Texto | Uso típico |
|---|---|---|---|
| `published` | `#EFF9EF` | `#5EC85E` | Publicado |
| `pending` | `#FEFAE6` | `#F1CC05` | Pendiente |
| `incomplete` | `#FFEEEE` | `#FD5656` | Incompleto |
| `complete` | `#EDF7F9` | `#33B7C9` | Completo |
| `surpassed` | `#FFF0EC` | `#FF885C` | Superado |
| `notStarted` | `#E9FCFC` | `#00D7D7` | No iniciado |
| `unpublished` | `#DDF0FF` | `#55ADFF` | No publicado |
| `finalized` | `#E8EBF2` | `#5C6696` | Finalizado |
| `petition` | `#E5F0FE` | `#2485F4` | Petición |
| `active` | `#EFF1FA` | `#6176CE` | Activo |
| `aprobed` | `#DFF4DF` | `#5EC85E` | Aprobado |
| `rejected` | `#FFEBEB` | `#FD5656` | Rechazado |

### Variantes base
`default`, `secondary`, `destructive`, `outline`, `ghost`, `link`

```tsx
<Badge variant="published">Publicado</Badge>
<Badge variant="pending">Pendiente</Badge>
<Badge variant="rejected">Rechazado</Badge>
```

---

## Text

**Import:** `import { Text } from "@/components/ui/text"`

Componente tipográfico unificado. Renderiza el elemento HTML semántico correcto según la variante.

```tsx
<Text variant="h1">Título principal</Text>
<Text variant="h3">Sección</Text>
<Text variant="p">Párrafo de contenido con más texto.</Text>
<Text variant="small">Nota al pie</Text>
<Text variant="span-table">Dato en tabla</Text>
// Sobrescribir elemento HTML:
<Text variant="h2" as="div">Heading visual en un div</Text>
```

---

## Input

**Import:** `import { Input } from "@/components/ui/input"`

Input de texto base. `h-8.5`, `w-[300]` por defecto, `rounded-lg`, borde `border-2`. Focus cambia borde a `--primary`.

```tsx
<Input placeholder="Buscar..." />
<Input type="email" disabled />
<Input aria-invalid={true} />  {/* estado de error */}
```

**Siempre usar con `Field` para labels y mensajes de error.**

---

## Input Phone

**Import:** `import { InputPhone } from "@/components/ui/input-phone"`

Variante de Input con selector de código de país integrado.

```tsx
<InputPhone placeholder="Número de teléfono" />
```

---

## Select

**Import:** `import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel } from "@/components/ui/select"`

Basado en Radix Select. El trigger tiene variante y tamaño propios.

### Tamaños del trigger
- `sm` — `h-7`
- `default` — `h-[34px]`
- `lg` — `h-9`

```tsx
<Select>
  <SelectTrigger size="default">
    <SelectValue placeholder="Seleccionar..." />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Categoría</SelectLabel>
      <SelectItem value="a">Opción A</SelectItem>
      <SelectItem value="b">Opción B</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

---

## Field

**Import:** `import { Field, FieldLabel, FieldDescription, FieldError, FieldGroup, FieldSet, FieldTitle } from "@/components/ui/field"`

Sistema de composición para formularios. Maneja layout, labels, descripciones y errores.

### Orientaciones (`orientation`)
- `vertical` (default) — label encima del input
- `horizontal` — label a la izquierda
- `responsive` — vertical en mobile, horizontal en desktop

```tsx
// Uso estándar
<Field>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" />
  <FieldError>El email es requerido</FieldError>
</Field>

// Con descripción y validación desde array de errores
<Field>
  <FieldLabel>Contraseña</FieldLabel>
  <Input type="password" aria-invalid={true} />
  <FieldDescription>Mínimo 8 caracteres</FieldDescription>
  <FieldError errors={[{ message: "Demasiado corta" }]} />
</Field>

// Grupo de campos
<FieldGroup>
  <Field>...</Field>
  <Field>...</Field>
</FieldGroup>
```

---

## Card

**Import:** `import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "@/components/ui/card"`

### Variantes (`variant`)
| Variante | Apariencia |
|---|---|
| `default` | Blanco + borde `--border` |
| `muted` | Fondo `--muted` |
| `primary` | Fondo `--primary-light` + borde primary/30 |
| `outline` | Blanco + borde `--secondary` |
| `ghost` | Transparente |
| `borderless` | Blanco sin borde |

### Tamaños (`size`)
- `default` — padding `py-4`, gap `gap-4`
- `sm` — padding `py-3`, gap `gap-3`

```tsx
<Card variant="default">
  <CardHeader>
    <CardTitle>Título de la card</CardTitle>
    <CardDescription>Descripción opcional</CardDescription>
    <CardAction><Button variant="ghost" size="icon"><MoreVertical /></Button></CardAction>
  </CardHeader>
  <CardContent>Contenido principal</CardContent>
  <CardFooter>Pie de la card</CardFooter>
</Card>
```

---

## Avatar

**Import:** `import { Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarBadge } from "@/components/ui/avatar"`

### Tamaños (`size`)
| Tamaño | Dimensión |
|---|---|
| `sm` | 24px |
| `default` | 32px |
| `lg` | 40px |
| `xl` | 56px |
| `xxl` | 80px |
| `profile` | 125px + borde primary |

```tsx
// Avatar individual
<Avatar size="lg">
  <AvatarImage src="/foto.jpg" alt="Usuario" />
  <AvatarFallback>AB</AvatarFallback>
  <AvatarBadge /> {/* indicador de estado online */}
</Avatar>

// Grupo de avatares
<AvatarGroup>
  <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
  <AvatarGroupCount>+3</AvatarGroupCount>
</AvatarGroup>
```

---

## Dialog (Modal)

**Import:** `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"`

Basado en Radix Dialog. El `DialogContent` incluye botón de cierre por defecto (`showCloseButton={true}`).

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Abrir modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirmar acción</DialogTitle>
      <DialogDescription>Esta acción no se puede deshacer.</DialogDescription>
    </DialogHeader>
    <p>Contenido del modal</p>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancelar</Button>
      </DialogClose>
      <Button variant="destructive">Eliminar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## Checkbox

**Import:** `import { Checkbox } from "@/components/ui/checkbox"`

```tsx
<Checkbox id="terms" />
<label htmlFor="terms">Acepto los términos</label>

// Con Field:
<Field>
  <FieldLabel>
    <Checkbox /> Recordarme
  </FieldLabel>
</Field>
```

---

## Switch

**Import:** `import { Switch } from "@/components/ui/switch"`

```tsx
<Switch />
<Switch defaultChecked />
<Switch disabled />
```

---

## Tooltip

**Import:** `import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"`

Requiere `TooltipProvider` en el árbol (ya incluido en `AppLayout`).

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon"><InfoIcon /></Button>
  </TooltipTrigger>
  <TooltipContent>Información adicional</TooltipContent>
</Tooltip>
```

---

## Breadcrumb

**Import:** `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"`

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/componentes">Componentes</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Button</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

## Table (primitivos)

**Import:** `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption, TableFooter } from "@/components/ui/table"`

Para tablas con datos dinámicos, usar `DataTable` en su lugar.

---

## DataTable

**Import:** `import { DataTable } from "@/components/common/DataTable"`

Wrapper sobre TanStack Table. Acepta `columns` tipadas con `ColumnDef`.

```tsx
const columns: ColumnDef<Usuario>[] = [
  { accessorKey: "nombre", header: "Nombre" },
  { accessorKey: "email", header: "Email" },
]

<DataTable
  columns={columns}
  data={usuarios}
  caption="Lista de usuarios"
  enableRowSelection={true}
/>
```

---

## ToolbarButton

**Import:** `import { ToolbarButton } from "@/components/common/ToolbarButton"`

Botón de barra de herramientas con ícono. Variante compacta para toolbars de tablas.

---

## Separator

**Import:** `import { Separator } from "@/components/ui/separator"`

```tsx
<Separator />                          {/* horizontal */}
<Separator orientation="vertical" />   {/* vertical */}
```

---

## Label

**Import:** `import { Label } from "@/components/ui/label"`

Base del sistema de labels. Normalmente usar `FieldLabel` en formularios.

```tsx
<Label htmlFor="input-id">Nombre</Label>
```
