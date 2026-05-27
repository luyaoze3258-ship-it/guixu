import Link from "next/link";
import { site } from "@/lib/site";

const cols: Array<{
  title: string;
  links: Array<{ href: string; label: string }>;
}> = [
  {
    title: "产品",
    links: [
      { href: "/guanlan", label: "观澜·智能审核" },
      { href: "/guanlan#capabilities", label: "核心能力" },
      { href: "/guanlan#scenarios", label: "适用场景" },
      { href: "/#contact", label: "申请试用" },
    ],
  },
  {
    title: "解决方案",
    links: [
      { href: "/#solutions", label: "差旅审核" },
      { href: "/#solutions", label: "合同审核" },
      { href: "/#solutions", label: "发票核验" },
    ],
  },
  {
    title: "公司",
    links: [
      { href: "/#about", label: "关于我们" },
      { href: "/#contact", label: "联系方式" },
      { href: "mailto:hello@guixucloud.com", label: "媒体合作" },
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
        <div className="grid gap-10 md:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2 text-base font-semibold text-ink-900">
              <span
                aria-hidden
                className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-500 text-[13px] font-bold text-white"
              >
                归
              </span>
              {site.name}
            </div>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-ink-500">
              {site.legalName}。专注于企业级智能审核解决方案，为未来财务与合规流程提供决策引擎。
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
