import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FileSearch,
  GitBranch,
  Layers,
  LineChart,
  Plane,
  Receipt,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "观澜·Guanlan · 企业级 AI 智能审核引擎",
  description:
    "观澜是面向企业财务与法务流程的 AI 智能审核引擎。深度学习驱动的内容理解、零代码规则配置、模块化 Agent 编排，让审批从小时级变成分钟级。",
  alternates: { canonical: "/guanlan" },
  openGraph: {
    title: "观澜·Guanlan · 企业级 AI 智能审核引擎",
    description:
      "深度学习驱动的内容理解、零代码规则配置、模块化 Agent 编排。",
    url: "https://www.guixucloud.com/guanlan",
    type: "website",
  },
};

const capabilities = [
  {
    icon: Bot,
    title: "智能审核引擎",
    desc: "深度学习驱动的内容理解，秒级解析复杂票据与多页合同。",
    points: ["跨格式凭证解析", "多语言合同理解", "可解释审核结论"],
  },
  {
    icon: GitBranch,
    title: "规则配置中心",
    desc: "零代码可视化配置，轻松应对企业多变的风控与合规要求。",
    points: ["拖拽式规则编辑", "策略版本管理", "灰度发布与回滚"],
  },
  {
    icon: Sparkles,
    title: "智能体编排",
    desc: "模块化 Agent 工作流，按业务场景动态调用审核能力。",
    points: ["AI 与人工节点混排", "条件分支与并行", "异常自动重试"],
  },
  {
    icon: LineChart,
    title: "回测与监控",
    desc: "实时大盘监控审核漏斗，一键启动策略回测优化审核精度。",
    points: ["漏斗指标实时大盘", "历史数据回测", "策略 A/B 对照"],
  },
];

const steps = [
  {
    n: "01",
    icon: Layers,
    title: "数据接入与预处理",
    desc: "集成多渠道 API，自动对文件进行脱敏、归一化与 OCR 识别。",
  },
  {
    n: "02",
    icon: Workflow,
    title: "多维语义审核",
    desc: "AI 引擎结合业务规则，在内容、逻辑、真实性三个维度深度比对。",
  },
  {
    n: "03",
    icon: CheckCircle2,
    title: "结果输出与闭环",
    desc: "自动生成审核报告，初判 + 人机协作，持续反馈优化底层模型。",
  },
];

const scenarios = [
  {
    eyebrow: "TRAVEL & EXPENSE",
    icon: Plane,
    title: "差旅审核",
    desc: "自动匹配差旅政策，智能识别重复报销、违规票据及超额消费，效率提升 800%。",
    bullets: [
      "OCR 票据自动归集与去重",
      "差旅政策与城市标准实时比对",
      "异常报销自动转人工复核",
    ],
  },
  {
    eyebrow: "LEGAL COMPLIANCE",
    icon: ScrollText,
    title: "合同审核",
    desc: "深度识别条款风险，监测霸王条款、金额缺失及主体不合规，降低企业法律风险。",
    bullets: [
      "200+ 风险条款类型库",
      "金额、期限、违约金交叉校验",
      "审核留痕，全过程可审计",
    ],
  },
  {
    eyebrow: "FINANCIAL AUDIT",
    icon: Receipt,
    title: "发票核验",
    desc: "全电发票自动查验，识别抬头、税额异常及虚假发票，实现财务入账的全面自动化。",
    bullets: [
      "国家税务总局接口实时核验",
      "抬头、税号、金额三因素匹配",
      "重复发票与连号识别",
    ],
  },
];

export default function GuanlanPage() {
  return (
    <>
      <ProductHero />
      <Capabilities />
      <HowItWorks />
      <Scenarios />
      <Security />
      <CTA />
    </>
  );
}

function ProductHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-gradient-to-b from-brand-50/70 via-white to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-300/30 blur-3xl"
      />
      <div className="container-page relative pt-20 pb-24 text-center md:pt-28 md:pb-32">
        <span className="badge">
          <Zap className="size-3.5" /> V2.0.1 全新版本现已发布
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-[42px] font-bold leading-[1.1] tracking-tight text-ink-900 md:text-[60px]">
          观澜·Guanlan
          <span className="mt-2 block text-[24px] font-semibold text-ink-500 md:text-[28px]">
            企业级 AI 智能审核引擎
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-relaxed text-ink-500 md:text-[17px]">
          通过下一代智能审核引擎，为企业级财务与法务流程提供 AI 辅助决策，实现合规性、效率与成本的最佳平衡。
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link href="/#contact" className="btn-primary">
            开始体验 <ArrowRight className="size-4" />
          </Link>
          <Link href="#workflow" className="btn-ghost">
            查看演示
          </Link>
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
            四个模块，构成完整的审核系统
          </h2>
        </header>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {capabilities.map((c) => (
            <div key={c.title} className="card">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <c.icon className="size-5" />
                </span>
                <h3 className="text-[18px] font-semibold text-ink-900">
                  {c.title}
                </h3>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-500">
                {c.desc}
              </p>
              <ul className="mt-5 space-y-2 text-[13px] text-ink-700">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="workflow" className="border-b border-ink-100 bg-ink-50/40">
      <div className="container-page py-24">
        <header className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">工作原理</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            简单高效的三步审核闭环
          </h2>
        </header>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-ink-100 bg-white p-7"
            >
              {i < steps.length - 1 ? (
                <div
                  aria-hidden
                  className="absolute -right-3 top-12 hidden size-6 items-center justify-center rounded-full border border-ink-100 bg-white text-brand-500 md:flex"
                >
                  <ArrowRight className="size-3.5" />
                </div>
              ) : null}

              <div className="flex items-center gap-3 text-brand-600">
                <span className="text-[28px] font-bold tracking-tight">
                  {s.n}
                </span>
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-[18px] font-semibold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <DemoPreview />
      </div>
    </section>
  );
}

function DemoPreview() {
  return (
    <div className="mt-16 grid gap-6 rounded-2xl border border-ink-100 bg-white p-6 md:grid-cols-[1.1fr_1fr] md:p-10">
      <div>
        <span className="eyebrow">真实场景</span>
        <h3 className="mt-3 text-[22px] font-semibold tracking-tight text-ink-900">
          多页合同 18 秒内输出可审计结论
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
          以一份典型的采购合同为例，观澜在不到 20 秒内完成主体核验、条款风险、金额一致性与发票匹配检查，输出建议并保留全链路可溯日志。
        </p>
        <ul className="mt-6 space-y-2.5 text-[13px] text-ink-700">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
            支持 PDF / WORD / 图片 / 扫描件
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
            可定义二审 / 三审与人工节点
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
            支持企业现有 OA / ERP 推送
          </li>
        </ul>
      </div>

      <div className="rounded-xl border border-ink-100 bg-ink-50/60 p-5">
        <div className="flex items-center gap-2 border-b border-ink-100 pb-3 text-[13px] font-medium text-ink-700">
          <FileSearch className="size-4 text-brand-600" />
          采购合同_2026Q2.pdf
          <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
            <span className="size-1.5 animate-pulse rounded-full bg-brand-500" />
            观澜 解析中
          </span>
        </div>
        <ul className="mt-4 space-y-2 text-[12.5px]">
          <DemoRow tone="ok" title="主体资质核验" detail="工商一致、无失信记录" />
          <DemoRow tone="ok" title="付款条款合规" detail="账期 60 天 ≤ 上限 90 天" />
          <DemoRow tone="warn" title="违约金 30% 偏高" detail="行业基准 15%" />
          <DemoRow tone="ok" title="发票抬头匹配" detail="与公司主体一致" />
          <DemoRow tone="ok" title="同期合同查重" detail="无重复签订" />
        </ul>
      </div>
    </div>
  );
}

function DemoRow({
  tone,
  title,
  detail,
}: {
  tone: "ok" | "warn";
  title: string;
  detail: string;
}) {
  const dot = tone === "ok" ? "bg-emerald-500" : "bg-amber-500";
  const text = tone === "ok" ? "text-emerald-600" : "text-amber-600";
  return (
    <li className="flex items-start gap-3 rounded-lg border border-ink-100 bg-white px-3 py-2">
      <span
        className={`mt-1.5 inline-block size-2 shrink-0 rounded-full ${dot}`}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="font-medium text-ink-900">{title}</span>
          <span className={`text-[10px] font-semibold uppercase ${text}`}>
            {tone === "ok" ? "通过" : "需复核"}
          </span>
        </div>
        <p className="mt-0.5 text-[11.5px] text-ink-500">{detail}</p>
      </div>
    </li>
  );
}

function Scenarios() {
  return (
    <section id="scenarios" className="border-b border-ink-100">
      <div className="container-page py-24">
        <header className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">适用场景</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            为不同流程量身定制的智能方案
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            每个场景都附带成熟的策略包，开箱即用，可按企业实际制度做二次调优。
          </p>
        </header>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {scenarios.map((s) => (
            <article key={s.title} className="card flex h-full flex-col">
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
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className="mt-auto pt-6 text-[13px] font-medium text-brand-600 hover:text-brand-700"
              >
                了解详情 →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Security() {
  const items = [
    {
      icon: ShieldCheck,
      title: "等保 2.0 三级",
      desc: "完整的访问控制、审计日志与等级保护要求",
    },
    {
      icon: ShieldCheck,
      title: "数据不出域",
      desc: "支持私有化部署与 VPC 内部署，数据全程在客户侧",
    },
    {
      icon: ShieldCheck,
      title: "全链路加密",
      desc: "传输 TLS 1.3，存储 AES-256，密钥客户托管",
    },
  ];
  return (
    <section className="border-b border-ink-100 bg-ink-50/40">
      <div className="container-page py-24">
        <header className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">安全与合规</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            企业级安全是底线
          </h2>
        </header>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="card flex items-start gap-4">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <i.icon className="size-5" />
              </span>
              <div>
                <div className="text-[15px] font-semibold text-ink-900">
                  {i.title}
                </div>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-500">
                  {i.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-gradient-to-b from-white to-brand-50/40">
      <div className="container-page grid gap-12 py-24 md:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="eyebrow">下一步</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            准备好让审批效率翻倍了吗？
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-500">
            立即申请试用观澜智能审核，体验 AI 带来的流程变革。我们将为您提供 1 小时一对一诊断、行业落地案例与基于真实样本的 POC 试用。
          </p>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
