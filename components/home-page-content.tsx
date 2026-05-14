'use client'
import { useState, useEffect } from "react"
import { Nav } from "@/components/nav"
import { ProjectCarousel } from "@/components/project-carousel"
import { CarouselSpeedSlider } from "@/components/carousel-speed-slider"
import { HeroScene } from "@/components/hero-scene"
import { HomeBackground } from "@/components/home-background"
import { Footer } from "@/components/footer"
import type { Locale } from "@/lib/i18n"

// Default carousel speed multiplier. 1.5 → 60s / 1.5 = 40s per loop.
const DEFAULT_SPEED = 1.5

export function HomePageContent({ locale = "en" }: { locale?: Locale }) {
  const [mounted, setMounted] = useState(false)
  const [carouselSpeed, setCarouselSpeed] = useState(DEFAULT_SPEED)

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  // The home page is a single-viewport composition. Lock body scroll so a
  // stray pixel of overflow (from animated marquee transforms, etc.) doesn't
  // surface a tiny scrollbar in the top-right corner.
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
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
          <ProjectCarousel locale={locale} speed={carouselSpeed} />
        </div>
        <div className="flex-none w-full py-2">
          <CarouselSpeedSlider
            speed={carouselSpeed}
            onSpeedChange={setCarouselSpeed}
            locale={locale}
          />
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
