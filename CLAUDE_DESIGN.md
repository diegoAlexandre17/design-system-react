# 🤖 Guía para Claude Design

Esta es la **guía principal** para usar este sistema de diseño con Claude Design.

## 🎯 Componentes Disponibles

### avatar
```tsx
<avatar 
  size="default" | "sm" | "lg" | "xl" | "xxl" | "profile"
/>
```

**Tamaños:**
- `default`
- `sm`
- `lg`
- `xl`
- `xxl`
- `profile`

**Ejemplo:**
```tsx
<avatar />
```

---

### badge
```tsx
<badge 
  variant="default"
/>
```

**Usos comunes:**
- `default`

**Ejemplo:**
```tsx
<badge variant="default" />
```

---

### breadcrumb
```tsx
<breadcrumb>
  Texto del breadcrumb
</breadcrumb>
```

**Ejemplo:**
```tsx
<breadcrumb />
```

---

### button
```tsx
<button 
  variant="default" | "destructive" | "success" | "outline" | "hover" | "hover" | "secondary" | "ghost" | "hover" | "hover" | "link" | "hover" | "tab" | "tab-active"
  size="default"
/>
```

**Variantes:**
- `default`
- `destructive`
- `success`
- `outline`
- `hover`
- `hover`
- `secondary`
- `ghost`
- `hover`
- `hover`
- `link`
- `hover`
- `tab`
- `tab-active`

**Tamaños:**
- `default`

**Ejemplo:**
```tsx
<button variant="default" size="default" />
```

---

### button-group
```tsx
<button-group />
```

**Ejemplo:**
```tsx
<button-group />
```

---

### card
```tsx
<card 
  variant="default"
  size="default" | "sm"
/>
```

**Variantes:**
- `default`

**Tamaños:**
- `default`
- `sm`

**Ejemplo:**
```tsx
<card variant="default" size="default" />
```

---

### ChartsIconPage
```tsx
<ChartsIconPage />
```

**Ejemplo:**
```tsx
<ChartsIconPage />
```

---

### ChartsPage
```tsx
<ChartsPage />
```

**Ejemplo:**
```tsx
<ChartsPage />
```

---

### checkbox
```tsx
<checkbox />
```

**Ejemplo:**
```tsx
<checkbox />
```

---

### combobox
```tsx
<combobox />
```

**Ejemplo:**
```tsx
<combobox />
```

---

### DataTable
```tsx
<DataTable>
  Texto del datatable
</DataTable>
```

**Ejemplo:**
```tsx
<DataTable />
```

---

### dialog
```tsx
<dialog />
```

**Ejemplo:**
```tsx
<dialog />
```

---

### EmployeeNameInfo
```tsx
<EmployeeNameInfo />
```

**Ejemplo:**
```tsx
<EmployeeNameInfo />
```

---

### field
```tsx
<field />
```

**Ejemplo:**
```tsx
<field />
```

---

### IconsChartCard
```tsx
<IconsChartCard />
```

**Ejemplo:**
```tsx
<IconsChartCard />
```

---

### IconsPage
```tsx
<IconsPage />
```

**Ejemplo:**
```tsx
<IconsPage />
```

---

### input
```tsx
<input />
```

**Ejemplo:**
```tsx
<input />
```

---

### input-group
```tsx
<input-group />
```

**Ejemplo:**
```tsx
<input-group />
```

---

### input-phone
```tsx
<input-phone />
```

**Ejemplo:**
```tsx
<input-phone />
```

---

### label
```tsx
<label />
```

**Ejemplo:**
```tsx
<label />
```

---

### PersonCharts
```tsx
<PersonCharts />
```

**Ejemplo:**
```tsx
<PersonCharts />
```

---

### PieChart
```tsx
<PieChart />
```

**Ejemplo:**
```tsx
<PieChart />
```

---

### PieChartApex
```tsx
<PieChartApex />
```

**Ejemplo:**
```tsx
<PieChartApex />
```

---

### RingsChart
```tsx
<RingsChart />
```

**Ejemplo:**
```tsx
<RingsChart />
```

---

### RingsChartApex
```tsx
<RingsChartApex />
```

**Ejemplo:**
```tsx
<RingsChartApex />
```

---

### select
```tsx
<select />
```

**Ejemplo:**
```tsx
<select />
```

---

### separator
```tsx
<separator />
```

**Ejemplo:**
```tsx
<separator />
```

---

### StarIcon
```tsx
<StarIcon />
```

**Ejemplo:**
```tsx
<StarIcon />
```

---

### switch
```tsx
<switch />
```

**Ejemplo:**
```tsx
<switch />
```

---

### table
```tsx
<table />
```

**Ejemplo:**
```tsx
<table />
```

---

### text
```tsx
<text />
```

**Ejemplo:**
```tsx
<text />
```

---

### textarea
```tsx
<textarea />
```

**Ejemplo:**
```tsx
<textarea />
```

---

### ToolbarButton
```tsx
<ToolbarButton />
```

**Ejemplo:**
```tsx
<ToolbarButton />
```

---

### tooltip
```tsx
<tooltip />
```

**Ejemplo:**
```tsx
<tooltip />
```

---

### TrashIcon
```tsx
<TrashIcon />
```

**Ejemplo:**
```tsx
<TrashIcon />
```

---

## 🎨 Tokens de Diseño

### Other

```css
--color-primary-light: var(--primary-light);
--color-primary: var(--primary);
--color-success: var(--success);
--color-success-light: var(--success-light);
--color-success-foreground: var(--success-foreground);
--color-green: var(--green);
--color-black-light: var(--black-light);
--color-gray-medium: var(--gray-medium);
--color-gray-light: var(--gray-light);
--color-background: var(--background);
--color-foreground: var(--foreground);
--color-card: var(--card);
--color-card-foreground: var(--card-foreground);
--color-popover: var(--popover);
--color-popover-foreground: var(--popover-foreground);
--color-primary-light: var(--primary-light);
--color-primary: var(--primary);
--color-primary-foreground: var(--primary-foreground);
--color-secondary: var(--secondary);
--color-secondary-light: var(--secondary-light);
--color-secondary-foreground: var(--secondary-foreground);
--color-muted: var(--muted);
--color-muted-foreground: var(--muted-foreground);
--color-accent: var(--accent);
--color-accent-foreground: var(--accent-foreground);
--color-destructive: var(--destructive);
--color-destructive-light: var(--destructive-light);
--color-destructive-medium: var(--destructive-medium);
--color-destructive-foreground: var(--destructive-foreground);
--color-warning: var(--warning);
--color-warning-light: var(--warning-light);
--color-warning-foreground: var(--warning-foreground);
--color-border: var(--border);
--color-chip-background: var(--chip-background);
--color-input: var(--input);
--color-ring: var(--ring);
--color-background-gray: var(--background-gray);
--color-success-badge: var(--success-badge);
--color-warning-badge: var(--warning-badge);
--color-error-badge: var(--error-badge);
--color-info-badge: var(--info-badge);
--color-orange-badge: var(--orange-badge);
--color-cyan-badge: var(--cyan-badge);
--color-sky-badge: var(--sky-badge);
--color-neutral-badge: var(--neutral-badge);
--color-blue-badge: var(--blue-badge);
--color-indigo-badge: var(--indigo-badge);
--color-mint-badge: var(--mint-badge);
--color-rose-badge: var(--rose-badge);
--color-purple-badge: var(--purple-badge);
--color-success-badge-text: var(--success-badge-text);
--color-warning-badge-text: var(--warning-badge-text);
--color-error-badge-text: var(--error-badge-text);
--color-info-badge-text: var(--info-badge-text);
--color-orange-badge-text: var(--orange-badge-text);
--color-cyan-badge-text: var(--cyan-badge-text);
--color-sky-badge-text: var(--sky-badge-text);
--color-neutral-badge-text: var(--neutral-badge-text);
--color-blue-badge-text: var(--blue-badge-text);
--color-indigo-badge-text: var(--indigo-badge-text);
--color-purple-badge-text: var(--purple-badge-text);
--background: #e9f3fe;
--background-gray: #eff6fe;
--foreground: #5d5d5d;
--card: #ffffff;
--card-foreground: #0a0a0a;
--popover: #ffffff;
--popover-foreground: #0a0a0a;
--primary: #2585f4;
--primary-light: #ecf4fe;
--primary-foreground: #fafafa;
--secondary: #a7a7a7;
--secondary-light: #dfdfdf;
--secondary-foreground: #171717;
--muted: #f5f5f5;
--muted-foreground: #737373;
--accent: #f5f5f5;
--accent-foreground: #171717;
--destructive: #fd5656;
--destructive-light: #ffdddd;
--destructive-medium: #FFBDAD;
--destructive-foreground: #fafafa;
--success: #5fc85f;
--success-light: #DFF4DF;
--green: #53C18A;
--success-foreground: #fafafa;
--warning: #fc9245;
--warning-light: #ffefe3;
--warning-foreground: #fafafa;
--border: #e5e5e5;
--input: #e5e5e5;
--ring: #0a0a0a;
--chip-background: #E6E6E6;
--black-light: #333;
--gray-medium: #808080;
--gray-light: #999999;
--radius: 0.5rem;
--chart-1: #e76e50;
--chart-2: #2a9d90;
--chart-3: #274754;
--success-badge: #EFF9EF;
--warning-badge: #FEFAE6;
--error-badge: #FFEEEE;
--info-badge: #EDF7F9;
--orange-badge: #FFF0EC;
--cyan-badge: #E9FCFC;
--sky-badge: #DDF0FF;
--neutral-badge: #E8EBF2;
--blue-badge: #E5F0FE;
--indigo-badge: #EFF1FA;
--mint-badge: #DFF4DF;
--rose-badge: #FFEBEB;
--purple-badge: #B66DFF;
--success-badge-text: #5EC85E;
--warning-badge-text: #F1CC05;
--error-badge-text: #FD5656;
--info-badge-text: #33B7C9;
--orange-badge-text: #FF885C;
--cyan-badge-text: #00D7D7;
--sky-badge-text: #55ADFF;
--neutral-badge-text: #5C6696;
--blue-badge-text: #2485F4;
--indigo-badge-text: #6176CE;
--purple-badge-text: #B66DFF;
--background: #0a0a0a;
--foreground: #fafafa;
--card: #0a0a0a;
--card-foreground: #fafafa;
--popover: #0a0a0a;
--popover-foreground: #fafafa;
--primary: #1d6cc6;
--primary-light: #ecf4fe;
--primary-foreground: #fafafa;
--secondary: #a7a7a7;
--secondary-foreground: #fafafa;
--muted: #262626;
--muted-foreground: #a3a3a3;
--accent: #262626;
--accent-foreground: #fafafa;
--destructive: #fd5656;
--destructive-foreground: #fafafa;
--success: #1b9849;
--success-foreground: #fafafa;
--warning: #f37216;
--warning-foreground: #171717;
--border: #262626;
--input: #262626;
--ring: #D4D4D4;
--gray-light: #999999;
--chart-1: #2662D9;
--chart-2: #2EB88A;
--chart-3: #E88C30;
--chart-4: #AF57DB;
--chart-5: #E23670;
```

## 📐 Patrones de Layout

### Container
Ancho máximo centrado con padding lateral:

```tsx
<div className="container">
  {/* Contenido se mantiene dentro de 1200px max */}
</div>
```

**Breakpoints:**
- Mobile: 100% ancho (padding 16px)
- Tablet: 768px
- Desktop: 1024px
- Large: 1200px max

### Grid System
Sistema de 12 columnas:

```tsx
<div className="grid grid-cols-12 gap-md">
  <div className="col-span-6">Mitad</div>
  <div className="col-span-6">Mitad</div>
</div>

<div className="grid grid-cols-12 gap-md">
  <div className="col-span-4">1/3</div>
  <div className="col-span-4">1/3</div>
  <div className="col-span-4">1/3</div>
</div>
```

### Flexbox
```tsx
{/* Centrado horizontal y vertical */}
<div className="flex items-center justify-center">
  <Button>Centrado</Button>
</div>

{/* Espacio entre elementos */}
<div className="flex justify-between items-center">
  <h2>Título</h2>
  <Button>Acción</Button>
</div>

{/* Stack vertical con gap */}
<div className="flex flex-col gap-md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
</div>
```

---

## 🎯 Patrones Comunes

### Formulario de Login
```tsx
<Card padding="lg" shadow>
  <h2 className="text-2xl font-bold mb-lg">Iniciar Sesión</h2>
  
  <div className="flex flex-col gap-md">
    <Input 
      type="email" 
      placeholder="Correo electrónico"
    />
    
    <Input 
      type="password" 
      placeholder="Contraseña"
    />
    
    <Button variant="primary" size="md">
      Ingresar
    </Button>
    
    <Button variant="ghost" size="sm">
      ¿Olvidaste tu contraseña?
    </Button>
  </div>
</Card>
```

### Dashboard Card con Métrica
```tsx
<Card padding="md" shadow>
  <div className="flex justify-between items-start">
    <div>
      <p className="text-sm text-muted">Usuarios Activos</p>
      <h3 className="text-3xl font-bold">2,458</h3>
    </div>
    <Badge variant="success">+12%</Badge>
  </div>
  <p className="text-xs text-muted mt-sm">vs. mes anterior</p>
</Card>
```

### Navbar
```tsx
<nav className="flex justify-between items-center p-md border-b">
  <div className="flex items-center gap-lg">
    <h1 className="text-xl font-bold">Logo</h1>
    <Button variant="ghost" size="sm">Inicio</Button>
    <Button variant="ghost" size="sm">Productos</Button>
    <Button variant="ghost" size="sm">Contacto</Button>
  </div>
  
  <div className="flex items-center gap-sm">
    <Button variant="secondary" size="sm">Login</Button>
    <Button variant="primary" size="sm">Registro</Button>
  </div>
</nav>
```

### Hero Section
```tsx
<section className="container text-center py-3xl">
  <h1 className="text-4xl font-bold mb-md">
    Construye productos increíbles
  </h1>
  
  <p className="text-lg text-muted mb-xl max-w-2xl mx-auto">
    El mejor sistema de diseño para crear aplicaciones modernas
    rápidamente.
  </p>
  
  <div className="flex gap-md justify-center">
    <Button variant="primary" size="lg">Comenzar gratis</Button>
    <Button variant="secondary" size="lg">Ver demo</Button>
  </div>
</section>
```

---

## 📂 Ejemplos Completos

Ver archivos de ejemplo para implementaciones completas:

1. **AvatarPage.tsx** - AvatarPage
2. **BadgePage.tsx** - BadgePage
3. **BreadcrumbPage.tsx** - BreadcrumbPage
4. **ButtonsPage.tsx** - ButtonsPage
5. **CardPage.tsx** - CardPage
6. **ChartsIconPage.tsx** - ChartsIconPage
7. **ChartsPage.tsx** - ChartsPage
8. **CheckBoxPage.tsx** - CheckBoxPage
9. **ColorsPage.tsx** - ColorsPage
10. **ComboboxPage.tsx** - ComboboxPage
11. **ComponentsPage.tsx** - ComponentsPage
12. **IconsPage.tsx** - IconsPage
13. **InputPage.tsx** - InputPage
14. **InputPhonePage.tsx** - InputPhonePage
15. **ModalPage.tsx** - ModalPage
16. **PersonCharts.tsx** - PersonCharts
17. **PersonTable.tsx** - PersonTable
18. **PersonsPage.tsx** - PersonsPage
19. **PersonsPage.tsx** - PersonsPage
20. **SelectPage.tsx** - SelectPage
21. **SwitchPage.tsx** - SwitchPage
22. **TablePage.tsx** - TablePage
23. **TextPage.tsx** - TextPage
24. **TooltipPage.tsx** - TooltipPage

### AvatarPage

> `src/pages/AvatarPage.tsx`

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
  AvatarGroup,
} from "@/components/ui/avatar";
import { CalendarIcon } from "lucide-react";

export default function AvatarPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Avatar</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>
      </div>

      {/* Profile */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Profile
        </h2>
        <div className="flex items-end gap-6 p-6 rounded-xl border border-border bg-muted/30">
          <Avatar size="profile">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
            <AvatarBadge />
          </Avatar>
          <Avatar size="profile">
            <AvatarFallback>DG</AvatarFallback>
            <AvatarBadge />
          </Avatar>
        </div>
        <p className="text-xs text-muted-foreground">
          profile (125px) — ideal para páginas de perfil de usuario
        </p>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Sizes
        </h2>
        <div className="flex items-end gap-4 p-6 rounded-xl border border-border bg-muted/30">
          <Avatar size="sm">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar size="default">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </div>
        <p className="text-xs text-muted-foreground">sm · default · lg</p>
// ... (truncated)
```

### BadgePage

> `src/pages/BadgePage.tsx`

```tsx
import { Badge } from "@/components/ui/badge"
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page"

type BadgeColorToken = {
  name: string
  variant:
    | "success"
    | "warning"
    | "error"
    | "info"
    | "orange"
    | "cyan"
    | "sky"
    | "neutral"
    | "blue"
    | "indigo"
    | "purple"
  bgVariable: string
  bgSwatchClass: string
  textVariable: string
  textSwatchClass: string
}

const badgePalette: BadgeColorToken[] = [
  {
    name: "Success",
    variant: "success",
    bgVariable: "--success-badge",
    bgSwatchClass: "bg-[var(--success-badge)]",
    textVariable: "--success-badge-text",
    textSwatchClass: "bg-[var(--success-badge-text)]",
  },
  {
    name: "Warning",
    variant: "warning",
    bgVariable: "--warning-badge",
    bgSwatchClass: "bg-[var(--warning-badge)]",
    textVariable: "--warning-badge-text",
    textSwatchClass: "bg-[var(--warning-badge-text)]",
  },
  {
    name: "Error",
    variant: "error",
    bgVariable: "--error-badge",
    bgSwatchClass: "bg-[var(--error-badge)]",
    textVariable: "--error-badge-text",
    textSwatchClass: "bg-[var(--error-badge-text)]",
  },
  {
    name: "Info",
    variant: "info",
    bgVariable: "--info-badge",
    bgSwatchClass: "bg-[var(--info-badge)]",
    textVariable: "--info-badge-text",
    textSwatchClass: "bg-[var(--info-badge-text)]",
  },
  {
// ... (truncated)
```

### BreadcrumbPage

> `src/pages/BreadcrumbPage.tsx`

```tsx
import { ArrowBigLeftIcon, BriefcaseIcon, SlashIcon, UserIcon } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'

export default function BreadcrumbsPage() {
  return (
    <div className="p-8 max-w-5xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Breadcrumb</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Navigation path showing the user's current location within a hierarchy.
        </p>
      </div>

      {/* Implementación real — page header de la app */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Implementación real</h2>
        <div className="rounded-xl border border-border bg-background-gray p-3">
          <div className="h-15 bg-white flex items-center justify-between gap-4 rounded-lg px-3 py-2.5">
            <div className="flex items-center gap-3">
              <Button size="icon"  aria-label="Volver" className="size-7.5 shadow-none">
                <ArrowBigLeftIcon fill="#fff" className="size-5!" />
              </Button>
              <Breadcrumb variant="primary">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Empleados</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Activo</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <ButtonGroup>
              <Button variant="tab" className="h-10 px-6 bg-primary font-semibold text-white border-primary rounded-s-[5px] shadow-none">
                <UserIcon />
                Datos personales
              </Button>
              <Button variant="tab" className="h-10 px-6 bg-white font-semibold text-primary border-primary rounded-e-[5px] shadow-none">
                <BriefcaseIcon />
                Datos laborales
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Header de página combinando <code>Breadcrumb</code> (<code>variant="primary"</code>) con un botón de volver y tabs de navegación.
        </p>
      </section>
// ... (truncated)
```

### ButtonsPage

> `src/pages/ButtonsPage.tsx`

```tsx
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Mail, Trash2, Plus, ChevronRight, Loader2, LayoutGrid, List, Table2, LayoutList, AlignLeft, AlignCenter, AlignRight, SortAsc, SortDesc } from 'lucide-react'
import ToolbarButton from '@/components/common/ToolbarButton'

const tabItems = ['Activos', 'Pendientes', 'Inactivos']

type ViewMode = 'table' | 'cards'
type LayoutMode = 'list' | 'grid' | 'table'
type AlignMode = 'left' | 'center' | 'right'
type SortMode = 'asc' | 'desc'

export default function ButtonsPage() {
  const [activeTab, setActiveTab] = useState('Activos')
  const [view, setView] = useState<ViewMode>('table')
  const [layout, setLayout] = useState<LayoutMode>('list')
  const [align, setAlign] = useState<AlignMode>('left')
  const [sort, setSort] = useState<SortMode>('asc')

  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Button</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      {/* Variants */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Variants</h2>
        <div className="flex flex-wrap items-center gap-3 p-6 rounded-xl border border-border bg-muted/30">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Cancelar</Button>
          <Button variant="success">Success</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Sizes</h2>
        <div className="flex flex-wrap items-center gap-3 p-6 rounded-xl border border-border bg-muted/30">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* With Icons */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">With Icons</h2>
        <div className="flex flex-wrap items-center gap-3 p-6 rounded-xl border border-border bg-muted/30">
          <Button>
            <Mail />
            Login with Email
// ... (truncated)
```

### CardPage

> `src/pages/CardPage.tsx`

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function CardPage() {
  return (
    <div className="p-8 max-w-4xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Card</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Container component to group related content. Composed of header, content and footer slots.
        </p>
      </div>

      {/* Default */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Default</h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Notificaciones</CardTitle>
              <CardDescription>Tenés 3 mensajes sin leer.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Revisá tu bandeja para ver las últimas actualizaciones de tus proyectos.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant='outline'>Ver todo</Button>
            </CardFooter>
          </Card>
        </div>
        <p className="text-xs text-muted-foreground">
          bg <code>white</code> + <code>border-secondary</code>
        </p>
      </section>

      {/* Variants */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Variants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-xl border border-border bg-muted/30">
          <Card>
            <CardHeader>
              <CardTitle>Default</CardTitle>
              <CardDescription>White + border-secondary</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Variante por defecto.</p>
            </CardContent>
          </Card>

          <Card variant="muted">
// ... (truncated)
```

### ChartsIconPage

> `src/pages/ChartsIconPage.tsx`

```tsx
import IconsChartCard from "@/components/common/charts/IconsChartCard";
import { User, UserMinus, UserPlus } from "lucide-react";

const ChartsIconPage = () => {
  const dataFirstChart = [
    {
      icon: <User className="text-success" />,
      color: "bg-success-light",
      count: 100,
      title: "Activos",
      textColor: "text-success",
    },
    {
      icon: <UserMinus className="text-secondary" />,
      color: "bg-secondary-light",
      count: 10,
      title: "Inactivos",
      textColor: "text-secondary",
    },
  ];

  const dataSecondChart = [
    {
      icon: <UserPlus className="text-success" />, 
      color: "bg-success-light",
      count: 29,
      title: "Ingresos",
      textColor: "text-success",
    },
    {
      icon: <UserMinus className="text-destructive" />,
      color: "bg-destructive-light",
      count: 10,
      title: "Egresos",
      textColor: "text-destructive",
    },
  ];

  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Icons Chart Card</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          A card component that displays a donut chart alongside icon-labeled metrics.
        </p>
      </div>

      {/* Estatus */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Estatus
        </h2>
        <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-muted/30">
          <IconsChartCard data={dataFirstChart} title={"Estatus"} />
        </div>
        <p className="text-xs text-muted-foreground">
          Activos vs. Inactivos — muestra la distribución de usuarios por estado.
        </p>
      </section>
// ... (truncated)
```

### ChartsPage

> `src/pages/ChartsPage.tsx`

```tsx
import type { ReactNode } from "react"
import PieChart, {
  type ChartSegment,
  type PieChartTooltipContext,
} from "@/components/common/PieChart"
import PieChartApex from "@/components/common/PieChartApex"
import RingsChart, {
  type RingsChartTooltipContext,
} from "@/components/common/RingsChart"
import RingsChartApex from "@/components/common/RingsChartApex"
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page";

const formatHours = (ctx: PieChartTooltipContext | RingsChartTooltipContext) =>
  `${ctx.segment.name}: ${ctx.segment.value}h 00m (${ctx.percent.toFixed(1)}%)`;

const formatPercent = (
  ctx: PieChartTooltipContext | RingsChartTooltipContext,
) => `${ctx.segment.name}: ${ctx.segment.value}%`;

const planningSegments: ChartSegment[] = [
  {
    name: "Horas Ordinarias",
    value: 60,
    color: "#16a34a",
    tooltipBgColor: "#15803d",
  },
  {
    name: "Horas de Descanso",
    value: 8,
    color: "#0891b2",
    tooltipBgColor: "#0e7490",
  },
  {
    name: "Nocturnas",
    value: 12,
    color: "#9333ea",
    tooltipBgColor: "#7e22ce",
  },
  {
    name: "Permisos",
    value: 4,
    color: "#ea580c",
    tooltipBgColor: "#c2410c",
  },
]

type CompareProps = {
  echarts: ReactNode
  apex: ReactNode
}

const Compare = ({ echarts, apex }: CompareProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div className="flex flex-col items-center">
      <span className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
        ECharts
      </span>
// ... (truncated)
```

### CheckBoxPage

> `src/pages/CheckBoxPage.tsx`

```tsx
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
// ... (truncated)
```

### ColorsPage

> `src/pages/ColorsPage.tsx`

```tsx
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page"

type ColorToken = {
  name: string
  variable: string
  swatchClass: string
}

type BadgeColorToken = {
  name: string
  bgVariable: string
  bgSwatchClass: string
  textVariable: string
  textSwatchClass: string
}

const primaryPalette: ColorToken[] = [
  {
    name: "Primary",
    variable: "--primary",
    swatchClass: "bg-[var(--primary)]",
  },
  {
    name: "Primary Light",
    variable: "--primary-light",
    swatchClass: "bg-[var(--primary-light)]",
  },
  {
    name: "Primary Foreground",
    variable: "--primary-foreground",
    swatchClass: "bg-[var(--primary-foreground)]",
  },
  { name: "Ring", variable: "--ring", swatchClass: "bg-[var(--ring)]" },
]

const secondaryPalette: ColorToken[] = [
  {
    name: "Secondary",
    variable: "--secondary",
    swatchClass: "bg-[var(--secondary)]",
  },
  {
    name: "Secondary Foreground",
    variable: "--secondary-foreground",
    swatchClass: "bg-[var(--secondary-foreground)]",
  },
  {
    name: "Success",
    variable: "--success",
    swatchClass: "bg-[var(--success)]",
  },
  {
    name: "Success Foreground",
    variable: "--success-foreground",
    swatchClass: "bg-[var(--success-foreground)]",
  },
  {
// ... (truncated)
```

### ComboboxPage

> `src/pages/ComboboxPage.tsx`

```tsx
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
// ... (truncated)
```

### ComponentsPage

> `src/pages/ComponentsPage.tsx`

```tsx
export default function ComponentsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Componentes</h1>
    </div>
  )
}
```

### IconsPage

> `src/pages/IconsPage.tsx`

```tsx
import StarIcon from "../components/icons/StarIcon"
import TrashIcon from "../components/icons/TrashIcon"

function IconsPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Icons</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Showcase of the custom SVG icons available.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Star Icon
        </h2>
        <div className="flex items-center gap-4 p-12 rounded-xl border border-border bg-muted/30">
          <StarIcon />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Trash Icon
        </h2>
        <div className="flex items-center gap-4 p-12 rounded-xl border border-border bg-muted/30">
          <TrashIcon />
        </div>
      </section>
    </div>
  )
}

export default IconsPage
```

### InputPage

> `src/pages/InputPage.tsx`

```tsx
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Info,
  Eye,
  AlertTriangle,
  Check,
  Clock,
  CalendarDays,
} from "lucide-react"
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
// ... (truncated)
```

### InputPhonePage

> `src/pages/InputPhonePage.tsx`

```tsx
import { useMemo, useState } from "react"
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page"
import { InputPhone } from "@/components/ui/input-phone"
import { Label } from "@/components/ui/label"
import type { CountryIso2 } from "react-international-phone"
import { AlertTriangle, Check } from "lucide-react"

const PREFERRED: CountryIso2[] = ["ar", "us", "es", "br", "mx"]

export default function InputPhonePage() {
  const [phone, setPhone] = useState("")
  const [phoneAr, setPhoneAr] = useState("")
  const [phoneCo, setPhoneCo] = useState("+573166999738")
  const preferred = useMemo(() => PREFERRED, [])

  return (
    <ShowcasePage
      title="Input Phone"
      description="Phone input built on top of the shadcn Input using the usePhoneInput hook from react-international-phone."
    >
      <ShowcaseSection title="Default">
        <div className="max-w-sm">
          <div className="space-y-1.5 flex flex-col">
            <Label className="text-xs text-muted-foreground">
              Teléfono
            </Label>
            <InputPhone
              defaultCountry="co"
              value={phoneCo}
              onChange={setPhoneCo}
            />
            <p className="mt-1 text-xs text-muted-foreground">
              Value: <code>{phoneCo || "—"}</code>
            </p>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Default — empty">
        <div className="max-w-sm">
          <InputPhone
            value={phone}
            onChange={setPhone}
            placeholder="Phone number"
          />
          <p className="mt-3 text-xs text-muted-foreground">
            Value: <code>{phone || "—"}</code>
          </p>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Separator variant + searchable">
        <div className="max-w-sm">
          <InputPhone
            variant="separator"
            searchable
            value={phoneAr}
// ... (truncated)
```

### ModalPage

> `src/pages/ModalPage.tsx`

```tsx
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page";
import { Label } from "@/components/ui/label";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ModalPage = () => {
  return (
    <ShowcasePage title="Modal" description="Modals / Dialogs">
      {/* Basic dialog with trigger */}
      <ShowcaseSection title="Basic Dialog">
        <h2 className="text-lg font-semibold">Basic Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog Btn</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nuevo empleado</DialogTitle>
            </DialogHeader>
            {/* <div>
              <Label required>
                Tipo de Persona
              </Label>
            </div> */}
            <FieldGroup>
              <Field>
                <Label required htmlFor="name-1">
                  Tipo de Empleado
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
              </Field>
              <Field>
                <Label required htmlFor="username-1">
                  Username
// ... (truncated)
```

### PersonCharts

> `src/pages/Persons/PersonCharts.tsx`

```tsx
import IconsChartCard from "@/components/common/charts/IconsChartCard";
import type {
  ChartSegment,
  PieChartTooltipContext,
} from "@/components/common/PieChart";
import PieChart from "@/components/common/PieChart";
import PieChartApex from "@/components/common/PieChartApex";
import type { RingsChartTooltipContext } from "@/components/common/RingsChart";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { User, UserMinus, UserPlus } from "lucide-react";

const PersonCharts = () => {
  const dataFirstChart = [
    {
      icon: <User className="text-success" />,
      color: "bg-success-light",
      count: 100,
      title: "Activos",
      textColor: "text-success",
    },
    {
      icon: <UserMinus className="text-secondary" />,
      color: "bg-secondary-light",
      count: 10,
      title: "Inactivos",
      textColor: "text-secondary",
    },
  ];

  const dataSecondChart = [
    {
      icon: <UserPlus className="text-success" />,
      color: "bg-success-light",
      count: 29,
      title: "Ingresos",
      textColor: "text-success",
    },
    {
      icon: <UserMinus className="text-destructive" />,
      color: "bg-destructive-light",
      count: 10,
      title: "Egresos",
      textColor: "text-destructive",
    },
  ];

  const planningSegments: ChartSegment[] = [
    {
      name: "Colombia",
      value: 60,
      color: "#8ED88E",
      tooltipBgColor: "#509650",
    },
    { name: "Eeuu", value: 8, color: "#FD5656", tooltipBgColor: "#FD5656" },
    { name: "Maracay", value: 12, color: "#58B9FF", tooltipBgColor: "#58B9FF" },
  ];

  const planningSegmentsDepartaments = [
    {
// ... (truncated)
```

### PersonTable

> `src/pages/Persons/PersonTable.tsx`

```tsx
import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/common/DataTable";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import EmployeeNameInfo from "@/components/common/EmployeeNameInfo";
import { Input } from "@/components/ui/input";
import { Bolt, IdCard, Plus, Search, SearchIcon, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ComboboxField, type ComboboxFieldOption } from "@/components/ui/combobox";
import { paddingTable } from "@/constants/styles/styles";

type Person = {
  sede: string;
  identificacion: string;
  tipoDocumento: string;
  nombre: string;
  cargo: string;
  avatarSrc?: string;
  departamento: string;
  fechaNacimiento: string;
  correo: string;
  metodo: string;
  autenticacion: string;
};

const persons: Person[] = [
  {
    sede: "",
    identificacion: "1010237648",
    tipoDocumento: "Cédula",
    nombre: "Leidi Martinez",
    cargo: "",
    avatarSrc: "https://i.pravatar.cc/32?img=1",
    departamento: "",
    fechaNacimiento: "22-01-1998",
    correo: "Lm+4723@intelli-next.c...",
    metodo: "Biometrico",
    autenticacion: "SSO",
  },
  {
    sede: "Eeuu",
    identificacion: "1013579114",
    tipoDocumento: "Cédula",
    nombre: "Leidi Martinez",
    cargo: "Ingeniero De Software",
    avatarSrc: "https://i.pravatar.cc/32?img=1",
    departamento: "Administracion",
    fechaNacimiento: "22-01-1998",
    correo: "Leidiowebinar@yopmail....",
    metodo: "Biometrico",
    autenticacion: "2FA",
// ... (truncated)
```

### PersonsPage

> `src/pages/Persons/PersonsPage.tsx`

```tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { BriefcaseIcon, UserIcon } from "lucide-react";
import PersonCharts from "./PersonCharts";
import PersonTable from "./PersonTable";
import { paddingHeaderBreadcrumbs } from "@/constants/styles/styles";

const PersonsPage = () => {
  return (
    <div className="bg-background w-full h-full p-2.5 flex flex-col gap-2">
      <div className={`h-15 bg-white flex items-center justify-between gap-4 rounded-lg ${paddingHeaderBreadcrumbs}`}>
        <div className="flex items-center gap-3">
          <Breadcrumb variant="primary">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Empleados</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <ButtonGroup>
          <Button
            variant="tab"
            className="h-10 px-6 bg-primary font-semibold text-white border-primary rounded-s-[5px] shadow-none"
          >
            <UserIcon />
            Datos personales
          </Button>
          <Button
            variant="tab"
            className="h-10 px-6 bg-white font-semibold text-primary border-primary rounded-e-[5px] shadow-none"
          >
            <BriefcaseIcon />
            Datos laborales
          </Button>
        </ButtonGroup>
      </div>

      <PersonCharts />

      <PersonTable />
    </div>
  );
};

export default PersonsPage;
```

### PersonsPage

> `src/pages/PersonsPage.tsx`

```tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { BriefcaseIcon, UserIcon } from "lucide-react";

const PersonsPage = () => {
  return (
    <div className="bg-background w-full h-full p-2.5">
      <div className="h-15 bg-white flex items-center justify-between gap-4 rounded-lg px-3 py-2.5">
        <div className="flex items-center gap-3">
          <Breadcrumb variant="primary">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Empleados</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <ButtonGroup>
          <Button
            variant="tab"
            className="h-10 px-6 bg-primary font-semibold text-white border-primary rounded-s-[5px] shadow-none"
          >
            <UserIcon />
            Datos personales
          </Button>
          <Button
            variant="tab"
            className="h-10 px-6 bg-white font-semibold text-primary border-primary rounded-e-[5px] shadow-none"
          >
            <BriefcaseIcon />
            Datos laborales
          </Button>
        </ButtonGroup>
      </div>

      
    </div>
  );
};

export default PersonsPage;
```

### SelectPage

> `src/pages/SelectPage.tsx`

```tsx
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
// ... (truncated)
```

### SwitchPage

> `src/pages/SwitchPage.tsx`

```tsx
import { Switch } from "@/components/ui/switch"
import { Info } from "lucide-react"

export default function SwitchPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Switch</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          A control that allows the user to toggle between checked and not
          checked.
        </p>
      </div>

      {/* Examples */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Examples
        </h2>
        <div className="flex flex-wrap items-start gap-12 p-12 rounded-xl border border-border bg-muted/30">
          <div className="flex flex-col gap-3 min-w-30">
            <span className="text-sm font-medium text-muted-foreground">
              Control de Acceso
            </span>
            <Switch defaultChecked color="white" />
          </div>

          <div className="flex flex-col gap-3 min-w-30">
            <span className="text-sm font-medium text-muted-foreground">
              ¿Extras antes del turno?
            </span>
            <Switch />
          </div>

          <div className="flex flex-col gap-3 min-w-30">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">
                Cont. Servicio
              </span>
              <Info className="w-4 h-4 text-zinc-400" />
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </section>

      {/* Turno Abierto */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Turno Abierto
        </h2>
        <div className="flex items-start gap-4 p-12 rounded-xl border border-border bg-muted/30">
          <div className="flex flex-col gap-3 min-w-30">
            <span className="text-sm font-medium text-muted-foreground">
              Turno abierto
            </span>
            <Switch size="default" />
          </div>
        </div>
      </section>
// ... (truncated)
```

### TablePage

> `src/pages/TablePage.tsx`

```tsx
import type { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/common/DataTable"
import { TableCell, TableRow } from "@/components/ui/table"
import { Text } from "@/components/ui/text"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"

type Invoice = {
  invoice: string
  paymentStatus: string
  totalAmount: string
  paymentMethod: string
}

const invoices: Invoice[] = [
  { invoice: "INV-001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card!!!" },
  { invoice: "INV-002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
  { invoice: "INV-003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV-004", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card" },
  { invoice: "INV-005", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
  { invoice: "INV-006", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV-007", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card" },
]

const invoiceColumns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "invoice",
    header: "Invoice",
    cell: ({ row }) => <Text variant="span-table" className="font-medium">{row.getValue("invoice")}</Text>,
  },
  {
    accessorKey: "paymentStatus",
    header: "Status",
    cell: ({ row }) => <Text variant="span-table">{row.getValue("paymentStatus")}</Text>,
  },
  {
    accessorKey: "paymentMethod",
    header: "Method",
    cell: ({ row }) => <Text variant="span-table">{row.getValue("paymentMethod")}</Text>,
  },
  {
    accessorKey: "totalAmount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => <Text variant="span-table" className="block text-right">{row.getValue("totalAmount")}</Text>,
  },
]

// --- Projects example ---

type Participant = { name: string; src?: string }

type Project = {
  id: string
  name: string
  color: string
// ... (truncated)
```

### TextPage

> `src/pages/TextPage.tsx`

```tsx
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
// ... (truncated)
```

### TooltipPage

> `src/pages/TooltipPage.tsx`

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

export default function TooltipPage() {
  return (
    <TooltipProvider>
      <div className="p-8 max-w-3xl space-y-10">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Tooltip</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            A small popup that appears on hover/focus to give the user contextual information.
          </p>
        </div>

        {/* Default */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Default</h2>
          <div className="flex items-center gap-4 p-12 rounded-xl border border-border bg-muted/30">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>Tooltip por defecto</TooltipContent>
            </Tooltip>
          </div>
          <p className="text-xs text-muted-foreground">
            bg <code>black/80</code> + texto blanco · sin arrow
          </p>
        </section>

        {/* Sides without arrow */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Sides — without arrow</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-12 rounded-xl border border-border bg-muted/30">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Top</Button>
              </TooltipTrigger>
              <TooltipContent side="top">Tooltip top</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">Tooltip right</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Tooltip bottom</TooltipContent>
            </Tooltip>
// ... (truncated)
```


---

## ✅ Checklist para Diseños

Cuando uses este sistema:

- [ ] Usar componentes del sistema (no crear desde cero)
- [ ] Usar tokens CSS para colores (no hex directo)
- [ ] Espaciado en múltiplos de 8px
- [ ] Tipografía de la escala definida
- [ ] Componentes accesibles (labels, aria-*)
- [ ] Responsive (mobile-first)
- [ ] Hover states en elementos interactivos
- [ ] Estados de loading cuando aplique
- [ ] Usar `cn()` para combinar clases Tailwind
- [ ] Usar CVA para variantes de componentes
- [ ] Incluir `data-slot` en el elemento raíz

---

## 🚀 Tips para Claude Design

1. **Combina componentes**: Card + Input + Button es mejor que crear todo custom
2. **Usa los ejemplos**: Copia patrones de `/examples` y modifica
3. **Tokens primero**: Siempre usa variables CSS, no valores hardcoded
4. **Mobile-first**: Diseña para móvil y luego escala a desktop
5. **Consistencia**: Mantén el mismo espaciado y colores en todo el diseño
6. **CVA para variantes**: Usa CVA al agregar variantes a componentes

---

## 🔗 Referencias Rápidas

