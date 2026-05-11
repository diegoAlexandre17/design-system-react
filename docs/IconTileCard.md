# IconTileCard

> `src/components/ui/icon-tile-card.tsx`

Tile con badge (icon) + label, opcionalmente con widget de "novedades" (count). Soporta estado `selected`.

```tsx
<IconTileCard
  variant="..."        // 17 variantes de color (ver abajo)
  size="..."           // default | lg
  selected={false}
  icon={<Square />}
  label="Tiempo libre"
  count={4}
  onClick={() => {}}
/>
```

**Variantes:**
- `info`
- `success`
- `warning`
- `error`
- `orange`
- `cyan`
- `sky`
- `neutral`
- `blue`
- `indigo`
- `purple`
- `tangerine`
- `mustard`
- `forest`
- `slate`
- `violet`
- `teal`

Cada variant usa los tokens `--{variant}-badge` (bg del badge) y `--{variant}-badge-text` (icon + label).

**Tamaños:**
- `default` — card `h-20 w-50` (80×200), badge `size-10` (40×40) con icon `size-5` (20×20), label `text-xs`, widget `h-5 min-w-5` con `text-[11px]`.
- `lg` — card `h-[155px] w-50` (155×200), badge `size-20` (80×80) con icon `size-[46px]` (46×46), label `text-base` (16px), widget `h-[30px] min-w-[30px]` con `text-xs` (12px).

**Props:**
- `variant?: IconTileCardVariant` (default `info`)
- `size?: "default" | "lg"` (default `default`)
- `selected?: boolean` (default `false`)
- `icon: ReactNode` — el contenido del badge.
- `label: ReactNode`
- `count?: number` — si es `> 0`, muestra el widget de novedades (rojo destructive con ring blanco).
- `onClick?: MouseEventHandler` — si está presente, el tile se renderiza como `<button>` (clickable) con hover.

**Estado `selected`:**
- Border pasa al color del label (`border-{variant}-badge-text`).
- Background de la card pasa al color del badge (`bg-{variant}-badge`).
- Background del badge interno pasa a `bg-white`.
- Mientras está `selected`, se desactiva el hover-preview (`hover:bg-primary-light`).
- Agrega `aria-pressed` automáticamente cuando es clickable.

Las clases per-variant del estado selected están en un `Record<IconTileCardVariant, string>` literal en el archivo, porque Tailwind no puede ver clases concatenadas dinámicamente — deben estar en el código fuente para que el JIT las incluya.

**Tipos exportados:** `IconTileCardProps`, `IconTileCardVariant`, `IconTileCardSize`.

**Ejemplo:**
```tsx
const [selected, setSelected] = useState<string | null>(null)

<IconTileCard
  variant="success"
  size="lg"
  icon={<CalendarDays />}
  label="Tiempo libre"
  count={4}
  selected={selected === "tiempoLibre"}
  onClick={() => setSelected("tiempoLibre")}
/>
```

**Páginas de ejemplo:**
- `src/pages/CardPage.tsx`
- `src/pages/CarouselPage.tsx`
