import { HotKeyOptions, searchPlugin } from "@vuepress/plugin-search";

const hotkey: HotKeyOptions = {
  key: "s",
  alt: true,
};

export default searchPlugin({
  hotKeys: [hotkey],
  locales: {
    "/": {
      placeholder: "Qidirish",
    },
  },
});
