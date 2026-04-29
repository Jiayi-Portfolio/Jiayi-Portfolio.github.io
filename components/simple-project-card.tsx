import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { type Locale, t } from "@/lib/i18n"
import { categoryLabel } from "./category-filter"

const VIDEO_HOSTS = /(youtu\.?be|vimeo|bilibili)/i
const isVideoLink = (url?: string) => !!url && VIDEO_HOSTS.test(url)

interface SimpleProjectCardProps {
  title: string
  description: string
  image: string
  categories: string[]
  year: string
  tags: string[]
  demoLink?: string
  locale?: Locale
}

export function SimpleProjectCard({
  title,
  description,
  image,
  categories,
  year,
  tags,
  demoLink,
  locale = "en",
}: SimpleProjectCardProps) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    demoLink ? (
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-white shadow overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        {children}
      </a>
    ) : (
      <div className="group block bg-white shadow overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        {children}
      </div>
    )

  return (
    <Wrapper>
      <div className="aspect-[16/9] overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className="object-cover h-full w-full transition duration-300 group-hover:scale-105"
        />
        {demoLink && (
          <div className="absolute inset-x-0 bottom-0 bg-accent text-primary px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide flex items-center justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <span>{isVideoLink(demoLink) ? t.works.video[locale] : t.works.demo[locale]}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        )}
      </div>

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-baseline gap-2">
          <h3 className="font-mono font-medium text-primary text-sm">{title}</h3>
          <span className="text-xs text-neutral-500 font-mono shrink-0">{year}</span>
        </div>
        <p className="text-[10px] text-neutral-600">{description}</p>
        <div className="text-[10px] text-neutral-500">{tags.join(' · ')}</div>
        <div className="flex flex-wrap gap-1 pt-1">
          {categories.map((cat, index) => (
            <span
              key={index}
              className="text-[10px] px-2 py-0.5 rounded-full border border-primary text-primary"
            >
              {categoryLabel(cat, locale)}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
