# 页面规则表达

## Page
用户列表页

## Goal
为运营提供用户查询、筛选和状态查看能力。

## Layout
页面由头部、筛选栏、数据表格、分页组成，主操作集中在筛选栏与表格区。

## Components
- Page Header
- Filter Bar
- User Table
- Pagination

## Component Contracts
### Component: Filter Bar
#### Purpose
提供搜索和状态筛选入口。

#### States
- ready

#### Interactions
- 输入关键词后触发搜索
- 切换状态筛选项后更新列表

#### Responsive Rules
- Mobile 下改为纵向堆叠

#### Content Constraints
- 筛选项文案简短，不折行过多

### Component: User Table
#### Purpose
展示用户核心字段并提供详情入口。

#### States
- loading
- ready
- empty
- error

#### Interactions
- 点击行进入详情

#### Responsive Rules
- Mobile 下仅保留核心字段

#### Content Constraints
- 备注字段过长时截断

## Page States
- loading
- ready
- empty
- error

## Key Interactions
- 搜索
- 状态筛选
- 点击行进入详情

## Responsive Strategy
桌面端完整展示；移动端折叠筛选栏并缩减表格字段。

## Design System Dependencies
- 后台表格模式
- 状态标签模式
