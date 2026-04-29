import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { type Locale, t } from "@/lib/i18n"
import { categoryLabel } from "./category-filter"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  categories: string[]
  year: string
  tags: string[]
  href: string
  locale?: Locale
}

export function ProjectCard({
  title,
  description,
  image,
  categories,
  year,
  tags,
  href,
  locale = "en",
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white shadow overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className="object-cover h-full w-full transition-all duration-500 group-hover:scale-105"
          unoptimized
        />
        {/* Slide-up CTA on hover */}
        <div className="absolute inset-x-0 bottom-0 bg-accent text-primary px-4 py-2 font-mono text-xs uppercase tracking-wide flex items-center justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <span>{t.works.viewProject[locale]}</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-baseline gap-3">
          <h3 className="font-mono font-medium text-primary text-lg leading-tight">{title}</h3>
          <span className="text-xs text-neutral-500 font-mono shrink-0">{year}</span>
        </div>
        <p className="text-xs text-neutral-600">{description}</p>
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
    </Link>
  )
}
