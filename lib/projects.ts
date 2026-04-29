import type { Locale } from "./i18n"

export interface BilingualProject {
  id: string
  href: string
  image: string
  year: string
  categories: string[]
  // Title / description / tags are bilingual. Branded names
  // (e.g. "Symbiotic Voxel") stay in English even in zh — they're titles.
  title: { en: string; zh?: string }
  description: { en: string; zh: string }
  tags: { en: string[]; zh: string[] }
  inCarousel?: boolean
}

export interface BilingualSimpleProject extends Omit<BilingualProject, "href" | "inCarousel"> {
  demoLink?: string
}

export interface LocalizedProject {
  id: string
  href: string
  image: string
  year: string
  categories: string[]
  title: string
  description: string
  tags: string[]
}

export interface LocalizedSimpleProject extends Omit<LocalizedProject, "href"> {
  demoLink?: string
}

export const featuredProjects: BilingualProject[] = [
  {
    id: "symbiotic-voxel",
    href: "/symbiotic-voxel",
    image: "/projects/symbiotic-voxel/cover.png",
    year: "2025",
    categories: ["game", "ai", "technical"],
    title: { en: "Symbiotic Voxel" },
    description: {
      en: "Master's graduation project: A multimodal AI agent capable of spatial reasoning and co-creation within a 3D sandbox environment.",
      zh: "硕士毕业作品:能在 3D 沙盒环境中进行空间推理与共创的多模态 AI 智能体。",
    },
    tags: {
      en: ["Unity", "GenAI", "Python", "Game", "HCI"],
      zh: ["Unity", "生成式 AI", "Python", "游戏", "人机交互"],
    },
    inCarousel: true,
  },
  {
    id: "lego-smart-play",
    href: "/lego-smart-play",
    image: "/projects/others/smartplay_cover.jpg",
    year: "2024",
    categories: ["game", "technical"],
    title: { en: "LEGO® SMART Play™" },
    description: {
      en: "As part of the Creative Play Lab, I prototyped novel gameplay mechanics for the LEGO SMART Brick - a new way to play with LEGO bricks.",
      zh: "在 Creative Play Lab 期间,为 LEGO SMART Brick 原型设计了全新玩法机制 —— 一种全新的乐高互动方式。",
    },
    tags: {
      en: ["Toy", "HCI", "Custom Sensors", "Unity", "Python"],
      zh: ["玩具", "人机交互", "定制传感器", "Unity", "Python"],
    },
    inCarousel: true,
  },
  {
    id: "stellar-surfer",
    href: "/stellar-surfer",
    image: "/projects/stellar-surfer/cover.png",
    year: "2024",
    categories: ["game", "installation", "technical", "arduino"],
    title: { en: "Stellar Surfer" },
    description: {
      en: "An embodied balance-based game using a custom-built board and Unity, where players control a spaceship by shifting their weight to navigate through a space tunnel.",
      zh: "基于身体平衡的具身游戏:通过定制感应板与 Unity,玩家用重心移动操控飞船穿越太空隧道。",
    },
    tags: {
      en: ["Unity", "Arduino", "Embodied Interaction"],
      zh: ["Unity", "Arduino", "具身交互"],
    },
    inCarousel: true,
  },
  {
    id: "babel-reconstruction",
    href: "/babel-reconstruction",
    image: "/projects/babel/cover.png",
    year: "2024",
    categories: ["ai", "installation", "technical", "newmedia"],
    title: { en: "Babel Reconstruction" },
    description: {
      en: "An interactive art installation inspired by the Tower of Babel, featuring AI-generated imagery integrated into a dynamic and collaborative digital tower-building experience.",
      zh: "受巴别塔启发的互动艺术装置:将 AI 生成图像融入动态、协作式的数字造塔体验。",
    },
    tags: {
      en: ["Unity", "GenAI", "ComfyUI", "Shader"],
      zh: ["Unity", "生成式 AI", "ComfyUI", "着色器"],
    },
    inCarousel: true,
  },
  {
    id: "cosmic-resonator",
    href: "/cosmic-resonator",
    image: "/projects/cosmic-resonator-cover.jpg",
    year: "2023",
    categories: ["installation", "game", "arduino"],
    title: { en: "Cosmic Resonator" },
    description: {
      en: "An embodied physical computing game inspired by the Himalayan singing bowl, combining rhythm-based gameplay with Arduino-driven xylophone interaction.",
      zh: "灵感来自喜马拉雅颂钵的具身物理计算游戏:节奏玩法与 Arduino 驱动的木琴互动相结合。",
    },
    tags: {
      en: ["Unity", "Arduino", "Physical Interaction", "Custom Sensors"],
      zh: ["Unity", "Arduino", "物理交互", "定制传感器"],
    },
    inCarousel: true,
  },
  {
    id: "being",
    href: "/being",
    image: "/projects/being-cover.png",
    year: "2022",
    categories: ["vr", "game", "arduino"],
    title: { en: "BEING" },
    description: {
      en: "An embodied VR game that simulates invertebrate sensory experiences, exploring evolution and survival in a rogue-lite environment.",
      zh: "一款具身 VR 游戏,模拟无脊椎动物的感官体验,在 rogue-lite 环境中探索进化与生存。",
    },
    tags: {
      en: ["Arduino", "VR", "Unity", "Wearable Devices", "Game"],
      zh: ["Arduino", "VR", "Unity", "可穿戴设备", "游戏"],
    },
    inCarousel: true,
  },
  {
    id: "fungi-city",
    href: "/fungi-city",
    image: "/projects/fungi-city/cover.jpg",
    year: "2022",
    categories: ["ai", "technical", "newmedia"],
    title: { en: "Fungi City" },
    description: {
      en: "A digital art project using neural models and AI to simulate high-density urban living inspired by microbial colonies and subtropical residential areas.",
      zh: "数字艺术项目:用神经网络与 AI,模拟受微生物群落与亚热带居住区启发的高密度城市生活。",
    },
    tags: {
      en: ["AIGC", "GenAI", "Unity", "Houdini"],
      zh: ["AIGC", "生成式 AI", "Unity", "Houdini"],
    },
  },
  {
    id: "moai",
    href: "/moai",
    image: "/projects/moai-cover.png",
    year: "2022",
    categories: ["game", "technical"],
    title: { en: "MOAI" },
    description: {
      en: "A puzzle game set in the year 2999, exploring themes of posthumanism, design fiction, and the ruins of human civilization.",
      zh: "设定在 2999 年的解谜游戏,探讨后人类主义、设计虚构以及人类文明遗迹的主题。",
    },
    tags: {
      en: ["Unity", "Narrative", "Posthumanism", "Weirdcore"],
      zh: ["Unity", "叙事", "后人类主义", "Weirdcore"],
    },
  },
  {
    id: "moon-rover",
    href: "/moon-rover",
    image: "/projects/moon-rover/cover.jpg",
    year: "2021",
    categories: ["game", "technical"],
    title: { en: "Moon Rover 2035" },
    description: {
      en: "A realistic lunar driving simulator designed as an educational game to immerse players in lunar exploration and aerospace science.",
      zh: "拟真月球驾驶模拟器,作为教育游戏让玩家沉浸于月球探索与航天科学。",
    },
    tags: {
      en: ["Unity", "AAA", "PBR Workflow", "Motion Controls"],
      zh: ["Unity", "AAA", "PBR 流程", "体感控制"],
    },
    inCarousel: true,
  },
]

export const simpleProjects: BilingualSimpleProject[] = [
  {
    id: "infinite-dungeon-master",
    image: "/projects/others/dungeon_cover.jpg",
    year: "2026",
    categories: ["ai", "game", "web", "technical"],
    title: { en: "Infinite Dungeon Master" },
    description: {
      en: "Supercell Global AI Game Hack Top 5 winner: a roguelike game prototype where GenAI acts as the Dungeon Master, generating encounters in real time as you explore.",
      zh: "Supercell 全球 AI 游戏黑客松前五名作品:一款 roguelike 游戏原型,生成式 AI 担任地下城主,在玩家探索时实时生成遭遇。",
    },
    tags: {
      en: ["Full Stack", "AI Agent", "Web"],
      zh: ["全栈", "AI 智能体", "Web"],
    },
    demoLink: "https://github.com/JiayiLi18/infinite-dungeon-master-ai-hackathon",
  },
  {
    id: "ai-maritime-pilot",
    image: "/projects/others/maritime_cover.png",
    year: "2025",
    categories: ["ai", "web", "technical"],
    title: { en: "AI-Assistant-for-MARITIME-PILOT" },
    description: {
      en: "Web demo to test three AI roles collaborating with a human to complete a maritime report via chat and voice.",
      zh: "Web Demo:测试三个 AI 角色通过文字与语音与人协作,共同完成航海报告。",
    },
    tags: {
      en: ["Full Stack", "AI Agent", "Web"],
      zh: ["全栈", "AI 智能体", "Web"],
    },
    demoLink: "https://github.com/JiayiLi18/AI-Assistant-for-MARITIME-PILOT",
  },
  {
    id: "sketch-brawl",
    image: "/projects/others/sketch_brawl_cover.png",
    year: "2025",
    categories: ["game", "ai", "technical"],
    title: { en: "Sketch Brawl - Junction Hackathon 2025" },
    description: {
      en: "Sketch Brawl is an AI-powered doodle battler where anything you draw becomes alive — and fights. Honorary mentioned",
      zh: "Sketch Brawl 是一款 AI 涂鸦对战游戏:你画的任何东西都会活过来 —— 然后开打。荣誉提名。",
    },
    tags: {
      en: ["Game Jam", "GenAI"],
      zh: ["Game Jam", "生成式 AI"],
    },
    demoLink: "https://youtu.be/CusbwWmfmY0?si=MXWscSThIC5X7ToP",
  },
  {
    id: "meowtive-ai",
    image: "/projects/others/meowtive_ai_cover.png",
    year: "2025",
    categories: ["ai", "game", "technical"],
    title: { en: "Meowtive AI - Supercell Hackathon 2025" },
    description: {
      en: "Contextual Cozy Game AI Agent Behaviour System, made during Supercell x Junction Hackathon 2025, top 5 finalist",
      zh: "情境感知的休闲游戏 AI 智能体行为系统,Supercell x Junction Hackathon 2025 期间制作,前五入围。",
    },
    tags: {
      en: ["Unity", "GenAI", "AI Agent"],
      zh: ["Unity", "生成式 AI", "AI 智能体"],
    },
    demoLink: "https://youtu.be/Z1tQUwK2qn0?si=I-XDoUUWxxH4lObh",
  },
  {
    id: "portfolio-2",
    image: "/projects/others/web2_cover.png",
    year: "2025",
    categories: ["ai", "web", "newmedia"],
    title: { en: "Jiayi's Portfolio Website 2.0" },
    description: {
      en: "The first time I challenged myself using React and Next.js with the help of GenAI coding",
      zh: "第一次挑战自己,在 GenAI 编码辅助下,用 React 与 Next.js 构建。",
    },
    tags: {
      en: ["Full Stack", "React", "Next.js", "GenAI"],
      zh: ["全栈", "React", "Next.js", "生成式 AI"],
    },
    demoLink: "./",
  },
  {
    id: "lego-magic-wand",
    image: "/projects/others/lego_wand_cover.png",
    year: "2024",
    categories: ["installation", "game", "newmedia"],
    title: { en: "LEGO Magic Wand" },
    description: {
      en: "An interactive installation where users build their own LEGO wands, then wave them to cast digital spells in real time using motion tracking and particle effects.",
      zh: "互动装置:用户搭建自己的乐高魔杖,通过动作追踪与粒子效果实时挥杖施法。",
    },
    tags: {
      en: ["Unity", "LEGO", "Motion Tracking"],
      zh: ["Unity", "乐高", "动作追踪"],
    },
    demoLink: "https://youtu.be/lYMSq241AnI",
  },
  {
    id: "monster-cleaning-inc",
    image: "/projects/others/monster-inc-cover.gif",
    year: "2024",
    categories: ["game", "technical"],
    title: { en: "Monster Cleaning Inc" },
    description: {
      en: "After nasty battles, these monsters need a good scrub. It's up to you to clean them up quickly and get them ready!",
      zh: "鏖战之后,怪兽需要好好刷洗一番。看你能不能麻利地把它们清理干净、整装待发!",
    },
    tags: {
      en: ["Game Jam", "Unity", "VFX"],
      zh: ["Game Jam", "Unity", "视觉特效"],
    },
    demoLink: "https://shamitahmed.itch.io/monstercleaninginc",
  },
  {
    id: "portfolio-1",
    image: "/projects/others/web_cover_1.png",
    year: "2024",
    categories: ["web", "newmedia"],
    title: { en: "Jiayi's Portfolio Website 1.0" },
    description: {
      en: "It's my first time building my own website from scratch, purely handmade :)",
      zh: "我第一次从零搭建自己的网站,纯手工打造 :)",
    },
    tags: {
      en: ["JavaScript", "Html & CSS"],
      zh: ["JavaScript", "Html 与 CSS"],
    },
    demoLink: "https://jiayili18.github.io/Jiayi-s-Portfolio/",
  },
  {
    id: "cat-impact",
    image: "/projects/others/cat_impact_cover_1.png",
    year: "2024",
    categories: ["game"],
    title: { en: "Cat Impact" },
    description: {
      en: "It's a game of finding your runaway cat. All kinds of accidents happen along the way!",
      zh: "一款寻找走失猫咪的游戏,旅途上各种意外接踵而至!",
    },
    tags: {
      en: ["Game Jam", "Unity"],
      zh: ["Game Jam", "Unity"],
    },
    demoLink: "https://lijiayii.itch.io/cat-impact",
  },
  {
    id: "crossing-the-liminal",
    image: "/projects/others/crossing_liminal_cover_1.png",
    year: "2023",
    categories: ["game"],
    title: { en: "Crossing The Liminal" },
    description: {
      en: "Our poor doll is missing in a liminal back room where some walls are coming torward it. The only choice to survive is to get into the darkness through the door.",
      zh: "可怜的玩偶迷失在一个阈限后室中,墙壁正向它逼近。唯一的活路是穿过那扇门走入黑暗。",
    },
    tags: {
      en: ["Game Jam", "Unity"],
      zh: ["Game Jam", "Unity"],
    },
    demoLink: "https://obenyozgyur.itch.io/crossing-the-liminal",
  },
  {
    id: "meet-your-new-face",
    image: "/projects/others/face_cover_1.png",
    year: "2023",
    categories: ["ai", "newmedia"],
    title: { en: "Meet Your New Face" },
    description: {
      en: "Audio-visual work embeded with real-time GenAI images",
      zh: "嵌入实时生成式 AI 图像的视听作品。",
    },
    tags: {
      en: ["Audiovisual", "TouchDesigner", "StableDiffusion"],
      zh: ["视听", "TouchDesigner", "StableDiffusion"],
    },
    demoLink: "https://newmedia.dog/courses/audiovisual-studio/2023/jiayi-li/",
  },
  {
    id: "herstory-of-nora",
    image: "/projects/others/nora_cover_1.jpg",
    year: "2023",
    categories: ["game"],
    title: { en: "Herstory of Nora" },
    description: {
      en: "Open-world Single Player Action RPG demo",
      zh: "开放世界单人动作 RPG demo。",
    },
    tags: {
      en: ["Unity", "3D Art", "Level Design"],
      zh: ["Unity", "3D 美术", "关卡设计"],
    },
    demoLink: "https://youtu.be/yCFVTMXcpxM?si=KdA7JIbxeiyJAnQ4",
  },
  {
    id: "gravity-odyssey",
    image: "/projects/others/odyssey_cover_1.png",
    year: "2023",
    categories: ["game"],
    title: { en: "Gravity Odyssey" },
    description: {
      en: "A space game based on the prototype of the Interstellar story",
      zh: "一款基于《星际穿越》故事原型的太空游戏。",
    },
    tags: {
      en: ["Game Jam", "Unity", "UI Design"],
      zh: ["Game Jam", "Unity", "UI 设计"],
    },
    demoLink: "https://lijiayii.itch.io/gravity-odyssey",
  },
  {
    id: "going-to-be-late",
    image: "/projects/others/ItsGoingToBeLate_cover_1.png",
    year: "2022",
    categories: ["game"],
    title: { en: "It's going to be LATE!" },
    description: {
      en: "A local two player confrontation game between the staff and the boss.",
      zh: "员工与老板的本地双人对抗小游戏。",
    },
    tags: {
      en: ["Game Jam", "Unity", "2D Art"],
      zh: ["Game Jam", "Unity", "2D 美术"],
    },
    demoLink: "https://gmhub.com/game/1244",
  },
]

// Helper: localize a project for the current Locale
export function localize(p: BilingualProject, locale: Locale): LocalizedProject {
  return {
    id: p.id,
    href: p.href,
    image: p.image,
    year: p.year,
    categories: p.categories,
    title: (locale === "zh" ? p.title.zh : p.title.en) ?? p.title.en,
    description: (locale === "zh" ? p.description.zh : p.description.en) ?? p.description.en,
    tags: (locale === "zh" ? p.tags.zh : p.tags.en) ?? p.tags.en,
  }
}

export function localizeSimple(p: BilingualSimpleProject, locale: Locale): LocalizedSimpleProject {
  return {
    id: p.id,
    image: p.image,
    year: p.year,
    categories: p.categories,
    title: (locale === "zh" ? p.title.zh : p.title.en) ?? p.title.en,
    description: (locale === "zh" ? p.description.zh : p.description.en) ?? p.description.en,
    tags: (locale === "zh" ? p.tags.zh : p.tags.en) ?? p.tags.en,
    demoLink: p.demoLink,
  }
}
