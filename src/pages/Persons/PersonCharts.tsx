import IconsChartCard from "@/components/common/charts/IconsChartCard";
import type {
  ChartSegment,
  PieChartTooltipContext,
} from "@/components/common/charts/PieChart";
import PieChartApex from "@/components/common/charts/PieChartApex";
import type { RingsChartTooltipContext } from "@/components/common/charts/RingsChart";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/icons/IconWrapper";
import UserSolidIcon from "@/assets/icons-svg/user-solid.svg?react";
import UserDashedSolidIcon from "@/assets/icons-svg/user-dashed-solid.svg?react";
import UserPlusSolidIcon from "@/assets/icons-svg/user-plus-solid.svg?react";
import UserMinusSolidIcon from "@/assets/icons-svg/user-minus-solid.svg?react";

const PersonCharts = () => {
  const dataFirstChart = [
    {
      icon: <Icon icon={UserSolidIcon} size="3xl" className="text-success" />,
      color: "bg-success-light",
      count: 100,
      title: "Activos",
      textColor: "text-success",
    },
    {
      icon: <Icon icon={UserDashedSolidIcon} size="3xl" className="text-secondary" />,
      color: "bg-secondary-light",
      count: 10,
      title: "Inactivos",
      textColor: "text-secondary",
    },
  ];

  const dataSecondChart = [
    {
      icon: <Icon icon={UserPlusSolidIcon} size="3xl" className="text-success" />,
      color: "bg-success-light",
      count: 29,
      title: "Ingresos",
      textColor: "text-success",
    },
    {
      icon: <Icon icon={UserMinusSolidIcon} size="3xl" className="text-destructive" />,
      color: "bg-destructive-light",
      count: 10,
      title: "Egresos",
      textColor: "text-destructive",
    },
  ];

  const planningSegments: ChartSegment[] = [
    {
      name: "Colombia",
      value: 60,
      color: "#8ED88E",
      tooltipBgColor: "#509650",
    },
    { name: "Eeuu", value: 8, color: "#FD5656", tooltipBgColor: "#FD5656" },
    { name: "Maracay", value: 12, color: "#58B9FF", tooltipBgColor: "#58B9FF" },
  ];

  const planningSegmentsDepartaments = [
    {
      name: "Administracion",
      value: 60,
      color: "#B66DFF",
      tooltipBgColor: "#B66DFF",
    },
    {
      name: "Tecnologia",
      value: 8,
      color: "#F4D742",
      tooltipBgColor: "#F4D742",
    },
    {
      name: "Centro de distribucion",
      value: 12,
      color: "#FD5656",
      tooltipBgColor: "#FD5656",
    },
    {
      name: "Envasados",
      value: 4,
      color: "#8ED88E",
      tooltipBgColor: "#8ED88E",
    },
  ];

  const planningTotal = planningSegments.reduce((a, s) => a + s.value, 0);
  const formatHours = (
    ctx: PieChartTooltipContext | RingsChartTooltipContext,
  ) => `${ctx.segment.name}: ${ctx.segment.value}`;

  return (
    <div className="grid grid-cols-24 gap-2">
      <div className="col-span-3">
        <IconsChartCard data={dataFirstChart} title={"Estatus"} />
      </div>
      <div className="col-span-3">
        <IconsChartCard data={dataSecondChart} title={"Rotación"} />
      </div>
      <div className="col-span-6">
        <Card variant="borderless" className={`py-2 gap-2 flex justify-center`}>
          <CardHeader>
            <Text variant="card-title-graph">{"Empleados por sedes"}</Text>
          </CardHeader>
          <CardContent>
            <PieChartApex
              data={planningSegments}
              centerLabel={`${planningTotal}`}
              centerLabelMode="dynamic"
              centerLabelFormatter={(ctx) => `${ctx.percent.toFixed(1)}%`}
              tooltipFormatter={formatHours}
              width={"100%"}
              height={130}
            />
          </CardContent>
        </Card>
      </div>
      <div className="col-span-6">
        <Card variant="borderless" className={`py-2 gap-2 flex justify-center`}>
          <CardHeader>
            <Text variant="card-title-graph">
              {"Empleados por departamentos"}
            </Text>
          </CardHeader>
          <CardContent>
            <PieChartApex
              data={planningSegmentsDepartaments}
              centerLabel={`${planningTotal}`}
              centerLabelMode="dynamic"
              centerLabelFormatter={(ctx) => `${ctx.percent.toFixed(1)}%`}
              tooltipFormatter={formatHours}
              width={"100%"}
              height={130}
            />
          </CardContent>
        </Card>
      </div>
      <div className="col-span-6">
        <Card variant="borderless" className={`py-2 gap-2`}>
          <CardHeader>
            <Text variant="card-title-graph">
              {"Empleados por departamentos"}
            </Text>
          </CardHeader>
          <CardContent>
            <PieChartApex
              data={planningSegmentsDepartaments}
              centerLabel={`${planningTotal}`}
              centerLabelMode="dynamic"
              centerLabelFormatter={(ctx) => `${ctx.percent.toFixed(1)}%`}
              tooltipFormatter={formatHours}
              width={"100%"}
              height={130}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PersonCharts;
