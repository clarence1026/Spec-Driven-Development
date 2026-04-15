# Admin Template Marketplace Design

## 1. Goal

- 为后台常用系统模板和页面模板建立一个可浏览、可比较、可判断、可接入的模板市场
- 让产品和开发者先看到“能不能用”，再决定“要不要用”
- 让项目级资产、公共共享资产、平台消费资产能够沿同一条路径逐步升级

## 2. Design Positioning

### What This Is

- 一个面向后台系统建设的内部模板市场
- 一个以系统模板和页面模板为主商品的资产消费入口
- 一个连接预览、规则、实现和复用证据的统一入口

### What This Is Not

- 不是单纯的组件库首页
- 不是单纯的 Storybook 门户
- 不是一开始就负责生成一切的 AI 页面生成器

### Core Principle

`先做 marketplace，再做 registry，最后再做 generation。`

一句话理解：

`外面卖页面和系统模板，里面挂规则、预览、组件、starter 和复用证据。`

## 3. Users

### Primary Users

- 产品：快速理解当前有什么系统模板和页面模板可选
- 开发者：快速判断模板是否适合当前项目、是否有可复用实现

### Secondary Users

- 设计：确认模板是否符合后台页面常用结构和状态表达
- 平台建设者：将模板进一步升级为机器可消费对象

## 4. Main Commodity Model

### External Commodity

对外主商品统一为两层：

- `系统模板`
- `页面模板`

不建议一开始把以下对象作为首页主商品：

- 单个组件
- 单条规则
- token
- checklist

原因：

- 产品难以直接判断组件是否足以支撑一个页面或系统
- 开发者也更容易先按页面或业务能力做选型
- 平台后续仍可将模板向下拆成更细粒度资产

### Internal Composition

一个模板内部可继续拆为：

- pattern
- rule
- token
- component
- story
- checklist
- starter
- case

一句话理解：

`市场里卖模板，模板里装资产。`

## 5. Information Architecture

整体建议采用三层信息架构：

### L1 Marketplace Layer

负责：

- 发现
- 筛选
- 比较
- 进入详情

核心对象：

- 系统模板
- 页面模板

### L2 Template Detail Layer

负责：

- 判断是否适合当前项目
- 判断成熟度和接入成本
- 查看可复用能力、边界和实现入口

### L3 Asset Support Layer

负责：

- 提供预览
- 提供规则解释
- 提供实现映射
- 提供复用证据

支撑资产包括：

- preview / storybook
- docs / rules / patterns
- tokens / themes
- components / packages
- starter
- cases

用户路径建议统一为：

`Marketplace -> Template Detail -> Preview / Rules / Code Entry -> Project Adoption`

## 6. Marketplace Homepage Structure

首页默认先展示 `系统模板`，并保留 `页面模板` 作为并列入口。

### Recommended Homepage Sections

- `推荐系统模板`
- `常用页面模板`
- `按业务域浏览`
- `按页面类型浏览`
- `按成熟度筛选`

### Recommended System Domains

- 用户管理
- 角色权限
- 内容管理
- 订单管理
- 配置中心
- 审计日志

### Recommended Page Types

- 列表页
- 详情页
- 创建/编辑页
- 审批页
- 仪表盘页

### Homepage Card Minimum Fields

每张模板卡片建议至少包含：

- 模板名
- 一句话用途
- 适用场景
- 预览图
- 成熟度
- 终端支持
- 是否有代码实现
- 是否有 Storybook
- 是否有 Starter

### Recommended Filters

首页筛选器优先围绕“能不能用”设计：

- 业务域
- 页面类型
- 终端支持
- 成熟度
- 资产完备度

其中资产完备度建议用以下值：

- 仅规则
- 有预览
- 有代码
- 有 starter

## 7. Template Detail Structure

每个模板详情页建议固定为以下 8 个区块：

### 1. Overview

- 模板名
- 一句话价值说明
- 适用场景
- 不适用场景
- 当前成熟度
- 最近更新时间

### 2. Included Pages / Capabilities

如果是系统模板，展示：

- 包含哪些页面模板
- 每个页面承担什么职责

如果是页面模板，展示：

- 包含哪些关键能力
- 支持哪些状态和交互

### 3. Preview

- 页面截图
- 关键状态预览
- 多端预览
- 交互预览入口

建议直接接 Storybook 或独立 Preview 页面。

### 4. Interactions and States

- loading
- empty
- error
- no-permission
- 查询 / 筛选 / 分页 / 编辑 / 提交 / 审批等关键交互

### 5. Rules and Constraints

- 页面结构规则
- 权限规则
- 响应式规则
- 数据展示规则
- 默认边界：做什么 / 不做什么

### 6. Implementation Mapping

- 对应组件
- 对应 package
- 对应 starter
- 对应页面骨架
- 对应代码仓入口

### 7. Reuse Evidence

- 已在哪些项目验证过
- 已在哪些页面复用
- 已知限制
- 成熟度为何是当前等级

### 8. Adoption Guidance

- 推荐什么场景采用
- 什么场景不建议采用
- 如果需求更轻，推荐降级到哪个模板
- 如果需求更复杂，推荐升级到哪个模板
- 采用前要先确认什么

### Minimum Listing Criteria

如果一个模板不满足以下最小条件，不建议上架为正式模板：

- 有模板用途说明
- 有适用 / 不适用场景
- 有预览
- 有规则摘要
- 有实现入口

## 8. Layering and Placement Strategy

不要试图把所有资产都放进一个地方。

推荐采用四层放置策略：

### 1. Marketplace Layer

适合放：

- 模板索引
- 模板卡片
- 模板详情页
- 搜索和筛选入口

建议载体：

- 独立文档门户
- 站点首页
- 平台门户前台

### 2. Preview Layer

适合放：

- 页面预览
- 组件状态
- 多端效果
- 交互演示

建议载体：

- Storybook

说明：

- Storybook 适合做“看”
- 不适合独立承担“市场入口”

### 3. Rules and Registry Layer

适合放：

- pattern
- rule
- review checklist
- token usage rule
- prompt / workflow
- asset registry
- adoption notes

建议载体：

- `docs/assets/`
- `docs/superpowers/`

说明：

- 这层负责解释模板的边界、适用条件和复用依据

### 4. Code and Starter Layer

适合放：

- 组件实现
- 页面骨架
- starter 工程
- package
- 可复用代码模块

建议载体：

- 公共组件库
- starter repo
- package registry

说明：

- 这层负责真正接入项目

一句话理解：

- Marketplace 负责选
- Storybook 负责看
- Docs / Registry 负责解释
- Package / Starter 负责用

## 9. Recommended Repository Structure

如果当前仓库承担“模板市场主壳 + 资产索引”的职责，建议目录结构逐步演进为：

```text
docs/
  marketplace/
    README.md
    systems/
      user-management.md
      permission-management.md
    pages/
      list-page.md
      detail-page.md
      form-page.md
  superpowers/
    specs/
    plans/
  assets/
    registry.md
    patterns/
    rules/
    themes/
    tokens/
    kit/
    prompts/
    cases/
```

目录职责建议如下：

- `docs/marketplace/`
  - 面向使用者的模板市场内容
  - 存放系统模板和页面模板详情页

- `docs/superpowers/`
  - 面向项目执行的 spec / plan 工件
  - 承接项目级闭环

- `docs/assets/`
  - 面向共享资产治理
  - 存放 registry、rules、patterns、tokens、kit、cases

如果未来要平台化，可继续扩展：

```text
platform/
  registry/
  schema/
  search/
  recommendation/
  generators/
```

## 10. Three-Level Reuse Model

为了同时支持项目级、公共级、平台级复用，建议坚持三层分治：

### L1 Project-Level

放什么：

- 单页 spec
- 单页 plan
- review 记录
- writeback
- 真实项目上下文

建议位置：

- 业务项目仓
- `docs/superpowers/specs/`
- `docs/superpowers/plans/`

特点：

- 服务当前项目交付闭环
- 不要求一开始就抽象成共享资产

### L2 Shared-Level

放什么：

- 系统模板定义
- 页面模板定义
- pattern
- rule
- token
- theme
- kit
- prompt / workflow
- case

建议位置：

- 当前公共仓
- `docs/marketplace/`
- `docs/assets/`
- Storybook
- 公共组件库 / starter

特点：

- 支持跨项目复用
- 需要明确维护人和消费入口

### L3 Platform-Level

放什么：

- registry schema
- metadata
- searchable catalog
- template recommendation
- generator input schema
- starter generation rules

建议位置：

- 独立平台目录或平台服务仓

特点：

- 面向机器消费
- 建立在共享资产稳定之后

### Upgrade Principle

统一升级原则：

`项目里先验证，共享层再复用，平台层最后消费。`

## 11. Asset Readiness Model

为了让别人“看完能决定要不要用”，建议每个模板或资产都标记成熟度。

建议成熟度分级：

- `Draft`
  - 只有概念，信息不完整
- `Pilot`
  - 已在一个真实页面或项目中试点
- `Reusable`
  - 已在多个页面或项目中复用
- `Recommended`
  - 已形成稳定用法，推荐默认采用

每次升级至少回答四个问题：

- 是否在真实项目中被验证过
- 是否有清晰适用场景
- 是否有预览和规则说明
- 是否有明确实现入口

## 12. First-Batch Template Recommendations

第一批建议优先上架以下模板：

### System Templates

- 用户管理
- 角色与权限管理
- 内容管理
- 配置中心
- 审计日志

### Page Templates

- 标准后台列表页
- 标准后台详情页
- 标准后台创建/编辑页
- 审批流页面
- 基础仪表盘页

原因：

- 这些对象产品和开发都容易理解
- 也是后台项目复用频率最高的一批页面和系统能力

## 13. Execution Recommendation

第一阶段建议优先完成以下事情：

1. 明确 Marketplace 的主商品是 `系统模板 + 页面模板`
2. 在当前仓库新增 `docs/marketplace/` 作为市场层内容入口
3. 为首批系统模板和页面模板定义统一详情页字段
4. 用 Storybook 承接预览，不把 Storybook 作为主入口
5. 用 `docs/assets/registry.md` 承接成熟度、依赖、实现入口和升级记录
6. 将项目中的真实 spec / plan / writeback 持续回流为共享模板和规则

## 14. Done Criteria

当以下条件满足时，可认为第一版模板市场方向成立：

- 使用者能从首页找到模板
- 使用者能从详情页判断是否可用
- 每个正式模板都有预览、规则摘要和实现入口
- 项目级交付能回流为共享模板和资产
- 后续平台级建设可以基于同一套模板元数据继续演进
