# Admin List Page Starter（后台列表页起步模板）

## Starter（起步模板）目标

这个 Starter 用于：

`让后台表格列表页可以不从零开始，而是直接基于稳定结构启动。`

适用页面：

- 用户列表
- 订单列表
- 内容列表
- 商家列表

## 适用边界

适合：

- 标准后台表格列表页
- 需要筛选、分页、行级操作的页面
- `PC / Pad / Mobile` 三端表达

不适合：

- 卡片型列表
- 强定制工作台页面
- 复杂联动筛选和大盘页

## Starter 结构

推荐页面结构：

```text
AdminListPageStarter
|- PageHeader
|- FilterBar
|  |- KeywordField
|  |- StatusFilter
|  |- ActionButtons
|- DataStateContainer
|  |- LoadingState
|  |- ErrorState
|  |- EmptyState
|  |- TableSection
|     |- Table
|     |- RowActions
|- PaginationSection
```

## 推荐代码拆分

```text
pages/
  <module>/
    index.tsx

components/
  AdminListPage/
    PageHeader.tsx
    FilterBar.tsx
    DataStateContainer.tsx
    TableSection.tsx
    PaginationSection.tsx
    RowActions.tsx

hooks/
  use<Module>ListQuery.ts
  use<Module>ListFilters.ts

utils/
  <module>ListColumns.ts
  <module>ListMapper.ts
```

## Spec -> Code 映射

| Spec 段落 | Starter 对应 |
| --- | --- |
| `Task Context` | 页面目标、范围、角色与接口背景 |
| `UI Rules -> Page Structure` | `PageHeader / FilterBar / TableSection / PaginationSection` |
| `UI Rules -> States` | `DataStateContainer` |
| `UI Rules -> Interactions` | 筛选、分页、行级操作处理 |
| `Page Spec -> Data / Fields` | columns、mapper、row action 配置 |
| `Review Focus` | review checklist 输入 |
| `Writeback / Asset Candidates` | 实现差异和候选资产记录 |

## AI 消费方式

AI 使用这个 Starter 时，优先固定以下骨架：

1. 先生成 `PageHeader + FilterBar + TableSection + PaginationSection`
2. 再根据 spec 补充字段、状态、筛选项和行级操作
3. 再接入 theme / token、移动端表达和异常状态

## 最先可抽出的 Kit

当复用稳定后，可继续从这个 Starter 中抽出：

- `admin-list-kit`
  - filter bar
  - table section
  - pagination section
  - row actions

## 当前价值

这个 Starter 的价值不是“解释列表页长什么样”，而是：

`让一个新的后台列表页不必从空白开始。`
