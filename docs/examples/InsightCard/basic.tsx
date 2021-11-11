import React from 'react';
import { InsightCard } from 'antv-site-demo-rc';

const data = [
  {
    year: '1955',
    fertility: 4.984892063492065,
  },
  {
    year: '1960',
    fertility: 4.975757142857144,
  },
  {
    year: '1965',
    fertility: 4.622139682539682,
  },
  {
    year: '1970',
    fertility: 4.208587301587301,
  },
  {
    year: '1975',
    fertility: 3.7836650793650795,
  },
  {
    year: '1980',
    fertility: 3.503712698412698,
  },
  {
    year: '1985',
    fertility: 3.204465873015874,
  },
  {
    year: '1990',
    fertility: 2.9165031746031747,
  },
  {
    year: '1995',
    fertility: 2.647646825396825,
  },
  {
    year: '2000',
    fertility: 2.467673015873016,
  },
  {
    year: '2005',
    fertility: 2.3482634920634924,
  },
];

const visualizationSchemas = [
  {
    chartType: 'line_chart',
    chartSchema: {
      xField: 'year',
      yField: 'fertility',
      annotations: [
        {
          type: 'line',
          start: ['min', 5.06],
          end: ['max', 2.16],
          style: {
            lineDash: [2, 2],
            stroke: '#E09322',
          },
        },
      ],
    },
    caption: 'Trend appearing in fertility(MEAN) by year',
    insightSummary: ['The fertility goes decreasing.'],
  },
];

export default function App() {
  const insightInfo = {
    data,
    visualizationSchemas,
  };

  return <InsightCard insightInfo={insightInfo} width={1000} height={300} />;
}
