import { defineUserConfig, defaultTheme } from "vuepress";
import HTML from "./catalogue/HTML";
import IDE from "./catalogue/IDE";
import JS from "./catalogue/JS";
import VUE from "./catalogue/VUE";
import CSS from "./catalogue/CSS";

export default defineUserConfig({
  lang: "zh-CN",
  title: "龙吟博客",
  description: "这是我的第一个 VuePress 站点",
  head: [["link", { rel: "stylesheet", href: "/styles/index.scss" }]],
  theme: defaultTheme({
    logo: "head.webp",
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "HTML",
        children: HTML,
      },
      {
        text: "CSS",
        children: CSS,
      },
      {
        text: "JavaScript",
        children: JS,
      },
      {
        text: "Vue",
        children: VUE,
      },
      {
        text: "IDE",
        children: IDE,
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
    sidebar: "auto",
  }),
});
