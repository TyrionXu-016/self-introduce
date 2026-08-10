# 公开求职简历页设计

日期：2026-08-10  
状态：待实现  
源文件：`/Users/tyrion/Documents/Codex/2026-06-23/1/outputs/Tyrion-AI架构-全栈-0810.pdf`

## 目标

在现有 Next.js 个人站中新增独立页面，把 PDF 简历完整呈现给招聘方。页面是公开求职页，不是首页的替代品。视觉采用深色「技术档案」气质，版式为左侧锚点轨 + 长页滚动。中英双语，英文按 PDF 意译，章节不删减。

## 已锁定决策

| 项 | 选择 |
| --- | --- |
| 角色 | A：公开求职简历页 |
| 语言 | B：中英双语，跟全站切换 |
| 视觉 | B：技术档案风（深色、等宽点缀、指标卡片） |
| 版式 | A：左侧锚点轨 + 长页滚动 |
| 下载 PDF | B：不挂文件，只做网页 |
| 实现路径 | 方案 1：独立路由 + 独立视觉壳 |

## 非目标

- 不在运行时读取或嵌入 PDF
- 不提供「下载 PDF」按钮
- 不改写首页 About / Skills / Experience / Contact 正文
- 不引入新测试框架、不引入 Motion 等新动画库（用 CSS）
- 不把 `.superpowers/` brainstorm 产物纳入功能范围

## 路由与布局

- `/zh`、`/en`：现有首页，保留浅色 Nav + Footer
- `/zh/resume`、`/en/resume`：档案页，不套用首页 Nav/Footer

用 Next.js route group 拆壳：

```
app/[locale]/layout.tsx              # 仅 locale 校验、generateStaticParams、基础 metadata
app/[locale]/(site)/layout.tsx       # 现有 Nav + Footer
app/[locale]/(site)/page.tsx         # 现有首页
app/[locale]/resume/layout.tsx       # 档案壳（深色底、顶栏、左侧轨）
app/[locale]/resume/page.tsx         # 档案正文
```

非法 locale 继续走现有 `notFound()`。

## 入口

首页 `Nav` 增加 `Link` 到 `/resume`（文案：中文「简历」/ 英文 “Resume”）。  
首页 `Hero` 增加次要按钮，同样指向 `/resume`（文案：中文「完整简历」/ 英文 “Full resume”）。  
档案页 `ResumeTopbar`：左侧返回首页，右侧语言切换；切换语言后必须停留在 `/resume`，不得跳回首页。

## 视觉方向

- 背景：近黑绿 `#0e1412` 一类，而不是纯黑或首页 zinc
- 强调色：终端绿 `#3dba8b`，用于轨高亮、指标数字、小节标签
- 边框/分割：低对比绿灰 `#23463c`
- 字体：展示名与指标用现有 Geist Sans；轨标签、章节码、元信息用 Geist Mono
- 动效：入场用 CSS stagger fade/slide；轨高亮与 hover 用短过渡；不引入 JS 动画库
- 移动端：左侧轨改为顶部横滑 chips，主栏单列；指标卡 2×2

档案页强制深色，不跟随系统 `prefers-color-scheme` 切回浅色，以免破坏档案气质。首页外观不变。

## 页面结构（主栏顺序）

1. **Hero**：主名 Tyrion；中文页可附法定名「徐阳」；职位「资深全栈工程师 / 架构师」；联系邮箱用 PDF 中的 `tyrion0016@gmail.com`（不与首页复旦邮箱混用）
2. **Metrics**：QPS 300%+、团队产出 40%+、缺陷率 25%↓、稳定性 99.9%
3. **Summary**：专业概要全文
4. **Skills**：五组——服务端与云原生、前端与跨端、数据库与中间件、AI 效能工具链、其他技术
5. **Experience**：四段工作经历，现职含「核心架构 / AI 效能 / 数据库与性能」三个子块
6. **Projects**：四个项目，含角色与成果
7. **Awards**：两项竞赛经历
8. **Education**：复旦硕士、大连民族本科
9. **Certs**：大学英语四级

锚点轨章节：概要、技能、经历、项目、竞赛、教育、证书。点击平滑滚动；scroll spy 高亮当前章节。Hero + Metrics 算首屏，轨默认高亮「概要」。

## 组件

| 组件 | 职责 | 依赖 |
| --- | --- | --- |
| `ResumeShell` | 深色底、顶栏 + 轨 + 主栏栅格 | Topbar、Rail |
| `ResumeTopbar` | 返回首页、语言切换 | next-intl navigation |
| `ResumeRail` | 桌面 sticky 锚点 / 移动 chips + scroll spy | 章节 id 列表 |
| `ResumeHero` | 姓名、职位、邮箱 | props |
| `ResumeMetrics` | 四个指标卡 | props |
| `ResumeSummary` | 专业概要 | props |
| `ResumeSkills` | 分组技能标签 | props |
| `ResumeExperience` | 经历时间线与子弹列表 | props |
| `ResumeProjects` | 项目成果卡 | props |
| `ResumeAwards` | 竞赛列表 | props |
| `ResumeEducation` | 教育列表 | props |
| `ResumeCerts` | 证书列表 | props |

子组件只接收 props，不读 PDF、不 fetch、不直接碰 `lib/data.ts`（首页数据保持原样）。

首页仅改 `Nav` 与 `Hero` 两处入口。

## 数据流

PDF 只用于一次性录入。运行时数据分两层：

- `lib/resume.ts`：稳定结构——章节 id、日期区间、指标数字、技能分组、经历/项目/教育的 key
- `messages/zh.json` 与 `messages/en.json` 的 `resume.*`：全部面向人的文案

`ResumePage` 为 RSC：用 next-intl 取文案，用 `lib/resume.ts` 取结构，再传给子组件。

英文必须覆盖与中文相同的章节与条目，不得精简。专有名词（Swoole、Hyperf、OTC、Claude Code 等）保留原文。

## 错误处理

- 非法 locale：`notFound()`
- 缺翻译 key：实现时把 resume 文案集中在 messages，避免运行时空白段落；不静默吞掉整节
- 无表单、无上传、无附件，因此没有文件 404
- 语言切换必须保持 `/resume` 路径

## 测试与验收

仓库目前无单测框架，本页不加。验收清单：

- `npm run build` 成功，`/zh/resume` 与 `/en/resume` 静态生成
- 中英两页章节齐全，与 PDF 条目对齐
- 锚点可跳，scroll spy 高亮正确
- 首页 Nav「简历」与 Hero「完整简历」能进入档案页；顶栏能回首页
- 语言切换后仍在简历页，且语言正确
- 窄屏下轨变为 chips，仍可跳转
- 档案页始终深色；首页浅色/系统主题行为不变

## 文件改动预期

- 新增：`app/[locale]/resume/layout.tsx`、`page.tsx`
- 新增：`components/resume/*` 上述组件
- 新增：`lib/resume.ts`
- 移动：首页 `page.tsx` 与 Nav/Footer 布局进入 `(site)` route group
- 修改：`messages/zh.json`、`messages/en.json`（`nav`、`hero`、`resume`）
- 修改：`components/Nav.tsx`、`components/Hero.tsx`
- 可能微调：`app/[locale]/layout.tsx`、`app/globals.css`（档案页 CSS 变量）
