import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import ProjectPage from "@/components/project-page";

const projectData = {
  title: "Babel Reconstruction",
  subtitle: "Interactive Art Installation, made by Unity",
  description: `Babel Reconstruction is an interactive art installation inspired by the story of the Tower of Babel, exploring themes of ambition, communication, and chaos. Players build or destroy parts of a virtual tower, symbolizing human dynamics. The installation integrates Unity with a custom ComfyUI workflow that generates AI images using ControlNet and depth images, creating unique, ever-changing interiors for the cubes in the tower. This project highlights the creative potential and unpredictability of AI in digital art.`,
  tools: ["Unity", "ComfyUI", "ControlNet", "Midjourney", "Photoshop", "Krita"],
  videoUrl: "https://www.youtube.com/embed/1WFMloPNTqg?si=s66ZfCcapavqleSI", // Add video URL if available
  images: ['./projects/babel/cover.png',

    './projects/babel/sc0.png',
    './projects/babel/sc1.png',

    './projects/babel/exhibition (1).png',
    './projects/babel/exhibition (2).png',
    './projects/babel/exhibition (3).png',
    './projects/babel/exhibition (4).png',
    './projects/babel/exhibition (5).png',

    './projects/babel/comfyUI.jpg',
  ], // Add image URLs if available
  contributions: [
    "Programming - Integration of Unity with ComfyUI for AI-generated textures and workflows",
    "Design - Conceptual Development, Tower Interaction Mechanics, and Shader Implementation",
    "Art - Creation of AI-Generated Images and Post-Processing with Midjourney and Photoshop"
  ],
  imagesWithDescriptions: [
    {
      image: './projects/babel/workflow.jpg',
      description: "The project began with a conceptual phase, inspired by the Tower of Babel story and its themes of ambition, communication, and the resulting chaos. The initial idea was to create a digital tower where each layer could be constructed or deconstructed by the participants' choices, symbolizing the unpredictable outcomes of human actions and AI's role in creativity."
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