"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/80 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-ink-900"
        >
          <span
            aria-hidden
            className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-500 text-[13px] font-bold text-white"
          >
            归
          </span>
          <span>{site.name}</span>
          <span className="ml-1 text-[13px] font-medium text-ink-500">
            Guixu
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-ink-700 transition-colors hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#agents" className="btn-ghost hidden md:inline-flex">
            智能体矩阵
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-[14px] font-semibold text-white sm:hidden"
          >
            预约
          </Link>
          <Link href="/#contact" className="btn-primary hidden sm:inline-flex">
            预约评估
          </Link>
          <button
            type="button"
            aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-ink-100 bg-white text-ink-700 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ink-100 bg-white md:hidden">
          <nav className="container-page grid gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-ink-700 hover:bg-ink-50 hover:text-brand-600"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#agents"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-[15px] font-medium text-ink-700 hover:bg-ink-50 hover:text-brand-600"
            >
              智能体矩阵
            </Link>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-3 text-[15px] font-semibold text-white"
            >
              预约评估
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
