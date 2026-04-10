# 实现记录（Implementation Record）规范与模板

## 它在新体系里的位置

`Implementation Record` 是交付回写工件。

它不是事后总结材料，而是当前实现结果、偏差、证据和资产候选的结构化回写入口。

可以把它理解成：

- 本次最终实现事实的记录
- 规则与规格变化的回写点
- 资产提取的第一入口

## 默认确认人

常见确认人：

- 前端
- 主要实现人

交付裁决人确认 review 结论；AI 执行器可以自动整理初稿。

## 它主要回答什么

- 最终是如何实现的
- 为什么这样实现
- 与当前规则和当前规格是否有偏差
- review 结果如何
- 留下了哪些可复用资产

## 它最适合自动化生成的内容

`Implementation Record` 是全套工件里最适合自动预填的一份。

自动来源通常包括：

- 变更文件
- PR 描述
- commit 信息
- 测试结果
- 截图或录屏
- `Page Spec` / patch
- review 结论

人需要重点补充的通常是：

- 关键技术决策
- 偏差原因
- 资产候选是否建议升级

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
- 与当前规则和规格是否存在偏差
- 偏差为什么被接受
- 哪些内容值得复用
- 下次类似需求应优先复用什么

## 模板

```md
# Implementation Record

## Feature
<功能名称>

## Related Specs
- Feature Brief: <路径或名称>
- Design Contract: <路径或名称>
- Page Spec: <路径或名称>
- Spec Patch: <如有>

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
- 是否标明了对应的规则表达与规格表达

