# Home Page Spec

## 1. Task Context

### Goal

- 为产品提供统一的首页入口，快速传达品牌定位、核心价值和主要行动路径
- 让首次进入的用户在短时间内理解产品能解决什么问题、适合谁、下一步该做什么
- 让页面结构、视觉规则、实现边界、review 和 writeback 都围绕同一份 spec 推进

### Scope

- 本次范围内：
  - Hero 首屏
  - 核心价值点区
  - 能力模块区
  - 使用流程区
  - FAQ 区
  - 底部 CTA 区
  - `PC / Pad / Mobile` 三端表达
- 本次不做：
  - 多语言切换
  - 个性化推荐
  - 登录后工作台内容
  - 复杂动画编排
  - A/B 实验系统接入

### Users / Roles

- 主要用户：
  - 首次访问的潜在客户
  - 已了解产品、准备进一步咨询的用户
  - 从广告、搜索或分享进入的流量用户
- 权限假设：
  - 首页为公开页面，无登录前置要求
  - 所有核心信息默认可见

### Input Sources

- PRD / Issue：
  - 首页需要承担品牌第一印象、产品价值说明和主要转化入口
- Figma / 标注 / 评论：
  - 首页包含清晰的首屏主张、模块化信息分区和一致的品牌视觉层级
- design token / variable 真相源：
  - Figma Variables
  - 项目代码中的 theme / token 文件
- 历史页面：
  - 官网首屏、产品介绍页、方案页的既有表达
- 共享资产参考：
  - `marketing-home-pattern`
  - `hero-section-rule`
  - `cta-section-rule`

### Acceptance

- 验收人：
  - 产品负责人
  - 设计负责人
  - 前端负责人
- 验收重点：
  - 首页结构是否清晰
  - Hero 是否能在首屏完成核心表达
  - 各信息分区是否有明确主次关系
  - 三端表达是否稳定
  - CTA 是否清楚且可执行

## 2. UI Rules

### Page Structure

- 页面由 6 个核心区块构成：
  - Hero 首屏
  - 核心价值点区
  - 能力模块区
  - 使用流程区
  - FAQ 区
  - 底部 CTA 区
- 首页整体采用“先价值主张、再能力说明、再行动引导”的信息顺序
- Header 和 Footer 作为全站公共区块，不在本 spec 中展开细节，只说明首页与其衔接关系

### States

- `loading`
  - 首屏静态内容优先直出，不依赖复杂 loading
  - 若 FAQ 或案例数据异步加载，使用轻量 skeleton 或占位
- `ready`
  - 所有首页模块正常展示
- `partial-ready`
  - 主内容已展示，但个别异步区块尚未完成加载
- `error`
  - 异步模块失败时，不影响整页主内容；局部区块展示降级提示

### Interactions

- Hero 主按钮：
  - 进入主要转化路径，例如“立即体验”或“预约演示”
- Hero 次按钮：
  - 进入补充认知路径，例如“查看方案”或“了解更多”
- 能力模块区：
  - 支持点击卡片进入对应产品能力页
- FAQ 区：
  - 支持展开 / 收起
- 底部 CTA：
  - 再次承接主要行动入口

### Display Rules

- Hero 必须在首屏清楚表达：
  - 产品是谁
  - 解决什么问题
  - 用户下一步可以做什么
- 核心价值点区只保留最关键的 3 项，不堆叠过多卖点
- 能力模块区优先用模块卡片承接核心能力，不展开过长正文
- 使用流程区以 3 到 4 步为宜，强调低理解成本
- FAQ 区只放首页阶段高频问题，不替代帮助中心
- CTA 区要比普通内容区更明确地承接转化动作

### Visual / Token Rules

- 优先复用营销站点已有 theme / token
- Hero 使用品牌主视觉背景、主标题字号层级和主 CTA token
- 页面 section 间距、卡片圆角、阴影、按钮状态优先使用语义化 design token / variable
- 同一层级标题、正文、按钮、标签在各区块中保持一致，不允许页面内随意发散
- 如果本轮出现新的临时色值、间距、卡片样式或按钮层级，需要在 writeback 中判断是否升级为共享资产中的 token 或 rule
- spec 只负责说明和引用，不作为 design token / variable 真相源

### Responsive Rules

- `PC`
  - Hero 保持左右或上下明确层级布局
  - 能力模块区优先使用多列卡片
- `Pad`
  - 模块保持分区完整，但压缩栅格和间距
  - Hero 可调整为更紧凑的垂直布局
- `Mobile`
  - 所有区块改为单列堆叠
  - Hero 保留标题、说明、主 CTA、次 CTA
  - 能力卡片与 FAQ 使用更紧凑的信息密度
  - 避免复杂并列布局和过重背景装饰影响阅读

### Open Questions

- Hero 是否需要静态插画 / 产品截图作为主视觉，待 UI 最终确认
- FAQ 是否来自静态配置还是 CMS，待产品最终确认

## 3. Page Spec

### Layout

- 第一屏：Hero
  - 品牌标签
  - 主标题
  - 副标题 / 一句话价值说明
  - 主 CTA
  - 次 CTA
  - 主视觉区域
- 第二屏：核心价值点区
  - 3 张价值卡片
- 第三屏：能力模块区
  - 产品能力模块卡片或图文组合
- 第四屏：使用流程区
  - 3 到 4 步流程说明
- 第五屏：FAQ 区
  - 常见问题折叠列表
- 第六屏：底部 CTA 区
  - 再次强调主行动按钮

### Data / Fields

- `heroEyebrow`
  - Hero 顶部短标签
- `heroTitle`
  - 首屏主标题
- `heroDescription`
  - 首屏价值说明
- `primaryCta`
  - 主 CTA 文案与跳转
- `secondaryCta`
  - 次 CTA 文案与跳转
- `valueItems`
  - 价值点数组，建议 3 项
- `capabilityItems`
  - 能力模块数组
- `steps`
  - 流程步骤数组
- `faqs`
  - FAQ 数组
- `bottomCta`
  - 底部 CTA 文案与跳转

### Interaction Flow

- 用户进入首页
  - 首先看到 Hero 主张与 CTA
- 用户继续下滑
  - 依次理解价值点、能力模块和使用流程
- 用户在 FAQ 中查看常见问题
  - 展开 / 收起对应问题
- 用户在任一区域点击 CTA
  - 进入主要转化路径或进一步说明页

### Constraints

- Hero 文案必须控制在首屏可快速理解的长度内
- 首页各区块以“浏览型认知”为主，不承载过重的业务操作
- FAQ 和能力内容不能无边界膨胀，避免首页退化为长文档页
- 首页视觉可以有品牌氛围，但不应依赖复杂动画才能完成信息表达

### Theme / Token Usage

- 已复用：
  - 品牌主色 token
  - 页面 section spacing token
  - 主次按钮 token
  - 卡片圆角与阴影 token
- 待项目代码接入或确认：
  - `marketing-theme-foundation`
  - `marketing-home-token-set`
- 若本轮实现中出现新的 Hero 背景层级、卡片样式或 CTA 视觉值，仅先记录为项目级执行工件，待复用稳定后再升级为共享资产

### Reuse

- Pattern：
  - `marketing-home-pattern`
- Rule：
  - `hero-section-rule`
  - `cta-section-rule`
  - `marketing-responsive-rule`
- Theme / Token：
  - `marketing-theme-foundation`
  - `marketing-home-token-set`

## 4. Review Focus

- Hero 是否在首屏完成核心表达
- 各信息区块的层级和顺序是否合理
- 主 CTA 与次 CTA 是否清楚区分
- Mobile 端是否仍能快速完成浏览和点击行动
- 页面视觉是否复用了统一 token，而不是局部临时拼接
- FAQ 是否控制在首页应有的信息密度范围内

## 5. Writeback / Asset Candidates

### Implementation Notes

- 待实现后回填：
  - Hero 最终采用图文并列还是纯文案 + 插画布局
  - FAQ 数据最终来自静态配置还是内容系统
  - 哪些视觉值继续保留为项目级执行工件
  - 哪些 CTA / Hero / spacing 规则值得继续升级

### Decisions

- 首页优先承担认知和转化入口，不承载复杂业务操作
- 首轮以稳定结构和清晰层级为主，不追求复杂动态特效

### Asset Candidates

- `marketing-home-pattern`
- `hero-section-rule`
- `cta-section-rule`
- `marketing-responsive-rule`
- `marketing-home-token-set`
- `marketing-home-spec-structure`

## 6. Status

- Draft
