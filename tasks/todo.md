# 归序官网 + 观澜整合迁移 — 方案 B MVP

## 目标
两站合一。主站首页 + 观澜产品页搬到统一 Next.js 仓库，统一浅色蓝设计语言。

## 范围
- 主站首页：以观澜为旗舰产品，重写 hero + 信息架构
- 观澜产品页 `/guanlan`：直接对齐线上 guanlan.guixucloud.com 的结构
- 共享：Nav、Footer、设计 token、表单、布局
- 暂不做：博客、案例详情页、英文版（i18n 预留接口）

## 技术决策
- Next.js 15 App Router + TypeScript
- Tailwind CSS v4
- 字体：Inter + Noto Sans SC（系统加载）
- 图标：lucide-react
- 表单：原生 form + 客户端 fetch → `/api/lead`
- 部署目标：Vercel（本次仅搭好可本地跑）

## 设计 token
- Primary: #2D5BFF（观澜蓝）
- Bg: #FFFFFF / #F5F7FB
- Text: #0A0E27 / #5B6172
- Border: #E5E8F0
- Radius: 12px / 16px
- 字重：标题 600/700，正文 400

## 任务清单
- [x] 初始化 Next.js 15 项目（pnpm + ts + tailwind v4）
- [x] 配置 globals.css / 字体 / 颜色 token
- [x] 写 `components/site-nav.tsx`
- [x] 写 `components/site-footer.tsx`
- [x] 写 `components/lead-form.tsx` + `app/api/lead/route.ts`
- [x] 写 `app/page.tsx` 主站首页（hero / 旗舰产品 / 能力 / 场景 / WhyUs / CTA）
- [x] 写 `app/guanlan/page.tsx` 观澜产品页（hero / 4 能力 / 3 步流程 / 3 场景 / 安全 / CTA）
- [x] 启动 dev server 验证两页可访问、无控制台报错
- [x] 设置 `<title>` / meta description / OG 标签
- [ ] git commit 初始版本 ← 待用户确认

## 后续（不在本次范围）
- 案例详情页 / 博客 / English / 真实表单后端 / 重定向规则
- 主站老路径(`/技术能力` `/解决方案` `/案例` `/资源` `/联系`)
- 子域 `guanlan.guixucloud.com` → `/guanlan` 301 跳转（DNS + 部署后）
- 替换主站现有 wxz 模板（DNS 切换）
- 法律页占位（`/legal/privacy` `/legal/terms` `/legal/cookie` 当前 404，需补占位页）
- `/api/lead` 接 CRM/飞书 webhook（当前仅 console.log）
- sitemap.xml / robots.txt
- 图标 favicon / OG 图片

## 验证标准
- [x] `next dev` 起来后访问 `/` 和 `/guanlan` 返回 200
- [x] 截图视觉与设计 token 一致（浅色蓝、editorial、卡片网格）
- [x] `tsc --noEmit` 零错误
- [x] `<title>` 不为空，meta description 完整

## Review

### 实际产出
仓库初始版本完成。本地 `http://localhost:3000` 可跑。

文件结构：
```
官网/
├── app/
│   ├── api/lead/route.ts        # 表单 server endpoint
│   ├── guanlan/page.tsx         # 观澜产品页
│   ├── globals.css              # tailwind v4 + 设计 token
│   ├── layout.tsx               # nav + footer + metadata
│   └── page.tsx                 # 主站首页
├── components/
│   ├── lead-form.tsx            # 客户端表单
│   ├── site-footer.tsx
│   └── site-nav.tsx
├── lib/site.ts                  # 站点元信息
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── tasks/todo.md
```

### 决策说明
- 选用 Tailwind v4 + CSS `@theme` 自定义 token，避免 v3 那套 `tailwind.config.ts` 嵌套配置
- 表单走客户端 fetch + Server API route，比 Server Action 更便于后续接 CRM webhook
- Hero 用"小时级→分钟级"切换作为核心标语，承接观澜原文案，比主站旧的 "AI 赋能·传统再造" 强 10 倍
- 主站首页 + 观澜产品页 信息密度相近，避免一页空一页满
- 观澜的 demo 卡片（合同审核可视化）在两页都做了一份，但样式不同：主站偏 hero 摆件，观澜偏真实功能演示

### 已知待办（不阻塞）
1. console.log 在 `/api/lead`：MVP 占位，需接真实 CRM/飞书 webhook
2. 法律占位页 404：需要时补 `/legal/*`
3. favicon + OG 图：待设计
4. 老路径 301：等部署后通过 DNS 切换 + 重定向规则处理
5. 主站老 nav 中的 `技术资源中心`（博客）暂不迁，等内容策略明确再做

### 经验记录
- 阿里云 wxz-web-builder 模板做 SPA，SEO 完全废，蜘蛛抓不到正文。这次自建 Next.js 后 SSR 默认开启，第一屏文案直出
- 观澜的浅色蓝设计是公司目前最强视觉资产，反向作为主站基线是对的，比"两套主题切换"省 30% 维护成本
