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
            text: "inputmode",
            link: "/HTML/inputmode.md",
          },
        ],
      },
      {
        text: "CSS",
        collapsible: true,
        children: [
          {
            text: "CSS",
            link: "/CSS/README.md",
          },
        ],
      },
      {
        text: "JavaScript",
        collapsible: true,
        children: [
          {
            text: "JS",
            link: "/JS/README.md",
          },
        ],
      },
      {
        text: "Vue",
        collapsible: true,
        children: [
          {
            text: "VUE",
            link: "/VUE/README.md",
          },
        ],
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
