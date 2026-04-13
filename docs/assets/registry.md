# 资产索引

## 当前状态

当前仓库处于首轮试点启动阶段，资产索引先记录“可直接复用的启动资产”和“首批候选资产类型”。

## 启动资产

| 资产名 | 类型 | 级别 | 来源 | 用途 |
| --- | --- | --- | --- | --- |
| UI 页面规则确认卡模板 | template | L2 bootstrap | `docs/quickstart/templates/02-ui-rule-card.md` | 供 UI 规则确认使用 |
| Page Spec MVP 模板 | template | L2 bootstrap | `docs/quickstart/templates/04-page-spec.yaml` | 供首轮页面 Spec 起草使用 |
| Review Checklist 模板 | rule-template | L2 bootstrap | `docs/quickstart/templates/05-review-checklist.md` | 供页面评审使用 |
| Implementation Record 模板 | template | L2 bootstrap | `docs/quickstart/templates/06-implementation-record.md` | 供回写与资产判断使用 |
| P1 用户列表页案例 | case | L1 sample | `docs/quickstart/examples/p1-user-list/` | 供首轮试点参考 |

## 优先复用顺序

启动时不要从零写，优先按下面顺序复用：

1. `docs/quickstart/templates/`
2. `docs/quickstart/examples/p1-user-list/`
3. `docs/assets/registry.md` 中已登记资产

这条顺序的目的是让首轮试点尽量少做重复劳动。

## 首批建议登记的真实候选资产

首轮试点跑完后，建议最先观察下面 5 类对象是否值得升级：

| 候选对象 | 类型 | 初始级别 | 升级信号 |
| --- | --- | --- | --- |
| list-page page spec 写法 | spec/pattern | L1 | 两个以上列表页复用 |
| UI 规则确认卡字段集 | template | L1 | UI 连续两轮低成本复用 |
| review 差异检查口径 | rule | L1 | review 问题分布趋于稳定 |
| task-context prompt | prompt | L1 | 多页面生成质量稳定 |
| implementation-record 回写格式 | template | L1 | 回写内容开始稳定复用 |

## 资产登记最小字段

后续每登记一个资产，建议至少补齐下面 6 个字段：

- 资产名
- 类型
- 当前级别
- 来源
- 当前用途
- 下一步动作

## 后续建议补充的资产类型

| 类型 | 示例 |
| --- | --- |
| `pattern` | list-page / detail-page / form-page |
| `spec` | page-spec-mvp / patch-spec |
| `rule` | review-checklist / ai-stop-rules |
| `prompt` | task-context prompt / page-spec prompt |
| `case` | 成功试点案例 / 反例 |

## 说明

资产索引的作用，是让团队明确当前已有的可复用对象，并为后续升级与平台消费提供登记基础。
