import type { ReactNode } from 'react';
import React from 'react';
import classNames from 'classnames';
import { Steps } from 'antd';

const { Step } = Steps;

export interface StepInfo {
  title: string;
  desc?: string;
  content?: ReactNode;
}

export interface StepBarProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  current?: number;
  onChange?: (current: number) => void;
  steps: StepInfo[];
}

export const StepBar: React.FC<StepBarProps> = ({
  prefixCls = 'antvsite-rc-stepbar',
  className,
  style,
  current = 0,
  onChange = () => {},
  steps,
  ...restProps
}) => {
  const compClassName = classNames(`${prefixCls}`, className);

  return (
    <Steps
      {...restProps}
      className={compClassName}
      type="navigation"
      size="small"
      current={current}
      onChange={onChange}
      style={{
        marginBottom: '8px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
        ...style,
      }}
    >
      {steps.map((item) => (
        <Step key={item.title} title={item.title} />
      ))}
    </Steps>
  );
};
