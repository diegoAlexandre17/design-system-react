import IconsChartCard from "@/components/common/charts/IconsChartCard";
import type { PieChartTooltipContext } from "@/components/common/PieChart";
import PieChart from "@/components/common/PieChart";
import type { RingsChartTooltipContext } from "@/components/common/RingsChart";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { User, UserMinus, UserPlus } from "lucide-react";

const PersonCharts = () => {
  const dataFirstChart = [
    {
      icon: <User className="text-success" />,
      color: "bg-success-light",
      count: 100,
      title: "Activos",
      textColor: "text-success",
    },
    {
      icon: <UserMinus className="text-secondary" />,
      color: "bg-secondary-light",
      count: 10,
      title: "Inactivos",
      textColor: "text-secondary",
    },
  ];

  const dataSecondChart = [
    {
      icon: <UserPlus className="text-success" />,
      color: "bg-success-light",
      count: 29,
      title: "Ingresos",
      textColor: "text-success",
    },
    {
      icon: <UserMinus className="text-destructive" />,
      color: "bg-destructive-light",
      count: 10,
      title: "Egresos",
      textColor: "text-destructive",
    },
  ];

  const planningSegments = [
    { name: "Colombia", value: 60 },
    { name: "Eeuu", value: 8 },
    { name: "Maracay", value: 12 },
    { name: "Valencia", value: 4 },
  ];

  const planningSegmentsDepartaments = [
    { name: "Administracion", value: 60 },
    { name: "Tecnologia", value: 8 },
    { name: "Centro de distribucion", value: 12 },
    { name: "Envasados", value: 4 },
  ];

  const planningTotal = planningSegments.reduce((a, s) => a + s.value, 0);
  const formatHours = (
    ctx: PieChartTooltipContext | RingsChartTooltipContext,
  ) =>
    `${ctx.segment.name}: ${ctx.segment.value}h 00m (${ctx.percent.toFixed(1)}%)`;

  return (
    <div className="grid grid-cols-24 gap-4">
      <div className="col-span-3">
        <IconsChartCard data={dataSecondChart} title={"Rotación"} />
      </div>
      <div className="col-span-3">
        <IconsChartCard data={dataSecondChart} title={"Rotación"} />
      </div>
      <div className="col-span-6">
        <Card variant="borderless" className={`py-2 gap-2`}>
          <CardHeader>
            <Text variant="card-title-graph">{"Empleados por sedes"}</Text>
          </CardHeader>
          <CardContent>
            <PieChart
              height={140}
              data={planningSegments}
              centerLabel={`${planningTotal}h 00m`}
              tooltipFormatter={formatHours}
            />
          </CardContent>
        </Card>
      </div>
      <div className="col-span-6">
        <Card variant="borderless" className={`py-2 gap-2`}>
          <CardHeader>
            <Text variant="card-title-graph">{"Empleados por departamentos"}</Text>
          </CardHeader>
          <CardContent>
            <PieChart
              height={140}
              data={planningSegmentsDepartaments}
              centerLabel={`${planningTotal}h 00m`}
              tooltipFormatter={formatHours}
            />
          </CardContent>
        </Card>
      </div>
      <div className="col-span-6">
        <Card variant="borderless" className={`py-2 gap-2`}>
          <CardHeader>
            <Text variant="card-title-graph">{"Empleados por departamentos"}</Text>
          </CardHeader>
          <CardContent>
            <PieChart
              height={140}
              data={planningSegmentsDepartaments}
              centerLabel={`${planningTotal}h 00m`}
              tooltipFormatter={formatHours}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PersonCharts;
