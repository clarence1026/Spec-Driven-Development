import type { ListPagination } from "../types";

type PaginationSectionProps = {
  pagination: ListPagination;
};

export function PaginationSection({ pagination }: PaginationSectionProps) {
  return (
    <section>
      <span>
        第 {pagination.page} 页 / 共 {pagination.total} 条
      </span>
    </section>
  );
}
