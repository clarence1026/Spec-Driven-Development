# 资产索引

## 索引目的

这份索引只解决一件事：

`让团队明确当前已经有什么资产可以直接复用，以及下一步应该登记和升级什么资产`

因此，这份索引既记录“现在能直接拿来用的资产”，也记录“首轮试点后优先观察的候选资产”。

## 当前可复用资产

当前仓库处于首轮试点启动阶段，优先登记以下启动资产：

| 资产名 | 类型 | 级别 | 来源 | 当前用途 |
| --- | --- | --- | --- | --- |
| UI 页面规则确认卡模板 | template | L2 bootstrap | `docs/quickstart/templates/02-ui-rule-card.md` | 供 UI 页面规则确认使用 |
| Page Spec MVP 模板 | template | L2 bootstrap | `docs/quickstart/templates/04-page-spec.yaml` | 供首轮页面 Spec 起草使用 |
| Review Checklist 模板 | rule-template | L2 bootstrap | `docs/quickstart/templates/05-review-checklist.md` | 供页面评审使用 |
| Implementation Record 模板 | template | L2 bootstrap | `docs/quickstart/templates/06-implementation-record.md` | 供回写与资产判断使用 |
| P1 用户列表页案例 | case | L1 sample | `docs/quickstart/examples/p1-user-list/` | 供首轮试点参考 |

这些资产的共同特点是：

- 已经可以直接支撑首轮试点启动
- 可以减少从零组织材料的成本
- 能帮助团队快速进入统一执行口径

## 优先复用顺序

启动试点时，不建议从零写，优先按下面顺序复用：

1. `docs/quickstart/templates/`
2. `docs/quickstart/examples/p1-user-list/`
3. `docs/assets/registry.md` 中已登记资产

这条顺序的目的，是让首轮试点尽量减少重复劳动，优先消费现成对象。

## 首批候选资产

首轮试点跑完后，建议优先观察下面 5 类对象是否值得升级：

| 候选对象 | 类型 | 初始级别 | 升级信号 |
| --- | --- | --- | --- |
| list-page page spec 写法 | spec / pattern | L1 | 两个以上列表页复用 |
| UI 规则确认卡字段集 | template | L1 | UI 连续两轮低成本复用 |
| review 差异检查口径 | rule | L1 | review 问题分布趋于稳定 |
| task-context prompt | prompt | L1 | 多页面生成质量稳定 |
| implementation-record 回写格式 | template | L1 | 回写内容开始稳定复用 |

这 5 类对象优先级高，是因为它们最容易在首轮试点后形成稳定复用价值。

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
| `pattern` | list-page / detail-page / form-page |
| `spec` | page-spec-mvp / patch-spec |
| `rule` | review-checklist / ai-stop-rules |
| `prompt` | task-context prompt / page-spec prompt |
| `case` | 成功试点案例 / 反例 |

## 说明

资产索引的作用，不是把内容堆在目录里，而是明确哪些对象已经可以复用，哪些对象值得继续验证并升级。
