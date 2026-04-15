# Task Context

## Task Name
用户列表页试点

## Delivery Mode
- 页面类型：List Page
- 当前模式：轻量模式
- pattern 来源：默认 pattern 参考 `docs/quickstart/examples/p1-user-list/`

## Goal
帮助运营查看用户列表，并通过搜索与状态筛选快速定位目标用户。

## Pages / Scope
- 用户列表页

## Input Sources
- PRD / 需求片段：用户运营后台一期
- Figma / 原型：用户列表页设计稿
- 历史页面 / 设计系统：后台通用列表页模式
- Issue / 需求单：新增状态筛选与空态提示

## Change Summary
- 建立用户列表页首轮页面级试点执行包
- 支持搜索、状态筛选、列表展示、空态与错误态

## Users / Roles
- 主要用户或使用角色：运营人员
- 关键权限假设：有列表查看权限的运营可访问页面；无详情权限时不可进入详情页

## Scope
### In Scope
- 用户列表展示
- 用户名搜索
- 状态筛选
- 空态 / 错误态

### Out of Scope
- 批量编辑
- 批量删除
- 用户详情编辑

## Constraints
- 沿用后台通用列表页视觉样式
- 当前阶段不引入新组件库

## Rule Confirmation
- UI 是否参与规则确认：是
- 若否，规则代理人是谁：无
- 是否需要后续 UI 复核：否

## Acceptance Hints
- 搜索与状态筛选可以叠加
- 空态有明确提示
- 错误态可识别

## Open Questions
- 是否需要导出能力，当前暂未纳入
