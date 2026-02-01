import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import ProjectPage from "@/components/project-page";

const projectData = {
  title: "Symbiotic Voxel",
  subtitle: "Generative AI + Spatial Computing: Symbiotic Voxel",
  description: `An experimental sandbox investigating spatial AI agency within a 3D environment. 
  Unlike passive chatbots, the resident agent "Loom" perceives spatial context and actively collaborates on design tasks. 
  Built on a custom Unity-to-Python pipeline, the system utilizes a two-stage reasoning architecture to negotiate high-level plans before execution. 
  This project prototypes a future where AI evolves from a tool into a grounded, structural partner.
  This is my master's graduation project. 
  itch.io: https://lijiayii.itch.io/symbiotic-voxels 
  Github: https://github.com/JiayiLi18/Symbiotic-Voxels-AI `,
  tools: ["Unity", "Generative AI","Python","LLMs","APIs","ComfyUI","RAG"],
  videoUrl: "https://www.youtube.com/embed/3QZhbYyEkxc?si=4yDP7e2fqmgEgB34", 
  images: [
    "/projects/symbiotic-voxel/cover.png",
    "/projects/symbiotic-voxel/design.jpg",
    "/projects/symbiotic-voxel/principle.jpg",
    "/projects/symbiotic-voxel/screenshot1.png",
    "/projects/symbiotic-voxel/screenshot2.png",
    "/projects/symbiotic-voxel/tech.jpg",
  ],
  contributions: [
    "AI Architecture - Designing the Two-Stage Reasoning pipeline and Unity-Python bridge",
    "Full-Stack Development - Implementing the Voxel engine, agent behaviors, and backend integration",
    "Interaction Design - Structuring the UX of Negotiation and defining agent personality mechanics"
  ],
  imagesWithDescriptions: [
    {
      image: "/projects/symbiotic-voxel/screenshot2.png",
      description:
        "",
    },
    {
      image: "/projects/symbiotic-voxel/tech.jpg",
      description:
        "Built as a solo full-stack project, the architecture focuses on structured agency. " +
        "I designed a Two-Stage Reasoning system where the LLM outputs high-level plans as structured JSON data before execution. This ensures the AI acts as a reliable collaborator rather than a black box. This approach—prioritizing visible, structured actions over pure text—aligns with the emerging engineering standards for autonomous agents in complex interfaces.",
    },
    {
      image: "/projects/symbiotic-voxel/design.jpg",
      description:
        "",
    },
    {
      image: "/projects/symbiotic-voxel/principle.jpg",
      description:
        "",
    },
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

