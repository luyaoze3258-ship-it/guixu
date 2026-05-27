import "./globals.css";
import type { Metadata, Viewport } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guixucloud.com"),
  title: {
    default: "归序科技 · 让审批从小时级变成分钟级",
    template: "%s · 归序科技 Guixu",
  },
  description:
    "归序科技为企业财务与法务流程提供 AI 智能审核引擎（观澜·Guanlan）。秒级解析复杂票据与多页合同，快速输出可审计的合规决策。",
  keywords: [
    "归序科技",
    "观澜",
    "Guanlan",
    "智能审核",
    "AI 审核",
    "合同审核",
    "发票核验",
    "差旅审核",
    "RPA",
    "财务自动化",
  ],
  authors: [{ name: "归序科技" }],
  alternates: {
    canonical: "/",
    languages: { "zh-CN": "/", "en-US": "/en" },
  },
  openGraph: {
    title: "归序科技 · 观澜智能审核",
    description:
      "面向企业财务与法务流程的 AI 智能审核引擎，让审批从小时级变成分钟级。",
    url: "https://www.guixucloud.com",
    siteName: "归序科技 Guixu",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "归序科技 · 观澜智能审核",
    description:
      "面向企业财务与法务流程的 AI 智能审核引擎，让审批从小时级变成分钟级。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#2d5bff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-white text-ink-900 antialiased">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
