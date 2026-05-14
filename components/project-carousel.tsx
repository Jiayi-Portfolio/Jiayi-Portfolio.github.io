"use client"

import Link from "next/link"
import Image from "next/image"
import { type Locale } from "@/lib/i18n"
import {
  featuredProjects,
  localize,
  type LocalizedProject,
} from "@/lib/projects"

const ProjectOverlay = ({ project }: { project: LocalizedProject }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-6">
      <div className="space-y-1 w-full">
        <p className="font-mono text-sm">
          <span className="text-accent bg-primary px-1 py-0.5">{project.title}</span>
        </p>
        <p className="text-xs max-w-[90%] hidden md:block">
          <span className="text-neutral-300 bg-primary px-1 py-0.5">
            {project.description}
          </span>
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-1 bg-primary rounded-full text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const MoreWorksSlide = ({ href, locale }: { href: string; locale: Locale }) => {
  const label = locale === "zh" ? "更多作品" : "More Works"
  const ariaLabel = locale === "zh" ? "查看更多作品" : "See more works"
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="group/slide relative flex-shrink-0 block h-full w-[80vw] md:w-[55vw] px-6 md:px-14"
    >
      <div className="relative h-full w-full flex flex-col items-center justify-center text-accent">
        <div className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-accent/80 transition-all duration-300 group-hover/slide:border-accent group-hover/slide:scale-105">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-10 h-10 md:w-12 md:h-12 stroke-current transition-transform duration-300 group-hover/slide:translate-x-1"
            fill="none"
            strokeWidth="1"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <path d="M4 12h16" />
            <path d="M14 6l6 6-6 6" />
          </svg>
        </div>
        <p className="mt-6 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
          {label}
        </p>
      </div>
    </Link>
  )
}

// Where the "More Works" card sits inside each copy of the carousel.
// 0 = first slide, 2 = third slide, etc. Inserted at the same index in
// both duplicated copies so the seamless -50% loop still aligns.
const MORE_WORKS_INDEX = 2

// Base loop duration (in seconds) when speed = 1. A speed slider divides
// this base, so speed=2 → 30s, speed=0.5 → 120s.
const BASE_DURATION = 60

interface ProjectCarouselProps {
  locale?: Locale
  speed?: number
}

export function ProjectCarousel({ locale = "en", speed = 1.5 }: ProjectCarouselProps) {
  const projects: LocalizedProject[] = featuredProjects
    .filter((p) => p.inCarousel)
    .map((p) => localize(p, locale))

  const worksHref = locale === "zh" ? "/zh/works" : "/works"

  const renderProject = (project: LocalizedProject, copy: number, i: number) => (
    <Link
      key={`${copy}-${project.id}`}
      href={project.href}
      aria-label={project.title}
      className="group/slide relative flex-shrink-0 block h-full w-[80vw] md:w-[55vw] px-6 md:px-14"
    >
      <div className="relative h-full w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority={copy === 0 && i < 2}
          unoptimized
        />
        <div className="absolute inset-0 bg-black/0 group-hover/slide:bg-black/30 transition-colors duration-300">
          <div className="opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300 h-full">
            <ProjectOverlay project={project} />
          </div>
        </div>
      </div>
    </Link>
  )

  const insertAt = Math.min(MORE_WORKS_INDEX, projects.length)
  const duration = BASE_DURATION / Math.max(speed, 0.01)

  return (
    <div className="group/strip relative w-full overflow-hidden h-[60vh] md:h-[65vh]">
      <div
        className="flex h-full w-fit animate-carousel-scroll group-hover/strip:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        {/* Two copies for seamless -50% loop; each copy has the More Works slide at the same fixed index. */}
        {[0, 1].map((copy) => (
          <div key={copy} className="flex h-full">
            {projects.slice(0, insertAt).map((p, i) => renderProject(p, copy, i))}
            <MoreWorksSlide key={`${copy}-more-works`} href={worksHref} locale={locale} />
            {projects.slice(insertAt).map((p, i) => renderProject(p, copy, insertAt + i))}
          </div>
        ))}
      </div>
    </div>
  )
}
