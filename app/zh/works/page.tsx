import type { Metadata } from "next"
import { WorksPageContent } from "@/components/works-page-content"

export const metadata: Metadata = {
  title: "作品",
  description: "Jiayi Li 的作品集合 —— 游戏、VR、AI、装置与硬件原型。",
}

export default function Page() {
  return <WorksPageContent locale="zh" />
}
