# Review Checklist 与 Change Request 规范模板

## 一、Review Checklist

### 定义

`Review Checklist` 是结构化评审工件，用于把 review 从经验检查变成标准核对。

### 必须覆盖的内容

- 输入工件是否齐备
- `Design Contract` 对照
- `Page Spec` 对照
- 状态与交互检查
- 工程质量检查
- 资产与沉淀检查

### 模板

```md
# Review Checklist

## 基本信息
- 需求名称：
- 页面 / 模块：
- 评审人：
- 评审日期：
- 对应 Feature Brief：
- 对应 Design Contract：
- 对应 Page Spec：
- 对应 Implementation Record：

## 一、输入工件是否齐备
- [ ] `Feature Brief` 已齐备
- [ ] `Design Contract` 已齐备
- [ ] `Page Spec` 已齐备
- [ ] `Implementation Record` 已开启
- [ ] 评审证据已准备

## 二、对照 Design Contract
- [ ] 页面整体结构一致
- [ ] 关键组件列表一致
- [ ] 组件状态覆盖完整
- [ ] 关键交互链路一致
- [ ] 响应式规则已验证
- [ ] 设计系统依赖按要求复用

## 三、对照 Page Spec
- [ ] `page` / `route` / `layout` 一致
- [ ] `sections` 一致
- [ ] `dataSources` 一致
- [ ] `states` 一致
- [ ] `interactions` 一致
- [ ] `permissions` 已处理
- [ ] `tracking` 已处理或有说明

## 四、状态与交互检查
- [ ] loading 状态已实现
- [ ] empty 状态已实现
- [ ] error 状态已实现
- [ ] ready 状态已实现
- [ ] 关键交互具备反馈
- [ ] 异常路径已验证

## 五、工程质量检查
- [ ] 组件边界清晰
- [ ] 无明显重复实现
- [ ] 文件映射清晰
- [ ] 偏差项已记录

## 六、资产与沉淀检查
- [ ] 资产候选已判断
- [ ] 候选资产已登记
- [ ] 如需升级，已进入资产流程

## 七、评审结论
- 评审结果：
- 主要问题：
- 后续动作：
```

## 二、Change Request

### 定义

`Change Request` 是后续调整的统一入口工件，用于把变更先结构化，再进入执行。

### 变更分级

- `L0` 文案 / 视觉微调
- `L1` 组件级设计调整
- `L2` 页面结构调整
- `L3` 需求级调整

### 标准流程

`Change Request -> 变更分级 -> 先更新对应工件 -> 再改实现 -> Review -> 回写 Implementation Record`

### 变更与工件更新关系

- `L0`：通常更新 `Implementation Record`，必要时补充 `Design Contract`
- `L1`：优先更新 `Design Contract`，再更新实现
- `L2`：必须更新 `Design Contract` 与 `Page Spec`
- `L3`：先回到 `Feature Brief`，再重走后续链路

### 模板

```md
# Change Request

## 基本信息
- 变更名称：
- 发起人：
- 日期：
- 对应功能 / 页面：

## 变更背景
<为什么要改>

## 变更内容
- <变更项 1>
- <变更项 2>

## 影响范围
- 需求：
- 设计：
- 实现：
- review：

## 变更分级建议
- 建议级别：<L0 / L1 / L2 / L3>
- 说明：

## 需要更新的工件
- [ ] `Feature Brief`
- [ ] `Design Contract`
- [ ] `Page Spec`
- [ ] `Implementation Record`

## 确认信息
- 评估人：
- 确认人：
- 结论：
```

## 三、使用原则

- review 必须对照 `Design Contract` 与 `Page Spec`
- 变更不得直接从代码开始
- 所有 review 结论最终都要回写 `Implementation Record`



