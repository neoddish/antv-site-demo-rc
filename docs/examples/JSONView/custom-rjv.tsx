import React from 'react';
import { JSONView } from 'antv-site-demo-rc';

export default function App() {
  const json = {
    type: 'column_chart',
    spec: {
      basis: {
        type: 'chart',
      },
      data: {
        type: 'json-array',
        values: [
          {
            price: 100,
            type: 'A',
          },
          {
            price: 120,
            type: 'B',
          },
          {
            price: 150,
            type: 'C',
          },
        ],
      },
      layer: [
        {
          mark: {
            type: 'bar',
          },
          encoding: {
            x: {
              field: 'type',
              type: 'nominal',
            },
            y: {
              field: 'price',
              type: 'quantitative',
            },
          },
        },
      ],
    },
    score: 1.5,
    lint: [],
  };

  return (
    <JSONView
      style={{ height: 300 }}
      json={json}
      rjvConfigs={{
        iconStyle: 'triangle',
        collapsed: 1,
        displayDataTypes: false,
        displayObjectSize: false,
      }}
    />
  );
}
