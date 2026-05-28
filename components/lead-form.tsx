"use client";

import { useState, type ComponentProps } from "react";
import { Loader2, Send } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

type FormSubmitHandler = NonNullable<ComponentProps<"form">["onSubmit"]>;

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit: FormSubmitHandler = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || `提交失败 (${res.status})`);
      }
      setStatus("success");
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "未知错误");
    }
  };

  if (status === "success") {
    return (
      <div
        className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] p-10 text-center text-white backdrop-blur-xl"
        style={{
          boxShadow:
            "0 30px 80px -30px rgba(86,199,244,0.35), inset 0 0 0 1px rgba(86,199,244,0.12)",
        }}
      >
        <div className="text-[20px] font-semibold text-gradient">
          已收到您的需求
        </div>
        <p className="mt-3 text-[14px] text-white/70">
          我们将在 24 小时内与您确认场景、样本和下一步评估方式。
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-[13px] font-medium text-[color:var(--color-accent-cyan)] hover:text-white"
        >
          再提交一条 →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8"
      style={{
        boxShadow:
          "0 30px 80px -30px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(86,199,244,0.08)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-px left-8 right-8 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-accent-cyan), var(--color-accent-violet), transparent)",
          opacity: 0.6,
        }}
      />

      <div className="mb-7 flex items-start gap-3 text-[12.5px] leading-relaxed text-white/72">
        <span
          className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
          style={{
            background:
              "linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-violet))",
            boxShadow: "0 0 14px rgba(45,91,255,0.55)",
          }}
        >
          1
        </span>
        <span>
          <span className="font-semibold text-white">3 步留资</span> · 仅需姓名、公司、联系方式（邮箱或电话）。其余信息折叠保留，不打断节奏。
        </span>
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        <Field label="姓名" name="name" placeholder="如：王明" required />
        <Field
          label="公司"
          name="company"
          placeholder="您的公司名称"
          required
        />
        <Field
          label="工作邮箱"
          name="email"
          type="email"
          placeholder="name@company.com（邮箱与电话二选一）"
        />
        <Field
          label="电话 / 微信"
          name="phone"
          type="tel"
          placeholder="如：138 0000 0000（邮箱与电话二选一）"
        />
      </div>

      <details className="group mt-8">
        <summary className="flex cursor-pointer list-none items-center gap-2 text-[12.5px] font-medium text-[color:var(--color-accent-cyan)] hover:text-white">
          <span
            className="inline-flex size-6 items-center justify-center rounded-full text-[11px] font-bold text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-violet))",
              boxShadow: "0 0 14px rgba(45,91,255,0.55)",
            }}
          >
            2
          </span>
          <span>展开更多信息（可选，便于我们提前准备）</span>
          <span className="ml-auto transition group-open:rotate-180">⌄</span>
        </summary>

        <label className="mt-6 block">
          <span className="field-label text-white/65">想优先沟通的方向</span>
          <select
            name="needType"
            defaultValue=""
            className="input-line mt-2 cursor-pointer appearance-none bg-transparent text-white"
            style={{ colorScheme: "dark" }}
          >
            <option value="" className="bg-[#0a0e27]">不确定，先聊聊</option>
            <option value="销售助手智能体 Visualize" className="bg-[#0a0e27]">销售助手智能体 Visualize</option>
            <option value="风控与管理智能体 Optimize" className="bg-[#0a0e27]">风控与管理智能体 Optimize</option>
            <option value="智能知识库智能体" className="bg-[#0a0e27]">智能知识库智能体</option>
            <option value="观澜智能审核" className="bg-[#0a0e27]">观澜智能审核</option>
            <option value="AI 培训课程" className="bg-[#0a0e27]">AI 培训课程</option>
            <option value="AI 落地 / 解决方案交付" className="bg-[#0a0e27]">AI 落地 / 解决方案交付</option>
            <option value="企业 AI 场景诊断" className="bg-[#0a0e27]">企业 AI 场景诊断</option>
            <option value="私有化部署 / 系统集成" className="bg-[#0a0e27]">私有化部署 / 系统集成</option>
            <option value="POC 试用评估" className="bg-[#0a0e27]">POC 试用评估</option>
            <option value="领取《企业 AI 场景评估清单》" className="bg-[#0a0e27]">领取《企业 AI 场景评估清单》</option>
          </select>
        </label>

        <label className="mt-6 block">
          <span className="field-label text-white/65">需求描述</span>
          <textarea
            name="message"
            rows={3}
            placeholder="可简述当前想 AI 化的业务流程、团队规模或希望了解的能力。"
            className="input-line mt-2 resize-none text-white placeholder:text-white/45"
          />
        </label>
      </details>

      {status === "error" ? (
        <div className="mt-6 rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-[13px] text-red-200 backdrop-blur">
          {errorMessage}
        </div>
      ) : null}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] text-white/60">
          提交即表示同意我们的{" "}
          <a
            href="/legal/privacy"
            className="underline underline-offset-2 hover:text-[color:var(--color-accent-cyan)]"
          >
            隐私政策
          </a>
          。
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-neon w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" /> 提交中
            </>
          ) : (
            <>
              <Send className="size-4" /> 预约 AI 场景诊断
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="field-label text-white/65">
        {label}
        {required ? (
          <span className="ml-1 text-[color:var(--color-accent-rose)]">*</span>
        ) : null}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="input-line mt-2 text-white placeholder:text-white/45"
      />
    </label>
  );
}
