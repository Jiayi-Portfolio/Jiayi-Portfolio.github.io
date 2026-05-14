'use client'
import { type Locale } from "@/lib/i18n"

interface Props {
  speed: number
  onSpeedChange: (s: number) => void
  locale?: Locale
}

const MIN_SPEED = 0.5
const MAX_SPEED = 3

export function CarouselSpeedSlider({ speed, onSpeedChange, locale = "en" }: Props) {
  const slow = locale === "zh" ? "慢" : "SLOW"
  const fast = locale === "zh" ? "快" : "FAST"
  const title = locale === "zh" ? "拖动调节轮播速度" : "Drag to adjust carousel speed"
  const ariaLabel = title
  return (
    <div className="flex flex-col items-center gap-1 text-accent select-none">
      <span className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase opacity-80">
        {title}
      </span>
      <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.2em]">
        <span>{slow}</span>
        <input
          type="range"
          min={MIN_SPEED}
          max={MAX_SPEED}
          step={0.1}
          value={speed}
          onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
          aria-label={ariaLabel}
          className="speed-slider w-28 md:w-36 cursor-pointer"
        />
        <span>{fast}</span>
      </div>
    </div>
  )
}
