import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import ProjectPage from "@/components/project-page";

const projectData = {
  title: "Cosmic Resonator",
  subtitle: "Physical Computing Game, made by Unity & Arduino",
  description: `Cosmic Resonator is an embodied game combining physical interaction and digital feedback, inspired by the harmonious tones of the Himalayan singing bowl. Players use a circular xylophone equipped with an Arduino board to detect strikes and interact with a rhythm-based cosmic particle game. The gameplay involves launching a particle through a cosmic tunnel of halos. Striking the xylophone at precise moments propels the particle upward, while strikes around the xylophone trigger resonant waves that elevate multiple halos. As the particle ascends, it evolves into new forms, challenging players to guide it into the deep universe.`,
  tools: ["Unity", "Arduino", "Xylophone Instrument", "Custom Sensors"],
  videoUrl: "https://www.youtube.com/embed/bGvp-eQ2viw?si=AY5-ZgA0TaJwdKYf", // Add video URL if available
  images: [
    "./projects/cosmic-resonator/cover.png",

    "./projects/cosmic-resonator/exhibition1.png",
    "./projects/cosmic-resonator/exhibition2.JPG",
    "./projects/cosmic-resonator/exhibition3.JPG",

    "./projects/cosmic-resonator/instrument(1).JPG",
    "./projects/cosmic-resonator/instrument(2).JPG",

    "./projects/cosmic-resonator/screenshot(7).jpg",
    "./projects/cosmic-resonator/screenshot(1).jpg",
    "./projects/cosmic-resonator/screenshot(3).jpg",
    "./projects/cosmic-resonator/screenshot(5).jpg",
    "./projects/cosmic-resonator/screenshot(6).jpg",
    "./projects/cosmic-resonator/screenshot(8).jpg",
    "./projects/cosmic-resonator/screenshot(9).jpg",
  ],
  contributions: [
    "Game Design - Concept Development - Gameplay Mechanics - Rhythm Game Interaction Design",
    "Programming - Arduino Signal Processing - Unity Game Development - Digital Feedback Integration",
    "Craftsmanship - Xylophone Construction - Sensor Integration - Aesthetic Design of the Instrument",
    "Sound Design - Audiovisual Synchronization - Cosmic Ambience Creation"
  ],
  imagesWithDescriptions:[
    {image:"./projects/cosmic-resonator/instruction.png",
      description:"The game is to control a particle to jump through a cosmic tunnel that consists of halos. If the player strikes the xylophone when the particle reaches the center of the halo, it will leap upward. If the player strikes around the xylophone, the particle releases a wave that triggers multiple halos to resonate and rise higher. The particle would evolve into different forms as it reaches a higher level. Are you able to launch it into the deep universe?"
    },
    {
      image:"./projects/cosmic-resonator/process.png",
      description:""
    }
  ]
};

export default function SingleProjectPage() {
  return (
    <>
      <Nav alwaysLight />
      <ProjectPage projectData={projectData} />
      <Footer />
    </>
  );
} 