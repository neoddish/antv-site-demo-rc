import React from 'react';
import { TableView } from 'antv-site-demo-rc';

export default function App() {
  return (
    <TableView
      style={{ height: 300, width: 300 }}
      data={[
        { a: 1, b: 2 },
        { a: 3, b: 4 },
      ]}
    />
  );
}
