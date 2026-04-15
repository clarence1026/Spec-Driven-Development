# User List Spec

## 1. Task Context

### Goal

- 为后台运营提供统一的用户查询入口
- 支持快速筛选、查看关键状态，并进入用户详情做后续处理
- 让页面结构、规则、实现和回写都可以围绕同一份 spec 推进

### Scope

- 本次范围内：
  - 用户列表展示
  - 关键词搜索
  - 状态筛选
  - 注册时间展示
  - 分页
  - 行级“查看详情”操作
  - `PC / Pad / Mobile` 三端表达
- 本次不做：
  - 批量操作
  - 导出
  - 列配置自定义
  - 高级筛选弹窗

### Users / Roles

- 主要用户：后台运营、客服、内容审核人员
- 权限假设：
  - 有用户列表访问权限的账号可进入页面
  - 只有具备详情查看权限的账号可点击“查看详情”

### Input Sources

- PRD / Issue：用户管理后台需要一个标准列表页，承接查询与查看详情入口
- Figma / 标注：标准后台列表布局，包含筛选区、表格区、分页区
- design token / variable 真相源：
  - Figma Variables
  - 项目代码中的 theme / token 文件
- 历史页面：订单列表、内容列表等后台标准表格列表页
- 共享资产参考：
  - `list-page-table`
  - `responsive-admin-rule`
  - `permission-rule`

### Acceptance

- 验收人：产品负责人 + 前端负责人
- 验收重点：
  - 列表结构是否完整
  - 筛选和分页是否可用
  - 状态、空态、异常态是否清楚
  - 三端表达是否符合预期

## 2. UI Rules

### Page Structure

- 页面由 3 个核心区块构成：
  - 筛选区
  - 列表区
  - 分页区
- 页面标题和基础说明放在列表上方

### States

- `loading`
  - 首次进入页面时显示表格骨架屏或 loading 占位
- `ready`
  - 数据正常返回，显示表格和分页
- `empty`
  - 查询无结果时展示空态说明，并保留筛选入口
- `error`
  - 接口失败时展示错误提示和重试入口
- `no-permission`
  - 用户无权限时不展示列表内容，改为权限提示

### Interactions

- 关键词搜索：
  - 输入用户名 / 手机号 / 邮箱关键字后触发查询
- 状态筛选：
  - 按用户状态筛选结果
- 分页：
  - 支持切换页码
- 行级操作：
  - 点击“查看详情”进入用户详情页

### Display Rules

- 表格列默认展示：
  - 用户名
  - 手机号
  - 用户状态
  - 注册时间
  - 操作列
- 用户状态使用统一状态标签表达
- 注册时间统一按本地时间格式展示
- 手机号默认脱敏展示

### Visual / Token Rules

- 优先复用后台管理侧已有的 theme / token
- 用户状态标签优先使用语义化状态颜色，而不是页面内散落的临时色值
- 列表区、筛选区、分页区的间距优先复用现有后台列表页 spacing token
- 如果本轮出现新的临时色值、间距或标签样式，需要在 writeback 中判断是否升级为共享资产中的 token
- spec 只负责说明和引用，不作为 design token / variable 真相源

### Responsive Rules

- `PC`
  - 保持完整表格布局和完整字段展示
- `Pad`
  - 保留表格结构，但适当压缩列宽和间距
- `Mobile`
  - 不强行保留完整宽表格
  - 采用卡片 / 堆叠式表达核心字段
  - 保留搜索、状态筛选和“查看详情”主操作

### Open Questions

- Mobile 端状态筛选采用下拉还是横向 chips，待 UI 最终确认

## 3. Page Spec

### Layout

- 顶部：页面标题“用户列表”
- 第一层：筛选区
  - 关键词输入框
  - 状态筛选
  - 查询按钮
  - 重置按钮
- 第二层：列表区
  - 表头、数据行、空态 / 错误态占位
- 第三层：分页区
  - 当前页码
  - 总数信息

### Data / Fields

- `username`
  - 必填展示字段
- `phoneMasked`
  - 手机号脱敏展示
- `status`
  - 使用状态标签
- `registeredAt`
  - 格式化展示
- `detailAction`
  - 行级按钮，受权限控制

### Interaction Flow

- 用户进入页面
  - 页面发起首屏查询
  - 进入 `loading`
  - 成功后进入 `ready`
- 用户输入关键词 / 切换状态
  - 触发查询
  - 表格刷新
- 用户点击分页
  - 切换页码并更新列表
- 用户点击“查看详情”
  - 跳转到用户详情页

### Constraints

- 列表查询参数需要和后端接口字段保持一致
- 详情跳转必须带用户唯一 ID
- Mobile 端允许改变表达形式，但不能删除核心业务能力
- 本轮不引入批量操作和高级筛选

### Theme / Token Usage

- 已复用：
  - 后台列表页基础 spacing token
  - 状态标签语义色 token
- 待项目代码接入：
  - `admin-theme-foundation`
  - `admin-token-set`
- 若本轮实现中出现临时色值、字号或间距，仅作为项目级执行工件记录，待复用稳定后再升级为共享资产

### Reuse

- Pattern：
  - `list-page-table`
- Rule：
  - `responsive-admin-rule`
  - `permission-rule`
- Theme / Token：
  - 后续接入 `admin-theme-foundation`
  - 后续接入 `admin-token-set`

## 4. Review Focus

- 表格结构是否与标准后台列表页一致
- `loading / empty / error / no-permission` 是否都可见且表达正确
- Mobile 端是否仍保留核心筛选和主操作
- 手机号脱敏是否正确
- “查看详情”按钮是否按权限显示
- spec 中定义的不做项是否没有被顺手加进来

## 5. Writeback / Asset Candidates

### Implementation Notes

- 待实现后回填：
  - 最终 Mobile 端采用哪种表达方式
  - 接口实际字段与 spec 是否有差异
  - 哪些视觉值继续保留为项目级执行工件

### Decisions

- 当前默认按标准后台列表页模式推进
- 批量操作暂不纳入本轮

### Asset Candidates

- `list-page-table`
- `responsive-admin-rule`
- `permission-rule`
- `review-admin-checklist`
- `superpowers-spec-structure`

## 6. Status

- Draft
