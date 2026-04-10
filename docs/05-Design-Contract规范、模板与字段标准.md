# 设计契约（Design Contract）规范、模板与字段标准

## 它在新体系里的位置

`Design Contract` 不是单纯的设计说明，而是页面规则的标准化表达。

它负责承接：

- 页面结构
- 状态规则
- 关键交互
- 响应式与内容约束
- 设计系统依赖

可以把它理解成：

- 页面规则确认结果
- 设计稿、原型、交互说明之外的工程规则快照

## 它可能来自哪里

`Design Contract` 不必只能由某个固定角色手工从零写出。

它通常来自以下组合：

- 设计稿 / 原型工具
- 页面说明
- 状态补充说明
- 设计评审结论
- AI 执行器整理初稿
- 页面规则确认人补齐关键特例

## 默认确认人

常见确认人：

- 设计
- 设计工程师
- 最理解页面规则的人

实现方应参与确认它是否足够支撑 `Page Spec` 生成和后续实现。

## 它主要回答什么

- 页面由哪些模块构成
- 每个组件承担什么职责
- 有哪些状态
- 关键交互如何发生
- 响应式与内容约束是什么
- 哪些规则来自设计系统，哪些是页面特例

## 什么时候需要完整 Design Contract

建议显式产出完整 `Design Contract` 的场景：

- 新页面
- 结构和交互较复杂
- 设计规则不能只靠设计稿默认理解
- 页面特例较多

如果任务较小、规则较稳定，也可以由设计系统规则、既有页面模式或变更约束承接其职责。

## 核心字段

| 字段 | 是否必填 | 作用 |
| --- | --- | --- |
| `Page` | 是 | 标识页面名称 |
| `Goal` | 是 | 定义页面在用户流程中的目标 |
| `Layout` | 是 | 定义整体结构和区域划分 |
| `Components` | 是 | 列出关键组件 |
| `Component Contracts` | 是 | 定义组件职责、状态、交互和约束 |
| `Page States` | 是 | 定义页面级状态 |
| `Key Interactions` | 是 | 定义关键交互链路 |
| `Responsive Strategy` | 是 | 定义多端策略 |
| `Design System Dependencies` | 是 | 定义设计系统复用关系 |
| `Notes` | 否 | 补充说明 |

## 字段原则

1. 先写结构，再写视觉细节
2. 每条规则都应可实现或可检查
3. 公共规则优先引用设计系统
4. 页面特例必须显式标注
5. 缺失状态不要留给实现方靠猜

## Component Contract 最小字段

每个组件至少应包含：

- `Purpose`
- `Props`
- `States`
- `Interactions`
- `Responsive Rules`
- `Content Constraints`

## 与设计稿 / 原型工具的关系

- 设计稿 / 原型工具用于承载视觉和交互呈现
- `Design Contract` 用于承载工程可执行规则
- 两者互补，不互相替代

## 完成标准

看完 `Design Contract` 后，实现方至少应能回答：

- 页面结构是什么
- 每个关键组件有哪些状态
- 关键交互如何触发和反馈
- 在不同端的规则是什么
- 哪些规则来自设计系统，哪些是页面特例

## 模板

```md
# Design Contract

## Page
<页面名称>

## Goal
<本页面在用户流程中的作用>

## Layout
<页面整体布局方式、区域划分>

## Components
- <组件 1>
- <组件 2>

## Component Contracts
### Component: <组件名>
#### Purpose
<组件职责>

#### Props
- <关键输入项>

#### States
- <loading / empty / error / ready / disabled ...>

#### Interactions
- <触发 -> 结果 -> 反馈>

#### Responsive Rules
- <不同端规则>

#### Content Constraints
- <文案长度 / 换行 / 截断 / 格式>

## Page States
- <页面级状态>

## Key Interactions
- <关键交互链路>

## Responsive Strategy
<桌面端 / Pad / Mobile 的整体策略>

## Design System Dependencies
- <依赖的设计系统组件 / token / 模式>

## Notes
- <补充说明，可为空>
```

## 自检清单

- 是否明确页面结构
- 是否明确关键组件状态
- 是否明确关键交互
- 是否明确响应式策略
- 是否区分了设计系统通用规则与页面特例

