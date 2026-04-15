# Marketing Home Starter（营销首页起步模板）

## Starter（起步模板）目标

这个 Starter 用于：

`让营销首页可以直接基于稳定信息结构和区块骨架启动，而不是每次从零组织。`

适用页面：

- 官网首页
- 产品介绍首页
- 营销落地页首页

## 适用边界

适合：

- 以品牌表达和转化承接为主的首页
- 需要 Hero、价值点、能力区、FAQ、CTA 的页面
- `PC / Pad / Mobile` 三端表达

不适合：

- 强内容型长文档页
- 登录后工作台首页
- 复杂活动专题页

## Starter 结构

推荐页面结构：

```text
MarketingHomeStarter
|- HeroSection
|  |- Eyebrow
|  |- Title
|  |- Description
|  |- PrimaryCTA
|  |- SecondaryCTA
|  |- VisualBlock
|- ValueSection
|  |- ValueCard[]
|- CapabilitySection
|  |- CapabilityCard[]
|- StepsSection
|  |- StepItem[]
|- FAQSection
|  |- FAQItem[]
|- BottomCTASection
```

## 推荐代码拆分

```text
pages/
  index.tsx

components/
  MarketingHome/
    HeroSection.tsx
    ValueSection.tsx
    CapabilitySection.tsx
    StepsSection.tsx
    FAQSection.tsx
    BottomCTASection.tsx

data/
  homeContent.ts

utils/
  homeContentMapper.ts
```

## Spec -> Code 映射

| Spec 段落 | Starter 对应 |
| --- | --- |
| `Task Context` | 页面目标、转化路径、角色理解 |
| `UI Rules -> Page Structure` | 各首页 section 结构 |
| `UI Rules -> Display Rules` | Hero、价值点、FAQ、CTA 的展示控制 |
| `UI Rules -> Visual / Token Rules` | section spacing、button hierarchy、hero visuals |
| `Page Spec -> Data / Fields` | `homeContent.ts` 内容结构 |
| `Interaction Flow` | CTA / FAQ 行为 |
| `Review Focus` | 首页 review 输入 |

## AI 消费方式

AI 使用这个 Starter 时，优先固定以下骨架：

1. 先搭 6 个 section 骨架
2. 再根据 spec 补充文案字段、CTA 和区块内容
3. 再接入 token、主视觉和移动端堆叠表达

## 最先可抽出的 Kit

当复用稳定后，可继续从这个 Starter 中抽出：

- `marketing-home-kit`
  - hero section
  - value card section
  - faq section
  - bottom cta section

## 当前价值

这个 Starter 的价值不是“解释首页设计思路”，而是：

`让一个新的营销首页可以基于统一结构快速启动。`
