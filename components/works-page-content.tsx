'use client'
import { useState } from 'react'
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { SimpleProjectCard } from "@/components/simple-project-card"
import { CategoryFilter } from "@/components/category-filter"
import { HomeBackground } from "@/components/home-background"
import {
  featuredProjects,
  simpleProjects,
  localize,
  localizeSimple,
} from "@/lib/projects"
import type { Locale } from "@/lib/i18n"

export function WorksPageContent({ locale = "en" }: { locale?: Locale }) {
  const [activeCategory, setActiveCategory] = useState("all")

  const featured = featuredProjects
    .filter((p) => activeCategory === "all" || p.categories.includes(activeCategory))
    .map((p) => localize(p, locale))

  const simple = simpleProjects
    .filter((p) => activeCategory === "all" || p.categories.includes(activeCategory))
    .map((p) => localizeSimple(p, locale))

  return (
    <div className="min-h-screen">
      <Nav locale={locale} />
      <HomeBackground />

      <div className="pt-32 pb-32">
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          locale={locale}
        />

        <main className="px-4 pt-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              {featured.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  categories={project.categories}
                  year={project.year}
                  tags={project.tags}
                  href={project.href}
                  locale={locale}
                />
              ))}
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {simple.map((project) => (
                <SimpleProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  categories={project.categories}
                  year={project.year}
                  tags={project.tags}
                  demoLink={project.demoLink}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer color="primary" locale={locale} />
    </div>
  )
}
