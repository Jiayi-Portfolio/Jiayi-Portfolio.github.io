'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Nav({ alwaysLight }: { alwaysLight?: boolean }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled past the viewport height
      setScrolled(window.scrollY > window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        <Link 
          href="/" 
          className="hover:bg-accent transition-colors"
        >
          JIAYI.LI
        </Link>
        <div className="flex gap-12">
          <Link 
            href="/works" 
            className="hover:bg-accent transition-colors"
          >
            WORKS
          </Link>
          <Link 
            href="/about" 
            className="hover:bg-accent transition-colors"
          >
            ABOUT
          </Link>
        </div>
      </div>
    </nav>
  )
}

