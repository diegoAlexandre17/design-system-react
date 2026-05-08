# RingsChart / RingsChartApex

> `src/components/common/RingsChart.tsx` (ECharts)
> `src/components/common/RingsChartApex.tsx` (ApexCharts)

Anillos concéntricos para visualizar varias series.

**Props principales (`RingsChartProps`):**
- `rings: Ring[]`
- `centerLabel?: string`
- `centerLabelMode?: "static" | "dynamic" | "hidden-on-hover"`
- `outerRadius?`, `ringThickness?`, `ringGap?`, `fillerColor?`
- `showLegend?` (default `true`), `showTooltip?` (default `true`)
- `tooltipFormatter?(ctx: RingsChartTooltipContext): string`
- `centerLabelFormatter?(ctx: RingsChartTooltipContext): string`

**`Ring`:**
```ts
type Ring = {
  segments: ChartSegment[]
  fillTo?: number
  radius?: [string, string]
}
```

**Ejemplo:**
```tsx
<RingsChart
  rings={[
    { segments: planningSegments },
    { segments: anotherSeries, fillTo: 80 },
  ]}
  centerLabel="Hoy"
/>
```

**Página de ejemplo:** `src/pages/ChartsPage.tsx`
