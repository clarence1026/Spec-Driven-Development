# Home Page Plan

## Goal

- 基于 `docs/superpowers/specs/home-page-spec.md` 完成一个可交付的营销型首页
- 在实现过程中验证首页类页面是否可以稳定复用当前 superpowers-first 工作方式

## Inputs

- Spec：
  - `docs/superpowers/specs/home-page-spec.md`
- 设计输入：
  - 首页 Figma 页面
  - UI 标注 / 评论
- design token / variable 真相源：
  - Figma Variables
  - 项目代码中的 theme / token 文件
- 共享参考：
  - `marketing-home-pattern`
  - `hero-section-rule`
  - `cta-section-rule`

## Work Items

1. 搭建页面基础骨架
   - Hero
   - 核心价值点区
   - 能力模块区
   - 使用流程区
   - FAQ 区
   - 底部 CTA 区
2. 实现首页核心内容和 CTA
   - Hero 主标题 / 副标题
   - 主 CTA / 次 CTA
   - 各区块内容展示
3. 实现交互细节
   - FAQ 展开 / 收起
   - 能力模块跳转
   - CTA 跳转
4. 接入 theme / token
   - 页面 spacing
   - 按钮层级
   - 卡片视觉
   - Hero 视觉层级
5. 做多端适配
   - PC 布局
   - Pad 压缩
   - Mobile 单列堆叠
6. 自检与 review
   - 对照 spec 核查结构、层级和 token 使用
7. 回写 spec
   - 记录实现差异
   - 记录资产候选

## Risks

- Hero 主视觉形式若未确认，可能影响首屏布局稳定性
- FAQ 数据来源若未确认，可能影响实现方式
- 首页很容易在迭代中不断堆内容，导致信息层级失控
- 若 theme / token 未充分接入，页面可能退化为局部样式拼接

## Verification

- 结构验证：
  - Hero、价值点、能力模块、流程、FAQ、底部 CTA 都完整可见
- 交互验证：
  - 主 CTA / 次 CTA 可点击
  - FAQ 展开 / 收起可用
  - 能力模块跳转可用
- 展示验证：
  - 标题层级清晰
  - 卡片样式一致
  - CTA 层级清楚
- token 验证：
  - spacing、按钮、卡片、主色层级优先使用已有 theme / token
- 多端验证：
  - `PC / Pad / Mobile` 都能正常访问
  - Mobile 仍保留清晰浏览和 CTA 行动路径
- 一致性验证：
  - 对照 spec 中的 `Review Focus` 做最终检查

## Done Criteria

- 页面可交付
- spec 已补充 writeback
- 至少 1 个资产候选已登记，或明确说明本轮没有候选资产
- 团队可以基于这份 spec / plan 复盘一次首页类页面的完整闭环
