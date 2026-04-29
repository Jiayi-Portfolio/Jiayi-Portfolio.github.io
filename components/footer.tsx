import Link from "next/link"
import { cn, sweepLink } from "@/lib/utils"
import { type Locale, t } from "@/lib/i18n"

interface FooterProps {
  color?: "accent" | "primary"
  locale?: Locale
}

export function Footer({ color = "accent", locale = "en" }: FooterProps) {
  const isAccent = color === "accent"
  const year = new Date().getFullYear()
  return (
    <footer
      className={cn(
        "bg-transparent py-3 px-4 font-mono",
        isAccent ? "text-accent" : "text-primary"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>{t.footer.rights[locale](year)}</div>
          <div>{t.footer.madeBy[locale]}</div>
          <div className="flex gap-4">
            <Link href="mailto:jiayi.li0004@gmail.com" className={sweepLink}>
              {t.footer.contact[locale]}
            </Link>
            <a
              href="https://www.linkedin.com/in/jiayi-li0414/"
              target="_blank"
              rel="noopener noreferrer"
              className={sweepLink}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
