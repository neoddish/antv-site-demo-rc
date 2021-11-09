import React from 'react';
import { JSONView } from 'antv-site-demo-rc';

export default function App() {
  return <JSONView style={{ height: 300 }} json={{ a: 1, b: 2 }} />;
}
