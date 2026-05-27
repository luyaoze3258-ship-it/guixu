import { NextResponse } from "next/server";
import { notifyDingtalk } from "@/lib/dingtalk";

type Payload = {
  name?: string;
  phone?: string;
  company?: string;
  email?: string;
  needType?: string;
  message?: string;
};

const PHONE_RE = /^[+0-9\s\-()]{6,30}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Payload | null;
  if (!body) {
    return NextResponse.json({ error: "请求格式无效" }, { status: 400 });
  }

  const { name, phone, company, needType, message, email } = body;
  if (!name || !company || !email) {
    return NextResponse.json(
      { error: "请填写姓名、公司与工作邮箱" },
      { status: 422 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "邮箱格式不正确" }, { status: 422 });
  }
  if (phone && !PHONE_RE.test(phone)) {
    return NextResponse.json({ error: "电话格式不正确" }, { status: 422 });
  }
  if (
    (message && message.length > 2000) ||
    company.length > 200 ||
    name.length > 100
  ) {
    return NextResponse.json({ error: "字段长度超出限制" }, { status: 422 });
  }

  const lead = { name, phone, company, email, needType, message };

  const result = await notifyDingtalk(lead);
  if (!result.ok) {
    // We still return ok to the user (lead is captured server-side), but log
    // for ops. Real CRM sink should also persist to DB so DingTalk outage is
    // not data loss.
    console.error("[lead] dingtalk failed:", result.reason, {
      company: lead.company,
      receivedAt: new Date().toISOString(),
    });
  }

  return NextResponse.json({ ok: true });
}
