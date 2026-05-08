# ToolbarButton

> `src/components/common/ToolbarButton.tsx`

Botón cuadrado (32×32) con borde de color y tooltip opcional.

**Props:**
- `icon: React.ReactNode`
- `color: string` — sufijo Tailwind, e.g. `"primary"`, `"blue-600"`, `"red-500"`
- `active?: boolean`
- `onClick?: () => void`
- `title?: string`
- `tooltipText?: string`

**Ejemplo:**
```tsx
<ToolbarButton
  icon={<LayoutGrid />}
  color="primary"
  active
  tooltipText="Vista grilla"
/>
```

**Página de ejemplo:** `src/pages/ButtonsPage.tsx`
