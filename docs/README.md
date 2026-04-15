# UI -> Frontend AI工程化方案

## 背景

随着需求频率上升和页面复杂度增加，传统 `UI -> Frontend` 交付方式越来越依赖分散输入和个人经验。

页面目标、设计表达、补充说明和默认规则，常常散落在 PRD、Figma、聊天、会议和熟悉业务成员的记忆中。结果是：团队每做一个页面，都要重复花时间在找信息、对齐理解和补规则上；在这种传统方式下，AI 也很难稳定接入，经验更难沉淀为可复用资产。

这套方式在 AI 时代面临两个直接挑战：

1. 难以规模化，边际协作成本持续升高
2. 难以稳定接入 AI，也难以沉淀可复用资产

这里的“边际协作成本持续升高”，可以简单理解为：每多做一个页面，团队都还要继续花很多时间在找资料、问人、补规则、对齐理解和返工上，而这些额外成本并没有随着经验积累明显下降。

当前要建设的不是“前端补更多文档”，而是一套能够让 UI、PRD、Frontend 与 AI 共同消费、共同执行、共同校验、共同沉淀的工程化交付体系。

## 现状

在缺少统一中间层和资产沉淀机制时，传统 `UI -> Frontend` 交付通常会出现以下问题：

- 输入分散：目标、结构、交互和约束分布在多个来源中，没有统一收口
- 事实漂移：产品、设计、前端、评审方往往各自维护一版理解，最后很容易不一致
- 实现跳跃：页面在事实尚未收敛时就直接进入代码实现
- review 被动：很多问题不是提前说清楚，而是写完代码后再靠 reviewer 经验指出来
- 回写缺失：代码变更后，规则、规格和记录没有同步更新
- 资产沉淀不足：一次交付结束后，难以转化为下一次任务可以直接复用的输入

这些问题会直接削弱 AI 的可用性。AI 要想真正提高效率，前提不是“生成得更快”，而是输入能被收敛、规则能被表达、规格能被校验、结果能被回写。

从当前基于 superpowers skills 的实践看，一旦通过 spec、规则确认和 AI 协作把中间层建立起来，交付效率和稳定性都会明显提升。
这也说明，真正影响效果的，不是 AI 会不会写代码，而是团队有没有一套能把输入收拢清楚、把实现接住、再把经验沉淀下来的交付方式。

| 传统方式 | 主要问题 | 直接后果 |
| --- | --- | --- |
| 输入分散在 PRD / Figma / 聊天 / 会议 | 缺少统一事实层 | AI 和前端都要重复理解 |
| 事实主要靠人脑拼接 | 依赖资深成员经验 | 难复制、难规模化 |
| 页面直接进入实现 | 缺少规则和规格承接 | review 被动、返工增加 |
| 交付后缺少回写 | 经验无法进入资产层 | 下次仍从零开始 |

## 目标

### 短期目标

- 先在真实页面上完成一次最小范围的试点验证
- 让 AI 不只参与写代码，也真正进入输入收敛、规则整理、Spec 起草、review 和回写
- 用统一的 superpowers spec / plan 工作方式替代多套并行文档流
- 从试点过程中稳定积累第一批共享资产

### 长期目标

- 把共享资产逐步升级为团队可以持续复用的组织底座
- 支撑模板选择、页面模式复用、规则组合和受控生成
- 为后续平台化和自动化 workflow 提供企业级资产基础

| 维度 | 短期目标 | 长期目标 |
| --- | --- | --- |
| 交付 | 跑通页面级试点闭环 | 建立稳定的组织交付底座 |
| AI | 进入收敛、Spec、review、回写 | 支撑受控生成与资产消费 |
| 资产 | 从项目中稳定积累 | 形成平台可消费资产体系 |
| 组织 | 降低单次返工和协作损耗 | 降低长期边际协作成本 |

## 方案

本方案的重点，不是“让设计稿直接生成代码”，而是先把 `UI -> Frontend` 交付过程拆成一条可被团队和 AI 共同消费的主链路：

`Input -> Spec -> Code -> Review -> Writeback -> Asset`

当前默认执行入口已经统一到：

- `docs/superpowers/specs/`
- `docs/superpowers/plans/`

其中：

- `specs` 负责沉淀页面上下文、页面规则、实现规格、review 重点和回写记录
- `plans` 负责承接任务拆分、实施顺序、风险和验证动作
- `quickstart/templates/` 不再作为默认执行路径，而是保留为历史逻辑参考和未来结构化抽象参考

如果把“页面开发、页面落地、资产沉淀、资产复用、平台化”放在同一张图里，当前阶段更适合按下面这条完整链路理解：

阅读提示：

- 上半段看“页面怎样从输入走到交付”
- 中间看“交付后哪些内容会被提炼成资产”
- 下半段看“资产怎样回流到下一个项目，并最终进入平台消费”

```mermaid
flowchart LR
    subgraph L1[页面交付与落地]
        A[PRD / Figma / Chat / Meeting / History<br/>原始输入] --> B[Superpowers Spec<br/>页面规格文档]
        B --> C[Superpowers Plan<br/>实施计划文档]
        C --> D[Code<br/>代码实现]
        D --> E[Review<br/>对照评审]
        E --> F[Writeback in Spec<br/>回写到 Spec]
        F --> G[Project Delivery<br/>页面交付完成]
    end

    F --> H[Candidate Asset<br/>候选资产]

    subgraph L2[资产沉淀与复用]
        H --> I[Pattern / Rule<br/>页面模式 / 规则]
        H --> J[Theme / Token<br/>主题 / 设计变量]
        H --> K[Prompt / Workflow / Kit / Case<br/>提示词 / 工作流 / 实现基础 / 案例]
        I --> L[Shared Asset Layer<br/>共享资产层]
        J --> L
        K --> L
        L --> M[Next Project Reuse<br/>下个项目复用]
    end

    M --> B

    subgraph L3[资产平台化消费]
        L --> N[Registry / Schema / Workflow / Checker<br/>资产索引 / 结构定义 / 工作流 / 检查器]
        N --> O[Platform Consumption / Controlled Generation<br/>平台消费 / 受控生成]
    end

    O --> B
```

对应到当前页面级落地，可进一步展开为：

```mermaid
flowchart LR
    A[输入] --> B[Superpowers Spec<br/>任务上下文 / 页面规则 / 页面规格]
    B --> C[Superpowers Plan<br/>任务拆分 / 风险 / 验证]
    C --> D[Code<br/>代码实现]
    D --> E[Review<br/>对照评审]
    E --> F[Writeback in Spec<br/>实现与回写记录]
    F --> G[Asset<br/>资产]
```

这条链路想解决的是：

- 页面交付不再依赖从碎片输入直接跳到代码
- AI 不只在代码阶段介入，而是进入中间事实层
- review 和回写不再是补充动作，而是闭环的一部分
- 一次交付不只把页面做完，还要尽量留下后续可复用资产

当前阶段先按下面 4 个原则推进：

- 页面优先：以单页面作为最小实践单位
- superpowers-first：默认通过 `docs/superpowers/specs/` 和 `docs/superpowers/plans/` 执行
- AI 起草：由 AI 起草上下文、规则和 Spec，人负责确认与裁决
- 资产导向：每轮试点都必须形成资产判断

执行边界需要再明确一层：

- `L1` 一次性 / 探索型页面，不强制进入完整 spec / plan 流程
- 当前这套“主文件 + 回写 + 资产判断”的机制，默认服务 `L2 / L3` 正式页面
- 如果页面生命周期短、没有复用价值，不建议为了流程而补文档

| 原则 | 含义 | 目的 |
| --- | --- | --- |
| 页面优先 | 首轮只选一个页面 | 控制复杂度 |
| superpowers-first | 默认执行入口统一到 spec / plan | 避免双轨维护 |
| AI 起草 | AI 先整理，人做确认 | 降低维护成本 |
| 资产导向 | 每轮都做资产判断 | 保证长期复用 |

### 层级定义与对照关系

为了避免流程名字在变，但实际做法没有真正变化，当前阶段需要先把每一层分别负责什么、产出什么、哪些内容会进入资产层说清楚：

| 层级 | 作用 | 当前默认载体 | 是否直接作为共享资产 |
| --- | --- | --- | --- |
| Task Context | 收敛页面级业务上下文、目标、范围、角色与约束 | `docs/superpowers/specs/` 中的 Task Context 段落 | 否，字段集 / prompt 可沉淀 |
| UI Rule | 确认页面结构、状态、交互、展示、边界与适配规则 | `docs/superpowers/specs/` 中的 UI Rules 段落 | 可抽象为规则资产 |
| Page Spec | 描述当前页面实例规格，优先引用已有 pattern / rule 并补充差异 | `docs/superpowers/specs/` 中的 Page Spec 段落 | 通常否，模板 / schema / 写法可沉淀 |
| Plan | 承接任务拆分、实施顺序、风险与验证动作 | `docs/superpowers/plans/` | 否，结构可沉淀 |
| Pattern | 抽象多页面共性结构与规则 | `docs/assets/patterns/` | 是 |
| Theme / Token | 沉淀颜色、字号、间距、圆角、阴影、动效、品牌风格等设计基础值 | `docs/assets/themes/` / `docs/assets/tokens/` | 是 |
| Kit | 沉淀组件实现、样式封装、renderer 和端侧适配实现 | `docs/assets/kit/` | 是 |
| Review | 对照规则与规格检查实现差异 | review 记录 + spec 中的 Review Focus / Writeback | checklist / rule 可沉淀 |
| Writeback | 将实现差异回写并抽象为可复用对象 | spec 中的 Writeback / Asset Candidates 段落 | 否，本身是过渡层 |
| Asset | 进入共享复用的稳定对象 | `docs/assets/` | 是 |

Pattern 是 UI Rule 中结构规则的标准化、可复用子集；UI Rule 保留页面级完整事实。

如果说 `Pattern / Rule / Spec` 主要解决的是“页面怎么被稳定实现”，那么 `Theme / Token / Kit` 主要解决的是“页面用什么视觉基础和组件基础来实现”。

这里可以先记住一条核心原则：

`单页 spec 通常是实例；Pattern / Rule / Prompt / Workflow 才是主要共享资产`

`Review` 和 `Writeback` 的关系也需要明确：

- `Review = Code vs Rules + Spec`
- `Writeback = 将实现差异分别回写到 spec、Pattern、Checklist、Theme、Kit、Prompt 或 Workflow`
- 当页面规则与实现规格冲突时，必须通过 review 裁决并回写其中一方。

## 常见疑问

### 1. 这套流程如何真正驱动执行？

这套体系不是为了增加文档，而是为了让页面在进入实现之前，先形成统一任务事实、统一页面规则和统一实例规格。

它真正驱动执行的方式，不是“先写一堆说明”，而是通过统一工件和阶段门禁，避免页面重新退回到：

`碎片输入 -> 直接写代码 -> 最后靠 review 兜底`

对页面交付来说，spec、plan、review 和 writeback 都不是留档动作，而是进入下一步之前必须存在、必须被确认的中间层。

### 2. 这些文档和规格是怎么生成的？

当前阶段主要采用：

`superpowers spec / plan + AI 起草 + 人确认`

的方式。

- superpowers spec 负责承载任务上下文、页面规则、页面规格、review 重点和回写记录
- superpowers plan 负责承载任务拆分、风险、顺序和验证动作
- AI 负责根据 PRD、Figma、聊天记录、历史页面和规则输入生成初稿
- 人负责确认范围、裁决歧义、接受或拒绝偏差

当前阶段的重点，不是一开始就做成完全自动化平台，而是先验证哪些字段、规则和资产适合被 AI 稳定消费。

后续当共享字段、页面模式、规则和资产消费入口逐步稳定后，再进一步演进为 AI 驱动的自动化 workflow、checker 和受控生成能力。

### 3. 这套体系里的真相源分别是什么？

为了避免同一件事在不同文档里各说一版，当前阶段建议按下面这个口径理解真相源：

- 业务目标与范围：以 PRD、Issue、验收口径为主
- 设计结构与视觉表达：以 Figma、标注、Variables 和设计评论为主
- design token / variable：以 Figma Variables 和项目代码中的 theme / token 文件为主
- 页面实现主输入：以确认后的 superpowers spec 为主
- 页面实施安排：以确认后的 superpowers plan 为主
- 共享资产入口：以登记后的 pattern、rule、theme / token、kit、prompt、workflow 和 registry 为主

这也意味着，当前这套文档不是要替代 PRD 或 Figma，而是把原本分散的信息收敛成工程可消费的中间层。

### 4. 资产沉淀在哪里，后续怎么复用？

当前阶段采用三层分治：

- `项目级资产`：保留在业务项目仓，保存单页 spec、plan 和真实上下文
- `公共共享资产`：沉淀在当前公共仓，承接跨项目可复用的 pattern、rule、prompt、workflow、case，以及后续的 theme / token / kit
- `平台消费资产`：在后续平台化阶段，进一步整理为 registry、schema、workflow、checker 等机器可消费对象

这意味着：

- 单页任务事实不应一开始全部抽进公共仓
- 稳定复用对象才升级到共享层
- 平台优先消费已经稳定的共享资产，而不是直接消费零散页面事实

如果是视觉基础值，也建议遵守同样原则：

- spec 中可以说明 token 使用和差异
- 项目代码中才是真正被页面消费的 token 落地点
- 只有跨页面稳定复用后，才升级到共享 `theme / token` 资产

## 试点

这条链路优先适用于那些需要长期维护、值得复用，或者本身交互比较复杂的页面；如果只是一次性页面，也允许采用 AI 直出模式，不强制进入完整流程。

当前阶段建议直接启动首轮 `P1` 页面试点，并优先从下面这类页面开始：

- 标准后台表格列表页

切入。

详情页和中等复杂度表单页，可以作为下一阶段的重点扩展方向。

首轮试点可以先按下面这组默认配置理解：

- 页面形态：标准后台表格列表页
- 终端范围：`PC / Pad / Mobile`
- 推荐模式：superpowers-first，轻量 spec 优先
- 资产方向：围绕列表页同步沉淀页面模式、横切规则和 review 口径

如果要快速跑通第一轮，建议按下面这个节奏推进：

```mermaid
flowchart LR
    A[Day 1<br/>选页 / 定责任人] --> B[Day 2<br/>Superpowers Spec 初稿]
    B --> C[Day 3<br/>UI 规则确认]
    C --> D[Day 4<br/>Superpowers Plan]
    D --> E[Day 5-6<br/>实现与 Review]
    E --> F[Day 7<br/>Spec 回写与资产判断]
```

首轮试点最值得关注的，是下面 5 个结果：

1. spec 是否完整承接了任务上下文、页面规则和页面规格
2. UI 规则是否被结构化确认
3. plan 是否明确了实施顺序、风险和验证动作
4. review 和回写是否完成
5. 是否至少留下 1 个资产候选

如果这次内部对齐会需要快速形成决策，建议先只围绕下面 4 个问题讨论：

1. 方向是否确认：是否按 `UI -> Frontend` AI 工程化推进
2. 范围是否确认：首轮是否优先聚焦标准后台表格列表页
3. 机制是否确认：是否采用 superpowers-first + AI 起草 + 人确认的执行方式
4. 试点是否确认：本周启动哪个页面、由谁负责 spec / plan / review

## 演进

当前不建议一上来就做平台，而是先把执行闭环和资产体系跑通，再进入平台化演进。

资产演进可以先按三层理解：

```mermaid
flowchart LR
    A[项目级资产] --> B[公共共享资产]
    B --> C[平台消费资产]
```

- 项目级资产：服务当前页面执行闭环
- 公共共享资产：服务跨项目复用
- 平台消费资产：服务未来 registry、workflow 与受控生成

这里也建议坚持一条主原则：

`项目里先验证，公共层再复用，平台层最后消费`

当前阶段默认执行入口已经切换到 `docs/superpowers/specs/` 和 `docs/superpowers/plans/`。

更准确地说：

- `docs/superpowers/specs/` 是当前页面级交付的主工作界面
- `docs/superpowers/plans/` 是当前实施计划和验证动作的主工作界面
- `docs/quickstart/templates/` 仅保留为历史逻辑参考和未来结构化抽象参考，不再作为默认执行路径

命名机制上，当前仓库采用：

- 主文件：`<page-name>-spec.md` / `<page-name>-plan.md`
- 快照文件：仅在里程碑节点生成，统一归档到 `docs/archive/snapshots/<page-name>/`

这样做的目的是：

- 保留当前唯一有效主文件
- 保留 superpowers 原本强调的阶段留痕
- 避免日常执行目录被大量日期文件淹没

在当前仓库里，可以把下面这些文档理解为主要落地入口：

| 入口 | 作用 |
| --- | --- |
| `docs/playbook.md` | 说明当前如何以 superpowers-first 落地执行 |
| `docs/quickstart/README.md` | 说明首轮试点如何通过 spec / plan 快速启动 |
| `docs/superpowers/README.md` | 说明 spec / plan 目录约定与默认骨架 |
| `docs/backend-admin-roadmap.md` | 说明后台管理系统这条重点资产线如何分阶段沉淀 |
| `docs/assets/README.md` | 说明资产分层、升级规则与沉淀方式 |
| `docs/assets/registry.md` | 说明当前已登记的可复用资产与候选资产 |
| `docs/archive/` | 保留历史详细理论与扩展材料 |

## 结论

这套方案最终想做的，是把 `UI -> Frontend` 之间原本依赖人脑拼接、实现阶段补洞、末端 review 兜底的交付方式，升级为一套 AI 可稳定接入、团队可持续校验、组织可持续沉淀的工程系统。
