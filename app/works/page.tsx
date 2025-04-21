'use client'
import { useState } from 'react'
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { SimpleProjectCard } from "@/components/simple-project-card"
import { CategoryFilter } from "@/components/category-filter"
import { HomeBackground } from '@/components/home-background'

const mainProjects = [
  {
    title: "Stellar Surfer",
    description:
      "An embodied balance-based game using a custom-built board and Unity, where players control a spaceship by shifting their weight to navigate through a space tunnel.",
    image: "./projects/stellar-surfer/cover.png", 
    categories: ["game", "installation", "technical", "arduino"],
    year: "2024",
    tags: ["Unity", "Arduino", "Embodied Interaction"],
    href: "/stellar-surfer",
  },
  {
    title: "Babel Reconstruction",
    description: "An interactive art installation inspired by the Tower of Babel, featuring AI-generated imagery integrated into a dynamic and collaborative digital tower-building experience.",
    image: './projects/babel/cover.png',
    categories: ["ai","installation", "technical", "newmedia"],
    year: "2024",
    tags: ["Unity", "GenAI", "ComfyUI", "Shader", "Interactive Art"],
    href: "/babel-reconstruction"
  },
  {
    title: "Cosmic Resonator",
    description: "Physical Computing Game, made by Unity & Arduino",
    image: "./projects/cosmic-resonator-cover.jpg",
    categories: ["installation", "game", "arduino"],
    year: "2023",
    tags: ["Unity", "Arduino", "Physical Interaction", "Custom Sensors"],
    href: "/cosmic-resonator"
  },
  {
    title: "BEING",
    description: "An embodied VR game that simulates invertebrate sensory experiences, exploring evolution and survival in a rogue-lite environment.",
    image: "./projects/being-cover.png",
    categories: ["vr", "game", "arduino"],
    year: "2022",
    tags: ["VR", "Unity", "Arduino", "Wearable Devices", "Game"],
    href: "/being"
  },
  {
    title: "Fungi City",
    description: "A digital art project using neural models and AI to simulate high-density urban living inspired by microbial colonies and subtropical residential areas.",
    image: './projects/fungi-city/cover.jpg',
    categories: ["ai","technical", "newmedia"],
    year: "2022",
    tags: ["AIGC", "GenAI", "Unity", "Houdini"],
    href: "/fungi-city"},
  {
    title: "MOAI",
    description: "A puzzle game set in the year 2999, exploring themes of posthumanism, design fiction, and the ruins of human civilization.",
    image: "./projects/moai-cover.png",
    categories: ["game", "technical"],
    year: "2022",
    tags: ["Unity", "Narrative", "Posthumanism", "Weirdcore"],
    href: "/moai"
  },
  {
    title: "Moon Rover 2035",
    description: "A realistic lunar driving simulator designed as an educational game to immerse players in lunar exploration and aerospace science.",
    image: './projects/moon-rover/cover.jpg',
    categories: ["game", "technical"],
    year: "2021",
    tags: ["Unity", "AAA", "PBR Workflow", "Motion Controls", "Substance Painter"],
    href: "/moon-rover"
  }
]

const simpleProjects = [
  {
    title: "Jiayi's Protfolio Website 2.0",
    description: "The first time I challenged myself using React and Next.js with the help of GenAI coding",
    image:  './projects/others/web2_cover.png',
    categories: ["ai","web","newmedia"],
    year: "2025",
    tags: ["Web Design","Web Development", "Full Stack", "React","Next.js","GenAI"],
    demoLink: "./",
  },
  {
    title: "LEGO Magic Wand",
    description: "An interactive installation where users build their own LEGO wands, then wave them to cast digital spells in real time using motion tracking and particle effects.",
    image: './projects/others/lego_wand_cover.png',
    categories: ["installation", "game", "newmedia"],
    year: "2024",
    tags: ["Unity", "LEGO", "Real-time Interaction", "Motion Tracking", "Creative Play"],
    demoLink: "https://youtu.be/lYMSq241AnI",
  },
  {
    title: "Monster Cleaning Inc",
    description: "After nasty battles, these monsters need a good scrub. It's up to you to clean them up quickly and get them ready!",
    image: './projects/others/monster-inc-cover.gif',
    categories: ["game", "technical"],
    year: "2024",
    tags: ["Game Jam","Unity", "C#", "VFX","Teamwork"],
    demoLink: "https://shamitahmed.itch.io/monstercleaninginc",
  },
  {
    title: "Jiayi's Protfolio Website 1.0",
    description: "It's my first time building my own website from scratch, purely handmade :)",
    image:  './projects/others/web_cover_1.png',
    categories: ["web","newmedia"],
    year: "2024",
    tags: ["Web Design","Web Development", "JavaScript","Html & CSS"],
    demoLink: "https://jiayili18.github.io/Jiayi-s-Portfolio/",
  },
  {
    title: "Cat Impact",
    description: "It's a game of finding your runaway cat. All kinds of accidents happen along the way!",
    image:  './projects/others/cat_impact_cover_1.png',
    categories: ["game"],
    year: "2024",
    tags: ["Game Jam","Unity", "C#","Teamwork"],
    demoLink: "https://lijiayii.itch.io/cat-impact",
  },
  {
    title: "Crossing The Liminal",
    description: "Our poor doll is missing in a liminal back room where some walls are coming torward it. The only choice to survive is to get into the darkness through the door.",
    image: './projects/others/crossing_liminal_cover_1.png',
    categories: ["game"],
    year: "2023",
    tags: ["Game Jam","Unity", "C#","Teamwork"],
    demoLink: "https://obenyozgyur.itch.io/crossing-the-liminal",
  },
  {
    title: "Meet Your New Face",
    description: "Audio-visual work embeded with real-time GenAI images",
    image:  './projects/others/face_cover_1.png',
    categories: ["ai","newmedia"],
    year: "2023",
    tags: ["Audiovisual Art","TouchDesigner", "StableDiffusion"],
    demoLink: "https://newmedia.dog/courses/audiovisual-studio/2023/jiayi-li/",
  },
  {
    title: "Herstory of Nora",
    description: "Open-world Single Player Action RPG demo",
    image: './projects/others/nora_cover_1.jpg',
    categories: ["game"],
    year: "2023",
    tags: ["Unity", "3D Art", "Level Design","Teamwork"],
    demoLink: "https://youtu.be/yCFVTMXcpxM?si=KdA7JIbxeiyJAnQ4",
  },
  {
    title: "Gravity Odyssey",
    description: "A space game based on the prototype of the Interstellar story",
    image: './projects/others/odyssey_cover_1.png',
    categories: ["game"],
    year: "2023",
    tags: ["Game Jam","Unity", "C#","UI Design","Teamwork"],
    demoLink: "https://lijiayii.itch.io/gravity-odyssey",
  },
  {
    title: "It's going to be LATE!",
    description: "A local two player confrontation game between the staff and the boss.",
    image: './projects/others/ItsGoingToBeLate_cover_1.png',
    categories: ["game"],
    year: "2022",
    tags: ["Game Jam","Unity", "2D Art","Teamwork"],
    demoLink: "https://gmhub.com/game/1244",
  },
]

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredFeatured = mainProjects.filter(project =>
    activeCategory === 'all' || project.categories.includes(activeCategory)
  )

  const filteredSimple = simpleProjects.filter(project =>
    activeCategory === 'all' || project.categories.includes(activeCategory)
  )

  return (
    <div className="min-h-screen">
      <Nav/>
      <HomeBackground/>

      <div className="pt-32 pb-32">
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <main className="px-4 pt-8">
          <div className="max-w-7xl mx-auto">
            {/* Main Projects */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {filteredFeatured.map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                />
              ))}
            </div>

            {/* Simple Projects */}
            <div className="grid md:grid-cols-3 gap-6">
              {filteredSimple.map((project) => (
                <SimpleProjectCard
                  key={project.title}
                  {...project}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}