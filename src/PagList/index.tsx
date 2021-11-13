import 'antd/dist/antd.less';
import React from 'react';
import classNames from 'classnames';
import { List } from 'antd';

export interface PagListProps<T> {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export function PagList<T>({
  prefixCls = 'antvsite-rc-lintcard',
  className,
  style,
  data,
  renderItem,
  ...restProps
}: PagListProps<T>) {
  const compClassName = classNames(`${prefixCls}`, className);

  return (
    <List
      {...restProps}
      className={compClassName}
      style={style}
      key={`paglist-${+new Date()}`}
      itemLayout="vertical"
      pagination={{ pageSize: 1, position: 'top' }}
      dataSource={data}
      split={false}
      renderItem={(item, index) => {
        return <List.Item key={index}>{renderItem(item, index)}</List.Item>;
      }}
    />
  );
}
