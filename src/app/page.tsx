import { MyWorks } from "@/components/my-works/MyWorks";
import { projects } from "@/data/projects";
import { Project } from "@/components/project/project";
import LastWords from "@/components/lastWords/LastWords";
import Contact from "@/components/contact/Contact";
import { Home } from "@/components/home/Home";

export default function Page() {
  return (
    <>
      <Home />
      <MyWorks />
      {projects.map((project) => (
        <Project key={project.key}>{project}</Project>
      ))}
      <LastWords />
      <Contact />
    </>
  );
}
