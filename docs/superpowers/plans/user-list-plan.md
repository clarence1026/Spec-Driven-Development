# User List Plan

## Goal

- 基于 `docs/superpowers/specs/user-list-spec.md` 完成一个可交付的后台用户列表页
- 在实现过程中验证 superpowers-first 工作方式是否能稳定承接页面闭环

## Inputs

- Spec：
  - `docs/superpowers/specs/user-list-spec.md`
- 设计输入：
  - 用户列表 Figma 页面
  - UI 标注 / 评论
- 共享参考：
  - 标准后台列表页历史实现
  - `list-page-table`

## Work Items

1. 搭建页面骨架
   - 页面标题
   - 筛选区
   - 列表区
   - 分页区
2. 实现数据查询和状态切换
   - 首屏查询
   - 关键词筛选
   - 状态筛选
   - 分页切换
3. 实现表格字段与行级操作
   - 用户名
   - 手机号脱敏
   - 状态标签
   - 注册时间
   - 查看详情
4. 补齐页面状态
   - loading
   - empty
   - error
   - no-permission
5. 做多端适配
   - PC 保持标准表格
   - Pad 压缩密度
   - Mobile 改为堆叠式表达
6. 自检与 review
   - 对照 spec 核查一致性
7. 回写 spec
   - 记录实现差异
   - 记录资产候选

## Risks

- Mobile 端列表表达方式仍有待 UI 最终确认
- 后端接口字段命名可能与 spec 的抽象字段不完全一致
- 权限控制如果没有统一中间层，容易在操作列上出现偏差

## Verification

- 功能验证：
  - 搜索可用
  - 状态筛选可用
  - 分页可用
  - 详情跳转可用
- 状态验证：
  - loading / empty / error / no-permission 都可触发并可见
- 展示验证：
  - 字段顺序正确
  - 手机号脱敏正确
  - 状态标签正确
- 多端验证：
  - PC / Pad / Mobile 都可正常访问
  - Mobile 保留核心能力
- 一致性验证：
  - 对照 spec 中的 Review Focus 做最终检查

## Done Criteria

- 页面可交付
- spec 已补充 writeback
- 至少 1 个资产候选被记录
- 团队可以基于这份 spec / plan 复盘一次完整闭环
