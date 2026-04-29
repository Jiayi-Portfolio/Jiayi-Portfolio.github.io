export type Locale = "en" | "zh"
export const DEFAULT_LOCALE: Locale = "en"
export const LOCALES: Locale[] = ["en", "zh"]

// Routes that have a Chinese version available.
// Used by the language toggle to decide whether to deep-link or fall back home.
export const ZH_ROUTES = new Set<string>(["/", "/works", "/about"])

// Compute the "switch to other language" target path.
//   /        ↔  /zh
//   /works   ↔  /zh/works
//   /about   →  /zh        (no /zh/about in Stage 1, fall back to home)
//   /being   →  /zh        (project detail pages have no /zh in Stage 1)
export function getToggleHref(currentPath: string, currentLocale: Locale): string {
  if (currentLocale === "zh") {
    const stripped = currentPath.replace(/^\/zh/, "") || "/"
    return stripped
  }
  const normalized = currentPath || "/"
  if (ZH_ROUTES.has(normalized)) {
    return normalized === "/" ? "/zh" : `/zh${normalized}`
  }
  return "/zh"
}

export const t = {
  nav: {
    works: { en: "WORKS", zh: "作品" },
    about: { en: "ABOUT", zh: "关于" },
    toggle: { en: "中", zh: "EN" },
  },
  footer: {
    rights: {
      en: (year: number) => `© ${year} Jiayi Li. All rights reserved.`,
      zh: (year: number) => `© ${year} Jiayi Li 版权所有`,
    },
    madeBy: {
      en: "All made by Jiayi with ❤",
      zh: "全部由 Jiayi 用 ❤ 制作",
    },
    contact: { en: "Contact", zh: "联系" },
  },
  hero: {
    headline: {
      en: "JIAYI = Coding + Art + Making",
      zh: "JIAYI = 代码 + 艺术 + 制作",
    },
    subtitle: {
      en: "CREATIVE TECHNOLOGIST • INTERACTION DESIGNER",
      zh: "创意技术专家 • 交互设计师",
    },
  },
  works: {
    pageTitle: { en: "Works", zh: "作品" },
    viewProject: { en: "View Project", zh: "查看项目" },
    viewMore: { en: "View More Projects", zh: "查看更多项目" },
    viewOther: { en: "View Other Projects", zh: "查看其他项目" },
    demo: { en: "Demo", zh: "演示" },
    video: { en: "Video", zh: "视频" },
  },
  about: {
    bio: {
      en: [
        "Hi, I'm Jiayi. I build things that are fun to play with.",
        "I combine the technical rigor of a developer with the empathy of a designer. My toolkit spans Unity development, AI engineering, 3D modeling, and UI design through to hardware prototyping. But my focus is singular: creating seamless, immersive experiences.",
        "I thrive on rapid prototyping. Whether I'm scripting AI agents or crafting playful toy interactions, I use my full-stack capabilities to validate ideas fast and make sure they feel right in players' hands.",
        "Beyond work: Bouldering, Climbing, Muay Thai, and Making.",
      ],
      zh: [
        "嗨,我是 Jiayi。我做有趣、可以玩的东西。",
        "我把开发者的技术严谨和设计师的同理心结合起来。我的工具箱跨越 Unity 开发、AI 工程、3D 建模、UI 设计,一路延伸到硬件原型。但我专注的事情只有一件:创造无缝、沉浸式的体验。",
        "我擅长快速原型。无论是写 AI 智能体脚本,还是设计有趣的玩具交互,我都用全栈能力快速验证想法,确保它们到了使用者手里就感觉对劲。",
        "工作之外:抱石、攀岩、泰拳、动手做。",
      ],
    },
    toolkitTitle: { en: "My Toolkit", zh: "工具箱" },
    toolkitQuote: {
      en: "I don't collect skills. I build shovels to dig through problems.",
      zh: "我不是在收集技能 —— 我打造铲子,挖穿问题。",
    },
    contactTitle: { en: "Get in Touch", zh: "联系我" },
    emailLabel: { en: "Email", zh: "邮箱" },
  },
  categories: {
    all: { en: "All", zh: "全部" },
    game: { en: "Game Dev", zh: "游戏开发" },
    newmedia: { en: "New Media Art", zh: "新媒体艺术" },
    ai: { en: "GenAI", zh: "生成式 AI" },
    technical: { en: "Technical Art", zh: "技术美术" },
    web: { en: "Web Dev", zh: "网页开发" },
    vr: { en: "VR Dev", zh: "VR 开发" },
    arduino: { en: "Arduino", zh: "Arduino" },
    installation: { en: "Installation", zh: "装置艺术" },
  },
}

// Helper: pick the localized value from a `{ en, zh }` object,
// falling back to English if the requested locale is missing.
export function pick<T>(obj: { en: T; zh?: T } | undefined, locale: Locale): T | undefined {
  if (!obj) return undefined
  return (locale === "zh" ? obj.zh : obj.en) ?? obj.en
}

// Derive the current locale from a Next.js pathname.
// `/zh`, `/zh/works`, `/zh/anything` → "zh"; everything else → "en".
export function localeFromPath(pathname: string | null | undefined): Locale {
  if (!pathname) return DEFAULT_LOCALE
  if (pathname === "/zh" || pathname.startsWith("/zh/")) return "zh"
  return "en"
}
