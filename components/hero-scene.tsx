'use client'
import { useState, useEffect } from 'react'
import { type Locale, t } from "@/lib/i18n"

const SEPARATOR = "   ★   "
const WAVE_PERIOD = 3 // matches CSS `letter-wave` duration
// How many full wave cycles span one rendered copy. Higher → more visible
// "wavy" shape per screen; lower → gentler tilt.
const WAVES_PER_COPY = 2

// Render a string as wave-animating spans. Delay-per-letter is sized so that
// `WAVES_PER_COPY` full sine cycles span the whole string — this guarantees
// the wave is continuous across the boundary between adjacent copies and
// seamless when the marquee wraps around.
function WaveLetters({ text }: { text: string }) {
  const delayStep = (WAVES_PER_COPY * WAVE_PERIOD) / text.length
  return (
    <>
      {Array.from(text).map((char, i) => {
        const delay = (i * delayStep) % WAVE_PERIOD
        return (
          <span
            key={i}
            className="animate-letter-wave"
            style={{ animationDelay: `${delay}s` }}
          >
            {char === ' ' ? ' ' : char}
          </span>
        )
      })}
    </>
  )
}

// One marquee track: two identical copies of the (already-repeated) text
// translate -50% across the viewport, looping seamlessly.
function MarqueeLine({
  text,
  className,
  duration,
  reverse,
}: {
  text: string
  className?: string
  duration: number
  reverse?: boolean
}) {
  // Repeat enough times that one copy is visibly wider than the viewport;
  // 4 repetitions is plenty even on ultrawide screens.
  const oneCopy = (text + SEPARATOR).repeat(4)

  return (
    // overflow-x only — vertical overflow flows freely so the wave's peaks
    // and troughs aren't clipped. py-4 gives breathing room on top/bottom.
    <div className="overflow-x-hidden py-4">
      <div
        className={`flex w-fit ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: `${duration}s` }}
      >
        <div className={`whitespace-nowrap shrink-0 ${className ?? ""}`}>
          <WaveLetters text={oneCopy} />
        </div>
        <div className={`whitespace-nowrap shrink-0 ${className ?? ""}`} aria-hidden>
          <WaveLetters text={oneCopy} />
        </div>
      </div>
    </div>
  )
}

type HeroLine = "both" | "headline" | "subtitle"

export function HeroScene({
  locale = "en",
  line = "both",
}: {
  locale?: Locale
  line?: HeroLine
}) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="w-full font-mono space-y-3 text-accent pointer-events-none">
      {(line === "both" || line === "headline") && (
        <MarqueeLine
          text={t.hero.headline[locale]}
          className="text-5xl font-light"
          duration={36}
        />
      )}
      {(line === "both" || line === "subtitle") && (
        <MarqueeLine
          text={t.hero.subtitle[locale]}
          className="text-xl font-normal"
          duration={27}
          reverse
        />
      )}
    </div>
  )
}
