# 资产索引

## 索引目的

这份索引只解决一件事：

`明确当前哪些共享资产已经可以直接复用，哪些对象仍然只处于候选观察阶段。`

当前阶段不追求“资产数量”，更关注：

- 有没有真实复用
- 能不能直接被新页面用上
- 是否明显降低了重复劳动

## 当前优先资产类型

当前仓库优先登记下面 3 类共享资产：

- `Starter（起步模板）`
- `Kit（组件组合包）`
- `Checklist（检查清单）`

theme / token 暂时不作为 docs 层的重点资产对象，只有在跨页面稳定复用后，再进入正式共享资产清单。

## 当前已可直接复用的对象

| 资产名 | 类型 | 来源 | 当前用途 |
| --- | --- | --- | --- |
| `admin-list-page-starter` | Starter（起步模板） | `docs/assets/starters/admin-list-page-starter.md` | 作为后台列表页起手结构 |
| `marketing-home-starter` | Starter（起步模板） | `docs/assets/starters/marketing-home-starter.md` | 作为营销首页起手结构 |
| `Superpowers Spec 骨架` | template | `docs/superpowers/spec-template.md` | 供页面 spec 主文件起草使用 |
| `Superpowers Plan 骨架` | template | `docs/superpowers/plan-template.md` | 供页面 plan 主文件起草使用 |

## 当前候选对象

以下对象保留为候选，待复用稳定后再决定是否升级：

| 候选对象 | 类型 | 升级信号 |
| --- | --- | --- |
| `admin-list-kit` | Kit（组件组合包） | 两个以上后台列表页复用同一组 filter + table + pagination |
| `marketing-home-kit` | Kit（组件组合包） | 两个以上营销首页 / 营销落地页复用同一组 hero + section + cta 组合 |
| `review-admin-checklist` | Checklist（检查清单） | 后台列表页 review 问题开始稳定收敛；参考 `docs/assets/checklists/review-admin-checklist.md` |
| `review-marketing-checklist` | Checklist（检查清单） | 营销首页类页面 review 问题开始稳定收敛；参考 `docs/assets/checklists/review-marketing-checklist.md` |
| `admin-theme-foundation` | theme | 两个以上后台页面稳定复用同一套视觉基础值 |
| `marketing-theme-foundation` | theme | 两个以上营销页稳定复用同一套视觉基础值 |

## 升级最小规则

当前建议至少满足下面 3 条，再考虑升级为正式共享资产：

1. 已经被复用两次以上
2. 新页面 5 分钟内可以明确接入
3. 有清楚的使用方式和消费入口

如果不满足这 3 条，默认继续保留为：

- 项目级执行工件
- 或共享资产候选

## 一句话说明

当前这份索引的作用，不是把概念堆满，而是帮团队快速判断：

`哪些对象已经值得复用，哪些对象还不值得维护。`
