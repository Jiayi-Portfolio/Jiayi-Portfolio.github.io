import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import ProjectPage from "@/components/project-page";

const projectData = {
  title: "Stellar Surfer",
  subtitle: "Embodied Balancing Game, made with Arduino and Unity",
  description: `Stellar Surfer is an immersive, embodied game that transforms physical training into a playful digital experience. Players control a spaceship by standing on a custom-built balance board, shifting their body weight to steer through a space tunnel, dodge meteorites, and collect glowing stars. Developed using Unity and Arduino, the game captures real-time tilt data to provide intuitive, full-body interaction. The project explores how physical coordination and reactive movement can be reimagined through interactive design.`,
  tools: ["Unity", "Blender", "Figma", "Arduino", "AutoCAD"],
  videoUrl: "https://www.youtube.com/embed/Y9_ApdhZXPU?si=3hebbSE7CgjqTfU_", // Add video URL if available
  images: ['./projects/stellar-surfer/cover.png',
    './projects/stellar-surfer/exhibition (1).png',
    './projects/stellar-surfer/exhibition (2).png',
    './projects/stellar-surfer/exhibition (3).png',
    './projects/stellar-surfer/exhibition (4).png',
    './projects/stellar-surfer/screenshot.png',
    './projects/stellar-surfer/workflow (1).png',
    './projects/stellar-surfer/workflow (2).png',
    './projects/stellar-surfer/workflow (3).png',], // Add image URLs if available
  contributions: [
    "Programming - Gameplay Systems and Interaction Design in Unity and Arduino",
    "Game Design - Concept Development, Play Loop Design, and Spatial Experience",
  ],
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
