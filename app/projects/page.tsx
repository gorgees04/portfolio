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
      <div className="m-2">
        {projectsData.map((project: Project) => {
          return (
            <div
              key={project.name}
              className="border-2 border-gBlue my-14 flex flex-col items-center md:flex-row rounded-lg bg-gBlue bg-opacity-10 overflow-hidden p-2 md:p-4"
            >
              <div className="">
                <Image
                  src={project.img}
                  alt={project.name}
                  width={350}
                  className="border-2 border-gBlue rounded-lg md:w-[500px]"
                  priority={true}
                />
              </div>
              <div className="w-[350px] md:w-[400px] flex flex-col items-center my-3 p-1 md:mx-4">
                <h1 className="text-xl font-extrabold">{project.name}</h1>
                <p className="text-gLightBlue text-justify text-sm my-3">
                  {project.descrption}
                </p>
                <div className="flex flex-wrap mb-5">
                  {project.tools.map((tool) => (
                    <p key={tool} className="mr-3 text-bold">
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="flex justify-around w-full">
                  <button className="bg-gray-800 p-2 rounded hover:bg-gray-600">
                    <a href={project.github} target="_blank">
                      GitHub
                    </a>
                  </button>
                  <button className="bg-gray-800 p-2 rounded hover:bg-gray-600">
                    <a href={project.demo} target="_blank">
                      LIVE DEMO
                    </a>
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
