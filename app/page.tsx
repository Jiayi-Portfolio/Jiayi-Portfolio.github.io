'use client'
import { useState, useEffect } from 'react'
import { Nav } from "@/components/nav"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"
import { ProjectCarousel } from "@/components/project-carousel"
import { HeroScene } from "@/components/hero-scene"
import { HomeBackground } from "@/components/home-background"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { Footer } from "@/components/footer"
import { Mail, Github, Linkedin, Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"


const projects = [
  {
    title: "BEING",
    description:
      "An embodied VR game that simulates invertebrate sensory experiences, exploring evolution and survival in a rogue-lite environment.",
    image: "./projects/being-cover.png",
    categories: ["vr", "game", "arduino"],
    year: "2022",
    tags: ["VR", "Unity", "Arduino", "Wearable Devices", "Game"],
    href: "/being",
  },
  {
    title: "Cosmic Resonator",
    description:
      "An embodied physical computing game inspired by the Himalayan singing bowl, combining rhythm-based gameplay with Arduino-driven xylophone interaction.",
    image: "./projects/cosmic-resonator-cover.jpg",
    categories: ["installation", "game", "arduino"],
    year: "2023",
    tags: ["Unity", "Arduino", "Physical Interaction", "Custom Sensors"],
    href: "/cosmic-resonator",
  },
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
    description:
      "An interactive art installation inspired by the Tower of Babel, featuring AI-generated imagery integrated into a dynamic and collaborative digital tower-building experience.",
    image: './projects/babel/cover.png',
    categories: ["installation", "technical", "newmedia"],
    year: "2024",
    tags: ["Unity", "GenAI", "ComfyUI", "Shader", "Interactive Art"],
    href: "/babel-reconstruction",
  },
  {
    title: "Fungi City",
    description:
      "A digital art project using neural models and AI to simulate high-density urban living inspired by microbial colonies and subtropical residential areas.",
    image: './projects/fungi-city/cover.jpg',
    categories: ["technical", "newmedia"],
    year: "2022",
    tags: ["AIGC", "GenAI", "Unity", "Houdini"],
    href: "/fungi-city",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Wait for the next frame to ensure browser painting is complete
    requestAnimationFrame(() => {
      setMounted(true)
    })
  }, [])

  // Show nothing during SSR and initial client render
  if (!mounted) {
    return (
      <div className="min-h-screen bg-black">
        {/* Optional: Add a simple loading state here */}
      </div>
    )
  }

  return (

    <div className="min-h-screen text-white">
      <HomeBackground />
      {/* Nav should be always on top */}
      <div className="relative z-50">
        <Nav />
      </div>
      <div className="text-accent"><ScrollIndicator /></div>

      {/* Main Hero Section occupying the full viewport */}
      <div className="flex-grow relative flex flex-col h-screen pt-14">
        {/* Centered Carousel */}
        <div className="flex-grow flex items-center justify-center">
          <ProjectCarousel />
        </div>
        {/* Bottom Left Hero Scene */}
        <div className="flex-grow left-0 px-8 md:px-16 ">
          <HeroScene />
        </div>
      </div>


      <main className="relative z-10 bg-white text-black">

        {/* Featured Projects */}
        <section className="py-32 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center text-2xl font-mono mb-16 text-primary">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}

            </div>

            {/* Add More Projects Button */}
            <div className="mt-16 text-center">
              <Link
                href="/works"
                className="font-mono items-center text-primary"
              >
                <Button className="bg-neutral-100 hover:bg-accent transition-color">
                  View More Projects</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Teaser */}
        <section className="py-32 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-2xl font-mono text-primary">About Me</h2>
            <p className="text-neutral-600">
              With a background in both digital art and game design, I create immersive experiences
              that challenge the boundaries between physical and digital realms. My work explores
              the intersection of play, technology, and human interaction.
            </p>
            <div>
              <Link
                href="/about"
                className="font-mono items-center text-primary"
              >
                <Button className="bg-neutral-100 hover:bg-accent transition-color">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Get in Touch Section - Updated for consistency */}
        <section className="py-32 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-mono text-primary">Get in Touch</h2>
            <div className="flex flex-col items-center justify-center md:flex-row gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <Link href="mailto:jiayi.li0004@gmail.com" className="hover:underline">
                    jiayi.li0004@gmail.com
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <Github className="h-5 w-5" />
                  <Link href="https://github.com/JiayiLi18" className="hover:underline">
                    GitHub
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="h-5 w-5" />
                  <Link href="https://www.linkedin.com/in/jiayi-li0414/" className="hover:underline">
                    LinkedIn
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="h-5 w-5" />
                  <Link href="https://www.instagram.com/jiayi_li_2000/" className="hover:underline">
                    Instagram
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <ExternalLink className="h-5 w-5" />
                  <Link href="https://lijiayii.itch.io/" className="hover:underline">
                    itch.io
                  </Link>
                </div>
              </div>

              {/* 
              <form className="w-full md:w-1/2 space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-md"
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-2 border rounded-md min-h-[150px]"
                />
                <div className="font-mono items-center text-primary">
                  <Button className="bg-neutral-100 hover:bg-accent transition-color">
                    Send Message
                  </Button>
                </div>
              </form>
              */}
            </div> 
          </div>
        </section>
        {/* End of Get in Touch Section */}

      </main>

      <Footer />
    </div>
  )
}

