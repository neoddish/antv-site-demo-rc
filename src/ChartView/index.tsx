import React, { useEffect } from 'react';
import classNames from 'classnames';
import { specToG2Plot } from '@antv/antv-spec';

export interface ChartViewProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  ref: React.RefObject<any>;
  spec: any;
}

export const ChartView: React.FC<ChartViewProps> = ({
  prefixCls = 'antvsite-rc-tableview',
  className,
  style,
  ref,
  spec,
  ...restProps
}) => {
  const compClassName = classNames(`${prefixCls}`, className);

  const height = style?.height || 200;
  const width = style?.width || '100%';

  useEffect(() => {
    if (ref.current) {
      specToG2Plot(spec, ref.current);
    }
  });

  return (
    <div
      {...restProps}
      className={compClassName}
      ref={ref}
      style={{ width, height, margin: 'auto' }}
    />
  );
};
