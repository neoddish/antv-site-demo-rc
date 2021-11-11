import React from 'react';
import classNames from 'classnames';
import type { ReactJsonViewProps } from 'react-json-view';
import ReactJson from 'react-json-view';

export interface JSONViewProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  rjvConfigs?: Omit<ReactJsonViewProps, 'src'>;
  json: any;
}

export const JSONView: React.FC<JSONViewProps> = ({
  prefixCls = 'antvsite-rc-jsonview',
  className,
  style,
  rjvConfigs,
  json,
  ...restProps
}) => {
  const compClassName = classNames(`${prefixCls}`, className);
  return (
    <div
      {...restProps}
      className={compClassName}
      style={{
        height: '400px',
        padding: '20px',
        overflowY: 'scroll',
        border: '2px solid #eee',
        ...style,
      }}
    >
      <ReactJson
        src={json}
        iconStyle="circle"
        name={false}
        displayObjectSize={false}
        displayDataTypes={false}
        {...rjvConfigs}
      />
    </div>
  );
};
