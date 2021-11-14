import React from 'react';
import { JSONView } from 'antv-site-demo-rc';

export default function App() {
  return (
    <JSONView
      style={{ height: 400, border: '3px solid #f00' }}
      json={{ a: 1, b: 2 }}
    />
  );
}
