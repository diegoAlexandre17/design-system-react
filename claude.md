# MyIntelli Design System — Claude Instructions

## Identidad del proyecto

Este repositorio es el **Design System de MyIntelli**, construido con React + TypeScript + Vite. Todos los componentes viven en `src/components/ui/` y `src/components/common/`. Las páginas de showcase están en `src/pages/`.

## Stack tecnológico

- **React 18** + **TypeScript**
- **Vite** como bundler
- **Tailwind CSS v4** con `@theme inline` para mapear tokens CSS a utilidades
- **shadcn/ui** como base (Radix primitives bajo el capó)
- **CVA** (`class-variance-authority`) para variantes de componentes
- **Radix UI** para primitivos accesibles
- **Lucide React** para íconos
- **TanStack Table** para tablas con datos
- **`cn()`** de `@/lib/utils` para merge de clases

## Fuentes

- **Lato** (body, cargada desde Google Fonts en `index.html`)
- **Geist** (disponible via `@fontsource-variable/geist`, declarada en `App.css`)

## Estructura de carpetas

```
src/
  components/
    ui/          ← componentes base del design system
    common/      ← componentes compuestos (DataTable, ToolbarButton)
  pages/         ← showcase pages de cada componente
  layouts/       ← AppLayout (sidebar + header)
  routes/        ← componentsSections y componentsRoutes
  assets/        ← logo-myintelli-horizontal.jpg
  lib/utils.ts   ← cn() helper
```

## Reglas al generar componentes

1. **Siempre usar `cn()`** para combinar clases — nunca concatenar strings directamente.
2. **Siempre usar CVA** para variantes — no usar lógica ternaria inline para variantes múltiples.
3. **Siempre agregar `data-slot="nombre-componente"`** al elemento raíz para seguir la convención del sistema.
4. **Siempre agregar `data-variant` y `data-size`** cuando el componente tenga esas props, para permitir targeting desde CSS padre.
5. **Usar los tokens CSS** del sistema (ver `design-tokens.md`) — nunca hardcodear colores hex en nuevos componentes salvo en variantes de Badge de estado.
6. **Nunca usar `className` directamente en los props sin pasarlo por `cn()`**.
7. Los componentes deben ser accesibles: usar los primitivos de Radix cuando existan.
8. Al crear una nueva página showcase, seguir el patrón de `src/pages/ButtonsPage.tsx`.
9. Al agregar una nueva ruta, registrarla en `src/routes/componentsRoutes.tsx` dentro de la sección correspondiente.
10. Importar siempre con alias `@/` — nunca rutas relativas largas.

## Cómo extender el sistema

### Agregar un nuevo componente

```tsx
// src/components/ui/mi-componente.tsx
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const miComponenteVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", secondary: "..." },
    size: { default: "...", sm: "...", lg: "..." },
  },
  defaultVariants: { variant: "default", size: "default" },
})

function MiComponente({ className, variant, size, ...props }) {
  return (
    <div
      data-slot="mi-componente"
      data-variant={variant ?? "default"}
      data-size={size ?? "default"}
      className={cn(miComponenteVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { MiComponente }
```

### Agregar una variante a un componente existente

Agregar la nueva key dentro del objeto `variants` del CVA correspondiente. No modificar las variantes existentes.

## Lo que NO hacer

- No usar `styled-components` ni CSS Modules — solo Tailwind + CVA.
- No importar desde `shadcn/ui` directamente — todos los componentes están localmente en `src/components/ui/`.
- No agregar dependencias de UI externas sin discutirlo — el sistema es autocontenido.
- No usar `!important` en clases de componentes base.
- No crear variantes de color hardcodeadas en componentes base (excepto Badge de estado semántico).
