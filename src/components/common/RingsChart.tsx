import { useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import type { CSSProperties } from "react";

export type RingSegment = {
  name: string;
  value: number;
  color?: string;
};

export type Ring = {
  segments: RingSegment[];
  fillTo?: number;
  radius?: [string, string];
};

export type RingsChartTooltipContext = {
  segment: RingSegment;
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
    const map = new Map<string, { segment: RingSegment; ringTotal: number }>();
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
            if (params.name === FILLER_NAME) return "";
            const found = segmentLookup.get(params.name);
            if (!found) return "";
            const { segment, ringTotal } = found;
            const percent =
              ringTotal > 0 ? (segment.value / ringTotal) * 100 : 0;
            return tipFmt({ segment, ringTotal, percent });
          },
        }
      : { show: false },
    legend: showLegend
      ? {
          orient: "vertical",
          right: 0,
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
              fontSize: 14,
              fontWeight: 700,
              fill: "#334155",
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
          });
        }
      }

      return {
        type: "pie",
        radius: ring.radius,
        center,
        label: { show: false },
        emphasis: { label: { show: false }, labelLine: { show: false } },
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
