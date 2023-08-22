import { defineUserConfig, defaultTheme } from "vuepress";
import navbar from "./navbar";
import HTML from "./catalogue/HTML";
import IDE from "./catalogue/IDE";
import JS from "./catalogue/JS";
import VUE from "./catalogue/VUE";
import CSS from "./catalogue/CSS";

export default defineUserConfig({
  lang: "zh-CN",
  title: "LY blog",
  description: "这是我的第一个 VuePress 站点",
  head: [["link", { rel: "stylesheet", href: "/styles/index.scss" }]],
  theme: defaultTheme({
    logo: "head.webp",
    navbar,
    sidebar: [
      {
        text: "HTML",
        collapsible: true,
        children: HTML,
      },
      {
        text: "CSS",
        collapsible: true,
        children: CSS,
      },
      {
        text: "JavaScript",
        collapsible: true,
        children: JS,
      },
      {
        text: "Vue",
        collapsible: true,
        children: VUE,
      },
      {
        text: "IDE",
        collapsible: true,
        children: IDE,
      },
    ],
  }),
});
