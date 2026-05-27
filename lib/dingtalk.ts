type LeadInput = {
  name: string;
  phone?: string;
  company: string;
  email: string;
  needType?: string;
  message?: string;
};

type DingResponse = { errcode: number; errmsg: string };

const WEBHOOK = process.env.DINGTALK_WEBHOOK;
const SECRET = process.env.DINGTALK_SECRET;

async function hmacSha256Base64(secret: string, payload: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(payload));
  // base64 encode
  let binary = "";
  const bytes = new Uint8Array(sig);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

async function signedUrl(webhook: string, secret: string): Promise<string> {
  const ts = Date.now().toString();
  const sig = await hmacSha256Base64(secret, `${ts}\n${secret}`);
  return `${webhook}&timestamp=${ts}&sign=${encodeURIComponent(sig)}`;
}

function escapeMd(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function buildMessage(lead: LeadInput) {
  const ts = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
  const messageBlock = lead.message
    ? [
        "**需求描述**：",
        `> ${lead.message
          .split(/\r?\n/)
          .map((l) => l.trim())
          .filter(Boolean)
          .join("\n> ")}`,
        "",
      ]
    : [];
  const lines = [
    "### 🔔 归序官网 · 新销售线索",
    "",
    `**公司**：${escapeMd(lead.company)}`,
    `**联系人**：${escapeMd(lead.name)}`,
    `**邮箱**：${escapeMd(lead.email)}`,
    `**电话**：${lead.phone ? escapeMd(lead.phone) : "—"}`,
    `**需求类型**：${lead.needType ? escapeMd(lead.needType) : "—"}`,
    "",
    ...messageBlock,
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
  const url = await signedUrl(WEBHOOK, SECRET);
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
