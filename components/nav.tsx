'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { cn, sweepLink } from "@/lib/utils"
import { type Locale, t, getToggleHref } from "@/lib/i18n"

interface NavProps {
  alwaysLight?: boolean
  locale?: Locale
}

export function Nav({ alwaysLight, locale = "en" }: NavProps) {
  const pathname = usePathname() ?? "/"
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isZh = locale === "zh"
  const homeHref = isZh ? "/zh" : "/"
  const worksHref = isZh ? "/zh/works" : "/works"
  const aboutHref = isZh ? "/zh/about" : "/about"
  const toggleHref = getToggleHref(pathname, locale)

  return (
    <nav className={cn(
      "w-full p-7 fixed top-0 z-10 font-mono font-normal text-sm transition-all duration-100",
      alwaysLight
        ? "text-primary bg-white"
        : scrolled
          ? "text-primary mix-blend-normal bg-white"
          : "text-accent mix-blend-difference bg-transparent"
    )}>
      <div className="flex justify-between items-center mx-auto">
        <Link href={homeHref} className={sweepLink}>
          JIAYI.LI
        </Link>
        <div className="flex gap-12 items-center">
          <Link href={worksHref} className={sweepLink}>
            {t.nav.works[locale]}
          </Link>
          <Link href={aboutHref} className={sweepLink}>
            {t.nav.about[locale]}
          </Link>
          <Link
            href={toggleHref}
            className={cn(sweepLink, "ml-2")}
            aria-label={isZh ? "Switch to English" : "切换到中文"}
          >
            {t.nav.toggle[locale]}
          </Link>
        </div>
      </div>
    </nav>
  )
}
