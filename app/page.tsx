import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FileSearch,
  Gauge,
  GitBranch,
  LineChart,
  Plane,
  Receipt,
  ScrollText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

const capabilities = [
  {
    icon: Bot,
    title: "智能审核引擎",
    desc: "深度学习驱动的内容理解，秒级解析复杂票据、多页合同与跨格式凭证。",
  },
  {
    icon: GitBranch,
    title: "规则配置中心",
    desc: "零代码可视化配置审核策略，自适应企业多变的风控与合规要求。",
  },
  {
    icon: Sparkles,
    title: "智能体编排",
    desc: "模块化 Agent 工作流，按业务场景动态调用审核能力与人工节点。",
  },
  {
    icon: LineChart,
    title: "回测与监控",
    desc: "实时大盘监控审核漏斗，一键启动策略回测持续优化审核精度。",
  },
];

const scenarios = [
  {
    eyebrow: "TRAVEL & EXPENSE",
    title: "差旅与费用审核",
    icon: Plane,
    desc: "自动匹配差旅政策，智能识别重复报销、违规票据及超额消费。",
    metrics: ["匹配准确率 99%", "处理时长 ↓ 80%", "合规率 ↑ 35%"],
  },
  {
    eyebrow: "LEGAL COMPLIANCE",
    title: "合同与法务审核",
    icon: ScrollText,
    desc: "深度识别条款风险，监测霸王条款、金额缺失及主体不合规。",
    metrics: ["条款覆盖 200+ 类", "误判率 < 2%", "人均处理量 5×"],
  },
  {
    eyebrow: "FINANCIAL AUDIT",
    title: "发票与凭证核验",
    icon: Receipt,
    desc: "全电发票自动查验，识别抬头、税额异常及虚假发票，财务入账全自动。",
    metrics: ["查验响应 < 2s", "假票识别 99.5%", "入账人力 ↓ 70%"],
  },
];

const trust = [
  { value: "10M+", label: "已审核单据" },
  { value: "99.5%", label: "异常识别准确率" },
  { value: "< 30s", label: "单据审核响应" },
  { value: "5×", label: "审批人均效能" },
];

export default function Page() {
  return (
    <>
      <Hero />
      <FlagshipBanner />
      <Capabilities />
      <Scenarios />
      <WhyUs />
      <CTAContact />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-gradient-to-b from-brand-50/60 via-white to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-[-10%] h-[420px] w-[420px] rounded-full bg-brand-200/40 blur-3xl"
      />

      <div className="container-page relative grid gap-12 py-24 md:grid-cols-[1.15fr_1fr] md:py-32">
        <div>
          <span className="badge">
            <Sparkles className="size-3.5" /> 观澜·Guanlan V2.0.1 全新版本现已发布
          </span>

          <h1 className="mt-6 text-balance text-[44px] font-bold leading-[1.08] tracking-tight text-ink-900 md:text-[60px]">
            让审批从{" "}
            <span className="whitespace-nowrap rounded-md bg-ink-100/60 px-2 py-0.5 text-ink-700">
              小时级
            </span>{" "}
            变成{" "}
            <span className="whitespace-nowrap rounded-md bg-brand-500/10 px-2 py-0.5 text-brand-600">
              分钟级
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-500">
            归序科技为企业财务与法务流程提供下一代 AI 智能审核引擎
            <span className="font-medium text-ink-700">「观澜」</span>，
            结合大模型理解与规则化决策，快速输出合规、可审计、可追溯的审核结果。
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/guanlan" className="btn-primary">
              查看观澜产品 <ArrowRight className="size-4" />
            </Link>
            <Link href="#contact" className="btn-ghost">
              预约一对一演示
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-ink-500">
            <li className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-brand-500" /> 私有化 / SaaS 双部署
            </li>
            <li className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-brand-500" /> 全链路可审计
            </li>
            <li className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-brand-500" /> 与 ERP / OA 无缝对接
            </li>
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-[0_24px_60px_-30px_rgba(13,38,128,0.45)]">
        <div className="flex items-center gap-2 border-b border-ink-100 pb-3">
          <FileSearch className="size-4 text-brand-600" />
          <span className="text-[13px] font-medium text-ink-700">
            采购合同_2026Q2.pdf
          </span>
          <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
            <span className="size-1.5 animate-pulse rounded-full bg-brand-500" />
            观澜 解析中
          </span>
        </div>

        <div className="mt-4 space-y-3 text-[13px]">
          <Row
            tone="ok"
            title="主体资质核验"
            detail="工商信息一致、无失信记录"
          />
          <Row
            tone="ok"
            title="付款条款合规"
            detail="账期 60 天 ≤ 政策上限 90 天"
          />
          <Row
            tone="warn"
            title="条款 4.2 建议复核"
            detail="违约金 30% 高于行业基准 15%"
          />
          <Row
            tone="ok"
            title="发票抬头匹配"
            detail="与公司主体一致"
          />
        </div>

        <div className="mt-5 flex items-center justify-between rounded-xl bg-ink-50 px-4 py-3">
          <div className="text-[12px] text-ink-500">总体评估</div>
          <div className="text-[13px] font-semibold text-brand-700">
            合规·建议人工复核 1 项
          </div>
        </div>
      </div>

      <div className="absolute -right-4 -bottom-6 hidden rounded-xl border border-ink-100 bg-white px-4 py-3 shadow-lg md:block">
        <div className="text-[11px] text-ink-500">本次审核耗时</div>
        <div className="mt-0.5 text-[20px] font-semibold text-ink-900">
          18.4 <span className="text-[13px] font-medium text-ink-500">秒</span>
        </div>
      </div>
    </div>
  );
}

function Row({
  tone,
  title,
  detail,
}: {
  tone: "ok" | "warn";
  title: string;
  detail: string;
}) {
  const dot =
    tone === "ok"
      ? "bg-emerald-500"
      : "bg-amber-500";
  const text =
    tone === "ok" ? "text-emerald-600" : "text-amber-600";
  return (
    <div className="flex items-start gap-3 rounded-lg border border-ink-100 px-3 py-2.5">
      <span
        className={`mt-1.5 inline-block size-2 shrink-0 rounded-full ${dot}`}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="font-medium text-ink-900">{title}</span>
          <span className={`text-[11px] font-semibold uppercase ${text}`}>
            {tone === "ok" ? "通过" : "需复核"}
          </span>
        </div>
        <p className="mt-0.5 text-[12px] text-ink-500">{detail}</p>
      </div>
    </div>
  );
}

function FlagshipBanner() {
  return (
    <section id="solutions" className="border-b border-ink-100 bg-ink-50/40">
      <div className="container-page py-10">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <span className="eyebrow">FLAGSHIP</span>
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
              旗舰产品 观澜·Guanlan
            </h2>
          </div>
          <Link
            href="/guanlan"
            className="inline-flex items-center gap-1 text-[14px] font-medium text-brand-600 hover:text-brand-700"
          >
            查看完整产品 <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div
              key={t.label}
              className="rounded-xl border border-ink-100 bg-white p-5"
            >
              <div className="text-[28px] font-semibold tracking-tight text-ink-900">
                {t.value}
              </div>
              <div className="mt-1 text-[13px] text-ink-500">{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-ink-100">
      <div className="container-page py-24">
        <header className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">核心能力</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            一套引擎，覆盖审核全链路
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            从数据接入、内容理解、规则比对到结果输出闭环，观澜把企业审核流程的全部环节产品化。
          </p>
        </header>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div key={c.title} className="card">
              <div className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <c.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-ink-900">
                {c.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scenarios() {
  return (
    <section id="cases" className="border-b border-ink-100 bg-ink-50/40">
      <div className="container-page py-24">
        <header className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">应用场景</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            为高频审核流程深度定制
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            三个场景已落地企业生产环境，开箱即用的策略包 + 行业化的人工调优。
          </p>
        </header>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {scenarios.map((s) => (
            <article
              key={s.title}
              className="card flex h-full flex-col"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-700">
                  <s.icon className="size-5" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.16em] text-brand-600">
                  {s.eyebrow}
                </span>
              </div>
              <h3 className="mt-5 text-[20px] font-semibold tracking-tight text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                {s.desc}
              </p>

              <ul className="mt-5 space-y-2 border-t border-ink-100 pt-5 text-[13px] text-ink-700">
                {s.metrics.map((m) => (
                  <li
                    key={m}
                    className="flex items-center gap-2 leading-snug"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-brand-500" />
                    {m}
                  </li>
                ))}
              </ul>

              <Link
                href="/guanlan#scenarios"
                className="mt-auto pt-6 text-[13px] font-medium text-brand-600 hover:text-brand-700"
              >
                了解策略包 →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      icon: Gauge,
      title: "工程化交付",
      desc: "可观测、可回滚、可灰度，从 POC 到生产仅需 4 周。",
    },
    {
      icon: ShieldCheck,
      title: "企业级合规",
      desc: "数据不出域、操作全审计，支持等保 2.0 三级与 SOC2 流程。",
    },
    {
      icon: GitBranch,
      title: "与现有系统共生",
      desc: "保留 ERP、OA、SAP、用友、金蝶等存量投入，做「加法」而非「替换」。",
    },
  ];
  return (
    <section id="about" className="border-b border-ink-100">
      <div className="container-page py-24">
        <header className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <span className="eyebrow">WHY GUIXU</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              为什么是归序
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-500">
            我们既懂大模型，也懂企业级软件。把研究院的 AI 能力工程化为可被财务、法务、合规团队稳定使用的生产系统，是我们唯一在做的事。
          </p>
        </header>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="card">
              <div className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <i.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-ink-900">
                {i.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                {i.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAContact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-white to-brand-50/40">
      <div className="container-page grid gap-12 py-24 md:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="eyebrow">联系我们</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            开始您的 AI 审核之旅
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-500">
            填写右侧表单，我们的解决方案专家将在 24 小时内联系您。我们会基于您的审核量级、合规范围与现有系统，给出可落地的方案建议与价格区间。
          </p>

          <ul className="mt-8 space-y-4 text-[14px] text-ink-700">
            <Bullet>免费 1 小时一对一诊断会议</Bullet>
            <Bullet>提供同行业落地案例与对应指标</Bullet>
            <Bullet>支持基于真实样本的 POC 试用</Bullet>
            <Bullet>不强制销售跟进，提供材料后可自助评估</Bullet>
          </ul>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-500" />
      <span>{children}</span>
    </li>
  );
}
