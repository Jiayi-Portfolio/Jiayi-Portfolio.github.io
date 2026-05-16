import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import ProjectPage from "@/components/project-page";
import type { Metadata } from "next";

const projectData = {
  title: "Thing Under Glass",
  subtitle: "A cozy vivarium where what you feed shapes who it becomes",
  description: `A cozy vivarium where you raise a strange creature in a glass tank. What you feed shapes its body; the words you teach shape its voice. No combat, no win condition — just a slow bond with something a bit weird.

You are the keeper, not the god. You place substrates, food grows on them, and the creature decides what it wants to eat. Each food carries an axis — spine, head, limbs — and the creature's body drifts along whatever you over-feed. Over time it becomes a record of what it ate.

Universal poop is the only currency. It fills three bottles — new substrates, new food, a wider tank — so the loop feeds itself. Meanwhile the creature mumbles, learns broad words, names its favorite food, and eventually turns to you and asks "who am I?".

Built solo at Supercell AI Lab as my first full-stack game prototype: Unity 2D URP for the tank simulation (Verlet physics for the soft body, sprite micro-displacement for behaviors), and a local Python backend (FastAPI + LLMs) for procedural babble, name fusion, and song composition.

Dev log: https://jiayili18.github.io/thing-under-glass-site/`,
  tools: ["Unity", "URP", "C#", "Python", "FastAPI", "LLMs", "GenAI", "Verlet Physics"],
  videoUrl: "https://www.youtube.com/embed/p2uP22HFJRI",
  images: [
    "/projects/thing-under-glass/cover.png",
    "/projects/thing-under-glass/creature-in-tank.png",
    "/projects/thing-under-glass/feeding.png",
    "/projects/thing-under-glass/bottles.png",
    "/projects/thing-under-glass/substrate-pick.png",
  ],
  contributions: [
    "Solo project — design, code, and art under one roof at Supercell AI Lab",
    "Game design — feeding-shapes-body loop, three-bottle poop economy, two-ritual demo arc (name your favorite food → who am I?)",
    "Engineering — Unity 2D URP scene, Verlet soft-body creature, Unity↔Python bridge",
    "AI backend — local FastAPI server for procedural babble, name fusion, and song composition with LLMs",
  ],
  imagesWithDescriptions: [
    {
      image: "/projects/thing-under-glass/creature-in-tank.png",
      description:
        "The whole game is one screen: a glass tank, a substrate or two, and a creature that lives in it. No menus to dive through — you act on the tank directly.",
    },
    {
      image: "/projects/thing-under-glass/feeding.png",
      description:
        "What you feed shapes the body. Each food has an axis (spine, head, limbs, head-limb length, spine-limb length, …) and the creature grows along whichever axis you over-feed. The poop is universal — it doesn't matter what came in, what matters is how much.",
    },
    {
      image: "/projects/thing-under-glass/substrate-pick.png",
      description:
        "Substrates are the soil. Each one grows its own themed food pool and quietly tilts the body in a different direction.",
    },
  ],
};

export const metadata: Metadata = {
  title: projectData.title,
  description: projectData.subtitle,
};

export default function ThingUnderGlassPage() {
  return (
    <>
      <Nav alwaysLight />
      <ProjectPage projectData={projectData} />
      <Footer color="primary" />
    </>
  );
}
