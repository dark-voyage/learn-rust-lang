import search from "./search";
import pwa from "./pwa";
import popup from "./pwa-popup";
import { PluginConfig } from "vuepress";

const plugins: PluginConfig = [search, pwa, popup]; // ...algolio if algolio finished indexing

export default plugins;
