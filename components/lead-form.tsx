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
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="text-lg font-semibold text-brand-700">
          已收到您的需求
        </div>
        <p className="mt-2 text-[14px] text-ink-700">
          我们的技术专家将在 24 小时内与您联系。
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-[13px] font-medium text-brand-600 hover:text-brand-700"
        >
          再提交一条 →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-100 bg-white p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="姓名" name="name" placeholder="如：王明" required />
        <Field
          label="电话"
          name="phone"
          type="tel"
          placeholder="如：138 0000 0000"
          required
        />
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
          placeholder="name@company.com"
        />
      </div>

      <label className="mt-5 block">
        <span className="block text-[13px] font-medium text-ink-700">
          需求类型 <span className="text-brand-500">*</span>
        </span>
        <select
          name="needType"
          required
          defaultValue=""
          className="mt-1.5 w-full rounded-lg border border-ink-100 bg-white px-3.5 py-2.5 text-[14px] text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/15"
        >
          <option value="" disabled>
            请选择希望优先沟通的方向
          </option>
          <option value="差旅与费用审核">差旅与费用审核</option>
          <option value="合同与法务审核">合同与法务审核</option>
          <option value="发票与凭证核验">发票与凭证核验</option>
          <option value="私有化部署 / 系统集成">私有化部署 / 系统集成</option>
          <option value="POC 试用评估">POC 试用评估</option>
        </select>
      </label>

      <label className="mt-5 block">
        <span className="block text-[13px] font-medium text-ink-700">
          需求描述 <span className="text-brand-500">*</span>
        </span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="请简述您当前的审核痛点、审批量级或希望了解的产品能力。"
          className="mt-1.5 w-full resize-none rounded-lg border border-ink-100 bg-white px-3.5 py-2.5 text-[14px] text-ink-900 placeholder:text-ink-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/15"
        />
      </label>

      {status === "error" ? (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[13px] text-red-700">
          {errorMessage}
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] text-ink-500">
          提交即表示同意我们的{" "}
          <a href="/legal/privacy" className="underline hover:text-brand-600">
            隐私政策
          </a>
          。
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" /> 提交中
            </>
          ) : (
            <>
              <Send className="size-4" /> 提交需求
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
      <span className="block text-[13px] font-medium text-ink-700">
        {label}
        {required ? <span className="text-brand-500"> *</span> : null}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-ink-100 bg-white px-3.5 py-2.5 text-[14px] text-ink-900 placeholder:text-ink-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/15"
      />
    </label>
  );
}
