import Image, { StaticImageData } from "next/image";
import { projectsData } from "../utils/data";

interface Project {
  name: string;
  descrption: string;
  tools: string[];
  img: StaticImageData;
  demo: string;
  github: string;
}

const Projects = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div>
        {projectsData.map((project: Project) => {
          return (
            <div
              key={project.name}
              className="border-2 border-gBlue m-10 flex flex-col items-center md:flex-row rounded-lg bg-gBlue bg-opacity-10 overflow-hidden p-2"
            >
              <div className="">
                <Image
                  src={project.img}
                  alt={project.name}
                  width={420}
                  className="border-2 border-gBlue rounded-lg"
                />
              </div>
              <div className="w-[400px] flex flex-col items-center ">
                <h1 className="text-xl font-bold">{project.name}</h1>
                <p className="text-gLightBlue text-justify text-sm">
                  {project.descrption}
                </p>
                <div className="flex flex-wrap">
                  {project.tools.map((tool) => (
                    <p key={tool} className="mr-2 text-sm">
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="flex justify-around w-full">
                  <button className="bg-gray-800 p-2 rounded ">
                    <a href={project.github}>GitHub</a>
                  </button>
                  <button>
                    <a href={project.demo}>LIVE DEMO</a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
