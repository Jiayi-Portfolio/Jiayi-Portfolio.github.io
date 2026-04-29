"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight, Instagram, ExternalLink } from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { Button } from "@/components/ui/button"
import { type Locale, t } from "@/lib/i18n"

// Simplified toolkit: four broad areas, each shown as inline chips.
// Tool names stay in their canonical (English/branded) form regardless of locale.
const TOOLKIT: { category: { en: string; zh: string }; items: string[] }[] = [
  {
    category: { en: "Engineering & Coding", zh: "工程与编码" },
    items: ["Unity", "Unreal", "C#", "Python", "TypeScript", "React", "GLSL", "Arduino"],
  },
  {
    category: { en: "GenAI Toolkit", zh: "生成式 AI" },
    items: ["ComfyUI", "Midjourney", "NanoBanana", "Meshy", "Tripo3D", "SUNO", "Veo"],
  },
  {
    category: { en: "Art & 3D", zh: "美术与 3D" },
    items: ["Blender", "Houdini", "Substance Painter", "Substance Designer", "TouchDesigner"],
  },
  {
    category: { en: "Design", zh: "设计" },
    items: ["Figma", "Procreate", "Photoshop", "Illustrator", "UI/UX", "User Research"],
  },
]

const PHOTOS = [
  "/projects/profile1.jpg",
  "/projects/profile0.jpg",
  "/projects/profile2.jpg",
  "/projects/profile3.jpg",
  "/projects/profile4.jpg",
]

export function AboutPageContent({ locale = "en" }: { locale?: Locale }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const nextPhoto = () => setCurrentPhotoIndex((i) => (i + 1) % PHOTOS.length)
  const prevPhoto = () => setCurrentPhotoIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length)

  const bioParagraphs = t.about.bio[locale]

  return (
    <div className="min-h-screen">
      <Nav alwaysLight locale={locale} />
      <div className="text-primary"><ScrollIndicator /></div>
      <main className="text-black w-full">
        {/* Bio + photo carousel */}
        <section className="h-full md:h-screen max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center p-8 pt-16 md:pt-0">
          <div className="w-full md:w-1/3 flex justify-center mb-0">
            <div className="relative">
              <Image
                src={PHOTOS[currentPhotoIndex]}
                alt="Jiayi Li"
                width={520}
                height={520}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
              <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2">
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
          <div className="w-full md:w-2/3 space-y-6 md:ml-12 text-primary">
            <div className="font-mono text-sm space-y-4">
              {bioParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="font-mono flex flex-wrap gap-4">
              <Link href="mailto:jiayi.li0004@gmail.com" className="flex items-center gap-2 hover:underline">
                <Mail className="h-5 w-5" />
                <span>{t.about.emailLabel[locale]}</span>
              </Link>
              <Link href="https://github.com/JiayiLi18" className="flex items-center gap-2 hover:underline">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/jiayi-li0414/" className="flex items-center gap-2 hover:underline">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
              <Link href="https://www.instagram.com/jiayi_li_2000/" className="flex items-center gap-2 hover:underline">
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </Link>
              <Link href="https://lijiayii.itch.io/" className="flex items-center gap-2 hover:underline">
                <ExternalLink className="h-5 w-5" />
                <span>itch.io</span>
              </Link>
            </div>
          </div>
        </section>

        <div className="bg-white mx-0 px-4 py-24 space-y-24">
          {/* Toolkit — simplified to four categories of inline chips */}
          <section className="space-y-8 flex flex-col items-center">
            <h2 className="font-mono text-2xl font-normal text-center text-primary">
              {t.about.toolkitTitle[locale]}
            </h2>
            <div className="bg-primary/5 rounded-lg px-8 py-6 max-w-3xl mx-auto">
              <p className="text-sm font-light text-neutral-600 italic text-center">
                {t.about.toolkitQuote[locale]}
              </p>
            </div>

            <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {TOOLKIT.map((group) => (
                <div key={group.category.en} className="space-y-3">
                  <h3 className="font-mono text-sm font-medium text-primary">
                    {group.category[locale]}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Get in Touch */}
          <section className="bg-white space-y-6">
            <h2 className="font-mono text-2xl text-primary font-normal text-center">
              {t.about.contactTitle[locale]}
            </h2>
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
          </section>
        </div>
      </main>

      <Footer color="primary" locale={locale} />
    </div>
  )
}
