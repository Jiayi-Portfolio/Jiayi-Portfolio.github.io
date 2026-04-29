'use client'

import { type Locale, t } from "@/lib/i18n"

const categoryIds = [
  'all', 'game', 'newmedia', 'ai', 'technical', 'web', 'vr', 'arduino', 'installation',
] as const

type CategoryId = (typeof categoryIds)[number]

export function categoryLabel(id: string, locale: Locale): string {
  const cat = (t.categories as Record<string, { en: string; zh: string }>)[id]
  if (!cat) return id
  return cat[locale]
}

// Backward-compat: the previous code exposed `categoryNames` as a flat
// English-only map. Keep an English-only export so existing imports keep
// working until they're migrated.
export const categoryNames: Record<string, string> = Object.fromEntries(
  Object.entries(t.categories).map(([k, v]) => [k, v.en])
)

interface CategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
  locale?: Locale
}

export function CategoryFilter({ activeCategory, onCategoryChange, locale = "en" }: CategoryFilterProps) {
  return (
    <div className="sticky top-20 z-40 py-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap gap-4 font-mono">
          {categoryIds.map((id) => (
            <button
              key={id}
              onClick={() => onCategoryChange(id)}
              className={`
                px-4 py-2 text-xs rounded-full transition-colors duration-200 border border-primary
                ${activeCategory === id
                  ? 'bg-primary text-accent'
                  : 'bg-white text-primary hover:bg-accent hover:border-accent'
                }
              `}
            >
              {categoryLabel(id, locale)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
