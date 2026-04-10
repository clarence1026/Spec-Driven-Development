# Feature Brief 规范与模板

## 定义

`Feature Brief` 是业务输入工件，用于把原始需求整理成可交接的结构化输入。

## owner

- 默认 owner：产品经理 / 业务负责人
- AI 可辅助整理初稿
- 设计与前端作为接收方参与确认

## 作用

`Feature Brief` 主要回答：

- 本次要解决什么问题
- 为谁解决
- 哪些场景在范围内
- 什么算成功
- 哪些不在本次范围内

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

## 不应包含

- 页面布局细节
- 组件实现细节
- 技术方案细节

## 完成标准

看完 `Feature Brief` 后，设计和前端至少应能回答：

- 本次到底做什么
- 哪些不做
- 用户主路径是什么
- 什么叫交付成功

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

- 是否写清了本次目标
- 是否写清了范围边界
- 是否写清了成功标准
- 是否避免混入设计和技术实现细节



