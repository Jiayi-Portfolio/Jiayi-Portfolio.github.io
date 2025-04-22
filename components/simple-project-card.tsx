import Image from "next/image"
import { ExternalLink} from "lucide-react"
import { Button } from "./ui/button"
import { categoryNames } from "./category-filter"

interface SimpleProjectCardProps {
  title: string
  description: string
  image: string
  categories: string[]
  year: string
  tags: string[]
  demoLink?: string
}

export function SimpleProjectCard({
  title,
  description,
  image,
  categories,
  year,
  tags,
  demoLink,
}: SimpleProjectCardProps) {
  return (
    <div className="group relative bg-white shadow overflow-hidden">
      <div className="aspect-[16/9] overflow-hidden">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <Image
            src={image}
            alt={title}
            width={400}
            height={225}
            className="object-cover h-full w-full transition duration-300 group-hover:scale-105"
          />
        </a>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm text-neutral-500 space-y-1">
              {categories.map(cat => categoryNames[cat]).join(' · ')}
            </div>
            <h3 className="font-mono font-medium text-primary">{title}</h3>
            <div className="text-sm text-neutral-500">{year}</div>
          </div>
          <div className="flex gap-2">
            {demoLink && (
              <Button size="icon" variant="ghost" asChild>
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        <p className="text-sm text-neutral-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-neutral-100 rounded-full text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
} 