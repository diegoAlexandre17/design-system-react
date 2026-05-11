# Icons

> `src/components/icons/`

Sistema de íconos SVG custom del proyecto (en adición a `lucide-react`).  
Todos los íconos se renderizan a través del wrapper `Icon` / `IconWrapper`.

---

## Icon component

> `src/components/icons/IconWrapper.tsx`

Wrapper genérico inspirado en la API de `<FontAwesomeIcon />`.  
El tamaño se controla vía `font-size` (em-based), por lo que el ícono escala con el texto del contenedor.

```tsx
import { Icon } from "@/components/icons/IconWrapper"
import MyIcon from "@/assets/icons-svg/users.svg?react"

<Icon icon={MyIcon} size="lg" className="text-primary" />

// Tamaño custom (sobreescribe `size`):
<Icon icon={MyIcon} className="text-3xl text-destructive" />
```

### IconProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `SvgIconComponent` | — | **Requerido.** Componente SVG importado con `?react` |
| `size` | `IconSize` | `"md"` | Tamaño preestablecido (ver tabla abajo) |
| `className` | `string` | — | Clases Tailwind extra; pueden sobreescribir tamaño y color |
| `...props` | `SVGProps` | — | Cualquier atributo SVG estándar (excepto `ref`) |

### IconSize

| Value | Tailwind class | Approx px |
|-------|---------------|-----------|
| `xs` | `text-xs` | 12px |
| `sm` | `text-sm` | 14px |
| `md` | `text-base` | 16px |
| `lg` | `text-lg` | 18px |
| `xl` | `text-xl` | 20px |
| `2xl` | `text-2xl` | 24px |
| `3xl` | `text-3xl` | 30px |
| `4xl` | `text-4xl` | 36px |
| `5xl` | `text-5xl` | 48px |

---

## Import pattern

Los SVGs se importan con el sufijo `?react` (via plugin `@svgr/rollup` o equivalente en Vite):

```tsx
import UsersIcon from "@/assets/icons-svg/users.svg?react"
import UsersSlashIcon from "@/assets/icons-svg/users-slash.svg?react"
import PendingIcon from "@/assets/icons-svg/user-clock.svg?react"
```

El tipo resultante es `React.ComponentType<React.SVGProps<SVGSVGElement>>` (alias `SvgIconComponent`).

---

## SVG reference

Los 7 íconos custom del proyecto viven en `src/assets/icons-svg/`:

| Archivo | Import alias | viewBox | Descripción |
|---------|-------------|---------|-------------|
| `star-regular.svg` | `StarRegularIcon` | `0 0 576 512` | Estrella contorno (favorito inactivo) |
| `star-solid.svg` | `StarSolidIcon` | `0 0 576 512` | Estrella rellena (favorito activo) |
| `trash-regular.svg` | `TrashRegularIcon` | `0 0 448 512` | Papelera contorno |
| `trash-solid.svg` | `TrashSolidIcon` | `0 0 448 512` | Papelera rellena |
| `user-clock.svg` | `PendingIcon` | `0 0 511 414` | Usuario con reloj (estado pendiente) |
| `users-slash.svg` | `UsersSlashIcon` | `0 0 497 385` | Usuarios tachados (ausente/deshabilitado) |
| `users.svg` | `UsersIcon` | `0 0 497 334` | Grupo de usuarios |

---

## Usage example — ActionTableIcon + star pair

```tsx
import { Icon } from "@/components/icons/IconWrapper"
import StarRegularIcon from "@/assets/icons-svg/star-regular.svg?react"
import StarSolidIcon from "@/assets/icons-svg/star-solid.svg?react"
import ActionTableIcon from "@/components/common/ActionTableIcon"

// Ícono simple
<Icon icon={StarRegularIcon} size="xl" className="text-warning" />

// Con hover-swap (regular → solid) usando ActionTableIcon
<ActionTableIcon
  icon={StarRegularIcon}
  iconSolid={StarSolidIcon}
  tooltip="Marcar como favorito"
/>
```

---

**Página de ejemplo:** `src/pages/IconsPage.tsx`
