import React from 'react';
import { TableView } from 'antv-site-demo-rc';

export default function App() {
  return (
    <TableView
      s2Configs={{
        themeCfg: {
          name: 'gray',
        },
        adaptive: true,
      }}
      data={[
        { a: 1, b: 2 },
        { a: 3, b: 4 },
      ]}
    />
  );
}
