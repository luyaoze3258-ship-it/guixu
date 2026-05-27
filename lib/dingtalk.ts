import crypto from "node:crypto";

type LeadInput = {
  name: string;
  phone: string;
  company: string;
  email?: string;
  needType: string;
  message: string;
};

type DingResponse = { errcode: number; errmsg: string };

const WEBHOOK = process.env.DINGTALK_WEBHOOK;
const SECRET = process.env.DINGTALK_SECRET;

function signedUrl(webhook: string, secret: string): string {
  const ts = Date.now().toString();
  const raw = `${ts}\n${secret}`;
  const sig = crypto.createHmac("sha256", secret).update(raw).digest("base64");
  return `${webhook}&timestamp=${ts}&sign=${encodeURIComponent(sig)}`;
}

function escapeMd(value: string): string {
  // DingTalk markdown does not need HTML escaping, but we strip line breaks
  // in inline fields so the layout stays compact.
  return value.replace(/[\r\n]+/g, " ").trim();
}

function buildMessage(lead: LeadInput) {
  const ts = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
  const lines = [
    "### 🔔 归序官网 · 新销售线索",
    "",
    `**公司**：${escapeMd(lead.company)}`,
    `**联系人**：${escapeMd(lead.name)}`,
    `**电话**：${escapeMd(lead.phone)}`,
    `**邮箱**：${lead.email ? escapeMd(lead.email) : "—"}`,
    `**需求类型**：${escapeMd(lead.needType)}`,
    "",
    "**需求描述**：",
    `> ${lead.message.split(/\r?\n/).map((l) => l.trim()).filter(Boolean).join("\n> ")}`,
    "",
    `_时间：${ts}_`,
  ];
  return {
    msgtype: "markdown",
    markdown: {
      title: `新线索 · ${lead.company}`,
      text: lines.join("\n"),
    },
    at: { isAtAll: false },
  };
}

export type DingtalkResult =
  | { ok: true }
  | { ok: false; reason: string };

export async function notifyDingtalk(lead: LeadInput): Promise<DingtalkResult> {
  if (!WEBHOOK || !SECRET) {
    return { ok: false, reason: "missing-env" };
  }
  const url = signedUrl(WEBHOOK, SECRET);
  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildMessage(lead)),
    });
  } catch (err) {
    return {
      ok: false,
      reason: `network: ${err instanceof Error ? err.message : "unknown"}`,
    };
  }

  if (!res.ok) {
    return { ok: false, reason: `http-${res.status}` };
  }

  const data = (await res.json().catch(() => null)) as DingResponse | null;
  if (!data || data.errcode !== 0) {
    return {
      ok: false,
      reason: `ding-${data?.errcode ?? "?"}: ${data?.errmsg ?? "unknown"}`,
    };
  }
  return { ok: true };
}
