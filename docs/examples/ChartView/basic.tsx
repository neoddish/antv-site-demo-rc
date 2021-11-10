import React, { useRef } from 'react';
import { ChartView } from 'antv-site-demo-rc';

export default function App() {
  const myRef = useRef();
  return (
    <ChartView
      style={{ height: 300 }}
      chartRef={myRef}
      spec={{
        basis: {
          type: 'chart',
        },
        data: {
          type: 'json-array',
          values: [
            {
              price: 520,
              year1: 2005,
            },
            {
              price: 600,
              year1: 2006,
            },
            {
              price: 1500,
              year1: 2007,
            },
          ],
        },
        layer: [
          {
            mark: {
              type: 'line',
            },
            encoding: {
              x: {
                field: 'year1',
                type: 'temporal',
              },
              y: {
                field: 'price',
                type: 'quantitative',
              },
            },
          },
        ],
      }}
    />
  );
}
