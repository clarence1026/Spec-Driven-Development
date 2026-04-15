import { RowActions } from "./RowActions";
import type { ListRowAction, ListRowData } from "../types";

type ColumnConfig = {
  key: string;
  title: string;
  render: (row: ListRowData) => string | JSX.Element;
};

type TableSectionProps = {
  columns: ColumnConfig[];
  rows: ListRowData[];
};

export function TableSection({ columns, rows }: TableSectionProps) {
  return (
    <section>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.key}>{column.render(row)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export type { ColumnConfig, ListRowAction };
