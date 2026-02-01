import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import ProjectPage from "@/components/project-page";

const projectData = {
  title: "LEGO® SMART Play™",
  subtitle: "Defining the Future of Screen-Free Interactive Play",
  description: `As an interactive play design intern of the LEGO Design and the Creative Play Lab, I prototyped novel gameplay mechanics for the LEGO SMART Brick - a new way to play with LEGO bricks.
  My role was to look past the hardware specifications and discover the "soul" of the machine, creating the first generation of gameplay experiences that bridge the physical and digital worlds without a screen.
  Official site: https://www.lego.com/en-us/smart-play `,
  tools: ["LEGO SMART Brick (Pre-release Proto)","Custom Sensors","Unity","Python", "LEGO bricks"],
  images: [
    "/projects/others/smartplay_cover.jpg"
  ],
  contributions: [
    "Rapid Prototyping - Agile development of playable scenarios to stress-test hardware capabilities",
    "Mechanic Design - Translated sensor inputs (Acceleration, Color, Sound) into meaningful game mechanics",
    "Creative Engineering - Discovered novel interaction patterns that expanded the platform's potential beyond its initial specification"
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

