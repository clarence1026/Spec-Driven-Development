import { RowActions } from "../components/RowActions";
import type { ColumnConfig } from "../components/TableSection";
import type { ListRowAction, ListRowData } from "../types";

export function createListColumns(actions: ListRowAction[]): ColumnConfig[] {
  return [
    {
      key: "title",
      title: "名称",
      render: (row: ListRowData) => row.title,
    },
    {
      key: "status",
      title: "状态",
      render: (row: ListRowData) => row.status,
    },
    {
      key: "createdAt",
      title: "创建时间",
      render: (row: ListRowData) => row.createdAt,
    },
    {
      key: "actions",
      title: "操作",
      render: (row: ListRowData) => <RowActions actions={actions} row={row} />,
    },
  ];
}
