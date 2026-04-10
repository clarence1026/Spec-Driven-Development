# Design Contract 规范、模板与字段标准

## 定义

`Design Contract` 是设计交付给实现侧的工程契约，不是视觉说明书。

## owner

- 默认 owner：设计师
- 前端参与补充工程理解
- 交付负责人确认是否可进入下一阶段

## 作用

`Design Contract` 主要回答：

- 页面由哪些模块构成
- 每个组件承担什么职责
- 有哪些状态
- 关键交互如何发生
- 响应式与内容约束是什么
- 设计系统如何复用

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

## Component Contract 最小字段

每个组件至少应包含：

- `Purpose`
- `Props`
- `States`
- `Interactions`
- `Responsive Rules`
- `Content Constraints`

## 状态命名建议

推荐统一使用：

- `loading`
- `empty`
- `error`
- `ready`
- `disabled`
- `permission-denied`

## 与 Figma 的关系

- Figma 用于承载视觉和交互呈现
- `Design Contract` 用于承载工程可执行规则
- 两者互补，不互相替代

## 完成标准

看完 `Design Contract` 后，前端至少应能回答：

- 页面结构是什么
- 每个关键组件有哪些状态
- 关键交互如何触发和反馈
- 在不同端的规则是什么

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



