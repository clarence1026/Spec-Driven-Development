# Page Spec 规范、模板与字段标准

## 定义

`Page Spec` 是页面实现规格工件，也是 AI 和前端的核心执行输入。

## owner

- 默认 owner：前端 / 设计工程师
- 设计参与确认关键结构与规则
- 交付负责人确认是否可进入实现

## 作用

`Page Spec` 主要回答：

- 页面由哪些 section 组成
- 每个 section 依赖什么数据
- 页面与 section 各有哪些状态
- 有哪些关键交互
- 有哪些权限与 tracking 要求

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

## section type 命名建议

推荐使用稳定命名，例如：

- `filter-bar`
- `data-table`
- `summary-card`
- `detail-panel`

避免：

- `module1`
- `block-a`

## interactions 推荐字段

每条 interaction 建议包含：

- `name`
- `trigger`
- `result`
- `feedback`
- `fallback`

## 完成标准

看完 `Page Spec` 后，AI 或前端至少应能回答：

- 页面如何拆 section
- section 用什么数据
- 状态和交互如何定义
- 权限和 tracking 如何处理

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

## 自检清单

- `sections` 是否完整
- `states` 是否覆盖页面与 section
- `dataSources` 是否清楚
- `interactions` 是否可执行
- `permissions` 和 `tracking` 是否遗漏



