# 快速开始

## 适用场景

如果你准备从一个真实页面启动首轮试点，可以直接从本目录开始。

本目录不负责重复 `README` 的背景说明，也不展开 `playbook` 的完整执行规则；它只回答 3 个问题：

- 从哪个页面开始更容易收敛
- 当前怎么启动一组 spec / plan 主文件
- 启动时先看哪些文档

## 当前启动方式

当前页面级试点的启动入口，统一落在：

- `docs/superpowers/specs/`
- `docs/superpowers/plans/`

也就是说，当前真实页面的启动方式是：

1. 创建 1 份 spec 主文件
2. 创建 1 份 plan 主文件
3. 由 AI 起草初稿
4. 由责任人确认关键事实
5. 再进入实现、review 和 writeback

如果需要理解过去如何把页面拆成多份逻辑文件，可以再参考 `docs/quickstart/templates/` 和 `docs/quickstart/examples/`；但它们不代表当前默认做法。

## 页面模式

本体系不服务于所有页面，而优先服务于需要被维护、被复用、被持续演进的页面。

### L1：AI 直出模式

适用：

- 一次性页面
- demo
- 临时活动页
- 纯探索验证

默认理解：

- 允许直接生成
- 默认不要求完整 spec / plan
- 默认不进入共享资产沉淀

### L2：轻量 Spec 模式

适用：

- 大多数正式页面
- 需要后续维护的页面
- 标准后台列表、表单、详情页

默认理解：

- 这是正式页面的默认模式
- 通过 spec + plan 主文件承接页面闭环
- 默认保留最小 writeback 和资产候选

### L3：完整工程模式

适用：

- 复杂交互页
- 核心业务页
- 高风险变更页
- 多人强协作页面

默认理解：

- 在 `L2` 基础上加强规则确认、review 和回写
- 仅在复杂场景启用

### 两步判断法

只回答下面两个问题：

1. 这个页面是不是一次性 / 探索型页面？
   - 是：使用 `L1`
   - 否：进入问题 2
2. 这个页面是不是复杂 / 高风险 / 多人协作页面？
   - 是：使用 `L3`
   - 否：使用 `L2`

## 首轮试点起点

如果从真实页面开始验证，标准后台表格列表页通常会是一个更容易收敛的起点。

可以先按下面这个默认口径理解：

- 页面类型：`List Page`
- 页面形态：标准后台表格列表页
- 终端范围：`PC / Pad / Mobile`
- 页面模式：默认 `L2`
- pattern 参考：`list-page-table`

如果当前还没有独立的共享 pattern 文件，也可以先参考：

- `docs/quickstart/examples/p1-user-list/`

但它更适合作为历史逻辑样本，而不是当前主流程模板。

## 启动前先看什么

启动前建议先阅读以下 3 份文档：

1. `docs/README.md`
2. `docs/playbook.md`
3. `docs/superpowers/README.md`

对应关系是：

- `docs/README.md`：看方案背景、边界和全景图
- `docs/playbook.md`：看执行规则、门禁、主文件和快照文件
- `docs/superpowers/README.md`：看 spec / plan 主文件的目录约定和命名方式

## 最小启动包

首轮页面级试点，最小只需要先跑通下面两类项目级执行工件：

```text
docs/superpowers/specs/<page-name>-spec.md
docs/superpowers/plans/<page-name>-plan.md
```

默认理解：

- spec 主文件承接任务上下文、页面规则、页面规格、review 重点和 writeback
- plan 主文件承接任务拆分、风险、实施顺序和验证动作

当前不要求一开始就同步建设完整资产体系。

更合理的顺序是：

1. 先跑通页面级 spec / plan
2. 再看是否自然长出 starter / kit / checklist
3. 没有复用两次以上，不正式沉淀为共享资产

## 启动顺序

建议按下面顺序启动，不再从零复制多份模板：

1. 确认页面属于 `L1 / L2 / L3` 哪一种模式
2. 在 `docs/superpowers/specs/` 创建 `<page-name>-spec.md`
3. 在 `docs/superpowers/plans/` 创建 `<page-name>-plan.md`
4. 让 AI 起草 spec 中的 `Task Context`、`UI Rules`、`Page Spec`
5. 由 UI / FE / 业务责任人确认规则和关键边界
6. 让 AI 起草 plan 中的 `Work Items`、`Risks`、`Verification`
7. 再进入实现、review 和 writeback

如果只是一次性探索页，可以直接走 `L1`，不强制进入完整流程。

## 推荐骨架

当前推荐直接参考：

- `docs/superpowers/spec-template.md`
- `docs/superpowers/plan-template.md`

做法很简单：

- 先按骨架创建主文件
- 再按当前页面补充实际内容
- 最后对照案例检查表达是否清楚

## 历史参考

以下目录仍然保留，但当前主要作为历史逻辑参考：

- `docs/quickstart/templates/`
- `docs/quickstart/examples/`

可以把它们理解为：

- 历史逻辑工件参考
- 未来 schema / workflow 抽象参考
- 对比当前 superpowers-first 工作方式的辅助材料

## 一句话理解

`quickstart` 解决的是“从哪个页面开始、先建哪两个主文件、启动前先看哪些文档”。如果要看完整执行规则，请继续看 `docs/playbook.md`。
