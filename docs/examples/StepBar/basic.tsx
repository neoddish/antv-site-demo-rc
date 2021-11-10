import React, { useState } from 'react';
import { StepBar } from 'antv-site-demo-rc';

export default function App() {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: 'Data',
      desc: 'Source data:',
      content: <h1>dataContent</h1>,
    },
    {
      title: 'Results',
      desc: 'Advices with lint recommended from data:',
      content: <h1>resultContent</h1>,
    },
    {
      title: 'Chart',
      desc: 'Render chart but you also know the limits.',
      content: <h1>plotContent</h1>,
    },
  ];

  return (
    <>
      <StepBar
        current={current}
        onChange={(cur) => {
          setCurrent(cur);
        }}
        steps={steps}
      />

      <p>{steps[current].desc}</p>

      <div style={{ height: 'calc(100% - 80px)' }}>
        {steps[current].content}
      </div>
    </>
  );
}
