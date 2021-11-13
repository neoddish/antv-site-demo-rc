import React from 'react';
import { PagList, JSONView } from 'antv-site-demo-rc';

export default function App() {
  return (
    <PagList
      data={[
        { a: 1, b: 2 },
        { a: 3, b: 4 },
      ]}
      renderItem={(item) => <JSONView json={item} />}
    />
  );
}
