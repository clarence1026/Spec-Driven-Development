# 功能简报（Feature Brief）规范与模板

## 它在新体系里的位置

`Feature Brief` 不是为了让某个角色手工补文档，
而是为了把原始输入整理成一份可确认、可执行、可继续派生的需求理解结果。

它通常来自：

- PRD
- 飞书文档
- 会议纪要
- issue / 需求单
- 聊天记录
- 原型链接
- 一段自然语言说明

## 先有原始输入包，再有 Feature Brief

建议任何需求先整理成一个最小原始输入包：

```json
{
  "title": "",
  "goal": "",
  "scope": [],
  "references": {
    "prd": [],
    "figma": [],
    "issues": [],
    "screenshots": []
  },
  "constraints": [],
  "deadline": "",
  "knownRisks": [],
  "acceptanceHints": []
}
```

`Feature Brief` 可以理解成：

- 原始输入包的标准化展开结果
- 进入页面规则确认与实现规划前的需求理解快照

## 默认确认人

常见确认人：

- 产品
- 业务负责人
- 最理解需求目标的人

AI 执行器可以生成初稿，但需求目标、范围边界和成功标准必须有人确认。

## 它主要回答什么

- 这次到底要做什么
- 为谁做
- 哪些在范围内
- 哪些不在范围内
- 什么叫交付成功
- 当前还缺什么信息

## 什么时候需要完整 Feature Brief

建议显式产出完整 `Feature Brief` 的场景：

- 新页面
- 首次进入标准模式
- 业务目标不够清楚
- 需要多人对齐范围与成功标准

如果是小需求，也可以只保留最小任务理解结果；
但其中关于目标、范围和成功标准的事实，仍然应该能被看见和确认。

## 最少应包含

- `Feature Name`
- `Goal`
- `Users`
- `User Scenarios`
- `Core Features`
- `Success Metrics`
- `Scope`
- `Constraints`
- `Open Questions`（如有）

## 不应混入什么

- 详细页面布局
- 组件实现细节
- 技术方案选型细节

这些内容应在页面规则表达或行为规格表达中继续展开。

## 完成标准

看完 `Feature Brief` 后，页面规则确认人与实现方至少应能回答：

- 本次到底做什么
- 哪些不做
- 用户主路径是什么
- 什么叫交付成功
- 当前还缺哪些关键信息

## 模板

```md
# Feature Brief

## Feature Name
<功能名称>

## Goal
<本次要解决的问题与目标>

## Users
<目标用户>

## User Scenarios
1. <场景 1>
2. <场景 2>

## Core Features
- <核心能力 1>
- <核心能力 2>

## Success Metrics
- <成功标准 1>
- <成功标准 2>

## Scope
### In Scope
- <本次范围内内容>

### Out of Scope
- <本次不做内容>

## Constraints
- <业务约束 / 时间约束 / 合规约束>

## Open Questions
- <待确认问题，可为空>
```

## 自检清单

- 是否明确了目标
- 是否明确了范围边界
- 是否明确了成功标准
- 是否明确列出了待确认项
- 是否避免混入设计和实现细节

