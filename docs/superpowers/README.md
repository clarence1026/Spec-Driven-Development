# Superpowers 执行入口

当前仓库的默认执行入口已经统一到：

- `docs/superpowers/specs/`
- `docs/superpowers/plans/`

建议理解方式：

- `specs/`：承接页面任务上下文、页面规则、页面规格、review 重点和回写记录
- `plans/`：承接任务拆分、实施顺序、风险和验证动作

推荐参考：

- `docs/superpowers/spec-template.md`
- `docs/superpowers/plan-template.md`

当前不再默认通过 `docs/quickstart/templates/` 复制多份逻辑模板启动页面；`quickstart/templates/` 仅保留为历史逻辑参考和未来结构化抽象参考。

## 当前仓库的命名约定

虽然有些 superpowers 工作流会默认生成 `YYYY-MM-DD-描述` 形式的文件名，但在当前这套页面交付方案里，我们做了项目级适配：

- 页面级 spec / plan 采用稳定主文件命名
- 时间型文件保留给阶段快照、探索分支和归档

也就是说，这里不是否定 superpowers 的时间留痕思路，而是把它改造成更适合页面持续维护的工作方式。

当前仓库建议：

- 持续维护中的页面 spec 主文件：`<page-name>-spec.md`
- 持续维护中的页面 plan 主文件：`<page-name>-plan.md`

例如：

- `home-page-spec.md`
- `home-page-plan.md`

这样做的原因是：

- 页面级 spec / plan 是当前真正在执行的主文件
- 同一个页面多次迭代时，应持续回写同一份主文件
- 文件历史由 git 和记要承担，不靠不断复制新日期文件维持

## 快照文件放置位置

当前建议把快照文件统一放到：

- `docs/archive/snapshots/<page-name>/`

例如：

- `docs/archive/snapshots/home-page/2026-04-15-home-page-spec-v1.md`
- `docs/archive/snapshots/home-page/2026-04-15-home-page-plan-v1.md`

这样可以保证：

- `docs/superpowers/specs/` 和 `docs/superpowers/plans/` 中只保留当前主文件
- 历史冻结版本集中归档，不和当前主文件混在一起

只有在下面几种情况，才建议额外产生带日期的文件：

- 一次独立设计探索
- 阶段性冻结快照
- 需要保留重要方案分叉
- 归档到 `docs/archive/`

## 主文件、快照与 Git 分支的关系

可以按下面这个口径理解：

- 主文件：当前页面的唯一有效 spec / plan
- feature 分支：本轮需求开发和文档修改发生的位置
- main 分支：团队合并后的最新稳定版本
- 快照文件：重要阶段的冻结留档，不参与日常执行

推荐动作是：

1. `main` 上保留页面主文件
2. 新需求在 feature 分支中修改同一份主文件
3. 如遇重要里程碑，再额外生成快照文件
4. 功能完成后，代码和主文件一起合并回 `main`
