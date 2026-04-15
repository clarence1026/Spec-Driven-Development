export type ListFilterValues = {
  keyword: string;
  status: string;
};

export type ListPagination = {
  page: number;
  pageSize: number;
  total: number;
};

export type ListRowAction = {
  key: string;
  label: string;
  disabled?: boolean;
  onClick: (row: ListRowData) => void;
};

export type ListRowData = {
  id: string;
  title: string;
  status: string;
  createdAt: string;
  subtitle?: string;
};

export type ListQueryResult = {
  items: ListRowData[];
  pagination: ListPagination;
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  refetch: () => void;
};
