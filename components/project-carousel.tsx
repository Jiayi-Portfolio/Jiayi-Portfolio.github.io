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

export function ProjectCarousel({ locale = "en" }: { locale?: Locale }) {
  const projects: LocalizedProject[] = featuredProjects
    .filter((p) => p.inCarousel)
    .map((p) => localize(p, locale))

  // Two copies for seamless -50% loop.
  const slides = [...projects, ...projects]

  return (
    <div className="group/strip relative w-full overflow-hidden h-[60vh] md:h-[65vh]">
      <div className="flex h-full w-fit animate-carousel-scroll group-hover/strip:[animation-play-state:paused]">
        {slides.map((project, i) => (
          <Link
            key={i}
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
                priority={i < 2}
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover/slide:bg-black/30 transition-colors duration-300">
                <div className="opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300 h-full">
                  <ProjectOverlay project={project} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
