# Review Checklist

## Basic Information
- 需求名称：
- 页面 / 模块：
- 评审人：
- 评审日期：
- 当前任务理解结果：
- 当前页面规则表达：
- 当前行为规格表达：
- 当前 pattern 引用：
- 对应实现记录：

## 一、输入事实是否齐备
- [ ] Task Context 已齐备
- [ ] 页面规则表达已齐备
- [ ] 行为规格表达已齐备
- [ ] Implementation Record 已开启

## 二、对照页面规则
- [ ] 页面整体结构一致
- [ ] 关键组件列表一致
- [ ] 状态覆盖完整
- [ ] 关键交互链路一致
- [ ] 响应式规则已验证

## 三、对照当前行为规格
- [ ] `meta` 一致
- [ ] `layout.sections` 一致
- [ ] `states` 一致
- [ ] `interactions` 一致
- [ ] `displayRules` 一致

## 四、Pattern 使用检查
- [ ] 默认页面已声明 pattern
- [ ] 实现实际使用了 pattern 定义的结构，而不只是形式声明
- [ ] 如存在 pattern 偏离，`pattern_deviation_reason` 已填写且合理
- [ ] 如未使用默认 pattern，已确认不存在更合适的已有 pattern 可复用

## 五、工程质量与回写
- [ ] 偏差项已记录
- [ ] 评审结论可追溯
- [ ] 资产候选已判断
- [ ] 如未引用默认 pattern，原因已记录
