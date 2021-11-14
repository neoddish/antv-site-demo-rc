import React, { useRef, useEffect } from 'react';
import * as G2Plot from '@antv/g2plot';
import type { MutableRefObject } from 'react';
import type { Plot, MixOptions } from '@antv/g2plot';

export const G2PLOT_TYPE_MAPPING: Record<string, string> = {
  line_chart: 'Line',

  area_chart: 'Area',

  column_chart: 'Column',

  bar_chart: 'Bar',

  histogram: 'Histogram',

  pie_chart: 'Pie',

  scatter_plot: 'Scatter',

  heatmap: 'Heatmap',
};

export interface PlotCardProps {
  data: any;
  schema: any;
  chartType: string;
  caption?: string;
  width?: number;
  height?: number;
}

export const PlotCard: React.FC<PlotCardProps> = ({
  data,
  schema,
  chartType,
  caption,
  width,
  height,
}) => {
  const container = useRef(null);
  const plotRef: MutableRefObject<Plot<MixOptions> | null> =
    useRef<Plot<MixOptions>>(null);

  useEffect(() => {
    if (plotRef.current) plotRef.current?.destroy();
    const plotType = G2PLOT_TYPE_MAPPING[chartType];
    const plot = new (G2Plot as any)[plotType](container.current, {
      data,
      ...schema,
    });
    plot.render();
    plotRef.current = plot;
  }, [chartType, data, schema]);

  useEffect(() => {
    if (plotRef.current) {
      plotRef.current.update({ data, ...schema });
      plotRef.current.render();
    }
  }, [data, schema]);

  return (
    <div
      style={{
        height: height || 400,
        width: width || 600,
        margin: '24px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          height: '32px',
          lineHeight: '32px',
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 24,
          marginLeft: 24,
        }}
      >
        {caption}
      </div>
      <div style={{ flex: 1 }} ref={container} />
    </div>
  );
};
