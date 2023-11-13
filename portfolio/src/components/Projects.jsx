import ProjectItem from "./ProjectItem";
import { landing } from "../../assets/health-plus/index";
import rick1 from "../../assets/rickandmorty/rick1.png";
import tnt from "../../assets/tnt/tnt.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8 text-base font-normal text-stone-500">
        + 1 year Experience as a software developer. In my previous experience I
        joined work teams under agile methodologies. I learned a lot about
        importance of relationships in work groups, that's why I always seek the
        goal of improving my skills, technical and human, as well as those of my
        colleagues.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={landing} title="HealthPlus" />
        <ProjectItem img={rick1} title="Rick and Morty" />
        <ProjectItem img={tnt} title="Tnt-Market" />
      </div>
    </div>
  );
};

export default Projects;
