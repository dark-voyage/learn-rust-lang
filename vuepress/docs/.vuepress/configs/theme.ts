import navbar from "./navbar";
import sidebar from "./sidebar";
import defaultTheme from "@vuepress/theme-default";

export default defaultTheme({
  home: "/",
  logo: "https://raw.githubusercontent.com/osmon-lang/.github/main/ASSETS/Osmon%20Black.png",
  logoDark:
    "https://raw.githubusercontent.com/osmon-lang/.github/main/ASSETS/Osmon%20White.png",
  repo: "rust-lang-uz/learn-rust-lang",
  navbar: navbar,
  sidebar: sidebar,
  repoLabel: "Repozitoriya",
  docsRepo: "rust-lang-uz/learn-rust-lang",
  docsDir: "docs",
  docsBranch: "main",
  editLink: true,
  editLinkText: "Sahifaga o'zgartirish kiritish",
  lastUpdated: true,
  lastUpdatedText: "Oxirgi o'zgarish",
  contributors: true,
  contributorsText: "Mualliflar",
  tip: "Maslahat",
  warning: "Ogohlantiruv",
  danger: "Ehtiyot bo'ling",
  notFound: [
    "Afsuski ushbu sahifa mavjud emas...",
    "Bu yerda nimalar qilib yuribsiz?",
  ],
  backToHome: "Orqaga qaytish",
  openInNewWindow: "yangi oynada ochish",
  toggleColorMode: "qiyofa rejimini o'zgartirish",
});
