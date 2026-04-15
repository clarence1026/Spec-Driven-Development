# 资产索引

## 索引目的

这份索引只解决一件事：

`让团队明确当前已经有什么资产可以直接复用，以及下一步应该登记和升级什么资产`

因此，这份索引既记录“现在能直接拿来用的资产”，也记录“首轮试点后优先观察的候选资产”。

## 当前可复用资产

当前仓库处于 superpowers-first 试点启动阶段，优先登记以下启动资产：

| 资产名 | 类型 | 级别 | 来源 | 当前用途 |
| --- | --- | --- | --- | --- |
| Superpowers Spec 骨架 | template | L2 bootstrap | `docs/superpowers/spec-template.md` | 供页面 spec 起草使用 |
| Superpowers Plan 骨架 | template | L2 bootstrap | `docs/superpowers/plan-template.md` | 供页面 plan 起草使用 |
| P1 用户列表页案例 | case | L1 sample | `docs/quickstart/examples/p1-user-list/` | 供理解历史逻辑工件和闭环结构参考 |

这些资产的共同特点是：

- 已经可以直接支撑首轮试点启动
- 可以减少从零组织材料的成本
- 能帮助团队快速进入统一执行口径

当前 `theme / token / kit` 目录已经预留，但仍以候选观察为主，待真实页面复用稳定后再进入正式共享资产清单。

## 优先复用顺序

启动试点时，不建议从零写，优先按下面顺序复用：

1. `docs/superpowers/spec-template.md`
2. `docs/superpowers/plan-template.md`
3. `docs/assets/registry.md` 中已登记资产

这条顺序的目的，是让首轮试点尽量减少重复劳动，优先消费现成对象。

## 首批候选资产

首轮试点跑完后，建议优先观察下面 8 类对象是否值得升级：

| 候选对象 | 类型 | 初始级别 | 升级信号 |
| --- | --- | --- | --- |
| `list-page-table` 页面模式 | pattern | L1 | 两个以上后台列表页复用 |
| `responsive-admin-rule` | rule | L1 | 三端适配问题开始趋于稳定 |
| `permission-rule` | rule | L1 | 页面 / 按钮权限口径开始稳定复用 |
| `review-admin-checklist` | rule | L1 | review 问题分布趋于稳定 |
| `superpowers-spec-structure` | template | L1 | 多个后台页面按同一 spec 结构生成 |
| `admin-theme-foundation` | theme | L1 | 两个以上后台页面开始复用同一品牌或主题基础值 |
| `admin-token-set` | token | L1 | 颜色、字号、间距、圆角等基础值开始形成稳定命名 |
| `admin-component-kit` | kit | L1 | 列表、表单、详情页开始复用同一套组件封装和样式能力 |

这 8 类对象优先级高，是因为它们最符合当前“基于 superpowers-first 执行入口沉淀增量交付资产”的方向。

## 登记最小字段

后续每登记一个资产，建议至少补齐下面 6 个字段：

- 资产名
- 类型
- 当前级别
- 来源
- 当前用途
- 下一步动作

如果一个对象连这 6 个字段都暂时说不清，通常说明它还不适合进入正式资产索引。

## 后续扩展方向

随着试点推进，后续建议优先扩展以下资产类型：

| 类型 | 示例 |
| --- | --- |
| `pattern` | list-page-table / detail-page-basic / form-page-basic |
| `spec` | superpowers-spec-structure / patch-spec |
| `rule` | review-admin-checklist / responsive-admin-rule / permission-rule |
| `theme / token` | admin-theme-foundation / admin-token-set |
| `kit` | admin-component-kit |
| `prompt / workflow` | task-context prompt / spec prompt / review workflow |
| `case` | 成功试点案例 / 反例 |

## 说明

资产索引的作用，不是把内容堆在目录里，而是明确哪些对象已经可以复用，哪些对象值得继续验证并升级。
