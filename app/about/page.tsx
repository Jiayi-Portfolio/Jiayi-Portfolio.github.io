"use client"

import { Nav } from "@/components/nav"
import { HomeBackground } from "@/components/home-background"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight, Instagram, ExternalLink } from 'lucide-react'
import Link from "next/link"
import { Footer } from "@/components/footer"
import { useState } from 'react'
import Image from 'next/image'

// Add qualitative skills first
const qualitativeSkills = {
  'Technical Art': [
    'Shader Development',
    'Compute Shader Applications',
    'Particle & VFX',
    '2D/3D Art Integration'
  ],
  'Design & Development': [
    'Interactive Play Design',
    'VR/MR Development',
    'Agile Development',
    'Collaborative Workflows',
    'User Research'
  ],
  'AI Engineering': [
    'LLM Fine-Tuning',
    'ComfyUI Workflows',
    'Procedural AIGC Tools',
    'Basic AI Agents'
  ]
}

// Modified skillsWithLevels with new category
const skillsWithLevels = {
  'Development Tools': [
    { name: 'Unity', level: 95 },
    { name: 'Unreal Engine', level: 70 },
    { name: 'TouchDesigner', level: 60 },
    { name: 'Arduino', level: 70 }
  ],
  '3D Modeling & VFX': [
    { name: 'Blender', level: 80 },
    { name: 'Houdini', level: 60 },
    { name: '3ds Max', level: 70 },
    { name: 'Substance Painter', level: 70 },
    { name: 'Substance Designer', level: 60 },
    { name: 'Rhino', level: 70 },
  ],
  'Coding': [
    { name: 'C#', level: 95 },
    { name: 'Python', level: 75 },
    { name: 'GLSL', level: 60 },
    { name: 'TypeScript', level: 70 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 70 },
    { name: 'HTML/CSS', level: 80 }
  ],
  'Graphic & Concept': [
    { name: 'Comfy UI', level: 75 },
    { name: 'Figma', level: 95 },
    { name: 'Stable Diffusion', level: 75 },
    { name: 'Photoshop', level: 80 },
    { name: 'Illustrator', level: 70 },
    { name: 'Premiere', level: 75 },

  ]
}

const experiences = [
  {
    title: 'Interactive Play Design Intern',
    company: 'The LEGO Group',
    duration: 'Aug - Dec 2024',
    location: 'Billund, Denmark',
    details: [
      'Developed physical-digital interactive prototypes. Accelerated prototyping through custom Unity tools.',
      'Defined product features through competitor and customer segmentation analysis.',
      'Co-created interactive play solutions with senior designers.'
    ]
  },
  {
    title: 'Technical Artist',
    company: 'East China Architecture Design & Research Institute',
    duration: 'Oct 2023 - Mar 2024',
    location: 'Remote',
    details: [
      'Designed a modular Unity art pipeline, streamlining 3D asset integration for large-scale environments.',
      'Optimized asset integration workflows for efficiency and high-quality visuals.',
      'Enhanced remote collaboration with Figma, Notion, and Plastic SCM.'
    ]
  },
  {
    title: 'Software Design Intern',
    company: 'East China Architecture Design & Research Institute',
    duration: 'Sep 2022 - Nov 2022',
    location: 'Shanghai, China',
    details: [
      'Developed a Unity-based VR room display prototype with customizable building features, creating immersive experience.'
    ]
  },
  {
    title: 'Technical Designer',
    company: 'Digital Animation and Entertainment Lab, Tongji University',
    duration: 'Mar 2022 - May 2022',
    location: 'Shanghai, China',
    details: [
      'Contributed to "20000 Miles Under the Sea", a dual-player 4D VR educational game about deep-sea scientific research.',
      'Designed and developed all game levels using Unity terrain system.',
      'Implemented visual effects throughout the game using Unity.'
    ]
  }
]

const education = [
  {
    degree: 'Master of Arts in New Media',
    school: 'Aalto University',
    duration: '2023 - 2025',
    location: 'Helsinki, Finland',
    focus: 'Aalto 100% waiver Scholarship | Erasmus+ Scholarship'
  },
  {
    degree: 'Bachelor of Engineering in Historical Architecture',
    school: 'Tongji University',
    duration: '2018 - 2023',
    location: 'Shanghai, China',
    focus: 'Minor in Cross-Disciplinary Experimental Program of Architecture'
  }
]

export default function About() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const photos = [
    './projects/profile0.jpg',
    './projects/profile2.jpg',
    './projects/profile1.jpg',
    './projects/profile3.jpg'
  ]

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
  }

  return (
    <div className="min-h-screen font-mono">
      <Nav />
      <ScrollIndicator />
      <main className=" text-black w-full">
        <HomeBackground />
        {/* Bio and Photo Carousel */}
        <section className="h-full md:h-screen max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center p-8 pt-16 md:pt-0">
          <div className="w-full md:w-1/3 flex justify-center mb-0">
            <div className="relative">
              <Image
                src={photos[currentPhotoIndex]}
                alt="Jiayi Li"
                width={420}
                height={420}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
              <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 ">
                <Button
                  size="icon"
                  onClick={prevPhoto}
                  className="bg-black/0 p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4 text-white" />
                </Button>
                <Button
                  size="icon"
                  onClick={nextPhoto}
                  className="bg-black/0 p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-6 md:ml-12 text-accent">
            <h1 className="text-2xl font-normal w-fit bg-primary">About Me</h1>
            <p>
              <span className="bg-primary">
                Hi, I&#39;m Jiayi. I create engaging digital interactions and new media art with my interdisciplinary background. <br />
                I design and develop games and arts of various forms. Every project adds a unique piece of my creativity and gets me ready for the next new idea—whether it&#39;s a video game or a playful installation.<br />
                I also have extensive experience using generative AI to create efficiently, as I&#39;m always curious about new technologies in creative fields.<br />
                Beyond my work, I like hiking, needle felting, drawing, swimming and of course, playing games.<br />
                If you&#39;re interested about my experience...Let&#39;s connect XD!
                </span>
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="mailto:jiayi.li0004@gmail.com" className="bg-primary flex items-center gap-2 hover:underline">
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </Link>
              <Link href="https://github.com/JiayiLi18" className="bg-primary flex items-center gap-2 hover:underline">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/jiayi-li0414/" className="bg-primary flex items-center gap-2 hover:underline">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
              <Link href="https://www.instagram.com/jiayi_li_2000/" className="bg-primary flex items-center gap-2 hover:underline">
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </Link>
              <Link href="https://lijiayii.itch.io/" className="bg-primary flex items-center gap-2 hover:underline">
                <ExternalLink className="h-5 w-5" />
                <span>itch.io</span>
              </Link>
            </div>
            {/* 
            <a href="/path/to/your/cv.pdf" download>
              <Button className="flex items-center gap-2 hover:bg-primary">
                <FileDown className="h-4 w-4" />
                Download CV
              </Button>
            </a>*/}
          </div>
        </section>

        <div className="bg-white mx-0 px-4 py-24 space-y-24">
          {/* Skills with Visualization */}
          <section className="space-y-6 flex flex-col items-center">
            <h2 className="text-2xl font-normal text-center text-primary">Skills & Technologies</h2>
            <div className="bg-primary/5 rounded-lg p-8 text-center max-w-5xl mx-auto">
              <p className="text-base md:text-xl font-light text-neutral-600 italic">
                I&#39;m not a polymath - just someone who keeps tripping over problems,
                then can&#39;t stop building better shovels to dig through them ;)
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl text-center">
              {Object.entries(qualitativeSkills).map(([category, skills]) => (
                <div key={category} className="bg-white shadow p-6">
                  <h3 className="text-xl font-normal mb-4 text-primary">{category}</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {skills.map((skill, index) => (
                      <div key={index} className="bg-neutral-100 rounded-md p-2 text-center text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
              {Object.entries(skillsWithLevels).map(([category, skills]) => (
                <div key={category} className="bg-white shadow p-6">
                  <h3 className="text-xl font-normal mb-4 text-primary">{category}</h3>
                  <div className="space-y-3">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-1">
                        <div className="text-sm">{skill.name}</div>
                        <div className="h-2 bg-neutral-200 rounded-full">
                          <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience - New Section */}
          <section className="space-y-6">
            <h2 className="text-2xl text-primary font-normal text-center">Work Experience</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white shadow p-6">
                  <h3 className="text-xl font-normal">{exp.title}</h3>
                  <p className="text-neutral-600 mb-2">{exp.company} | {exp.duration} | {exp.location}</p>
                  <ul className="list-disc list-inside text-neutral-600">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education - New Section */}
          <section className="bg-white space-y-6">
            <h2 className="text-2xl text-primary font-normal text-center">Education</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white shadow p-6">
                  <h3 className="text-xl font-normal">{edu.degree}</h3>
                  <p className="text-neutral-600">{edu.school} | {edu.duration} | {edu.location}</p>
                  <p className="text-neutral-600 mt-2">{edu.focus}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form*/}
          <section className="bg-white space-y-6">
            <h2 className="text-2xl text-primary font-normal text-center">Get in Touch</h2>
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
            </div>
            {/* 
            <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
              <form className="w-full space-y-4">
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
                <div className="font-mono items-center text-primary text-center">
                  <Button className="bg-neutral-100 hover:bg-accent transition-color">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>*/}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

