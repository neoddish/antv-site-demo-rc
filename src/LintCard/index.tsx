import 'antd/dist/antd.less';
import React from 'react';
import classNames from 'classnames';
import { List } from 'antd';

export interface LintCardProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  lintProblems: any[];
}

export const LintCard: React.FC<LintCardProps> = ({
  prefixCls = 'antvsite-rc-lintcard',
  className,
  style,
  lintProblems,
  ...restProps
}) => {
  const compClassName = classNames(`${prefixCls}`, className);

  return (
    <List
      {...restProps}
      className={compClassName}
      style={style}
      key={`lint-${+new Date()}`}
      itemLayout="vertical"
      pagination={{ pageSize: 1 }}
      dataSource={lintProblems}
      split={false}
      renderItem={(item, index) => {
        return (
          <List.Item key={index}>
            <strong style={{ fontSize: 18 }}>Error ID: {item.id}</strong>
            <div>Error Type: {item.type}</div>
            <div>Score: {item.score}</div>
            <div>docs: {item.docs.lintText}</div>
          </List.Item>
        );
      }}
    />
  );
};
