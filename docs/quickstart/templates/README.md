# Templates Directory

当前目录中的 `01-task-context.md`、`02-ui-rule-card.md`、`04-page-spec.yaml` 等文件，
不再作为当前默认执行路径。

当前默认执行入口已经统一到：

- `docs/superpowers/specs/`
- `docs/superpowers/plans/`

因此，本目录现在主要承担以下角色：

- 历史逻辑工件参考
- 未来 schema / workflow 抽象参考
- 用于理解过去如何把页面闭环拆成多个逻辑文件

当前不建议再为新页面默认复制本目录中的模板来启动工作。  
如果要启动新的真实页面，请优先参考：

- `docs/superpowers/README.md`
- `docs/superpowers/spec-template.md`
- `docs/superpowers/plan-template.md`

当前真实页面的默认做法，是创建：

- 1 份 spec 主文件
- 1 份 plan 主文件
