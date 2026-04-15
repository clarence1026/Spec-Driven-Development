type FilterBarProps = {
  keyword: string;
  status: string;
  onKeywordChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onReset: () => void;
};

export function FilterBar({
  keyword,
  status,
  onKeywordChange,
  onStatusChange,
  onReset,
}: FilterBarProps) {
  return (
    <section>
      <input
        value={keyword}
        placeholder="请输入关键词"
        onChange={(event) => onKeywordChange(event.target.value)}
      />

      <select
        value={status}
        onChange={(event) => onStatusChange(event.target.value)}
      >
        <option value="">全部状态</option>
        <option value="enabled">启用</option>
        <option value="disabled">停用</option>
      </select>

      <button type="button" onClick={onReset}>
        重置
      </button>
    </section>
  );
}
