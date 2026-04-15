# Specs Directory

当前目录用于存放页面级 spec。

命名建议：

- `<page-name>-spec.md`

命名补充说明：

- 对持续维护中的真实页面，使用稳定文件名，不按日期重复新建
- 同一页面多次修改，直接在原 spec 中回写和更新状态
- 需要保留阶段快照时，再额外创建带日期的归档文件
- 快照建议放在 `docs/archive/snapshots/<page-name>/`

每份 spec 默认至少覆盖：

- Task Context
- UI Rules
- Page Spec
- Review Focus
- Writeback / Asset Candidates

如果页面涉及视觉变量、色值、间距或主题差异，建议在 spec 中至少补充：

- `UI Rules -> Visual / Token Rules`
- `Page Spec -> Theme / Token Usage`
