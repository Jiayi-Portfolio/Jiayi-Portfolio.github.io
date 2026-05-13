'use client'
import { useState, useEffect } from "react"
import { Nav } from "@/components/nav"
import { ProjectCarousel } from "@/components/project-carousel"
import { HeroScene } from "@/components/hero-scene"
import { HomeBackground } from "@/components/home-background"
import { Footer } from "@/components/footer"
import type { Locale } from "@/lib/i18n"

export function HomePageContent({ locale = "en" }: { locale?: Locale }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  if (!mounted) {
    return <div className="h-screen bg-black" />
  }

  return (
    <div className="h-screen text-white overflow-hidden relative">
      <HomeBackground />
      <div className="relative z-50">
        <Nav locale={locale} />
      </div>

      <div className="relative flex flex-col h-screen pt-14 pb-28 md:pb-10">
        <div className="flex-none w-full">
          <HeroScene locale={locale} line="headline" />
        </div>
        <div className="flex-grow flex items-center justify-center min-h-0">
          <ProjectCarousel locale={locale} />
        </div>
        <div className="flex-none w-full">
          <HeroScene locale={locale} line="subtitle" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <Footer locale={locale} />
        </div>
      </div>
    </div>
  )
}
