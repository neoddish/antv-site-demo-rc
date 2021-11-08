import React from 'react';
import classNames from 'classnames';
import ReactJson from 'react-json-view';

export interface JSONViewProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  json: any;
}

export const JSONView: React.FC<JSONViewProps> = ({
  prefixCls = 'antvsite-rc-jsonview',
  className,
  style,
  json,
  ...restProps
}) => {
  const compClassName = classNames(`${prefixCls}`, className);
  return (
    <div
      {...restProps}
      className={compClassName}
      style={{
        ...style,
      }}
    >
      <ReactJson
        src={json}
        iconStyle="circle"
        name={false}
        displayObjectSize={false}
        displayDataTypes={false}
      />
    </div>
  );
};
