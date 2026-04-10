# Implementation Record 规范与模板

## 定义

`Implementation Record` 是交付回写工件，用于记录最终实现方式、关键决策、偏差和资产候选。

## owner

- 默认 owner：前端
- 交付负责人确认 review 结论
- AI 可辅助整理初稿

## 作用

`Implementation Record` 主要回答：

- 最终是如何实现的
- 为什么这样实现
- 与上游工件是否有偏差
- review 结果如何
- 留下了哪些可复用资产

## 最少应包含

- `Feature`
- `Related Specs`
- `Pages`
- `Components`
- `Technical Decisions`
- `File Mapping`
- `State and Interaction Notes`
- `Deviations`
- `Review Evidence`
- `Asset Candidates`

## 完成标准

接手者看完 `Implementation Record` 后，至少应能回答：

- 页面和组件落在代码库哪里
- 与规格是否存在偏差
- 偏差为什么被接受
- 哪些内容值得复用

## 模板

```md
# Implementation Record

## Feature
<功能名称>

## Related Specs
- Feature Brief: <路径或名称>
- Design Contract: <路径或名称>
- Page Spec: <路径或名称>

## Pages
- <页面 1>

## Components
- <组件 1>
- <组件 2>

## Technical Decisions
- <关键技术决策 1>
- <关键技术决策 2>

## API
- <接口使用情况>

## File Mapping
- <页面 / 组件 -> 文件路径>

## State and Interaction Notes
- <关键状态与交互实现说明>

## Deviations
- <偏差项 / 原因 / 裁决>

## Review Evidence
- <截图 / 录屏 / 测试 / 对照结果>

## Asset Candidates
- <候选资产 / 类型 / 是否建议升级 / 维护人>

## Notes
- <补充说明>
```

## 自检清单

- 是否记录了关键技术决策
- 是否记录了偏差
- 是否记录了 review 结果
- 是否登记了资产候选



