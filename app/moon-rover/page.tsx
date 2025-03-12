import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import ProjectPage from "@/components/project-page";

const projectData = {
  title: "Moon Rover 2035",
  subtitle: "Realistic Lunar Driving Simulator, made by Unity",
  description: `Moon Rover 2035 is a realistic lunar driving simulator designed as a serious educational game to create an immersive science experience. Players take on the role of a lunar geology researcher, tasked with driving a rover to explore lava caves in a moon crater. The game simulates the unique conditions of the Moon, including reduced gravity and realistic lunar terrain, while educating players about lunar soil, crater formations, and aerospace science. By combining education and entertainment, the project aims to inspire interest in lunar exploration and space science.`,
  tools: ["Unity HDRP", "Substance 3D Painter", "Substance Designer", "Blender", "3ds Max"],
  videoUrl: "https://www.youtube.com/embed/WXEz6sQgFxk?si=MAjDVBHdh8pA3Pzp" , // Add video URL if available
  images: ['./projects/moon-rover/cover.jpg',
    './projects/moon-rover/car.jpg',
    './projects/moon-rover/level.jpg',
    './projects/moon-rover/object.jpg',
    './projects/moon-rover/ui.png'], // Add image URLs if available
  contributions: [
    "Programming - Driving Simulation Mechanics, Motion Controls, and Interaction Systems in Unity",
    "UI Design - Interface Development for Science-Based Gameplay",
    "3D Art - PBR Workflow Implementation, Lunar Terrain Modeling, and Realistic Texturing"
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
