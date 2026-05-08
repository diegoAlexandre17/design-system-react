# IconsChartCard

> `src/components/common/charts/IconsChartCard.tsx`

Card con métricas + icono usado en dashboards.

**Props:**
- `data: { icon, color, count, title, textColor }[]`
- `title: string`
- `classNameCardContainer?: string`

**Ejemplo:**
```tsx
<IconsChartCard
  title="Estatus"
  data={[
    { icon: <User />, color: "bg-success-light", count: 100, title: "Activos", textColor: "text-success" },
    { icon: <UserMinus />, color: "bg-secondary-light", count: 10, title: "Inactivos", textColor: "text-secondary" },
  ]}
/>
```

**Páginas de ejemplo:**
- `src/pages/ChartsIconPage.tsx`
- `src/pages/Persons/PersonCharts.tsx`
