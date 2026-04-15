# User List Asset Extraction Example

## 目的

这份示例只回答一件事：

`做完一个真实页面后，怎样从 superpowers spec 中判断哪些内容应该继续沉淀为共享资产。`

这里使用的来源文件是：

- `docs/superpowers/specs/user-list-spec.md`
- `docs/superpowers/plans/user-list-plan.md`

## 先判断：哪些内容不是共享资产

以下内容虽然重要，但默认仍属于项目级执行工件，不直接作为共享资产：

- 当前页面的目标、范围和不做项
- 当前页面的具体字段组合
- 当前页面的本轮业务约束
- 当前页面的验收人和验收口径
- 当前页面的实施拆分与排期风险

这些内容主要用于：

- 支撑当前页面交付
- 保留回写证据
- 为后续抽象提供来源

因此，`user-list-spec.md` 和 `user-list-plan.md` 本身首先是项目级执行工件，而不是共享资产本体。

## 再判断：哪些内容可以抽成共享资产候选

### 1. Pattern 候选

来源：

- `user-list-spec.md` 中的页面结构
- 筛选区 + 列表区 + 分页区

可抽象对象：

- `list-page-table`

抽取理由：

- 结构稳定
- 后台列表页高频出现
- 可被多个页面复用

### 2. Rule 候选

来源：

- `user-list-spec.md` 中的 `Responsive Rules`
- `Review Focus`
- 行级权限显示逻辑

可抽象对象：

- `responsive-admin-rule`
- `permission-rule`
- `review-admin-checklist`

抽取理由：

- 这些规则不只适用于用户列表页
- 在订单列表、内容列表、商家列表中也大概率重复出现

### 3. Theme / Token 候选

来源：

- 用户状态标签的颜色和表达
- 列表页的间距、标题层级、标签样式
- Figma Variables 与项目代码中的 theme / token 文件

可抽象对象：

- `admin-theme-foundation`
- `admin-token-set`

抽取理由：

- 如果多个后台页面开始使用同一套状态标签、间距和视觉层级，这些值就不应继续散落在页面代码里
- spec 只负责说明这些值的使用情况，不作为 design token / variable 真相源

### 4. Kit 候选

来源：

- 状态标签组件
- 行级操作区
- Mobile 端卡片式列表表达

可抽象对象：

- `admin-component-kit`

抽取理由：

- 当这些实现已经在多个页面中重复出现，就应该从页面级代码中抽离为可复用实现基础

### 5. Spec / Workflow 候选

来源：

- `user-list-spec.md` 的结构
- `user-list-plan.md` 的结构

可抽象对象：

- `superpowers-spec-structure`
- `superpowers-plan-structure`
- `review-writeback-workflow`

抽取理由：

- 如果多个页面都按同一 spec / plan 结构协作，说明这套结构已经具备共享价值

## 一个最简单的判断标准

如果某段内容：

- 只服务这一个页面
- 换一个页面就不能复用

那么它更可能仍属于：

- 项目级执行工件

如果某段内容：

- 在多个页面中反复出现
- 可以被直接复用
- 下次用它能减少重新理解

那么它就更可能应该升级为：

- 共享资产候选

## 推荐的提炼动作

做完页面后，建议至少执行下面 3 步：

1. 在 spec 的 `Writeback / Asset Candidates` 中登记候选
2. 判断每个候选属于 `pattern / rule / theme / token / kit / prompt / workflow / case` 哪一类
3. 将值得继续观察的对象同步到 `docs/assets/registry.md`

## 一句话结论

`superpowers 生成的 spec / plan 首先是项目级执行工件；真正进入共享层的，是从这些工件中被验证有效、可继续复用的稳定对象。`
