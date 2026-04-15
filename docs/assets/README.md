# 资产体系

## 当前定位

对当前阶段的小团队来说，资产的目标不是“建一个完整资产管理系统”，而是：

`把已经被验证有效、能被新页面快速用上的对象，沉淀成真正降低交付成本的工具。`

因此，资产本身不会带来效率；
只有“能直接复用的资产”才有价值。

如果一个对象：

- 需要额外解释很多次才能用
- 没有明确消费入口
- 还没有被复用验证

那它更可能只是说明材料，而不是当前值得维护的共享资产。

## 当前阶段的轻量原则

当前建议优先坚持下面 4 条原则：

1. 页面先交付，再谈资产
2. 没有复用两次以上，不正式沉淀
3. 新页面 5 分钟内用不上，不算当前优先资产
4. 共享资产优先工具化，不优先文档化

一句话说：

`先跑页面，再抓复用；先有工具，再做抽象。`

## 分层

当前仍然按三层理解，但重点已经收缩：

```mermaid
flowchart LR
    A[项目级执行工件] --> B[共享资产]
    B --> C[平台消费资产]
```

### 项目级执行工件

这层优先服务当前页面闭环，不把所有内容都提前抽成资产。

典型对象包括：

- 页面级 spec 主文件
- 页面级 plan 主文件
- review 留痕
- spec 中的 writeback 与 asset candidates

### 共享资产

当前阶段优先只沉淀下面 3 类：

- `Starter（起步模板）`
- `Kit（组件组合包）`
- `Checklist（检查清单）`

可以先这样理解：

- `Starter（起步模板）`
  - 一个页面的可复用起手架
  - 新页面可以直接基于它开始改
- `Kit（组件组合包）`
  - 一组经常一起出现、可以成套复用的组件组合
- `Checklist（检查清单）`
  - review 时直接对照使用的检查项列表

theme / token 仍然重要，但当前更适合作为：

- Figma Variables
- 项目代码中的 theme / token 文件

的真相源存在；docs 里只做引用、差异说明和升级判断。

### 平台消费资产

这是后续阶段的事情，当前不作为优先建设目标。

只有当共享资产已经稳定复用后，才再考虑：

- registry
- schema
- workflow
- checker

## 当前优先资产类型

### 1. Starter

`Starter（起步模板）` 是当前最重要的共享资产。

它应该满足：

- 新页面可以直接基于它启动
- 能明显减少从零搭页面的成本
- AI 和 FE 都能直接消费

典型例子：

- `admin-list-page-starter`
- `marketing-home-starter`

### 2. Kit

`Kit（组件组合包）` 是可复用的组件组合，而不是单个零散组件说明。

典型例子：

- `admin-list-kit`
- `marketing-home-kit`

### 3. Checklist

`Checklist（检查清单）` 用于控制 review 质量。

典型例子：

- `review-admin-checklist`
- `review-marketing-checklist`

## 暂缓重建设的对象

当前阶段不建议把下面这些对象做重：

- 大量独立 pattern 文档
- 大量独立 rule 文档
- 重型 registry
- docs 中长期维护 token 明细
- 为了抽象而抽象的 schema

这些对象不是永远不要，而是：

`在小团队当前阶段，它们的维护成本通常大于直接收益。`

## design token / variable 的处理方式

当前建议按下面方式处理：

- 真相源：
  - Figma Variables
  - 项目代码中的 theme / token 文件
- spec：
  - 负责说明、引用、差异记录和 writeback
- 共享资产：
  - 只在跨页面稳定复用后，再升级为共享 token / theme

也就是说：

`spec 不是 token 真相源，docs 也不维护第二套 token 系统。`

## 当前落地抓手

当前仓库里，和小团队轻量资产原则最相关的抓手是：

| 目录 / 文件 | 当前作用 |
| --- | --- |
| `docs/superpowers/specs/` | 页面级 spec 主文件 |
| `docs/superpowers/plans/` | 页面级 plan 主文件 |
| `docs/assets/starters/` | 页面级 `Starter（起步模板）` 设计与说明 |
| `docs/assets/kit/` | `Kit（组件组合包）` |
| `docs/assets/checklists/` | `Checklist（检查清单）` |
| `docs/assets/cases/` | 真实页面回写与提炼案例 |

## 当前最重要的判断标准

如果一个对象想进入共享资产，至少要能回答清楚：

- 新页面怎么直接用它
- 它已经被复用过几次
- 它替团队省掉了什么重复劳动

如果这些问题说不清，那它暂时更适合继续留在项目级执行工件里，而不是升级成共享资产。

## 一句话总结

当前资产体系的重点，不是“资产管理”，而是：

`让已经验证有效的 Starter、Kit 和 Checklist 变成可以直接复用的交付工具。`
