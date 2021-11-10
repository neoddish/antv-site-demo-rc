import React from 'react';
import { LintCard } from 'antv-site-demo-rc';

export default function App() {
  return (
    <LintCard
      style={{ height: 300 }}
      lintProblems={[
        {
          type: 'SOFT',
          id: 'diff-pie-sector',
          score: 0.3752209678037489,
          docs: {
            lintText: 'Difference should be big enough for pie sectors.',
          },
        },
        {
          type: 'SOFT',
          id: 'series-qty-limit',
          score: 0.3333333333333333,
          docs: {
            lintText: 'Some charts should has at most N series.',
          },
        },
      ]}
    />
  );
}
