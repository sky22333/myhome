export const siteConfig = {
  name: "哈基米",
  title: "哈基米 - 个人主页",
  description: "一个极简主义、视觉震撼且高性能的单页个人作品集网站，具有流畅的动画和统一的配置。",
  author: {
    name: "哈基米",
    bio: "前端开发者 & 设计师",
    statement: "我热衷于打造美观、实用且令人愉悦的数字体验。",
    email: "zhangwei.dev@example.com",
    avatarUrl: "logo.svg",
  },
  socials: {
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/in/example",
    x: "https://x.com/example",
  },
  about: {
    title: "关于我",
    content: "我是一名充满激情的前端开发者，拥有超过五年的行业经验。我专注于使用现代技术（如 React 和 TypeScript）构建高性能、响应式的 Web 应用程序。我的目标是创造不仅功能强大，而且在视觉上引人入胜、直观易用的界面。",
  },
  projects: {
    title: "项目",
    items: [
      {
        title: "项目一：响应式电商平台",
        description: "一个功能齐全的电子商务网站，适用移动优先的方法构建，具有无缝的结账流程和产品管理系统。",
        link: "https://github.com/example/project-one",
      },
      {
        title: "项目二：数据可视化仪表盘",
        description: "一个交互式仪表盘，用于实时可视化复杂数据集，帮助用识识别趋势和模式。",
        link: "https://github.com/example/project-two",
      },
      {
        title: "项目三：个人博客引导",
        description: "一个使用静态站点生成器构建的轻量级、快速的博客平台，专注于内容和排版。",
        link: "https://github.com/example/project-three",
      },
    ],
  },
  links: {
    title: "链接",
    items: [
      {
        title: "个人网站",
        url: "#",
        description: "我的个人网站和博客。",
      },
      {
        title: "设计作品集",
        url: "#",
        description: "我在 Dribbble 上的设计作品。",
      },
    ],
  },
  contact: {
    title: "联系方式",
    content: "我一直在寻找新的机会和合作。如果您有项目想与我讨论，或者只是想打个招呼，请随时通过电子邮件与我联系。您也可以在下面的社交媒体上找到我。",
  },
  footer: {
    text: "用爱 ❤️ 驱动",
  },
};
export type SiteConfig = typeof siteConfig;
