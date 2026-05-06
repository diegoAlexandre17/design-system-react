import PieChart, {
  type PieChartTooltipContext,
} from "@/components/common/PieChart";
import RingsChart, {
  type RingsChartTooltipContext,
} from "@/components/common/RingsChart";
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page";

const formatHours = (ctx: PieChartTooltipContext | RingsChartTooltipContext) =>
  `${ctx.segment.name}: ${ctx.segment.value}h 00m (${ctx.percent.toFixed(1)}%)`;

const formatPercent = (
  ctx: PieChartTooltipContext | RingsChartTooltipContext,
) => `${ctx.segment.name}: ${ctx.segment.value}%`;

export default function ChartsPage() {
  const planningSegments = [
    { name: "Horas Ordinarias", value: 60 },
    { name: "Horas de Descanso", value: 8 },
    { name: "Nocturnas", value: 12 },
    { name: "Permisos", value: 4 },
  ];
  const planningTotal = planningSegments.reduce((a, s) => a + s.value, 0);

  const browserShare = [
    { name: "Chrome", value: 64 },
    { name: "Safari", value: 18 },
    { name: "Firefox", value: 7 },
    { name: "Edge", value: 6 },
    { name: "Opera", value: 3 },
    { name: "Otros", value: 2 },
  ];

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
            data={planningSegments}
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

      <ShowcaseSection title="Pie Chart - 2 segmentos sin label central">
        <div className="flex justify-center">
          <PieChart
            data={[
              { name: "Completadas", value: 72 },
              { name: "Pendientes", value: 28 },
            ]}
            tooltipFormatter={formatPercent}
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
            width={460}
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
                  { name: "Ejecutadas", value: 44, color: "#8fd98f" },
                  { name: "Planificadas", value: 81, color: "#58b9ff" },
                ],
              },
              {
                segments: [
                  { name: "Sin Planificación", value: 67, color: "#e4ffcc" },
                ],
                fillTo: 247,
              },
              {
                segments: [{ name: "Extras", value: 55, color: "#2aad7d" }],
                fillTo: 247,
              },
            ]}
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
            height={240}
          />
        </div>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
