import React, { useEffect } from 'react';
import classNames from 'classnames';
import { specToG2Plot } from '@antv/antv-spec';

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
      specToG2Plot(spec, chartRef.current);
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
