import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Bot,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  ClipboardCheck,
  DatabaseZap,
  FileSearch,
  Gauge,
  GitBranch,
  GraduationCap,
  Handshake,
  Layers,
  LineChart,
  Mail,
  MapPin,
  MessageSquareText,
  MonitorCog,
  Network,
  Route,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { site } from "@/lib/site";

const offerStats = [
  { value: "4 类", label: "标准智能体", note: "销售、管理、知识库、审核场景可组合" },
  { value: "4 周", label: "POC 到试运行", note: "按典型流程跑通一条真实业务线" },
  { value: "3 层", label: "落地服务", note: "培训、咨询陪跑、定制开发交付" },
  { value: "私有化", label: "企业级部署", note: "支持系统对接、权限、审计与数据隔离" },
];

const buyerSegments = [
  {
    icon: Target,
    title: "销售与增长团队",
    fit: "销售跟进记录分散、日报周报质量不稳定，管理者希望提前看到客户和商机风险。",
    starts: ["销售日志自动采集", "客户 / 商机 Review", "销售打法沉淀"],
  },
  {
    icon: BookOpenCheck,
    title: "知识密集型团队",
    fit: "产品资料、制度文档、交付经验散落在不同系统，新人学习和一线支持成本高。",
    starts: ["企业知识库问答", "资料自动解析", "标准答复生成"],
  },
  {
    icon: Building2,
    title: "运营、财务与法务团队",
    fit: "大量审批、审核、汇总和复核工作重复发生，流程可定义但人力消耗高。",
    starts: ["合同条款审核", "发票凭证核验", "跨系统流程自动化"],
  },
];

const acceptanceStandards = [
  {
    icon: ClipboardCheck,
    title: "样本能验证",
    desc: "用历史样本或真实流程验证准确率、召回率、节省工时和人工复核边界。",
  },
  {
    icon: Network,
    title: "流程能接入",
    desc: "明确上下游系统、权限角色、数据范围、回写动作和异常兜底机制。",
  },
  {
    icon: GraduationCap,
    title: "团队会使用",
    desc: "通过培训、SOP 和复盘机制，让业务团队能持续运营智能体，而不是只看一次演示。",
  },
];

const agentProducts = [
  {
    icon: MessageSquareText,
    name: "销售助手智能体",
    enName: "Visualize",
    promise: "让销售过程看得见",
    desc: "把线上文档、线下附件、语音和自然语言记录转成客户与项目动态，自动质检并生成销售周日报。",
    points: ["多渠道销售数据采集", "AI 交互式内容录入", "工作动态质检入库", "销售周日报自动推送"],
  },
  {
    icon: ChartNoAxesCombined,
    name: "风控与管理智能体",
    enName: "Optimize",
    promise: "让销售团队卖得好",
    desc: "基于销售标准化打法，对客户、商机、漏斗和收入预测做自动 Review，输出风险预警与下一步动作建议。",
    points: ["Sales Playbook 自动构建", "客户 / 商机自动 Review", "转化风险与收入预测", "过程指标管理与辅导"],
  },
  {
    icon: DatabaseZap,
    name: "智能知识库智能体",
    enName: "Knowledge Agent",
    promise: "让企业知识可问可用",
    desc: "上传企业文档并自动解析，沉淀知识图谱与问答智能体，让制度、产品资料和交付经验可被一线复用。",
    points: ["文档自动解析", "知识图谱构建", "自动生成问答 Agent", "结果可下载可复用"],
  },
  {
    icon: FileSearch,
    name: "观澜智能审核",
    enName: "Guanlan",
    promise: "让审核可追溯可审计",
    desc: "面向差旅、合同、发票与凭证场景，把大模型理解、企业规则和人工复核流程封装为智能审核平台。",
    points: ["差旅与费用审核", "合同条款风险识别", "发票凭证核验", "全链路审计留痕"],
  },
];

const serviceTracks = [
  {
    icon: GraduationCap,
    title: "AI 培训课程",
    desc: "面向管理层、业务负责人和一线团队，讲清楚 AI 能做什么、怎么选场景、怎么把工具用进日常流程。",
    items: ["管理者 AI 认知课", "业务场景工作坊", "智能体使用训练营", "企业内部种子教练培养"],
  },
  {
    icon: Handshake,
    title: "咨询陪跑服务",
    desc: "用工作坊和复盘机制帮企业形成标准打法，把 AI 试点从一次演示变成持续可运营的业务动作。",
    items: ["销售标准化打法制定", "双周业务复盘与优化", "月度经营复盘", "落地指标与改进闭环"],
  },
  {
    icon: MonitorCog,
    title: "AI 外包与定制交付",
    desc: "针对企业现有流程做 AI 化改造，承接智能体开发、系统对接、私有化部署和部分业务流程自动化。",
    items: ["企业流程 AI 化评估", "智能体 / 插件定制开发", "OA / ERP / CRM 系统对接", "本地化部署与运维支持"],
  },
];

const implementationScenarios = [
  {
    eyebrow: "SALES ENABLEMENT",
    title: "销售过程管理",
    icon: Target,
    pain: "销售记录分散、日报质量不稳，管理者很难及时看到客户风险与商机推进节奏。",
    desc: "用 Visualize + Optimize 打通销售数据采集、客户 Review、商机风险预警和收入预测。",
    metrics: ["日报自动生成", "商机风险主动预警", "销售打法沉淀复用"],
  },
  {
    eyebrow: "KNOWLEDGE OPERATIONS",
    title: "企业知识库与问答",
    icon: BookOpenCheck,
    pain: "制度、产品资料、方案模板散落在文档和群聊里，新人学习慢，一线反复问同样的问题。",
    desc: "把文档解析、知识图谱和问答智能体组合起来，让企业知识可检索、可追溯、可持续更新。",
    metrics: ["文档自动解析", "知识问答可追溯", "一线支持响应提速"],
  },
  {
    eyebrow: "PROCESS AUTOMATION",
    title: "流程 AI 化改造",
    icon: Workflow,
    pain: "大量跨系统录入、审核、汇总和复盘动作依赖人工，流程慢且缺少数据闭环。",
    desc: "从一个高频流程切入，完成智能体编排、系统对接和人工兜底，让 AI 进入真实生产流程。",
    metrics: ["POC 验证业务收益", "保留人工复核边界", "支持私有化部署"],
  },
];

const customerStories = [
  {
    industry: "销售型组织",
    title: "从销售日志到商机 Review，管理层终于能看见过程质量",
    challenge:
      "销售跟进记录不完整，客户信息沉在个人文档和聊天记录里，管理者只能在月底看结果，很难提前干预风险商机。",
    scope: "接入销售日志、客户资料、商机阶段和会议纪要，用智能体完成信息采集、质检、日报生成和风险提醒。",
    result: ["销售过程数据自动沉淀", "客户与商机 Review 形成标准动作", "管理者获得下一步行动建议"],
  },
  {
    industry: "财务 / 法务 / 内控团队",
    title: "把差旅、合同、发票审核从人工抽检升级为异常优先复核",
    challenge:
      "制度口径多、单据高峰集中、合同版本复杂，团队需要在效率、合规和人工成本之间反复权衡。",
    scope: "接入历史样本、制度规则、合同文本和发票凭证，先做回测，再灰度到真实审批流程。",
    result: ["异常单据优先分流", "审核口径沉淀为规则库", "复核意见和 AI 判断全链路留痕"],
  },
];

const rolloutSteps = [
  {
    icon: ClipboardCheck,
    title: "场景诊断",
    period: "第 1 周",
    desc: "梳理业务流程、系统现状、数据样本与收益指标，选出最适合先跑通的 AI 场景。",
    output: "《AI 场景诊断清单》与 POC 指标",
  },
  {
    icon: Layers,
    title: "方案组装",
    period: "第 2 周",
    desc: "从标准智能体、培训课程、咨询陪跑和定制开发中组合交付方案，明确边界和验收标准。",
    output: "方案蓝图、系统边界与验收口径",
  },
  {
    icon: Route,
    title: "POC 回测",
    period: "第 3 周",
    desc: "用客户真实样本验证效果，评估准确率、效率、人机协作节点和系统对接复杂度。",
    output: "样本回测报告与上线建议",
  },
  {
    icon: Network,
    title: "试运行上线",
    period: "第 4 周",
    desc: "接入 OA / ERP / CRM / 知识库等系统，灰度到真实流程，并保留权限、审计和人工兜底。",
    output: "试运行 SOP、权限配置与运营看板",
  },
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "智能体设计",
    desc: "把企业流程拆成可执行任务，设计 Agent 角色、工具调用、上下文和人工协作节点。",
  },
  {
    icon: GitBranch,
    title: "流程编排",
    desc: "把识别、判断、生成、推送、审核和回写串成可监控的工作流。",
  },
  {
    icon: ShieldCheck,
    title: "企业级治理",
    desc: "支持权限、审计、数据隔离、私有化部署和人工兜底，避免 AI 黑盒进入关键流程。",
  },
  {
    icon: LineChart,
    title: "持续运营",
    desc: "通过复盘、指标看板和样本回测，持续优化智能体效果与业务打法。",
  },
];

const ctaOptions = [
  "预约 30 分钟 AI 落地诊断",
  "领取企业 AI 场景评估清单",
  "申请培训 / POC / 外包方案评估",
];

const contactMethods = [
  {
    icon: Mail,
    label: "邮箱联系",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "公司地址",
    value: site.address,
    href: undefined,
  },
] as const;

const socialQrcodes = [
  {
    label: "公众号",
    title: "关注归序科技公众号",
    desc: "获取企业 AI 落地方法、产品动态和案例文章。",
    src: "/wechat-official-qrcode.jpg",
    alt: "归序科技公众号二维码",
    width: 430,
    height: 430,
  },
  {
    label: "视频号",
    title: "关注归序科技视频号",
    desc: "获取企业 AI 智能体、流程 AI 化和落地案例内容。",
    src: "/video-channel-qrcode.jpg",
    alt: "归序科技视频号二维码",
    width: 722,
    height: 960,
  },
] as const;

export default function Page() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <FitAssessment />
      <AgentMatrix />
      <ServiceTracks />
      <ImplementationScenarios />
      <CaseStories />
      <RolloutPlan />
      <Capabilities />
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
        className="pointer-events-none absolute -bottom-32 left-[-10%] h-[420px] w-[420px] rounded-full bg-emerald-200/35 blur-3xl"
      />

      <div className="container-page relative grid gap-8 py-12 md:grid-cols-[1.1fr_1fr] md:gap-12 md:py-28">
        <div>
          <span className="badge">
            <Sparkles className="size-3.5" /> 财务 · 法务 · 销售流程 AI 化 · 4 周 POC 到上线
          </span>

          <h1 className="mt-5 text-balance text-[38px] font-bold leading-[1.08] tracking-tight text-ink-900 md:mt-6 md:text-[58px]">
            把 AI 从 PPT 推进到{" "}
            <span className="whitespace-nowrap rounded-md bg-brand-500/10 px-2 py-0.5 text-brand-600">
              真实业务流程
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-500 md:mt-6 md:text-[17px]">
            销售助手、智能知识库、合同 / 发票 / 差旅审核——
            4 周用真实样本完成 POC 回测，跑通准确率与节省工时后再灰度上线，
            保留权限、审计和人工兜底。
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-9">
            <Link href="#contact" className="btn-primary">
              预约 30 分钟 AI 场景诊断 <ArrowRight className="size-4" />
            </Link>
            <Link href="#playbook" className="btn-ghost">
              看 4 周落地路径
            </Link>
          </div>

          <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-ink-500 md:mt-8">
            <li className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-brand-500" /> 4 周完成样本回测
            </li>
            <li className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-brand-500" /> 数据不出域 · 全链路审计
            </li>
            <li className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-brand-500" /> 保留人工复核边界
            </li>
          </ul>

          <div className="mt-7 grid gap-3 text-[13px] text-ink-700 sm:grid-cols-3 md:mt-8">
            {[
              { label: "销售日报", value: "自动生成" },
              { label: "知识问答", value: "可追溯复用" },
              { label: "审核效率", value: "提升 8 倍" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-ink-100 bg-white/75 px-4 py-3"
              >
                <div className="font-semibold text-ink-900">{item.value}</div>
                <div className="mt-1 text-ink-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const tasks = [
    {
      icon: ScanLine,
      title: "销售日志采集",
      detail: "语音 / 文档 / 附件自动提取客户动态",
      status: "已入库",
    },
    {
      icon: ChartNoAxesCombined,
      title: "商机风险 Review",
      detail: "识别关键人缺失、阶段停滞与预算不明",
      status: "需跟进",
    },
    {
      icon: BookOpenCheck,
      title: "知识库问答",
      detail: "从产品资料中生成可追溯答复",
      status: "可复用",
    },
    {
      icon: FileSearch,
      title: "合同条款审核",
      detail: "自动标注违约、账期与主体风险",
      status: "已复核",
    },
  ];

  return (
    <div className="relative hidden md:block">
      <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-[0_24px_60px_-30px_rgba(13,38,128,0.45)]">
        <div className="flex items-center gap-2 border-b border-ink-100 pb-3">
          <Bot className="size-4 text-brand-600" />
          <span className="text-[13px] font-medium text-ink-700">
            企业 AI 流程中台
          </span>
          <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
            <span className="size-1.5 animate-pulse rounded-full bg-brand-500" />
            Agent 运行中
          </span>
        </div>

        <div className="mt-4 grid gap-3 text-[13px]">
          {tasks.map((task, index) => (
            <div
              key={task.title}
              className={`items-start gap-3 rounded-lg border border-ink-100 px-3 py-3 ${
                index > 1 ? "hidden md:flex" : "flex"
              }`}
            >
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <task.icon className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-ink-900">{task.title}</span>
                  <span className="whitespace-nowrap text-[11px] font-semibold text-brand-600">
                    {task.status}
                  </span>
                </div>
                <p className="mt-0.5 text-[12px] leading-relaxed text-ink-500">
                  {task.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl bg-ink-50 px-4 py-3 md:mt-5">
          <div className="flex items-center justify-between gap-4 text-[12px] text-ink-500">
            <span>下一步建议</span>
            <span className="font-semibold text-brand-700">安排业务负责人复核</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-white">
            <div className="h-2 w-[72%] rounded-full bg-brand-500" />
          </div>
        </div>
      </div>

      <div className="absolute -right-4 -bottom-6 hidden rounded-xl border border-ink-100 bg-white px-4 py-3 shadow-lg md:block">
        <div className="text-[11px] text-ink-500">建议先试点</div>
        <div className="mt-0.5 text-[20px] font-semibold text-ink-900">
          1 <span className="text-[13px] font-medium text-ink-500">条高频流程</span>
        </div>
      </div>
    </div>
  );
}

function ProofStrip() {
  return (
    <section id="proof" className="border-b border-ink-100 bg-ink-50/40">
      <div className="container-page py-10">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <span className="eyebrow">BUSINESS OUTCOME</span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink-900">
              先用真实场景验证价值，再进入规模化建设
            </h2>
            <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-ink-500">
              我们把智能体产品、培训课程和交付服务组合成可评估的方案，用客户样本验证效果、边界和上线条件。
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 text-[14px] font-medium text-brand-600 hover:text-brand-700"
          >
            申请方案评估 <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offerStats.map((t) => (
            <div
              key={t.label}
              className="rounded-xl border border-ink-100 bg-white p-5"
            >
              <div className="text-[28px] font-semibold tracking-tight text-ink-900">
                {t.value}
              </div>
              <div className="mt-1 text-[13px] text-ink-500">{t.label}</div>
              <div className="mt-3 border-t border-ink-100 pt-3 text-[12px] leading-relaxed text-ink-500">
                {t.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgentMatrix() {
  return (
    <section id="agents" className="border-b border-ink-100 bg-white">
      <div className="container-page py-24">
        <header className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <span className="eyebrow">AI AGENT MATRIX</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              不只做一个工具，而是一组可组合的企业智能体
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-500">
            围绕销售增长、知识运营、财务法务和内部流程自动化，归序把标准智能体拆成可单独试点、也可组合接入流程的模块。
          </p>
        </header>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {agentProducts.map((agent) => (
            <article key={agent.name} className="card flex h-full flex-col">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-500/10 text-brand-700">
                  <agent.icon className="size-5" />
                </span>
                <div>
                  <div className="text-[18px] font-semibold text-ink-900">
                    {agent.name}
                  </div>
                  <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-600">
                    {agent.enName}
                  </div>
                </div>
              </div>

              <h3 className="mt-5 text-[22px] font-semibold tracking-tight text-ink-900">
                {agent.promise}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                {agent.desc}
              </p>

              <ul className="mt-6 grid gap-2 border-t border-ink-100 pt-5 text-[13px] text-ink-700 sm:grid-cols-2">
                {agent.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FitAssessment() {
  return (
    <section id="fit" className="border-b border-ink-100 bg-white">
      <div className="container-page py-24">
        <header className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <span className="eyebrow">WHERE TO START</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              不是所有流程都适合第一批 AI 化
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-500">
            最值得先做的场景通常有三个特征：频次高、规则能描述、样本可验证。归序会先帮企业选对切入口，再决定用产品、培训还是定制交付。
          </p>
        </header>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {buyerSegments.map((segment) => (
            <article key={segment.title} className="card flex h-full flex-col">
              <div className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <segment.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-[20px] font-semibold tracking-tight text-ink-900">
                {segment.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                {segment.fit}
              </p>
              <div className="mt-6 border-t border-ink-100 pt-5">
                <div className="text-[12px] font-semibold text-brand-600">
                  适合先做
                </div>
                <ul className="mt-3 space-y-2 text-[13px] text-ink-700">
                  {segment.starts.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-2xl border border-ink-100 bg-ink-50/60 p-5 md:grid-cols-3">
          {acceptanceStandards.map((item) => (
            <div key={item.title} className="rounded-xl bg-white p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <item.icon className="size-4" />
                </span>
                <h3 className="text-[16px] font-semibold text-ink-900">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceTracks() {
  return (
    <section id="services" className="border-b border-ink-100 bg-ink-50/40">
      <div className="container-page py-24">
        <header className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">TRAINING & DELIVERY</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            企业 AI 落地，产品之外还需要人和流程
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            很多企业不是缺 AI 工具，而是缺场景选择、人员训练、流程改造和工程交付。
            这部分由培训、咨询陪跑和外包开发共同补齐。
          </p>
        </header>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {serviceTracks.map((track) => (
            <article key={track.title} className="card flex h-full flex-col">
              <div className="inline-flex size-11 items-center justify-center rounded-lg bg-white text-brand-600 ring-1 ring-ink-100">
                <track.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-[21px] font-semibold tracking-tight text-ink-900">
                {track.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                {track.desc}
              </p>
              <ul className="mt-6 space-y-2 border-t border-ink-100 pt-5 text-[13px] text-ink-700">
                {track.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImplementationScenarios() {
  return (
    <section id="solutions" className="border-b border-ink-100 bg-white">
      <div className="container-page py-24">
        <header className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">解决方案</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            从最容易产生业务收益的流程切入
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            先选一个高频、规则明确、数据可获得的场景做 POC，再扩展到更多部门和流程。
          </p>
        </header>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {implementationScenarios.map((s) => (
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
              <div className="mt-4 rounded-xl bg-ink-50 px-4 py-3 text-[13px] leading-relaxed text-ink-700">
                <span className="font-semibold text-ink-900">客户痛点：</span>
                {s.pain}
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                {s.desc}
              </p>

              <ul className="mt-5 space-y-2 border-t border-ink-100 pt-5 text-[13px] text-ink-700">
                {s.metrics.map((m) => (
                  <li key={m} className="flex items-center gap-2 leading-snug">
                    <CheckCircle2 className="size-4 shrink-0 text-brand-500" />
                    {m}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStories() {
  return (
    <section id="cases" className="border-b border-ink-100 bg-ink-50/40">
      <div className="container-page py-24">
        <header className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <span className="eyebrow">CUSTOMER STORY</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              企业客户真正关心的是能否进入业务现场
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-500">
            以下是面向销售管理与审核流程的脱敏落地路径，展示从问题、接入范围到业务变化的闭环。客户授权后可继续补充 logo、截图和成效数据。
          </p>
        </header>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {customerStories.map((story) => (
            <article key={story.title} className="card">
              <span className="eyebrow">{story.industry}</span>
              <h3 className="mt-3 text-[22px] font-semibold tracking-tight text-ink-900">
                {story.title}
              </h3>
              <div className="mt-6 grid gap-4 text-[14px] leading-relaxed">
                <div>
                  <div className="font-semibold text-ink-900">业务挑战</div>
                  <p className="mt-1 text-ink-500">{story.challenge}</p>
                </div>
                <div>
                  <div className="font-semibold text-ink-900">接入范围</div>
                  <p className="mt-1 text-ink-500">{story.scope}</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-2 border-t border-ink-100 pt-5 text-[13px] text-ink-700">
                {story.result.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RolloutPlan() {
  return (
    <section id="playbook" className="border-b border-ink-100 bg-white">
      <div className="container-page py-24">
        <header className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">LANDING PLAYBOOK</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            4 周跑通一条可上线的 AI 流程
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            用真实样本验证，不在会议室里空谈 AI。每一步都产出可评审材料，
            方便业务、IT、法务和采购共同决策。
          </p>
        </header>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {rolloutSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-ink-100 bg-white p-6"
            >
              <div className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <step.icon className="size-5" />
              </div>
              <div className="mt-5 text-[12px] font-semibold text-brand-600">
                {step.period}
              </div>
              <h3 className="mt-3 text-[18px] font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                {step.desc}
              </p>
              <div className="mt-5 rounded-xl bg-ink-50 px-4 py-3 text-[12px] leading-relaxed text-ink-700">
                <span className="font-semibold text-ink-900">交付产物：</span>
                {step.output}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-ink-100 bg-ink-50/40">
      <div className="container-page py-24">
        <header className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">核心能力</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            让 AI 真正进入企业流程的四个能力
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            从场景拆解、智能体设计、流程编排到持续运营，归序交付的是能被企业长期使用的 AI 系统。
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

function WhyUs() {
  const items = [
    {
      icon: Gauge,
      title: "懂产品，也懂交付",
      desc: "标准智能体可快速试点，定制外包能补齐企业流程里的特殊环节。",
    },
    {
      icon: ShieldCheck,
      title: "企业级合规",
      desc: "数据不出域、操作全审计，支持私有化部署、权限控制和人工复核机制。",
    },
    {
      icon: Building2,
      title: "与现有系统共生",
      desc: "保留 ERP、OA、CRM、知识库等存量投入，做流程加速而不是推倒重来。",
    },
  ];
  return (
    <section id="about" className="border-b border-ink-100 bg-white">
      <div className="container-page py-24">
        <header className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <span className="eyebrow">WHY GUIXU</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              为什么是归序
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-500">
            我们既懂大模型，也懂企业级软件和业务运营。归序要解决的不是“展示 AI 很强”，
            而是让企业在真实流程里用上 AI，并能度量收益、控制风险、持续迭代。
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
            先判断哪条流程最值得 AI 化
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-500">
            留下联系方式后，我们会基于您的业务流程、系统现状和团队成熟度，
            判断更适合从智能体产品、AI 培训、咨询陪跑还是定制外包开始。
          </p>

          <div className="mt-8 grid gap-3">
            {ctaOptions.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-ink-100 bg-white px-4 py-3 text-[14px] font-medium text-ink-800"
              >
                {item}
              </div>
            ))}
          </div>

          <ul className="mt-8 space-y-4 text-[14px] text-ink-700">
            <Bullet>免费 30 分钟 AI 场景诊断会议</Bullet>
            <Bullet>提供智能体产品、培训和外包落地路径建议</Bullet>
            <Bullet>支持基于真实样本的 POC 与流程回测</Bullet>
            <Bullet>输出可转发给业务、IT、采购的评估材料</Bullet>
          </ul>

          <div className="mt-8 grid gap-3">
            {contactMethods.map((method) => (
              <div
                key={method.label}
                className="flex gap-3 rounded-xl border border-ink-100 bg-white px-4 py-4"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
                  <method.icon className="size-5" />
                </span>
                <div>
                  <div className="text-[13px] font-semibold text-ink-900">
                    {method.label}
                  </div>
                  {method.href ? (
                    <Link
                      href={method.href}
                      className="mt-1 block break-all text-[14px] leading-relaxed text-ink-600 hover:text-brand-600"
                    >
                      {method.value}
                    </Link>
                  ) : (
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-600">
                      {method.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <LeadForm />
          <div className="grid gap-4 sm:grid-cols-2">
            {socialQrcodes.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-ink-100 bg-white p-5 shadow-[0_18px_50px_-36px_rgba(13,38,128,0.45)]"
              >
                <div className="mx-auto aspect-square w-full max-w-[168px] overflow-hidden rounded-xl border border-ink-100 bg-white">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5 text-[13px] font-semibold text-brand-600">
                  {item.label}
                </div>
                <h3 className="mt-2 text-[17px] font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
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
