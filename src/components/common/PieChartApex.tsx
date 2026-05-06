import { useMemo } from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import type { CSSProperties } from "react";
import type { ChartSegment } from "./PieChart";

export type PieChartApexTooltipContext = {
  segment: ChartSegment;
  total: number;
  percent: number;
};

export type CenterLabelMode = "static" | "dynamic" | "hidden-on-hover";

export interface PieChartApexProps {
  data: ChartSegment[];
  centerLabel?: string;
  centerLabelMode?: CenterLabelMode;
  showLegend?: boolean;
  showTooltip?: boolean;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  donutSize?: string;
  legendOffsetX?: number;
  legendMarkerSize?: number;
  legendFontSize?: number;
  centerLabelColor?: string;
  centerLabelFontSize?: number;
  centerLabelFontWeight?: number;
  tooltipTextColor?: string;
  tooltipFontSize?: number;
  tooltipPadding?: number;
  tooltipBorderRadius?: number;
  tooltipLineHeight?: number;
  tooltipFormatter?: (ctx: PieChartApexTooltipContext) => string;
  centerLabelFormatter?: (ctx: PieChartApexTooltipContext) => string;
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

const PieChartApex = ({
  data,
  centerLabel,
  centerLabelMode = "static",
  showLegend = true,
  showTooltip = true,
  width = 420,
  height = 200,
  donutSize = "65%",
  legendOffsetX = -40,
  legendMarkerSize = 5,
  legendFontSize = 12,
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
}: PieChartApexProps) => {
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

  const defaultFormatter = (ctx: PieChartApexTooltipContext) =>
    `${ctx.segment.name}: ${ctx.segment.value} (${ctx.percent.toFixed(1)}%)`;
  const tipFmt = tooltipFormatter ?? defaultFormatter;

  const series = segments.map((s) => s.value);
  const labels = segments.map((s) => s.name);
  const colors = segments.map((s) => s.color!);

  const options: ApexOptions = useMemo(() => {
    const isDynamic = centerLabelMode === "dynamic";

    return {
      chart: {
        type: "donut",
        animations: { enabled: true },
      },
      labels,
      colors,
      stroke: { width: 0 },
      dataLabels: { enabled: false },
      legend: {
        show: showLegend,
        position: "right",
        offsetX: legendOffsetX,
        markers: { size: legendMarkerSize },
        fontSize: `${legendFontSize}px`,
      },
      plotOptions: {
        pie: {
          donut: {
            size: donutSize,
            labels: centerLabel
              ? {
                  show: true,
                  name: {
                    show: true,
                    offsetY: Math.round(centerLabelFontSize / 3),
                    fontSize: `${centerLabelFontSize}px`,
                    fontWeight: centerLabelFontWeight,
                    color: centerLabelColor,
                    formatter: (label: string) => {
                      if (isDynamic) {
                        const segment = segments.find((s) => s.name === label);
                        if (segment) {
                          const percent =
                            total > 0 ? (segment.value / total) * 100 : 0;
                          const fmt = centerLabelFormatter ?? tipFmt;
                          return fmt({ segment, total, percent });
                        }
                      }
                      return label;
                    },
                  },
                  value: {
                    show: false,
                  },
                  total: {
                    show: centerLabelMode !== "hidden-on-hover",
                    showAlways: centerLabelMode === "static",
                    label: centerLabel,
                    fontSize: `${centerLabelFontSize}px`,
                    fontWeight: centerLabelFontWeight,
                    color: centerLabelColor,
                    formatter: () => centerLabel,
                  },
                }
              : { show: false },
          },
          expandOnClick: false,
        },
      },
      tooltip: {
        enabled: showTooltip,
        custom: ({ seriesIndex }: { seriesIndex: number }) => {
          const segment = segments[seriesIndex];
          if (!segment) return "";
          const percent = total > 0 ? (segment.value / total) * 100 : 0;
          const text = tipFmt({ segment, total, percent });
          const bg = segment.tooltipBgColor ?? segment.color;
          return `<div style="background-color:${bg};color:${tooltipTextColor};font-size:${tooltipFontSize}px;padding:${tooltipPadding}px;border-radius:${tooltipBorderRadius}px;line-height:${tooltipLineHeight};">${text}</div>`;
        },
      },
    };
  }, [
    labels,
    colors,
    showLegend,
    legendOffsetX,
    legendMarkerSize,
    legendFontSize,
    donutSize,
    centerLabel,
    centerLabelMode,
    centerLabelColor,
    centerLabelFontSize,
    centerLabelFontWeight,
    tooltipTextColor,
    tooltipFontSize,
    tooltipPadding,
    tooltipBorderRadius,
    tooltipLineHeight,
    segments,
    total,
    tipFmt,
    centerLabelFormatter,
    showTooltip,
  ]);

  return (
    <Chart
      options={options}
      series={series}
      type="donut"
      width={width}
      height={height}
    />
  );
};

export default PieChartApex;
