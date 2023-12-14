import { Home } from './components/home/Home.tsx';
import { Project } from './components/project/project.tsx';
import { projects } from './data/projects.tsx';
import { MyWorks } from './components/my-works/MyWorks.tsx';
import Contact from './components/contact/Contact.tsx';
import LastWords from './components/lastWords/LastWords.tsx';

export default function App() {
  return (
    <>
      <Home />
      <MyWorks />
      {projects.map((project) => (
        <Project>{project}</Project>
      ))}
      <LastWords />
      <Contact />
    </>
  );
}
