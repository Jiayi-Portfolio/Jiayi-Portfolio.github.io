import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import ProjectPage from "@/components/project-page";

// Sample project data (replace with actual data or fetch from an API)
const projectData = {
  title: "BEING",
  subtitle: "VR + Wearable Devices: Game of Evolution",
  description: `This embodied game explores the evolution of life and sensory perception by simulating invertebrate experiences through VR and wearable devices. The game aims to bridge the gap between human understanding and invertebrate sensory experiences, reconstructing an alternative reality to foster empathy and a deeper grasp of biological evolution. Players interact in a rogue-lite environment, experiencing the struggles of survival and evolution by feeding, reproducing, and avoiding predators, compressing hundreds of millions of years into a ten-minute immersive journey.`,
  tools: ["Unity", "VR Headset", "Arduino", "Custom Wearable Devices"],
  contributions: [
    "Game Design - Evolutionary Simulation and Sensory Interaction Concepts",
    "Programming - VR Mechanics, Motion Control, and Procedural Gameplay in Unity",
    "Integration - Wearable Device Signal Processing with VR Gameplay"
  ],
  videoUrl: "https://www.youtube.com/embed/xd1qXS5Mfok?si=VLhUbFOaEIP7IjbS",
  images: ["./projects/being/1.png",
    "./projects/being/creatures.png",

    "./projects/being/2.png",
    "./projects/being/3.png",
    "./projects/being/4.png",

    "./projects/being/prototypingPlay1.png",
    "./projects/being/prototypingPlay2.png",],
  imagesWithDescriptions: [
    {
      image: "./projects/being/gameplayFeature.png",
      description: "Since invertebrates are the most distant branch of animals from humans in the evolutionary tree, their perception is extremely different from all aspects. Therefore many interesting results will arise when humans try to understand the feelings of invertebrates. The senses are our intuitive way of perceiving the world. If we can feel the invertebrate type of senses, we may be able to reconstruct a different reality through empathy on feelings."},
    {
      image: "./projects/being/prototyping.png",
      description: ""
    },
    {
      image: "./projects/being/gameProcess.png",
      description: ""
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