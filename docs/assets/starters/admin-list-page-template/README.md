# Admin List Page Template（后台列表页代码模板）

## 目的

这个目录不是概念说明，而是：

`后台列表页 Starter 的代码级骨架参考`

适合用于：

- FE 直接复制后开始改造
- AI 按固定结构生成页面代码
- 团队统一后台列表页的基本拆分方式

## 推荐目录

```text
admin-list-page-template/
  README.md
  index.ts
  types.ts
  page/
    AdminListPage.tsx
  components/
    PageHeader.tsx
    FilterBar.tsx
    DataStateContainer.tsx
    TableSection.tsx
    PaginationSection.tsx
    RowActions.tsx
  hooks/
    useListFilters.ts
    useListQuery.ts
  utils/
    listColumns.ts
    listMapper.ts
```

## 使用方式

推荐顺序：

1. 复制整个目录到真实项目中
2. 根据页面 spec 修改 `types.ts`
3. 根据页面字段修改 `utils/listColumns.ts`
4. 根据接口结构修改 `hooks/useListQuery.ts`
5. 根据筛选条件修改 `hooks/useListFilters.ts`
6. 根据页面风格接入项目里的 theme / token

## 对应关系

| 代码位置 | 主要职责 |
| --- | --- |
| `page/AdminListPage.tsx` | 页面装配层 |
| `components/PageHeader.tsx` | 页面标题与说明 |
| `components/FilterBar.tsx` | 筛选区 |
| `components/DataStateContainer.tsx` | loading / error / empty 状态切换 |
| `components/TableSection.tsx` | 表格区 |
| `components/PaginationSection.tsx` | 分页区 |
| `components/RowActions.tsx` | 行级操作区 |
| `hooks/useListQuery.ts` | 数据查询 |
| `hooks/useListFilters.ts` | 筛选状态管理 |
| `utils/listColumns.ts` | 表格列定义 |
| `utils/listMapper.ts` | 接口数据到页面数据映射 |

## 注意

- 这个模板优先解决“结构稳定”和“可复制启动”
- 不负责绑定具体 UI 框架
- 不负责具体 theme / token 值
- 真实项目接入时，应优先使用项目已有组件和样式体系
