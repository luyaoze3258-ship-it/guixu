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
  { value: "200+", label: "审核规则库", note: "差旅 / 合同 / 发票 / 凭证场景沉淀，可按企业制度扩展" },
  { value: "4 周", label: "POC 到试运行", note: "真实样本验证准确率与节省工时，再灰度上线" },
  { value: "8×", label: "审核效率提升", note: "AI 全量预审 + 人工复核异常单据，告别抽检" },
  { value: "私有化", label: "企业级部署", note: "数据不出域，支持权限、审计与系统对接" },
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
    points: [
      "周日报自动生成 · 一线撰写时间从小时级压到分钟级",
      "销售动态自动入库 · 杜绝假报、漏报、滞后报",
      "客户与商机过程可视 · 管理者掌控力提升",
      "多渠道数据自动汇总 · 不再追问 Excel",
    ],
  },
  {
    icon: ChartNoAxesCombined,
    name: "风控与管理智能体",
    enName: "Optimize",
    promise: "让销售团队卖得好",
    desc: "基于销售标准化打法，对客户、商机、漏斗和收入预测做自动 Review，输出风险预警与下一步动作建议。",
    points: [
      "商机风险主动预警 · 在月底掉单前介入",
      "收入预测可信度提升 · 月度复盘有数据可看",
      "标准打法沉淀复用 · Top sales 经验变组织资产",
      "漏斗阶段自动 Review · 管理 1V20 不再靠手抄",
    ],
  },
  {
    icon: DatabaseZap,
    name: "智能知识库智能体",
    enName: "Knowledge Agent",
    promise: "让企业知识可问可用",
    desc: "上传企业文档并自动解析，沉淀知识图谱与问答智能体，让制度、产品资料和交付经验可被一线复用。",
    points: [
      "新人上手周期缩短 · 不再追着老人问",
      "一线支持响应提速 · 答案带来源可追溯",
      "制度变更自动覆盖 · 不再有过期文档误导",
      "结果可下载可外发 · 客户提案/内训直接用",
    ],
  },
  {
    icon: FileSearch,
    name: "观澜智能审核",
    enName: "Guanlan",
    promise: "让审核可追溯可审计",
    desc: "面向差旅、合同、发票与凭证场景，把大模型理解、企业规则和人工复核流程封装为智能审核平台。",
    points: [
      "从抽检升级到 100% 全量预审 · 200+ 规则沉淀",
      "异常单据优先复核 · 团队精力放在真正的风险上",
      "AI 判断与人工复核全链路留痕 · 满足审计与合规",
      "账期错配/重复报销/违约条款自动揪出",
    ],
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
    title: "企业级解决方案交付",
    desc: "面向企业现有流程做 AI 化改造，承接智能体定制、系统集成、私有化部署与业务流程自动化。",
    items: ["企业流程 AI 化评估", "智能体 / 插件深度定制", "OA / ERP / CRM 系统集成", "私有化部署与运维支持"],
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
    industry: "销售型组织 · 数十人销售团队",
    title: "从销售日志到商机 Review，管理层终于能看见过程质量",
    challenge:
      "销售跟进记录不完整，客户信息沉在个人文档和聊天记录里，管理者只能在月底看结果，很难提前干预风险商机。",
    scope: "接入销售日志、客户资料、商机阶段和会议纪要，用智能体完成信息采集、质检、日报生成和风险提醒。",
    result: [
      "销售日报撰写时间：从人均 30+ 分钟/天 压到分钟级",
      "客户与商机 Review 形成标准动作 · 每周固化执行",
      "管理者每条商机可看到下一步行动建议 · 月底前介入",
    ],
  },
  {
    industry: "财务 / 法务 / 内控团队 · 集团多事业部",
    title: "把差旅、合同、发票审核从人工抽检升级为异常优先复核",
    challenge:
      "制度口径多、单据高峰集中、合同版本复杂，团队需要在效率、合规和人工成本之间反复权衡。",
    scope: "接入历史样本、制度规则、合同文本和发票凭证，先做回测，再灰度到真实审批流程。",
    result: [
      "覆盖率：从人工抽检升级为 100% 全量 AI 预审",
      "200+ 审核规则沉淀为可复用规则库 · 制度变更可热更新",
      "AI 判断与人工复核全链路留痕 · 满足审计与合规要求",
    ],
  },
];

const rolloutSteps = [
  {
    icon: ClipboardCheck,
    title: "场景诊断",
    period: "第 1 周",
    desc: "梳理业务流程、系统现状、数据样本与收益指标，选出最适合先跑通的 AI 场景。",
    output: "《AI 场景诊断清单》与 POC 指标",
    effort: "企业投入：业务负责人 ~0.5 人天",
  },
  {
    icon: Layers,
    title: "方案组装",
    period: "第 2 周",
    desc: "从标准智能体、培训课程、咨询陪跑和系统集成中组合交付方案，明确边界与验收标准。",
    output: "方案蓝图、系统边界与验收口径",
    effort: "企业投入：业务 + IT ~1 人天",
  },
  {
    icon: Route,
    title: "POC 回测",
    period: "第 3 周",
    desc: "用客户真实样本验证效果，评估准确率、效率、人机协作节点和系统对接复杂度。",
    output: "样本回测报告与上线建议",
    effort: "企业投入：提供样本 + 评审 ~1 人天",
  },
  {
    icon: Network,
    title: "试运行上线",
    period: "第 4 周",
    desc: "接入 OA / ERP / CRM / 知识库等系统，灰度到真实流程，并保留权限、审计和人工兜底。",
    output: "试运行 SOP、权限配置与运营看板",
    effort: "企业投入：IT 对接 + 一线培训 ~2 人天",
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
  { label: "预约 30 分钟 AI 落地诊断", tag: "高意向" },
  { label: "领取《企业 AI 场景评估清单》PDF", tag: "调研期" },
  { label: "申请培训 / POC / 系统集成方案评估", tag: "高意向" },
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
    <section className="surface-dark relative overflow-hidden">
      <div className="container-page relative grid gap-10 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-14 md:py-32">
        <div className="relative z-10">
          <span className="badge-neon">
            <Sparkles className="size-3.5" /> 财务 · 法务 · 销售流程 AI 化 · 4 周 POC 到上线
          </span>

          <h1 className="mt-6 text-balance text-[40px] font-bold leading-[1.05] tracking-tight text-white md:mt-7 md:text-[64px]">
            把 AI 从 PPT 推进到
            <br className="hidden md:block" />
            <span className="text-gradient">真实业务流程</span>
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/72 md:mt-7 md:text-[17px]">
            销售助手、智能知识库、合同 / 发票 / 差旅审核——4 周用真实样本完成 POC 回测，跑通准确率与节省工时后再灰度上线，保留权限、审计和人工兜底。
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
            <Link href="#contact" className="btn-neon">
              预约 30 分钟 AI 场景诊断 <ArrowRight className="size-4" />
            </Link>
            <Link href="#playbook" className="btn-ghost-dark">
              看 4 周落地路径
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-white/68 md:mt-10">
            <li className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-[color:var(--color-accent-cyan)]" /> 4 周完成样本回测
            </li>
            <li className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-[color:var(--color-accent-cyan)]" /> 数据不出域 · 全链路审计
            </li>
            <li className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-[color:var(--color-accent-cyan)]" /> 保留人工复核边界
            </li>
          </ul>

          <div className="mt-8 grid gap-3 text-[13px] sm:grid-cols-3 md:mt-10">
            {[
              { label: "销售日报", value: "自动生成" },
              { label: "知识问答", value: "可追溯复用" },
              { label: "审核效率", value: "提升 8 倍" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-md"
              >
                <div className="font-semibold text-white">{item.value}</div>
                <div className="mt-1 text-white/65">{item.label}</div>
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
    { icon: ScanLine, title: "销售日志采集", status: "已入库", accent: "cyan" },
    { icon: ChartNoAxesCombined, title: "商机风险 Review", status: "需跟进", accent: "violet" },
    { icon: BookOpenCheck, title: "知识库问答", status: "可复用", accent: "cyan" },
    { icon: FileSearch, title: "合同条款审核", status: "已复核", accent: "violet" },
  ] as const;

  return (
    <div className="relative hidden md:block">
      <div className="glass-panel p-5">
        <div className="flex items-center gap-2 border-b border-white/8 pb-3">
          <Bot className="size-4 text-[color:var(--color-accent-cyan)]" />
          <span className="text-[13px] font-medium text-white/85">
            企业 AI 流程中台
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2 py-0.5 text-[11px] font-semibold text-[color:var(--color-accent-cyan)] ring-1 ring-[color:var(--color-accent-cyan)]/30">
            <span className="size-1.5 animate-pulse rounded-full bg-[color:var(--color-accent-cyan)] shadow-[0_0_10px_var(--color-accent-cyan)]" />
            Agent 运行中
          </span>
        </div>

        <div className="relative mt-4">
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 400 280"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="wf-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#56c7f4" stopOpacity="0.8" />
                <stop offset="62%" stopColor="#2d5bff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6d5cff" stopOpacity="0.72" />
              </linearGradient>
            </defs>
            <path
              d="M 60 40 C 140 40, 160 110, 240 110 S 340 180, 360 230"
              fill="none"
              stroke="url(#wf-grad)"
              strokeWidth="1.4"
              className="anim-dash"
              opacity="0.7"
            />
            <path
              d="M 60 240 C 140 220, 200 160, 280 150 S 360 80, 380 60"
              fill="none"
              stroke="url(#wf-grad)"
              strokeWidth="1.1"
              className="anim-dash"
              opacity="0.45"
            />
          </svg>

          <div className="relative grid gap-2.5 text-[13px]">
            {tasks.map((task) => {
              const cyan = task.accent === "cyan";
              return (
                <div
                  key={task.title}
                  className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.025] px-3 py-2.5 backdrop-blur-md"
                >
                  <span
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      background: cyan
                        ? "linear-gradient(135deg, rgba(86,199,244,0.18), rgba(86,199,244,0.05))"
                        : "linear-gradient(135deg, rgba(45,91,255,0.22), rgba(109,92,255,0.05))",
                      boxShadow: cyan
                        ? "0 0 18px rgba(86,199,244,0.35) inset"
                        : "0 0 18px rgba(45,91,255,0.4) inset",
                      color: cyan ? "var(--color-accent-cyan)" : "var(--color-accent-violet)",
                    }}
                  >
                    <task.icon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-white/90">
                        {task.title}
                      </span>
                      <span
                        className="whitespace-nowrap text-[11px] font-semibold"
                        style={{
                          color: cyan
                            ? "var(--color-accent-cyan)"
                            : "var(--color-accent-violet)",
                        }}
                      >
                        {task.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3">
          <div className="flex items-center justify-between gap-4 text-[12px] text-white/68">
            <span>实时审核效率</span>
            <span className="font-semibold text-white">
              <span className="text-gradient">+200%</span>
            </span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className="h-full w-[78%] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-accent-cyan), var(--color-accent-violet), var(--color-accent-rose))",
                boxShadow: "0 0 18px rgba(45, 91, 255, 0.65)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="anim-float absolute -right-6 -bottom-8 hidden rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 backdrop-blur-md glow-soft md:block">
        <div className="text-[11px] text-white/68">建议先试点</div>
        <div className="mt-0.5 text-[20px] font-semibold text-white">
          <span className="text-gradient">1</span>
          <span className="ml-1 text-[13px] font-medium text-white/68">
            条高频流程
          </span>
        </div>
      </div>
    </div>
  );
}

function ProofStrip() {
  return (
    <section id="proof" className="relative border-b border-ink-100 bg-white">
      {/* Top neon hairline accent — visual bridge from dark hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-accent-cyan) 30%, var(--color-accent-violet) 50%, var(--color-accent-rose) 70%, transparent)",
          opacity: 0.45,
        }}
      />
      <div className="container-page py-14 md:py-16">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <span className="eyebrow">BUSINESS OUTCOME</span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink-900 md:text-[28px]">
              先用真实场景验证价值，再进入规模化建设
            </h2>
            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-500">
              我们把智能体产品、培训课程和交付服务组合成可评估的方案，用客户样本验证效果、边界和上线条件。
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 text-[14px] font-medium text-[color:var(--color-accent-violet)] hover:text-[color:var(--color-accent-rose)]"
          >
            申请方案评估 <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offerStats.map((t, idx) => (
            <div
              key={t.label}
              className="group relative overflow-hidden rounded-xl border border-ink-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_18px_50px_-26px_rgba(45,91,255,0.35)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background:
                    idx % 2 === 0
                      ? "radial-gradient(circle at 0% 0%, rgba(86,199,244,0.08), transparent 60%)"
                      : "radial-gradient(circle at 100% 0%, rgba(45,91,255,0.1), transparent 60%)",
                }}
              />
              <div className="relative text-[32px] font-semibold tracking-tight text-gradient">
                {t.value}
              </div>
              <div className="relative mt-1 text-[13px] font-medium text-ink-700">
                {t.label}
              </div>
              <div className="relative mt-3 border-t border-ink-100 pt-3 text-[12px] leading-relaxed text-ink-500">
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
    <section id="agents" className="relative border-b border-ink-100 bg-ink-50/30">
      <div className="container-page py-28 md:py-32">
        <header className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <span className="eyebrow">AI AGENT MATRIX</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-[42px]">
              不只做一个工具，而是一组
              <span className="text-gradient">可组合的企业智能体</span>
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-ink-500">
            围绕销售增长、知识运营、财务法务和内部流程自动化，归序把标准智能体拆成可单独试点、也可组合接入流程的模块。
          </p>
        </header>

        <div className="mt-14 grid auto-rows-fr gap-5 md:grid-cols-2">
          {agentProducts.map((agent) => (
            <article
              key={agent.name}
              className="bento group flex h-full flex-col"
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex size-12 items-center justify-center rounded-xl text-[color:var(--color-accent-violet)] transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(86,199,244,0.14), rgba(45,91,255,0.14))",
                    boxShadow:
                      "inset 0 0 0 1px rgba(45,91,255,0.18), 0 8px 24px -12px rgba(45,91,255,0.4)",
                  }}
                >
                  <agent.icon className="size-5" />
                </span>
                <div>
                  <div className="text-[18px] font-semibold text-ink-900">
                    {agent.name}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent-violet)]">
                    {agent.enName}
                  </div>
                </div>
              </div>

              <h3
                className="mt-5 text-[24px] font-bold leading-tight tracking-tight text-ink-900"
              >
                {agent.promise}
              </h3>
              <p className="mt-3 text-[14px] font-normal leading-relaxed text-ink-500">
                {agent.desc}
              </p>

              <ul className="mt-6 grid gap-3 border-t border-ink-100 pt-5 text-[13px] leading-relaxed text-ink-700">
                {agent.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 stroke-[2.4] text-[color:var(--color-accent-blue)]" />
                    <span>{point}</span>
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
            这部分由培训、咨询陪跑和企业级系统集成共同补齐。
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
            以下案例基于真实客户样本与已落地的智能体能力做脱敏展示，覆盖销售管理、审核合规两类典型场景。具体客户 logo、截图与完整指标在保密承诺下，可在评估会议中单独披露。
          </p>
        </header>

        <div className="mt-8 rounded-2xl border border-ink-100 bg-white px-5 py-4 text-[13px] leading-relaxed text-ink-700">
          <span className="font-semibold text-ink-900">服务覆盖行业：</span>
          智能制造 · 跨境电商 · 法律咨询 · 连锁零售 · 集团差旅 · 财务共享中心 · 央国企内控合规
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
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

        <div className="relative mt-16">
          {/* Energized horizontal timeline track (lg+) */}
          <div
            aria-hidden
            className="timeline-line pointer-events-none absolute left-[8%] right-[8%] top-[58px] hidden h-[2px] rounded-full opacity-80 lg:block"
          />
          {/* Vertical track (mobile) */}
          <div
            aria-hidden
            className="timeline-line-v pointer-events-none absolute left-[27px] top-12 bottom-12 hidden w-[2px] rounded-full opacity-80 md:hidden"
          />

          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {rolloutSteps.map((step, idx) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-ink-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(45,91,255,0.4)]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="relative inline-flex size-12 items-center justify-center rounded-xl text-white ring-4 ring-white"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-violet))",
                      boxShadow:
                        "0 10px 28px -10px rgba(45,91,255,0.6), inset 0 0 0 1px rgba(255,255,255,0.18)",
                    }}
                  >
                    <step.icon className="size-5" />
                    {/* Pulse ring */}
                    <span
                      aria-hidden
                      className="absolute -inset-1 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
                      style={{
                        boxShadow:
                          "0 0 0 2px rgba(86,199,244,0.35), 0 0 24px rgba(45,91,255,0.5)",
                      }}
                    />
                  </div>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-white"
                    style={{
                      background:
                        "linear-gradient(120deg, var(--color-accent-blue), var(--color-accent-violet))",
                      boxShadow:
                        "0 6px 16px -6px rgba(45,91,255,0.6)",
                    }}
                  >
                    W{idx + 1}
                  </span>
                </div>

                {/* Timeline node aligned with track (lg+) */}
                <span
                  aria-hidden
                  className="node-dot absolute -top-[6px] left-1/2 hidden -translate-x-1/2 lg:inline-flex"
                />

                <div className="mt-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-accent-violet)]">
                  {step.period}
                </div>
                <h3 className="mt-3 text-[18px] font-semibold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                  {step.desc}
                </p>
                <div
                  className="mt-5 rounded-xl px-4 py-3 text-[12px] leading-relaxed text-ink-700"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(86,199,244,0.06), rgba(45,91,255,0.05))",
                    border: "1px solid rgba(45,91,255,0.12)",
                  }}
                >
                  <span className="font-semibold text-ink-900">交付产物：</span>
                  {step.output}
                </div>
                <div className="mt-3 text-[12px] font-medium text-[color:var(--color-accent-blue)]">
                  {step.effort}
                </div>
              </div>
            ))}
          </div>
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
      desc: "标准智能体可快速试点，企业级系统集成能补齐流程里的特殊环节。",
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
    <section id="contact" className="surface-dark relative">
      <div className="container-page relative z-10 grid gap-12 py-24 md:grid-cols-[1fr_1.1fr] md:py-32">
        <div>
          <span className="eyebrow-neon">联系我们 · CONTACT</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-[42px]">
            先判断哪条流程
            <br />
            最值得 <span className="text-gradient">AI 化</span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/72">
            留下联系方式后，我们会基于您的业务流程、系统现状和团队成熟度，判断更适合从智能体产品、AI 培训、咨询陪跑还是系统集成开始。
          </p>

          <div className="mt-8 grid gap-3">
            {ctaOptions.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[14px] font-medium text-white/85 backdrop-blur-md transition hover:border-[color:var(--color-accent-cyan)]/40"
              >
                <span>{item.label}</span>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                    item.tag === "高意向"
                      ? "text-white"
                      : "text-[color:var(--color-accent-cyan)] ring-1 ring-[color:var(--color-accent-cyan)]/35 bg-white/[0.02]"
                  }`}
                  style={
                    item.tag === "高意向"
                      ? {
                          background:
                            "linear-gradient(120deg, var(--color-accent-blue), var(--color-accent-violet))",
                          boxShadow:
                            "0 6px 16px -6px rgba(45,91,255,0.6)",
                        }
                      : undefined
                  }
                >
                  {item.tag}
                </span>
              </div>
            ))}
          </div>

          <ul className="mt-8 space-y-4 text-[14px] text-white/75">
            <Bullet>免费 30 分钟 AI 场景诊断会议</Bullet>
            <Bullet>提供智能体产品、培训和系统集成落地路径建议</Bullet>
            <Bullet>支持基于真实样本的 POC 与流程回测</Bullet>
            <Bullet>输出可转发给业务、IT、采购的评估材料</Bullet>
          </ul>

          <div className="mt-8 grid gap-3">
            {contactMethods.map((method) => (
              <div
                key={method.label}
                className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-md"
              >
                <span
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-violet))",
                    boxShadow: "0 8px 22px -10px rgba(45,91,255,0.7)",
                  }}
                >
                  <method.icon className="size-5" />
                </span>
                <div>
                  <div className="text-[13px] font-semibold text-white">
                    {method.label}
                  </div>
                  {method.href ? (
                    <Link
                      href={method.href}
                      className="mt-1 block break-all text-[14px] leading-relaxed text-white/72 hover:text-[color:var(--color-accent-cyan)]"
                    >
                      {method.value}
                    </Link>
                  ) : (
                    <p className="mt-1 text-[14px] leading-relaxed text-white/72">
                      {method.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative grid gap-5">
          {/* Glow halo behind form */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(86,199,244,0.18), transparent 55%), radial-gradient(circle at 80% 80%, rgba(45,91,255,0.22), transparent 60%)",
            }}
          />
          <LeadForm />
          <div className="grid gap-4 sm:grid-cols-2">
            {socialQrcodes.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md glow-soft"
              >
                <div className="mx-auto aspect-square w-full max-w-[168px] overflow-hidden rounded-xl border border-white/10 bg-white">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent-cyan)]">
                  {item.label}
                </div>
                <h3 className="mt-2 text-[17px] font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/70">
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
      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[color:var(--color-accent-cyan)]" />
      <span>{children}</span>
    </li>
  );
}
