import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import ProjectPage from "@/components/project-page";

const projectData = {
  title: "MOAI",
  subtitle: "Future Archaeology from the Year 2999, made by Unity",
  description: `MOAI is a narrative puzzle game exploring themes of posthumanism and design fiction. Set in the year 2999, players assume the role of a lone traveler returning to Earth, now a desolate ruin of its former self. The game draws parallels between the collapse of the Moai civilization and the potential downfall of humanity. As players navigate through a hauntingly beautiful, weirdcore-inspired world, they uncover fragments of history and grapple with existential questions about survival, identity, and the future of civilization.`,
  tools: ["Unity", "Blender", "Figma"],
  videoUrl: "https://www.youtube.com/embed/h0duuX9mYPo?si=Hhjhp7Hwdr0MRkIZ", // Add video URL if available
  images: ['./projects/moai/cover.jpg',
    './projects/moai/sc1.png',
    './projects/moai/sc2.png',
    './projects/moai/sc3.png',
    './projects/moai/sc4.png',
    './projects/moai/sc5.png',], // Add image URLs if available
  contributions: [
    "Programming - Puzzle Mechanics, Gameplay Systems, and Interaction Design in Unity",
    "Game Design - Narrative Development, Worldbuilding, and Posthumanist Themes",
    "3D Art - Modeling, Texturing, and Environment Composition"
  ],
  imagesWithDescriptions: [
    {
      image: './projects/moai/level0.png',
      description: "The game features the following key elements:\"The Khrushchyovka,\" \"the Relics,\" and \"Tesseract.\" \"The Khrushchyovka\" serves as the starting point of the game and also as the location for selecting game levels, while the \"Tesseract\" functions as a crucial item and level guide within the game."
    },
    {
      image: './projects/moai/level1.png',
      description: ""
    },
    {
      image: './projects/moai/level2.png',
      description: ""
    },
    {
      image: './projects/moai/puzzle.png',
      description: ""
    },
    {
      image: './projects/moai/ui.png',
      description: ""
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
