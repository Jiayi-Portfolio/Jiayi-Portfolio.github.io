"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  year: string
  tags: string[]
  href: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Babel Reconstruction",
    description:
      "An interactive art installation inspired by the Tower of Babel, featuring AI-generated imagery integrated into a dynamic and collaborative digital tower-building experience.",
    image: './projects/babel/cover.png',
    year: "2024",
    tags: ["Unity", "GenAI", "ComfyUI", "Shader"],
    href: "/babel-reconstruction",
  },
  {
    id: "2",
    title: "BEING",
    description:
      "An embodied VR game that simulates invertebrate sensory experiences, exploring evolution and survival in a rogue-lite environment.",
    image: "./projects/being-cover.png",
    year: "2022",
    tags: ["Arduino", "VR", "Unity", "Wearable Devices", "Game"],
    href: "/being"
  },
  {
    id: "3",
    title: "Cosmic Resonator",
    description:
      "An embodied physical computing game inspired by the Himalayan singing bowl, combining rhythm-based gameplay with Arduino-driven xylophone interaction.",
    image: "./projects/cosmic-resonator-cover.jpg",
    year: "2023",
    tags: ["Unity", "Arduino", "Physical Interaction", "Custom Sensors"],
    href: "/cosmic-resonator",
  },
  {
    id: "4",
    title: "Stellar Surfer",
    description:
      "An embodied balance-based game using a custom-built board and Unity, where players control a spaceship by shifting their weight to navigate through a space tunnel.",
    image: "./projects/stellar-surfer/cover.png",
    year: "2024",
    tags: ["Unity", "Arduino", "Embodied Interaction"],
    href: "/stellar-surfer",
  },
  {
    id: "5",
    title: "FUNGI CITY",
    description:
      "An interactive installation exploring biological systems through digital art",
    image: './projects/fungi-city/cover.jpg',
    year: "2022",
    tags: ["Unity", "Houdini", "Interactive Installation"],
    href: "/fungi-city",
  },
  {
    id: "6",
    title: "Moon Rover 2035",
    description: "A realistic lunar driving simulator designed as an educational game to immerse players in lunar exploration and aerospace science.",
    image: './projects/moon-rover/cover.jpg',
    year: "2021",
    tags: ["Unity", "AAA", "PBR Workflow", "Motion Controls"],
    href: "/moon-rover"
  },

]

const ProjectOverlay = ({ project }: { project: Project }) => {
  return (
    <div className="w-full py-6 px-8">
      <div className="space-y-3 w-full">
        <p className="font-mono text-sm">
          <span className="text-accent bg-primary px-1 py-0.5">{project.title}</span>
        </p>
        <p className="text-xs max-w-[90%] hidden md:block">
          <span className="text-neutral-300 bg-primary px-1 py-0.5">{project.description}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
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

export function ProjectCarousel() {
  // Start with the second image (index 1)
  const [currentProject, setCurrentProject] = useState(1)
  const [width, setWidth] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  // Auto-rotation effect
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length)
      }, 2000)
      return () => clearInterval(timer)
    }
  }, [isPaused])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setIsPaused(true) // Pause auto-rotation when manually navigating
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    setIsPaused(true) // Pause auto-rotation when manually navigating
  }

  // Main slide takes 60% of container width; we center it using offset.
  const slideWidth = width * 0.65
  const offset = (width - slideWidth) / 2

  return (
    <div
      ref={carouselRef}
      className="relative w-full max-w-7x1 overflow-hidden h-[60vh] md:h-[65vh]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-500 h-full"
        style={{
          transform: `translateX(${offset - currentProject * slideWidth}px)`,
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex-shrink-0 px-6 md:px-14"
            style={{ width: slideWidth }}
          >
            <div className="relative h-full w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevProject}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-black/0 p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 md:w-8 h-6 md:h-8 text-white" />
      </button>
      <button
        onClick={nextProject}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-black/0 p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 md:w-8 h-6 md:h-8 text-white" />
      </button>

      {/* Overlay with Project Info matching the image width */}
      <div className="absolute inset-0 left-1/2 -translate-x-1/2 px-6 md:px-14"
        style={{ width: slideWidth }}>
        <Link
          href={projects[currentProject].href}
          className="block w-full h-full"
        >
          <div className="flex items-end w-full h-full bg-black/0 hover:bg-black/20 duration-300">
            <ProjectOverlay project={projects[currentProject]} />
          </div>
        </Link>
      </div>
    </div>
  )
}
