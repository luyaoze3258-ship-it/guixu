import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

const legalPages = {
  privacy: {
    title: "隐私政策",
    desc: "说明归序科技在官网线索收集和产品演示预约中的信息处理原则。",
    items: [
      "我们仅收集用于业务沟通所需的信息，包括姓名、电话、公司、工作邮箱、需求类型与需求描述。",
      "表单信息只用于方案评估、演示预约、POC 沟通和必要的客户服务，不会出售给第三方。",
      "如需删除或更正已提交的信息，可通过 hello@guixucloud.com 联系我们处理。",
    ],
  },
  terms: {
    title: "服务条款",
    desc: "说明官网内容、产品演示和方案沟通的基本使用约定。",
    items: [
      "官网展示内容用于介绍归序科技和观澜智能审核能力，不构成最终采购承诺或交付范围。",
      "具体功能、部署方式、服务等级和价格以双方确认的合同或工作说明书为准。",
      "未经书面许可，不得复制、转售或以误导方式使用本站内容和品牌资产。",
    ],
  },
  cookie: {
    title: "Cookie 政策",
    desc: "说明本站可能使用的基础访问分析和体验优化技术。",
    items: [
      "本站可能使用必要 Cookie 维持基础访问体验，并使用匿名化统计帮助我们理解页面访问效果。",
      "我们不会通过 Cookie 采集密码、付款信息或无关个人敏感信息。",
      "你可以在浏览器中清除或限制 Cookie；部分基础体验可能因此受到影响。",
    ],
  },
} as const;

type LegalSlug = keyof typeof legalPages;

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const page = legalPages[slug as LegalSlug];
    return {
      title: page ? page.title : "法律信息",
      description: page?.desc,
      alternates: { canonical: page ? `/legal/${slug}` : "/legal/privacy" },
    };
  });
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = legalPages[slug as LegalSlug] ?? legalPages.privacy;

  return (
    <section className="bg-gradient-to-b from-brand-50/50 to-white">
      <div className="container-page py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-brand-600 hover:text-brand-700"
        >
          <ArrowLeft className="size-4" />
          返回首页
        </Link>

        <article className="mt-8 max-w-3xl rounded-2xl border border-ink-100 bg-white p-8 shadow-[0_18px_50px_-36px_rgba(13,38,128,0.45)] md:p-10">
          <span className="eyebrow">LEGAL</span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
            {page.title}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            {page.desc}
          </p>

          <div className="mt-8 space-y-4">
            {page.items.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-ink-100 bg-ink-50/50 p-5"
              >
                <div className="text-[12px] font-semibold text-brand-600">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-700">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-ink-100 pt-5 text-[13px] text-ink-500">
            最近更新：2026 年 5 月 27 日。如需进一步说明，请联系 hello@guixucloud.com。
          </p>
        </article>
      </div>
    </section>
  );
}
