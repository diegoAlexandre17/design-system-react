import { useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import type { CSSProperties } from "react";

export type ChartSegment = {
  name: string;
  value: number;
  color?: string;
  tooltipBgColor?: string;
};

export type PieChartTooltipContext = {
  segment: ChartSegment;
  total: number;
  percent: number;
};

export type CenterLabelMode = "static" | "dynamic" | "hidden-on-hover";

export interface PieChartProps {
  data: ChartSegment[];
  centerLabel?: string;
  centerLabelMode?: CenterLabelMode;
  showLegend?: boolean;
  showTooltip?: boolean;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  radius?: [string, string];
  center?: [string, string];
  legendRight?: number;
  legendIconSize?: number;
  legendFontSize?: number;
  centerLabelColor?: string;
  centerLabelFontSize?: number;
  centerLabelFontWeight?: number;
  tooltipTextColor?: string;
  tooltipFontSize?: number;
  tooltipPadding?: number;
  tooltipBorderRadius?: number;
  tooltipLineHeight?: number;
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
  legendRight = 0,
  legendIconSize = 12,
  legendFontSize = 10,
  centerLabelColor = "#334155",
  centerLabelFontSize = 14,
  centerLabelFontWeight = 400,
  tooltipTextColor = "#fff",
  tooltipFontSize = 10,
  tooltipPadding = 4,
  tooltipBorderRadius = 4,
  tooltipLineHeight = 1.2,
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

  const tooltipEnabled = showTooltip;
  const needsHoverTracking = centerLabelMode !== "static";

  const onEvents = useMemo(
    () =>
      needsHoverTracking
        ? {
            mouseover: (params: { name?: string }) => {
              if (params.name) setHoveredName(params.name);
            },
            mouseout: () => setHoveredName(null),
            globalout: () => setHoveredName(null),
          }
        : {},
    [needsHoverTracking],
  );

  const option = {
    tooltip: tooltipEnabled
      ? {
          trigger: "item",
          backgroundColor: "transparent",
          borderColor: "transparent",
          borderWidth: 0,
          padding: 0,
          extraCssText: "box-shadow: none;",
          formatter: (params: { name: string; value: number }) => {
            const segment = segments.find((s) => s.name === params.name);
            if (!segment) return "";
            const percent = total > 0 ? (segment.value / total) * 100 : 0;
            const text = tipFmt({ segment, total, percent });
            const bg = segment.tooltipBgColor ?? segment.color;
            return `<div style="background-color:${bg};color:${tooltipTextColor};font-size:${tooltipFontSize}px;padding:${tooltipPadding}px;border-radius:${tooltipBorderRadius}px;line-height:${tooltipLineHeight};">${text}</div>`;
          },
        }
      : { show: false },
    legend: showLegend
      ? {
          orient: "vertical",
          right: legendRight,
          top: "middle",
          icon: "circle",
          itemWidth: legendIconSize,
          itemHeight: legendIconSize,
          formatter: (name: string) => `{label|${name}}`,
          textStyle: {
            rich: {
              label: {
                fontSize: legendFontSize,
                lineHeight: legendFontSize,
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
              fontSize: centerLabelFontSize,
              fontWeight: centerLabelFontWeight,
              fill: centerLabelColor,
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
        emphasis: {
          scale: false,
          label: { show: false },
          labelLine: { show: false },
        },
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
