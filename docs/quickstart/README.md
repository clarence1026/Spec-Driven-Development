# 快速开始

## 适用场景

如果你准备启动首轮页面级试点，直接从本目录开始。

本目录不负责解释完整背景，只负责回答 3 个问题：

- 启动前先看什么
- 当前默认怎么起 spec / plan
- 按什么顺序落地

## 当前默认启动方式

当前默认执行入口已经统一到：

- `docs/superpowers/specs/`
- `docs/superpowers/plans/`

也就是说，当前不再默认通过复制 `01-task-context.md / 02-ui-rule-card.md / 04-page-spec.yaml / 06-implementation-record.md` 这类模板启动页面；这些模板只保留为历史逻辑参考和未来结构化抽象参考。

如果现在要启动一个真实页面，默认动作是：

1. 创建 1 份 spec
2. 创建 1 份 plan
3. 由 AI 起草初稿
4. 由责任人确认关键事实
5. 按 spec + plan 进入实现与回写

## 模式选择判断

本体系不服务于所有页面，而优先服务于需要被维护、被复用、被持续演进的页面。

先判断当前页面属于哪一种模式：

### L1：AI 直出模式

适用：

- 一次性页面
- demo
- 临时活动页
- 纯探索验证

流程：

`Prompt -> Code -> 简单检查 -> Done`

说明：

- 允许直接生成
- 默认不要求 spec / plan
- 默认不进入共享资产沉淀

### L2：轻量 Spec 模式

适用：

- 大多数正式页面
- 需要后续维护的页面
- 标准后台列表、表单、详情页

流程：

`Spec -> Plan -> Code -> Writeback`

说明：

- 这是正式页面的默认模式
- 当前默认通过 `docs/superpowers/specs/` 和 `docs/superpowers/plans/` 落地
- 默认保留最小回写和资产候选

### L3：完整工程模式

适用：

- 复杂交互页
- 核心业务页
- 高风险变更页
- 多人强协作页面

流程：

`Spec -> Rule Engineering -> Plan -> Review -> Asset`

说明：

- 仅在复杂场景启用
- 不作为首轮默认模式

### 两步判断法

只回答下面两个问题：

1. 这个页面是不是一次性 / 探索型页面？
   - 是：使用 `L1`
   - 否：进入问题 2
2. 这个页面是不是复杂 / 高风险 / 多人协作页面？
   - 是：使用 `L3`
   - 否：使用 `L2`

默认规则：

- 一次性页面允许走 `L1`
- 正式页面默认走 `L2`
- 复杂页面再升级到 `L3`

## 默认启动入口

对当前公共仓的首轮试点而言，默认从 `L2：轻量 Spec 模式` 启动，并固定为：

- 页面类型：`List Page`
- 页面形态：标准后台表格列表页
- 终端范围：`PC / Pad / Mobile`
- 默认模式：superpowers-first，轻量 spec 优先
- 默认 pattern 类型：`list-page-table`

当前若尚未拆出独立共享 pattern 文件，首轮可先以 `docs/quickstart/examples/p1-user-list/` 作为历史逻辑参考来源。

## 启动前先看什么

启动前建议先阅读以下 3 份文档：

1. `docs/README.md`
2. `docs/playbook.md`
3. `docs/superpowers/README.md`

其中：

- `docs/README.md` 用于统一方向、目标与方案理解
- `docs/playbook.md` 用于明确执行步骤、责任与门禁
- `docs/superpowers/README.md` 用于明确 spec / plan 的目录约定与骨架

当前目录是默认试点启动入口，但默认执行路径已经切换到 superpowers。

## 最小执行包

首轮标准后台表格列表页的默认成功路径，只要求先跑通下面两类工件：

```text
docs/superpowers/specs/<page-name>-spec.md
docs/superpowers/plans/<page-name>-plan.md
```

默认理解方式：

- spec 用于承接任务上下文、页面规则、页面规格、review 重点和 writeback
- plan 用于承接任务拆分、风险、实施顺序和验证动作

这两个工件已经足以支撑首轮页面级闭环，不再默认要求团队维护多份并行模板。

## 推荐启动顺序

建议按以下顺序推进，不要再默认从零复制多份模板：

1. 先确定页面类型是否属于默认 `list-page-table`
2. 在 `docs/superpowers/specs/` 创建 `<page-name>-spec.md`
3. 在 `docs/superpowers/plans/` 创建 `<page-name>-plan.md`
4. 让 AI 先起草 spec 中的 `Task Context`、`UI Rules`、`Page Spec`
5. 由 UI / FE 确认规则和关键边界
6. 让 AI 再起草 plan 中的 `Work Items`、`Risks`、`Verification`
7. 按 spec + plan 实现页面
8. 实现完成后，必须将差异、review 结果和资产候选回写到 spec

门禁式要求：

- 没有 spec，不允许进入实现
- spec 中没有页面规则确认，不允许进入实现
- 没有 plan，不建议进入正式开发
- 没有 writeback，不视为闭环完成

对应关系如下：

```mermaid
flowchart LR
    A[Superpowers Spec<br/>任务上下文 / 页面规则 / 页面规格] --> B[Superpowers Plan<br/>任务拆分 / 风险 / 验证]
    B --> C[Code<br/>实现]
    C --> D[Review<br/>评审]
    D --> E[Writeback in Spec<br/>回写]
```

## Spec / Plan 推荐骨架

当前推荐的骨架可直接参考：

- `docs/superpowers/spec-template.md`
- `docs/superpowers/plan-template.md`

建议做法是：

- 先按骨架创建 spec / plan
- 再按当前页面补充实际内容
- 最后对照案例检查表达是否足够清楚

## 历史逻辑参考

以下目录仍然保留，但当前不再作为默认执行路径：

- `docs/quickstart/templates/`
- `docs/quickstart/examples/`

可以把它们理解为：

- 历史逻辑工件参考
- 未来 schema / workflow 抽象参考
- 对比当前 superpowers-first 工作方式的辅助材料

## 参考案例

首轮试点可优先参考：

- `docs/quickstart/examples/p1-user-list/`

这个案例当前更适合被理解为：

- 历史逻辑工件示例
- 帮助理解页面闭环由哪些逻辑部分组成
- 为未来结构化抽象提供参考样本

## 一天跑通路径

如果你要在第一周快速验证体系是否可用，建议只做下面这条路径：

1. 选一个标准后台表格列表页
2. 明确负责人、UI 是否参与、采用轻量还是标准模式
3. 创建 spec 初稿
4. 创建 plan 初稿
5. 确认页面规则和实现范围
6. 实现页面
7. 在 spec 中留下 review 留痕、差异和资产候选

跑通这 7 步后，团队至少应当第一次看到：

- spec / plan 如何成为统一执行入口
- 页面闭环如何在 superpowers-first 模式下成立
- 资产候选如何被记录并进入后续沉淀

## 启动建议

首轮试点建议遵循以下原则：

- 先选 1 个 `P1` 页面，不要同时开多个页面
- 先明确 PRD / UI / FE / approver，再开始生成 spec / plan
- 先形成最小 spec / plan，再进入实现
- 首轮结束后，必须补齐回写和资产判断
- 优先按默认 `list-page-table` pattern 启动，不从零定义同类页面

一句话原则：

`首轮不要追求一次做大，先把一个页面在 superpowers-first 模式下跑通。`
