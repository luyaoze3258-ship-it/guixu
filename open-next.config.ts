import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // 使用默认内存增量缓存。如果以后接 KV，可在此切换。
});
