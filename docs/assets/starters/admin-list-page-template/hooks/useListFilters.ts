import { useState } from "react";
import type { ListFilterValues } from "../types";

const initialFilters: ListFilterValues = {
  keyword: "",
  status: "",
};

export function useListFilters() {
  const [filters, setFilters] = useState<ListFilterValues>(initialFilters);

  return {
    filters,
    setKeyword: (keyword: string) =>
      setFilters((current) => ({ ...current, keyword })),
    setStatus: (status: string) =>
      setFilters((current) => ({ ...current, status })),
    resetFilters: () => setFilters(initialFilters),
  };
}
