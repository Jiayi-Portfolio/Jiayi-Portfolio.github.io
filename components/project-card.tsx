import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import { categoryNames } from "./category-filter"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  categories: string[]
  year: string
  tags: string[]
  href: string
}

export function ProjectCard({
  title,
  description,
  image,
  categories,
  year,
  tags,
  href,
}: ProjectCardProps) {
  return (
    <div className="group relative block bg-white shadow overflow-hidden">
      <div className="aspect-[16/9] overflow-hidden">
        <Link href={href} className="cursor-pointer clickable">
          <Image
            src={image}
            alt={title}
            width={400}
            height={225}
            className="object-cover h-full w-full transition-all duration-500 
              group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <Link href={href} className="hover:text-accent transition-colors font-mono font-medium text-primary">
              {title}
            </Link>
            <div className="text-xs text-neutral-500">{year}</div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="ghost" asChild>
              <Link href={href} className="flex items-center gap-2">
                <span>View Project</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <p className="text-xs text-neutral-600">{description}</p>
        <div className="text-[10px] text-neutral-500 space-y-1">
          {tags.join(' · ')}
        </div>
        <div className="flex flex-wrap gap-1">
          {categories.map((cat, index) => (
            <span
              key={index}
              className="text-[10px] px-2 py-1 bg-neutral-100 rounded-full text-neutral-600"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

