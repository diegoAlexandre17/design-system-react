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

const planningSegments2: ChartSegment[] = [
  {
    name: "Horas Ordinarias",
    value: 60,
    tooltipBgColor: "#2e8b57",
  },
  {
    name: "Horas de Descanso",
    value: 8,
    tooltipBgColor: "#1e6fa8",
  },
  {
    name: "Nocturnas",
    value: 12,
    tooltipBgColor: "#f14949",
  },
  {
    name: "Permisos",
    value: 4,
    tooltipBgColor: "#ffd500",
  },
]

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

  return (
    <ShowcasePage
      title="Charts"
      description="Componentes reutilizables de gráficos basados en ECharts."
    >
      <ShowcaseSection
        title="Pie Chart - 4 segmentos (horas)"
        description="centerLabel estático + tooltip box (default)."
      >
        <div className="flex justify-center">
          <PieChart
            data={planningSegments2}
            centerLabel={`${planningTotal}h 00m`}
            tooltipFormatter={formatHours}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Pie Chart - centerLabelMode='hidden-on-hover'"
        description="El centerLabel desaparece cuando el tooltip está visible."
      >
        <div className="flex justify-center">
          <PieChart
            data={planningSegments}
            centerLabel={`${planningTotal}h 00m`}
            centerLabelMode="hidden-on-hover"
            tooltipFormatter={formatHours}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Pie Chart - centerLabelMode='dynamic'"
        description="Sin tooltip box: el centerLabel muestra solo las horas del segmento al hacer hover."
      >
        <div className="flex justify-center">
          <PieChart
            data={planningSegments}
            centerLabel={`${planningTotal}h 00m`}
            centerLabelMode="dynamic"
            centerLabelFormatter={(ctx) => `${ctx.segment.value}h 00m`}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Pie Chart - centerLabelMode='dynamic' + tooltip"
        description="El centerLabel muestra el porcentaje del segmento al hacer hover y el tooltip permanece activo."
      >
        <div className="flex justify-center">
          <PieChart
            data={planningSegments}
            centerLabel={`${planningTotal}h 00m`}
            centerLabelMode="dynamic"
            centerLabelFormatter={(ctx) => `${ctx.percent.toFixed(1)}%`}
            tooltipFormatter={formatHours}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Pie Chart - 2 segmentos sin label central">
        <div className="flex justify-center">
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
      </ShowcaseSection>

      <ShowcaseSection
        title="Pie Chart - 6 segmentos (formatter por defecto)"
        description="Sin tooltipFormatter explícito: muestra valor + porcentaje calculado."
      >
        <div className="flex justify-center">
          <PieChart
            data={browserShare}
            centerLabel="100%"
            width={340}
            height={200}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Rings Chart - 3 anillos (planificación)">
        <div className="flex justify-center">
          <RingsChart
            centerLabel="125h 00m"
            tooltipFormatter={formatHours}
            rings={[
              {
                segments: [
                  {
                    name: "Ejecutadas",
                    value: 44,
                    color: "#8fd98f",
                    tooltipBgColor: "#2e8b57",
                  },
                  {
                    name: "Planificadas",
                    value: 81,
                    color: "#58b9ff",
                    tooltipBgColor: "#1e6fa8",
                  },
                ],
              },
              {
                segments: [
                  {
                    name: "Sin Planificación",
                    value: 67,
                    color: "#e4ffcc",
                    tooltipBgColor: "#6b9b3f",
                  },
                ],
                fillTo: 100,
              },
              {
                segments: [{ name: "Extras", value: 55, color: "#2aad7d" }],
                fillTo: 100,
              },
            ]}
            legendRight={20}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Rings Chart - 2 anillos en modo dynamic"
        description="Hover actualiza el label central con el valor del segmento."
      >
        <div className="flex justify-center">
          <RingsChart
            centerLabel="76%"
            centerLabelMode="dynamic"
            centerLabelFormatter={(ctx) => `${ctx.segment.value}%`}
            rings={[
              {
                segments: [{ name: "Frontend", value: 80, color: "#2aad7d" }],
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
      </ShowcaseSection>

      <ShowcaseSection title="Rings Chart - 4 anillos (ventas trimestrales)">
        <div className="flex justify-center">
          <RingsChart
            centerLabel="2026"
            tooltipFormatter={formatPercent}
            rings={[
              {
                segments: [{ name: "Q1", value: 32, color: "#58b9ff" }],
                fillTo: 100,
              },
              {
                segments: [{ name: "Q2", value: 48, color: "#8fd98f" }],
                fillTo: 100,
              },
              {
                segments: [{ name: "Q3", value: 65, color: "#2aad7d" }],
                fillTo: 100,
              },
              {
                segments: [{ name: "Q4", value: 81, color: "#a78bfa" }],
                fillTo: 100,
              },
            ]}
            width={340}
            height={240}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Pie Chart (ApexCharts) - 4 segmentos (horas)"
        description="Implementación con ApexCharts: chart tipo donut con centerLabel estático."
      >
        <div className="flex justify-center">
          <PieChartApex
            data={planningSegments}
            centerLabel={`${planningTotal}h 00m`}
            tooltipFormatter={formatHours}
            width={320}
            height={320}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Pie Chart (ApexCharts) - centerLabelMode='dynamic'"
        description="ApexCharts donut: el centerLabel muestra el porcentaje del segmento al hacer hover."
      >
        <div className="flex justify-center">
          <PieChartApex
            data={planningSegments}
            centerLabel={`${planningTotal}h 00m`}
            centerLabelMode="dynamic"
            centerLabelFormatter={(ctx) => `${ctx.percent.toFixed(1)}%`}
            tooltipFormatter={formatHours}
            width={320}
            height={320}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Pie Chart (ApexCharts) - 6 segmentos (formatter por defecto)"
        description="ApexCharts donut con formatter por defecto."
      >
        <div className="flex justify-center">
          <PieChartApex
            data={browserShare}
            centerLabel="100%"
            legendOffsetX={20}
            donutSize="70%"
            width={420}
            height={180}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Rings Chart (ApexCharts) - 3 anillos (planificación)"
        description="Implementación con ApexCharts: chart tipo radialBar (un segmento por anillo)."
      >
        <div className="flex justify-center">
          <RingsChartApex
            centerLabel="125h 00m"
            tooltipFormatter={formatHours}
            hollowSize="40%"
            rings={[
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
            ]}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Rings Chart (ApexCharts) - 4 anillos (ventas trimestrales)"
        description="ApexCharts radialBar con 4 anillos."
      >
        <div className="flex justify-center">
          <RingsChartApex
            centerLabel="2026"
            tooltipFormatter={formatPercent}
            rings={[
              { name: "Q1", value: 32, color: "#58b9ff", fillTo: 100 },
              { name: "Q2", value: 48, color: "#8fd98f", fillTo: 100 },
              { name: "Q3", value: 65, color: "#2aad7d", fillTo: 100 },
              { name: "Q4", value: 81, color: "#a78bfa", fillTo: 100 },
            ]}
            height={280}
          />
        </div>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
