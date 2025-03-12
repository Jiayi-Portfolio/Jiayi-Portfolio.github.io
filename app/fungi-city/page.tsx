import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import ProjectPage from "@/components/project-page";

const projectData = {
  title: "Fungi City",
  subtitle: "Performative AI: Neural Models + Agents, made by Unity",
  description: `Fungi City is a digital art project that juxtaposes the chaotic growth of high-density urban living spaces with the dynamic nature of microbial colonies. Inspired by the unrestrained development of subtropical residential areas like Chongqing, the project simulates a continuously growing metaverse environment using AI processing. By blending generative AI, computational design, and neural models, Fungi City explores the transient nature of urban life and societal evolution, creating a virtual space that evolves like a living organism.`,
  tools: ["Unity", "Neural Models", "GANs", "Generative AI Tools"],
  videoUrl: "https://www.youtube.com/embed/CAKVTn5Fna8?si=Ag7EtN9DMPmjjo-s", // Add video URL if available
  images: ['./projects/fungi-city/cover.jpg',

    './projects/fungi-city/screenshot1.jpg',
    './projects/fungi-city/screenshot3.jpg',
    './projects/fungi-city/screenshot4.jpg',
    './projects/fungi-city/screenshot5.jpg',
    './projects/fungi-city/screenshot6.jpg',
    './projects/fungi-city/screenshot7.png'], // Add image URLs if available
  contributions: [
    "Technical Art - Computational Design, AI Integration, and Generative Systems in Unity",
    "3D Visualization - Urban Environment Simulation and Aesthetic Design",
    "Concept Development - Urban Life Dynamics and Microbial Colony Parallels"
  ],
  imagesWithDescriptions: [
    {
      image: './projects/fungi-city/process.jpg',
      description: "This project emerged during the early stages of AI image development. Through the utilization of Disco Diffusion and Style GAN, continuous AI images were trained, depicting urban landscapes and microbial colonies. These images were further processed into depth maps using the MIDAS neural model and subsequently transformed into 3D model animations using Houdini and Blender. Finally, Unity was employed to generate particle effects."
    },
    {
      image: './projects/fungi-city/process2.png',
      description: ""
    },
    {
      image: './projects/fungi-city/depth.png',
      description: ""
    },
    {
      image: './projects/fungi-city/GAN.png',
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

