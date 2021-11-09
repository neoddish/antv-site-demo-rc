import React from 'react';
import classNames from 'classnames';
import { SheetComponent } from '@antv/s2';

export interface TableViewProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  data: any[];
}

export const TableView: React.FC<TableViewProps> = ({
  prefixCls = 'antvsite-rc-tableview',
  className,
  style,
  data,
  ...restProps
}) => {
  const compClassName = classNames(`${prefixCls}`, className);

  const s2DataConfig = { fields: { columns: Object.keys(data[0]) }, data };

  const height = parseInt(`${style?.height}`) || 300;
  const width = parseInt(`${style?.width}`) || 600;
  const s2options = { width, height };

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
      <SheetComponent
        dataCfg={s2DataConfig}
        options={s2options}
        sheetType="table"
        themeCfg={{ name: 'simple' }}
      />
    </div>
  );
};
