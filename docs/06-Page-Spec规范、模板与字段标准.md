# 页面规格（Page Spec）规范、模板与字段标准

## 它在新体系里的位置

`Page Spec` 是页面当前行为规格的标准表达，也是 AI 执行器和实现方最核心的执行输入。

可以把它理解成：

- 页面当前应该如何表现的一份结构化协议
- 连接需求理解、页面规则和代码实现的中间层

## 先记住一句最重要的话

`Page Spec` 不是装饰性文档，而是页面当前行为事实的表达。

所以：

- 改了页面可观察行为，就要同步 `Page Spec`
- 没改页面可观察行为，只改内部实现，可以不改 `Page Spec`

## 默认确认人

常见确认人：

- 前端
- 设计工程师
- 主要实现人

页面规则确认人参与确认关键结构与规则；交付裁决人确认它是否足以支撑实现和 review。

## 它主要回答什么

- 页面由哪些 section 组成
- 每个 section 依赖什么数据
- 页面与 section 各有哪些状态
- 有哪些关键交互
- 有哪些权限与 tracking 要求
- 当前行为事实应该如何被验证

## 核心字段

| 字段 | 是否必填 | 作用 |
| --- | --- | --- |
| `page` | 是 | 页面唯一标识 |
| `route` | 是 | 页面路由 |
| `layout` | 是 | 页面布局类型 |
| `permissions` | 是 | 页面权限要求 |
| `states` | 是 | 页面级状态 |
| `dataSources` | 是 | 页面依赖数据源 |
| `sections` | 是 | 页面区块结构 |
| `interactions` | 是 | 页面关键交互 |
| `tracking` | 是 | 埋点事件 |
| `notes` | 否 | 补充说明 |

## 结构原则

1. 机器优先，其次是人
2. 优先表达结构和规则
3. 字段命名稳定
4. 优先复用既有 schema
5. 支持局部 patch，而不是每次重写整页

## 什么时候需要完整 Page Spec

建议显式产出完整 `Page Spec` 的场景：

- 标准模式任务
- 新页面
- 当前行为变化较大
- 需要多人共同 review

## 小需求怎么处理

小需求不一定需要重写整份 `Page Spec`，但如果影响以下任一事实，就应同步行为规格：

- 页面结构
- section 增减或重排
- 数据源
- 字段展示规则
- 状态
- 交互
- 权限
- 埋点
- 路由
- 响应式规则

推荐做法：

- 代码改动后，由 AI 执行器判断是否影响当前行为规格
- 如影响，则生成 `Page Spec patch`
- 人确认后与代码一起提交

## Page Spec patch 建议字段

小改动建议至少记录：

- `changeSummary`
- `affectedSections`
- `affectedStates`
- `affectedInteractions`
- `decision`
- `updatedBy`

## dataSources 推荐字段

每个数据源对象建议包含：

- `name`
- `api`
- `responseFields`
- `required`
- `notes`

## sections 推荐字段

每个 section 建议至少包含：

- `type`
- `title`
- `dataSource`
- `fields`
- `actions`
- `states`
- `responsive`

## interactions 推荐字段

每条 interaction 建议包含：

- `name`
- `trigger`
- `result`
- `feedback`
- `fallback`

## 完成标准

看完 `Page Spec` 后，AI 执行器或实现方至少应能回答：

- 页面如何拆 section
- section 用什么数据
- 状态和交互如何定义
- 权限和 tracking 如何处理
- 当前行为事实改动后该如何同步

## 模板

```json
{
  "page": "<page-name>",
  "route": "<route-path>",
  "layout": "<layout-type>",
  "permissions": ["<permission-key>"],
  "states": ["loading", "empty", "error", "ready"],
  "dataSources": [
    {
      "name": "<data-name>",
      "api": "<method path>",
      "responseFields": ["<field-1>", "<field-2>"],
      "required": true,
      "notes": ""
    }
  ],
  "sections": [
    {
      "type": "<section-type>",
      "title": "<optional-title>",
      "dataSource": "<optional-data-source>",
      "fields": [],
      "actions": [],
      "states": ["ready"],
      "responsive": {
        "desktop": "<rule>",
        "mobile": "<rule>"
      }
    }
  ],
  "interactions": [
    {
      "name": "<interaction-name>",
      "trigger": "<trigger>",
      "result": "<result>",
      "feedback": "<optional-feedback>",
      "fallback": "<optional-fallback>"
    }
  ],
  "tracking": ["<event-name>"],
  "notes": []
}
```

## patch 模板

```json
{
  "changeSummary": "<这次改了什么>",
  "affectedSections": ["<section-type>"],
  "affectedStates": ["<state>"],
  "affectedInteractions": ["<interaction-name>"],
  "decision": "<更新整份 spec / 更新 patch / 仅记录实现偏差>",
  "updatedBy": "<确认人或执行器>"
}
```

## 自检清单

- `sections` 是否完整
- `states` 是否覆盖页面与 section
- `dataSources` 是否清楚
- `interactions` 是否可执行
- `permissions` 和 `tracking` 是否遗漏
- 行为变化后是否同步了 spec 或 patch

