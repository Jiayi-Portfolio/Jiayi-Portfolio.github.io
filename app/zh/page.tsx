import type { Metadata } from "next"
import { HomePageContent } from "@/components/home-page-content"

export const metadata: Metadata = {
  title: "Jiayi Li — 创意技术专家与交互设计师",
  description: "Jiayi Li 的作品集 —— 跨越游戏、VR、物理交互与 AI 体验的创意技术工作。",
}

export default function Page() {
  return <HomePageContent locale="zh" />
}
