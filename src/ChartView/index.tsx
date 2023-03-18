import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Chart } from '@antv/g2';

export interface ChartViewProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  chartRef: React.RefObject<any>;
  spec: any;
}

export const ChartView: React.FC<ChartViewProps> = ({
  prefixCls = 'antvsite-rc-chartview',
  className,
  style,
  chartRef,
  spec,
  ...restProps
}) => {
  const compClassName = classNames(`${prefixCls}`, className);

  const height = style?.height || 200;
  const width = style?.width || '100%';

  useEffect(() => {
    if (chartRef?.current) {
      const chart = new Chart({
        theme: 'classic',
        container: chartRef.current,
        autoFit: true,
      });
      chart.options(spec);
      chart.render();
    }
  });

  return (
    <div
      {...restProps}
      className={compClassName}
      ref={chartRef}
      style={{ width, height, margin: 'auto' }}
    />
  );
};
