import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "LY blog",
  description: "这是我的第一个 VuePress 站点",
  theme: defaultTheme({
    logo: "https://longyinstudio.cn/images/head.webp",
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "龙吟工作室",
        link: "https://longyinstudio.cn/",
      },
      {
        text: "Github",
        link: "https://github.com/LongYinStudio",
      },
    ],
    sidebar: [
      {
        text: "HTML",
        collapsible: true,
        children: [
          {
            text: "HTML",
            link: "/HTML/README.md",
          },
        ],
      },
      {
        text: "CSS",
        link: "/CSS",
      },
      {
        text: "IDE",
        collapsible: true,
        children: [
          {
            text: "VScode",
            link: "/IDE/VScode",
          },
          {
            text: "IntellJ IDEA",
            link: "/IDE/IDEA",
          },
        ],
      },
    ],
  }),
});
