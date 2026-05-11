# ActionTableIcon

> `src/components/common/ActionTableIcon.tsx`

Botón icónico con tooltip para acciones en filas de tabla.  
Soporta un ícono alternativo en hover (regular → solid) y estado de carga con spinner.

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `SvgIconComponent` | — | **Requerido.** Ícono principal (estado normal) |
| `iconSolid` | `SvgIconComponent` | — | Ícono alternativo mostrado al hacer hover |
| `tooltip` | `string` | — | **Requerido.** Texto del tooltip |
| `disabled` | `boolean` | `false` | Deshabilita el botón |
| `loading` | `boolean` | `false` | Reemplaza el ícono con un spinner `Loader2` |
| `className` | `string` | — | Clases Tailwind extra para el botón |
| `onClick` | `MouseEventHandler<HTMLButtonElement>` | — | Handler de click |

### Hover-swap pattern

Cuando `iconSolid` está presente, el componente usa clases `group` de Tailwind para intercambiar íconos en hover:

- Estado normal → muestra `icon` (`group-hover:hidden`)
- En hover → oculta `icon` y muestra `iconSolid` (`hidden group-hover:block`)

---

## Tokens usados

- `text-primary` — color de ícono
- `hover:text-primary/80` — atenuado en hover
- `disabled:opacity-50` — estado deshabilitado

---

## Ejemplo

```tsx
import ActionTableIcon from "@/components/common/ActionTableIcon"
import StarRegularIcon from "@/assets/icons-svg/star-regular.svg?react"
import StarSolidIcon from "@/assets/icons-svg/star-solid.svg?react"
import TrashRegularIcon from "@/assets/icons-svg/trash-regular.svg?react"
import TrashSolidIcon from "@/assets/icons-svg/trash-solid.svg?react"

// Básico
<ActionTableIcon
  icon={TrashRegularIcon}
  tooltip="Eliminar"
  onClick={() => handleDelete(row.id)}
/>

// Con hover-swap
<ActionTableIcon
  icon={StarRegularIcon}
  iconSolid={StarSolidIcon}
  tooltip="Marcar como favorito"
/>

// Con estado de carga
<ActionTableIcon
  icon={TrashRegularIcon}
  tooltip="Eliminando…"
  loading={isDeleting}
/>
```

---

**Página de ejemplo:** `src/pages/IconsPage.tsx`
