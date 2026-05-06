import { useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import type { CSSProperties } from "react";

export type ChartSegment = {
  name: string;
  value: number;
  color?: string;
  tooltipBgColor?: string;
};

export type Ring = {
  segments: ChartSegment[];
  fillTo?: number;
  radius?: [string, string];
};

export type RingsChartTooltipContext = {
  segment: ChartSegment;
  ringTotal: number;
  percent: number;
};

export type CenterLabelMode = "static" | "dynamic" | "hidden-on-hover";

export interface RingsChartProps {
  rings: Ring[];
  centerLabel?: string;
  centerLabelMode?: CenterLabelMode;
  center?: [string, string];
  outerRadius?: number;
  ringThickness?: number;
  ringGap?: number;
  fillerColor?: string;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  showLegend?: boolean;
  showTooltip?: boolean;
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
  tooltipFormatter?: (ctx: RingsChartTooltipContext) => string;
  centerLabelFormatter?: (ctx: RingsChartTooltipContext) => string;
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

const FILLER_NAME = "__filler__";

const RingsChart = ({
  rings,
  centerLabel,
  centerLabelMode = "static",
  center = ["30%", "50%"],
  outerRadius = 82,
  ringThickness = 6,
  ringGap = 5,
  fillerColor = "#e3e3e3",
  width = 420,
  height = 200,
  showLegend = true,
  showTooltip = true,
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
}: RingsChartProps) => {
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  const enrichedRings = useMemo(() => {
    let colorIndex = 0;
    return rings.map((ring, ringIndex) => {
      const segments = ring.segments.map((seg) => ({
        ...seg,
        color: seg.color ?? DEFAULT_COLORS[colorIndex++ % DEFAULT_COLORS.length],
      }));
      const radius =
        ring.radius ??
        ([
          `${outerRadius - ringIndex * (ringThickness + ringGap) - ringThickness}%`,
          `${outerRadius - ringIndex * (ringThickness + ringGap)}%`,
        ] as [string, string]);
      const sum = segments.reduce((acc, s) => acc + s.value, 0);
      const ringTotal = ring.fillTo ?? sum;
      return { segments, radius, fillTo: ring.fillTo, ringTotal };
    });
  }, [rings, outerRadius, ringThickness, ringGap]);

  const segmentLookup = useMemo(() => {
    const map = new Map<string, { segment: ChartSegment; ringTotal: number }>();
    enrichedRings.forEach((ring) => {
      ring.segments.forEach((seg) => {
        map.set(seg.name, { segment: seg, ringTotal: ring.ringTotal });
      });
    });
    return map;
  }, [enrichedRings]);

  const defaultFormatter = (ctx: RingsChartTooltipContext) =>
    `${ctx.segment.name}: ${ctx.segment.value} (${ctx.percent.toFixed(1)}%)`;
  const tipFmt = tooltipFormatter ?? defaultFormatter;
  const labelFmt = centerLabelFormatter ?? tipFmt;

  const widthNum = typeof width === "number" ? width : 420;
  const heightNum = typeof height === "number" ? height : 200;
  const cx = (widthNum * parseFloat(center[0])) / 100;
  const cy = (heightNum * parseFloat(center[1])) / 100;

  const hoveredEntry =
    hoveredName && hoveredName !== FILLER_NAME
      ? segmentLookup.get(hoveredName)
      : undefined;
  const hoveredPercent =
    hoveredEntry && hoveredEntry.ringTotal > 0
      ? (hoveredEntry.segment.value / hoveredEntry.ringTotal) * 100
      : 0;

  let displayedCenterText: string | null = null;
  if (centerLabel) {
    if (centerLabelMode === "hidden-on-hover" && hoveredEntry) {
      displayedCenterText = null;
    } else if (centerLabelMode === "dynamic" && hoveredEntry) {
      displayedCenterText = labelFmt({
        segment: hoveredEntry.segment,
        ringTotal: hoveredEntry.ringTotal,
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
            if (params.name === FILLER_NAME) return "";
            const found = segmentLookup.get(params.name);
            if (!found) return "";
            const { segment, ringTotal } = found;
            const percent =
              ringTotal > 0 ? (segment.value / ringTotal) * 100 : 0;
            const text = tipFmt({ segment, ringTotal, percent });
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
          data: enrichedRings.flatMap((r) =>
            r.segments.map((s) => ({
              name: s.name,
              itemStyle: { color: s.color },
            })),
          ),
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
    series: enrichedRings.map((ring) => {
      const data: Array<{
        value: number;
        name: string;
        itemStyle: { color: string };
        tooltip?: { show: boolean };
        emphasis?: { disabled: boolean };
      }> = ring.segments.map((s) => ({
        value: s.value,
        name: s.name,
        itemStyle: { color: s.color! },
      }));

      if (ring.fillTo !== undefined) {
        const sum = ring.segments.reduce((acc, s) => acc + s.value, 0);
        const fillerValue = Math.max(ring.fillTo - sum, 0);
        if (fillerValue > 0) {
          data.push({
            value: fillerValue,
            name: FILLER_NAME,
            itemStyle: { color: fillerColor },
            tooltip: { show: false },
            emphasis: { disabled: true },
          });
        }
      }

      return {
        type: "pie",
        radius: ring.radius,
        center,
        label: { show: false },
        emphasis: {
          scale: false,
          label: { show: false },
          labelLine: { show: false },
        },
        labelLine: { show: false },
        data,
      };
    }),
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

export default RingsChart;
