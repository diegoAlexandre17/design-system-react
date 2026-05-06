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
} from "@/components/component-showcase-page"

const formatHours = (ctx: PieChartTooltipContext | RingsChartTooltipContext) =>
  `${ctx.segment.name}: ${ctx.segment.value}h 00m (${ctx.percent.toFixed(1)}%)`

const formatPercent = (
  ctx: PieChartTooltipContext | RingsChartTooltipContext,
) => `${ctx.segment.name}: ${ctx.segment.value}%`

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
      {echarts}
    </div>
    <div className="flex flex-col items-center border-t border-border pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-6">
      <span className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
        ApexCharts
      </span>
      {apex}
    </div>
  </div>
)

export default function ChartsPage() {
  const planningTotal = planningSegments.reduce((a, s) => a + s.value, 0)

  const browserShare = [
    { name: "Chrome", value: 64 },
    { name: "Safari", value: 18 },
    { name: "Firefox", value: 7 },
    { name: "Edge", value: 6 },
    { name: "Opera", value: 3 },
    { name: "Otros", value: 2 },
  ]

  const planningRingsEcharts = [
    {
      segments: [
        {
          name: "Ejecutadas",
          value: 44,
          color: "#16a34a",
          tooltipBgColor: "#15803d",
        },
        {
          name: "Planificadas",
          value: 81,
          color: "#0891b2",
          tooltipBgColor: "#0e7490",
        },
      ],
    },
    {
      segments: [
        {
          name: "Sin Planificación",
          value: 67,
          color: "#9333ea",
          tooltipBgColor: "#7e22ce",
        },
      ],
      fillTo: 100,
    },
  ]

  const planningRingsApex = [
    {
      name: "Ejecutadas",
      value: 44,
      color: "#16a34a",
      tooltipBgColor: "#15803d",
      fillTo: 100,
    },
    {
      name: "Planificadas",
      value: 81,
      color: "#0891b2",
      tooltipBgColor: "#0e7490",
      fillTo: 100,
    },
    {
      name: "Sin Planificación",
      value: 67,
      color: "#9333ea",
      tooltipBgColor: "#7e22ce",
      fillTo: 100,
    },
  ]

  const quarterlyRings = [
    { name: "Q1", value: 32, color: "#58b9ff" },
    { name: "Q2", value: 48, color: "#8fd98f" },
    { name: "Q3", value: 65, color: "#2aad7d" },
    { name: "Q4", value: 81, color: "#a78bfa" },
  ]

  return (
    <ShowcasePage
      wide
      title="Charts"
      description="Comparación entre ECharts y ApexCharts para definir cuál librería conservar."
    >
      <ShowcaseSection
        title="Pie Chart - 4 segmentos (horas)"
        description="centerLabel estático + tooltip con horas y porcentaje."
      >
        <Compare
          echarts={
            <PieChart
              data={planningSegments}
              centerLabel={`${planningTotal}h 00m`}
              tooltipFormatter={formatHours}
            />
          }
          apex={
            <PieChartApex
              data={planningSegments}
              centerLabel={`${planningTotal}h 00m`}
              tooltipFormatter={formatHours}
              width={320}
              height={320}
            />
          }
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Pie Chart - centerLabelMode='dynamic' + tooltip"
        description="El centerLabel muestra el porcentaje del segmento al hacer hover y el tooltip permanece activo."
      >
        <Compare
          echarts={
            <PieChart
              data={planningSegments}
              centerLabel={`${planningTotal}h 00m`}
              centerLabelMode="dynamic"
              centerLabelFormatter={(ctx) => `${ctx.percent.toFixed(1)}%`}
              tooltipFormatter={formatHours}
            />
          }
          apex={
            <PieChartApex
              data={planningSegments}
              centerLabel={`${planningTotal}h 00m`}
              centerLabelMode="dynamic"
              centerLabelFormatter={(ctx) => `${ctx.percent.toFixed(1)}%`}
              tooltipFormatter={formatHours}
              width={320}
              height={320}
            />
          }
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Pie Chart - 6 segmentos (formatter por defecto)"
        description="Sin tooltipFormatter explícito: muestra valor + porcentaje calculado."
      >
        <Compare
          echarts={
            <PieChart
              data={browserShare}
              centerLabel="100%"
              width={340}
              height={200}
            />
          }
          apex={
            <PieChartApex
              data={browserShare}
              centerLabel="100%"
              legendOffsetX={20}
              donutSize="70%"
              width={420}
              height={180}
            />
          }
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Rings Chart - 3 anillos (planificación)"
        description="ECharts dibuja un anillo por nivel; ApexCharts usa radialBar (un segmento por anillo)."
      >
        <Compare
          echarts={
            <RingsChart
              centerLabel="125h 00m"
              tooltipFormatter={formatHours}
              rings={planningRingsEcharts}
              legendRight={20}
            />
          }
          apex={
            <RingsChartApex
              centerLabel="125h 00m"
              tooltipFormatter={formatHours}
              hollowSize="40%"
              rings={planningRingsApex}
            />
          }
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Rings Chart - 4 anillos (ventas trimestrales)"
        description="Mismo dataset trimestral renderizado con ambas librerías."
      >
        <Compare
          echarts={
            <RingsChart
              centerLabel="2026"
              tooltipFormatter={formatPercent}
              rings={quarterlyRings.map((r) => ({
                segments: [{ name: r.name, value: r.value, color: r.color }],
                fillTo: 100,
              }))}
              width={340}
              height={240}
            />
          }
          apex={
            <RingsChartApex
              centerLabel="2026"
              tooltipFormatter={formatPercent}
              rings={quarterlyRings.map((r) => ({ ...r, fillTo: 100 }))}
              height={280}
            />
          }
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Variantes solo en ECharts"
        description="Modos de centerLabel y configuraciones que aún no tienen contraparte en ApexCharts."
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <span className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              centerLabelMode='hidden-on-hover'
            </span>
            <PieChart
              data={planningSegments}
              centerLabel={`${planningTotal}h 00m`}
              centerLabelMode="hidden-on-hover"
              tooltipFormatter={formatHours}
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              centerLabelMode='dynamic' (sin tooltip)
            </span>
            <PieChart
              data={planningSegments}
              centerLabel={`${planningTotal}h 00m`}
              centerLabelMode="dynamic"
              centerLabelFormatter={(ctx) => `${ctx.segment.value}h 00m`}
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Pie Chart - 2 segmentos sin label central
            </span>
            <PieChart
              data={[
                { name: "Completadas", value: 72 },
                { name: "Pendientes", value: 28 },
              ]}
              tooltipFormatter={formatPercent}
              width={400}
              height={200}
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Rings Chart - 2 anillos en modo dynamic
            </span>
            <RingsChart
              centerLabel="76%"
              centerLabelMode="dynamic"
              centerLabelFormatter={(ctx) => `${ctx.segment.value}%`}
              rings={[
                {
                  segments: [
                    { name: "Frontend", value: 80, color: "#2aad7d" },
                  ],
                  fillTo: 100,
                },
                {
                  segments: [{ name: "Backend", value: 72, color: "#58b9ff" }],
                  fillTo: 100,
                },
              ]}
              width={340}
              height={240}
              outerRadius={50}
              legendRight={20}
            />
          </div>
        </div>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
