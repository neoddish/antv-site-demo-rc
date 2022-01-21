import React from 'react';
import classNames from 'classnames';
import type { SpreadsheetProps } from '@antv/s2-react';
import { SheetComponent } from '@antv/s2-react';

export interface TableViewProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  s2Configs?: Omit<SpreadsheetProps, 'dataCfg' | 'options'>;
  tableHeight?: number;
  tableWidth?: number;
  data: any[];
}

export const TableView: React.FC<TableViewProps> = ({
  prefixCls = 'antvsite-rc-tableview',
  className,
  style,
  s2Configs,
  tableHeight,
  tableWidth,
  data,
  ...restProps
}) => {
  const compClassName = classNames(`${prefixCls}`, className);

  const s2DataConfig = {
    fields: { columns: Object.keys(data?.[0] || {}) },
    data,
  };

  const height =
    tableHeight ||
    (!`${style?.height}`.includes('%') && parseInt(`${style?.height}`)) ||
    300;
  const width =
    tableWidth ||
    (!`${style?.width}`.includes('%') && parseInt(`${style?.width}`)) ||
    600;
  const s2options = { width, height };

  return (
    <div
      {...restProps}
      className={compClassName}
      style={{
        textAlign: 'center',
        overflowY: 'scroll',
        border: '1px solid #eee',
        ...style,
      }}
    >
      <SheetComponent
        dataCfg={s2DataConfig}
        options={s2options}
        sheetType="table"
        themeCfg={{ name: 'colorful' }}
        {...s2Configs}
      />
    </div>
  );
};
