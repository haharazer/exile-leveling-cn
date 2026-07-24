import zhCNGame from "./game/zh-CN.json";
import zhTWGame from "./game/zh-TW.json";

export const SUPPORTED_LOCALES = ["zh-CN", "zh-TW"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export type MessageKey = keyof (typeof messages)["zh-CN"];

export const localeLabels: Record<Locale, string> = {
  "zh-CN": "简体中文",
  "zh-TW": "繁体中文",
};

const simplifiedMessages = {
    route: "路线",
    build: "BD 配置",
    reset: "重置",
    sections: "章节",
    editRoute: "编辑路线",
    export: "第三方导出",
    exported: "已复制导出内容",
    github: "项目 GitHub",
    menu: "菜单",
    waypoint: "传送点",
    trial: "升华试炼",
    logout: "登出",
    portal: "传送门",
    crafting: "工艺：",
    dailyLayout: "每日迷宫布局",
    act: (act: number | string) => `第${act}幕`,
    take: "领取 ",
    buy: "购买 ",
    requires: " 需要 ",
    gemMissing: "未找到宝石数据：",
    characterClass: "职业",
    bandit: "强盗选择",
    leagueStart: "赛季开荒模式",
    library: "图书馆支线",
    gemsOnly: "仅显示宝石任务",
    showSubsteps: "显示所有提示",
    copied: "已复制到剪贴板",
    cancel: "取消",
    confirm: "确认",
    passiveTree: "天赋树",
    gemLinks: "宝石连法",
    searchStrings: "搜索字符串",
    all: "全部",
    appTitle: "流亡成长指南",
    buildTitle: "流亡成长指南 - BD 配置",
    editRouteTitle: "流亡成长指南 - 路线编辑",
    language: "语言",
    errorPrefix: "糟糕，似乎出现了错误。点击 ",
    here: "这里",
    errorSuffix: " 以尝试修复。",
    searchSyntax: "搜索语法",
    regexTool: "PoE 正则工具",
    pobCode: "Path of Building 代码或链接",
    importRoute: "导入路线",
    importingRoute: "正在导入路线",
    importSuccess: "导入成功",
    importFailed: "导入失败",
    importingBuild: "正在导入 BD",
    exportButton: "导出",
    importButton: "导入",
    save: "保存",
    importBuild: "导入 BD",
    setupAutoProgress: "设置自动进度",
    autoProgressConnected: "自动进度已连接",
};

const messages = {
  "zh-CN": simplifiedMessages,
  "zh-TW": {
    ...simplifiedMessages,
    waypoint: "傳送點",
    trial: "昇華試煉",
    portal: "傳送門",
    crafting: "工藝：",
  },
} as const;

const gameMessages: Record<Locale, Record<string, string>> = {
  "zh-CN": zhCNGame,
  "zh-TW": zhTWGame,
};

export function message<K extends MessageKey>(
  locale: Locale,
  key: K,
): (typeof messages)[Locale][K] {
  return messages[locale][key];
}

export function gameText(locale: Locale, english: string): string {
  return gameMessages[locale][english] ?? english;
}

export const characterLabels: Record<Locale, Record<string, string>> = {
  "zh-CN": {
    Marauder: "野蛮人",
    Duelist: "决斗者",
    Ranger: "游侠",
    Shadow: "暗影",
    Witch: "女巫",
    Templar: "圣堂武僧",
    Scion: "贵族",
  },
  "zh-TW": {
    Marauder: "野蠻人",
    Duelist: "決鬥者",
    Ranger: "遊俠",
    Shadow: "暗影刺客",
    Witch: "女巫",
    Templar: "聖堂武僧",
    Scion: "貴族",
  },
};

export const banditLabels: Record<Locale, Record<string, string>> = {
  "zh-CN": {
    None: "全部击杀",
    "Kill All": "全部击杀",
    Alira: "阿丽拉",
    Kraityn: "克雷顿",
    Oak: "欧克",
  },
  "zh-TW": {
    None: "全部擊殺",
    "Kill All": "全部擊殺",
    Alira: "阿莉亞",
    Kraityn: "克雷頓",
    Oak: "歐克",
  },
};
