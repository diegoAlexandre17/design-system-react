import { useMemo } from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import type { CSSProperties } from "react";

export type RingApex = {
  name: string;
  value: number;
  color?: string;
  tooltipBgColor?: string;
  fillTo?: number;
};

export type RingsChartApexTooltipContext = {
  segment: {
    name: string;
    value: number;
    color?: string;
    tooltipBgColor?: string;
  };
  ringTotal: number;
  percent: number;
};

export type CenterLabelMode = "static" | "dynamic" | "hidden-on-hover";

export interface RingsChartApexProps {
  rings: RingApex[];
  centerLabel?: string;
  centerLabelMode?: CenterLabelMode;
  showLegend?: boolean;
  showTooltip?: boolean;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  hollowSize?: string;
  trackColor?: string;
  trackWidth?: string;
  legendOffsetX?: number;
  legendMarkerSize?: number;
  legendFontSize?: number;
  centerLabelColor?: string;
  centerLabelFontSize?: number;
  centerLabelFontWeight?: number;
  dynamicLabelFontSize?: number;
  tooltipTextColor?: string;
  tooltipFontSize?: number;
  tooltipPadding?: number;
  tooltipBorderRadius?: number;
  tooltipLineHeight?: number;
  tooltipFormatter?: (ctx: RingsChartApexTooltipContext) => string;
  centerLabelFormatter?: (ctx: RingsChartApexTooltipContext) => string;
}

const DEFAULT_COLORS = [
  "#58b9ff",
  "#8fd98f",
  "#2aad7d",
  "#e4ffcc",
  "#a78bfa",
  "#fb923c",
  "#22d3ee",
  "#f472b6",
];

const RingsChartApex = ({
  rings,
  centerLabel,
  centerLabelMode = "static",
  showLegend = true,
  showTooltip = true,
  width = 420,
  height = 240,
  hollowSize = "40%",
  trackColor = "#e3e3e3",
  trackWidth = "100%",
  legendOffsetX = -30,
  legendMarkerSize = 5,
  legendFontSize = 12,
  centerLabelColor = "#334155",
  centerLabelFontSize = 14,
  centerLabelFontWeight = 400,
  dynamicLabelFontSize = 12,
  tooltipTextColor = "#fff",
  tooltipFontSize = 10,
  tooltipPadding = 4,
  tooltipBorderRadius = 4,
  tooltipLineHeight = 1.2,
  tooltipFormatter,
  centerLabelFormatter,
}: RingsChartApexProps) => {
  const enriched = useMemo(
    () =>
      rings.map((r, i) => {
        const ringTotal = r.fillTo ?? Math.max(r.value, 100);
        const percent = ringTotal > 0 ? (r.value / ringTotal) * 100 : 0;
        return {
          ...r,
          color: r.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length],
          ringTotal,
          percent,
        };
      }),
    [rings],
  );

  const series = enriched.map((r) => Math.min(100, r.percent));
  const labels = enriched.map((r) => r.name);
  const colors = enriched.map((r) => r.color!);

  const defaultFormatter = (ctx: RingsChartApexTooltipContext) =>
    `${ctx.segment.name}: ${ctx.segment.value} (${ctx.percent.toFixed(1)}%)`;
  const tipFmt = tooltipFormatter ?? defaultFormatter;

  const options: ApexOptions = useMemo(() => {
    return {
      chart: {
        type: "radialBar",
      },
      labels,
      colors,
      legend: {
        show: showLegend,
        position: "right",
        offsetX: legendOffsetX,
        markers: { size: legendMarkerSize },
        fontSize: `${legendFontSize}px`,
      },
      plotOptions: {
        radialBar: {
          hollow: { size: hollowSize },
          track: { background: trackColor, strokeWidth: trackWidth },
          dataLabels: centerLabel
            ? {
                name: {
                  show: centerLabelMode === "dynamic",
                  fontSize: `${dynamicLabelFontSize}px`,
                  formatter: (label: string) => {
                    if (centerLabelMode === "dynamic") {
                      const r = enriched.find((x) => x.name === label);
                      if (r) {
                        const fmt = centerLabelFormatter ?? tipFmt;
                        return fmt({
                          segment: {
                            name: r.name,
                            value: r.value,
                            color: r.color,
                            tooltipBgColor: r.tooltipBgColor,
                          },
                          ringTotal: r.ringTotal,
                          percent: r.percent,
                        });
                      }
                    }
                    return label;
                  },
                },
                value: { show: false },
                total: {
                  show: centerLabelMode !== "hidden-on-hover",
                  label: centerLabel,
                  fontSize: `${centerLabelFontSize}px`,
                  fontWeight: centerLabelFontWeight,
                  color: centerLabelColor,
                  formatter: () => centerLabel,
                },
              }
            : { show: false },
        },
      },
      tooltip: {
        enabled: showTooltip,
        custom: ({ seriesIndex }: { seriesIndex: number }) => {
          const r = enriched[seriesIndex];
          if (!r) return "";
          const text = tipFmt({
            segment: {
              name: r.name,
              value: r.value,
              color: r.color,
              tooltipBgColor: r.tooltipBgColor,
            },
            ringTotal: r.ringTotal,
            percent: r.percent,
          });
          const bg = r.tooltipBgColor ?? r.color;
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
    hollowSize,
    trackColor,
    trackWidth,
    centerLabel,
    centerLabelMode,
    centerLabelColor,
    centerLabelFontSize,
    centerLabelFontWeight,
    dynamicLabelFontSize,
    tooltipTextColor,
    tooltipFontSize,
    tooltipPadding,
    tooltipBorderRadius,
    tooltipLineHeight,
    enriched,
    centerLabelFormatter,
    tipFmt,
    showTooltip,
  ]);

  return (
    <Chart
      options={options}
      series={series}
      type="radialBar"
      width={width}
      height={height}
    />
  );
};

export default RingsChartApex;
