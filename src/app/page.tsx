import { MyWorks } from "@/components/my-works/MyWorks";
import { projects } from "@/data/projects";
import { Project } from "@/components/project/project";
import LastWords from "@/components/lastWords/LastWords";
import Contact from "@/components/contact/Contact";
import { Home } from "@/components/home/Home";
import { About } from "@/components/about/About";
import { Expertise } from "@/components/expertise/Expertise";
import { Services } from "@/components/services/Services";
import { Experience } from "@/components/experience/Experience";
import { SideProjects } from "@/components/sideProjects/SideProjects";

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Expertise />
      <Services />
      <Experience />
      <MyWorks />
      {projects.map((project) => (
        <Project key={project.key}>{project}</Project>
      ))}
      <SideProjects />
      <LastWords />
      <Contact />
    </>
  );
}
