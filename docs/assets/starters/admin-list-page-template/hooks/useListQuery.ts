import type { ListFilterValues, ListQueryResult } from "../types";
import { mapListRows } from "../utils/listMapper";

const mockResponse = {
  items: [
    {
      id: "1",
      title: "示例数据",
      status: "enabled",
      createdAt: "2026-04-15 10:00:00",
    },
  ],
  pagination: {
    page: 1,
    pageSize: 20,
    total: 1,
  },
};

export function useListQuery(filters: ListFilterValues): ListQueryResult {
  void filters;

  return {
    items: mapListRows(mockResponse.items),
    pagination: mockResponse.pagination,
    isLoading: false,
    isError: false,
    isEmpty: mockResponse.items.length === 0,
    refetch: () => {
      console.log("refetch list");
    },
  };
}
