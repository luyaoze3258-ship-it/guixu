import "./globals.css";
import type { Metadata, Viewport } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guixucloud.com"),
  title: {
    default: "归序科技 · 企业 AI 智能体与落地服务",
    template: "%s · 归序科技 Guixu",
  },
  description:
    "归序科技提供销售助手、风控管理、智能知识库、观澜智能审核等企业 AI 智能体，以及 AI 培训、咨询陪跑、私有化部署和定制外包交付服务。",
  keywords: [
    "归序科技",
    "AI 智能体",
    "企业 AI 落地",
    "AI 培训",
    "AI 外包",
    "智能知识库",
    "销售助手智能体",
    "销售管理智能体",
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
  icons: {
    icon: "/brand-mark-neon.jpg",
    apple: "/brand-mark-neon.jpg",
  },
  openGraph: {
    title: "归序科技 · 企业 AI 智能体与落地服务",
    description:
      "从标准智能体、AI 培训到定制外包交付，帮助企业把高频业务流程 AI 化。",
    url: "https://www.guixucloud.com",
    siteName: "归序科技 Guixu",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "归序科技 · 企业 AI 智能体与落地服务",
    description:
      "从标准智能体、AI 培训到定制外包交付，帮助企业把高频业务流程 AI 化。",
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
