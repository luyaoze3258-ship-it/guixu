export const site = {
  name: "归序科技",
  enName: "Guixu",
  legalName: "北京归序信息科技有限公司",
  domain: "guixucloud.com",
  email: "kangjinlong@guixucloud.com",
  address: "北京市海淀区学院路 39 号一幢唯实大厦 10 层 1002 号",
  product: {
    name: "观澜",
    enName: "Guanlan",
    tagline: "让审批从小时级变成分钟级",
    description:
      "面向企业财务与法务流程的 AI 智能审核引擎。秒级解析复杂票据与多页合同，快速输出可审计的合规决策。",
  },
} as const;

export const nav = [
  { href: "/", label: "首页" },
  { href: "/#fit", label: "适用场景" },
  { href: "/#agents", label: "智能体" },
  { href: "/#services", label: "培训与交付" },
  { href: "/guanlan", label: "观澜" },
  { href: "/#contact", label: "联系我们" },
] as const;
