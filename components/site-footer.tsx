import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const cols: Array<{
  title: string;
  links: Array<{ href: string; label: string }>;
}> = [
  {
    title: "产品",
    links: [
      { href: "/#agents", label: "销售助手智能体" },
      { href: "/#agents", label: "风控与管理智能体" },
      { href: "/#agents", label: "智能知识库智能体" },
      { href: "/guanlan", label: "观澜·智能审核" },
    ],
  },
  {
    title: "服务",
    links: [
      { href: "/#services", label: "AI 培训课程" },
      { href: "/#services", label: "咨询陪跑服务" },
      { href: "/#services", label: "AI 外包与定制交付" },
      { href: "/#contact", label: "申请方案评估" },
    ],
  },
  {
    title: "场景",
    links: [
      { href: "/#fit", label: "销售与增长团队" },
      { href: "/#fit", label: "企业知识库" },
      { href: "/#fit", label: "流程 AI 化改造" },
      { href: "/#solutions", label: "落地方案" },
    ],
  },
  {
    title: "公司",
    links: [
      { href: "/#about", label: "关于我们" },
      { href: "/#contact", label: "联系方式" },
      { href: `mailto:${site.email}`, label: "媒体合作" },
    ],
  },
  {
    title: "法律",
    links: [
      { href: "/legal/privacy", label: "隐私政策" },
      { href: "/legal/terms", label: "服务条款" },
      { href: "/legal/cookie", label: "Cookie 政策" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50/60">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-[1.3fr_repeat(5,1fr)]">
          <div>
            <div className="flex items-center gap-2 text-base font-semibold text-ink-900">
              <span className="inline-flex h-11 w-[158px] items-center overflow-hidden rounded-lg bg-black shadow-sm ring-1 ring-ink-100">
                <Image
                  src="/logo-wordmark-neon.jpg"
                  alt={`${site.name} Guixu Technology`}
                  width={709}
                  height={250}
                  className="h-full w-full object-contain"
                />
              </span>
            </div>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-ink-500">
              {site.legalName}。提供企业 AI 智能体、培训课程、咨询陪跑与定制交付服务，帮助客户把高频流程 AI 化。
            </p>
            <p className="mt-4 text-[13px] text-ink-500">
              邮箱 ·{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-ink-700 hover:text-brand-600"
              >
                {site.email}
              </a>
            </p>
            <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-ink-500">
              地址 · <span className="text-ink-700">{site.address}</span>
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[13px] font-semibold text-ink-900">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13px] text-ink-500 transition-colors hover:text-brand-600"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-100 pt-6 text-[12px] text-ink-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} 北京归序信息科技有限公司。保留所有权利。</div>
          <div className="flex items-center gap-4">
            <Link href="/legal/privacy" className="hover:text-brand-600">
              隐私
            </Link>
            <Link href="/legal/terms" className="hover:text-brand-600">
              条款
            </Link>
            <span>简体中文</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
