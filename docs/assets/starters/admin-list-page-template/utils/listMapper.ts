import type { ListRowData } from "../types";

type RawItem = {
  id: string;
  title: string;
  status: string;
  createdAt: string;
};

export function mapListRows(items: RawItem[]): ListRowData[] {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    status: item.status,
    createdAt: item.createdAt,
  }));
}
