import type { Metadata } from "next"
import { AboutPageContent } from "@/components/about-page-content"

export const metadata: Metadata = {
  title: "关于",
  description: "关于 Jiayi Li —— 跨越游戏、VR、AI 与物理交互的创意技术工作者。",
}

export default function Page() {
  return <AboutPageContent locale="zh" />
}
