import { DataStateContainer } from "../components/DataStateContainer";
import { FilterBar } from "../components/FilterBar";
import { PageHeader } from "../components/PageHeader";
import { PaginationSection } from "../components/PaginationSection";
import { TableSection } from "../components/TableSection";
import { useListFilters } from "../hooks/useListFilters";
import { useListQuery } from "../hooks/useListQuery";
import { createListColumns } from "../utils/listColumns";
import type { ListRowAction } from "../types";

export function AdminListPage() {
  const { filters, setKeyword, setStatus, resetFilters } = useListFilters();
  const query = useListQuery(filters);

  const rowActions: ListRowAction[] = [
    {
      key: "detail",
      label: "查看详情",
      onClick: (row) => {
        console.log("go detail", row.id);
      },
    },
  ];

  const columns = createListColumns(rowActions);

  return (
    <div>
      <PageHeader
        title="页面标题"
        description="这里放后台列表页的简短说明。"
      />

      <FilterBar
        keyword={filters.keyword}
        status={filters.status}
        onKeywordChange={setKeyword}
        onStatusChange={setStatus}
        onReset={resetFilters}
      />

      <DataStateContainer
        isLoading={query.isLoading}
        isError={query.isError}
        isEmpty={query.isEmpty}
        onRetry={query.refetch}
      >
        <TableSection columns={columns} rows={query.items} />
        <PaginationSection pagination={query.pagination} />
      </DataStateContainer>
    </div>
  );
}
