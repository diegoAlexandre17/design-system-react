# PieChart / PieChartApex

> `src/components/common/PieChart.tsx` (ECharts)
> `src/components/common/PieChartApex.tsx` (ApexCharts)

Gráfico de torta. Las dos implementaciones se mantienen en paralelo para comparar (ver `src/pages/ChartsPage.tsx`).

**Props principales (`PieChartProps`):**
- `data: ChartSegment[]`
- `centerLabel?: string`
- `centerLabelMode?: "static" | "dynamic" | "hidden-on-hover"`
- `showLegend?: boolean` (default `true`)
- `showTooltip?: boolean` (default `true`)
- `width?`, `height?`, `radius?`, `center?`
- `tooltipFormatter?(ctx: PieChartTooltipContext): string`
- `centerLabelFormatter?(ctx: PieChartTooltipContext): string`

**`ChartSegment`:**
```ts
type ChartSegment = {
  name: string
  value: number
  color?: string
  tooltipBgColor?: string
}
```

**Ejemplo:**
```tsx
<PieChart
  data={planningSegments}
  centerLabel="Planificación"
  centerLabelMode="dynamic"
/>
```

**Páginas de ejemplo:**
- `src/pages/ChartsPage.tsx`
- `src/pages/Persons/PersonCharts.tsx`
