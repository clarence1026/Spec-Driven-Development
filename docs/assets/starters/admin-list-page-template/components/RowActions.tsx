import type { ListRowAction, ListRowData } from "../types";

type RowActionsProps = {
  actions: ListRowAction[];
  row: ListRowData;
};

export function RowActions({ actions, row }: RowActionsProps) {
  return (
    <div>
      {actions.map((action) => (
        <button
          key={action.key}
          type="button"
          disabled={action.disabled}
          onClick={() => action.onClick(row)}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}
