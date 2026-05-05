import { useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import type { CSSProperties } from "react";

export type PieChartSegment = {
  name: string;
  value: number;
  color?: string;
};

export type PieChartTooltipContext = {
  segment: PieChartSegment;
  total: number;
  percent: number;
};

export type CenterLabelMode = "static" | "dynamic" | "hidden-on-hover";

export interface PieChartProps {
  data: PieChartSegment[];
  centerLabel?: string;
  centerLabelMode?: CenterLabelMode;
  showLegend?: boolean;
  showTooltip?: boolean;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  radius?: [string, string];
  center?: [string, string];
  tooltipFormatter?: (ctx: PieChartTooltipContext) => string;
  centerLabelFormatter?: (ctx: PieChartTooltipContext) => string;
}

const DEFAULT_COLORS = [
  "#5ec85e",
  "#008ffb",
  "#fd5656",
  "#f6ec78",
  "#a78bfa",
  "#fb923c",
  "#22d3ee",
  "#f472b6",
];

const PieChart = ({
  data,
  centerLabel,
  centerLabelMode = "static",
  showLegend = true,
  showTooltip = true,
  width = 420,
  height = 160,
  radius = ["55%", "80%"],
  center = ["35%", "50%"],
  tooltipFormatter,
  centerLabelFormatter,
}: PieChartProps) => {
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  const segments = useMemo(
    () =>
      data.map((item, i) => ({
        ...item,
        color: item.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length],
      })),
    [data],
  );
  const total = useMemo(
    () => segments.reduce((acc, s) => acc + s.value, 0),
    [segments],
  );

  const defaultFormatter = (ctx: PieChartTooltipContext) =>
    `${ctx.segment.name}: ${ctx.segment.value} (${ctx.percent.toFixed(1)}%)`;
  const tipFmt = tooltipFormatter ?? defaultFormatter;
  const labelFmt = centerLabelFormatter ?? tipFmt;

  const widthNum = typeof width === "number" ? width : 420;
  const heightNum = typeof height === "number" ? height : 160;
  const cx = (widthNum * parseFloat(center[0])) / 100;
  const cy = (heightNum * parseFloat(center[1])) / 100;

  const hoveredSegment = hoveredName
    ? segments.find((s) => s.name === hoveredName)
    : null;
  const hoveredPercent =
    hoveredSegment && total > 0
      ? (hoveredSegment.value / total) * 100
      : 0;

  let displayedCenterText: string | null = null;
  if (centerLabel) {
    if (centerLabelMode === "hidden-on-hover" && hoveredSegment) {
      displayedCenterText = null;
    } else if (centerLabelMode === "dynamic" && hoveredSegment) {
      displayedCenterText = labelFmt({
        segment: hoveredSegment,
        total,
        percent: hoveredPercent,
      });
    } else {
      displayedCenterText = centerLabel;
    }
  }

  const tooltipEnabled = showTooltip && centerLabelMode !== "dynamic";

  const onEvents = useMemo(
    () => ({
      mouseover: (params: { name?: string }) => {
        if (params.name) setHoveredName(params.name);
      },
      mouseout: () => setHoveredName(null),
      globalout: () => setHoveredName(null),
    }),
    [],
  );

  const option = {
    tooltip: tooltipEnabled
      ? {
          trigger: "item",
          formatter: (params: { name: string; value: number }) => {
            const segment = segments.find((s) => s.name === params.name);
            if (!segment) return "";
            const percent = total > 0 ? (segment.value / total) * 100 : 0;
            return tipFmt({ segment, total, percent });
          },
        }
      : { show: false },
    legend: showLegend
      ? {
          orient: "vertical",
          right: 50,
          top: "middle",
          icon: "circle",
          itemWidth: 12,
          itemHeight: 12,
          formatter: (name: string) => `{label|${name}}`,
          textStyle: {
            rich: {
              label: {
                lineHeight: 10,
                verticalAlign: "middle",
                padding: [2, 0, 0, 4],
              },
            },
          },
          data: segments.map((s) => ({
            name: s.name,
            itemStyle: { color: s.color },
          })),
        }
      : { show: false },
    graphic: displayedCenterText
      ? [
          {
            type: "text",
            silent: true,
            z: 100,
            style: {
              x: cx,
              y: cy,
              text: displayedCenterText,
              textAlign: "center",
              textVerticalAlign: "middle",
              fontSize: 14,
              fontWeight: 600,
              fill: "#334155",
            },
          },
        ]
      : [],
    series: [
      {
        type: "pie",
        radius,
        center,
        label: { show: false },
        emphasis: { label: { show: false }, labelLine: { show: false } },
        labelLine: { show: false },
        data: segments.map((s) => ({
          value: s.value,
          name: s.name,
          itemStyle: { color: s.color },
        })),
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      notMerge
      lazyUpdate
      onEvents={onEvents}
      style={{ width, height }}
    />
  );
};

export default PieChart;
