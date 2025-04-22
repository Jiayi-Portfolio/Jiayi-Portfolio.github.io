'use client'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'game', label: 'Game Dev' },
  { id: 'newmedia', label: 'New Media Art' },
  { id: 'ai', label: 'GenAI' },
  { id: 'technical', label: 'Technical Art' },
  { id: 'web', label: 'Web Dev' },
  { id: 'vr', label: 'VR Dev' },
  { id: 'arduino', label: 'Arduino' },
  { id: 'installation', label: 'Installation' },
]

// Create a mapping for category full names
export const categoryNames: { [key: string]: string } = {
  'game': 'Game Dev',
  'newmedia': 'New Media Art',
  'ai':'GenAI',
  'arduino': 'Arduino',
  'vr': 'VR Dev',
  'technical': 'Technical Art',
  'web': 'Web Dev',
  'installation': 'Installation',
}

interface CategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="sticky top-20 z-40 py-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap gap-4 font-mono">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                px-4 py-2 text-xs rounded-full transition-colors
                ${activeCategory === category.id 
                  ? 'bg-primary text-white' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-accent'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 