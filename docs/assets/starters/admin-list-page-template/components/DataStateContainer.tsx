import type { ReactNode } from "react";

type DataStateContainerProps = {
  children: ReactNode;
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  onRetry: () => void;
};

export function DataStateContainer({
  children,
  isLoading,
  isError,
  isEmpty,
  onRetry,
}: DataStateContainerProps) {
  if (isLoading) {
    return <div>加载中...</div>;
  }

  if (isError) {
    return (
      <div>
        <p>加载失败</p>
        <button type="button" onClick={onRetry}>
          重试
        </button>
      </div>
    );
  }

  if (isEmpty) {
    return <div>暂无数据</div>;
  }

  return <>{children}</>;
}
