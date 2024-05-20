import React from "react";
import ProjectCard from "./ProjectCard";
import { Project, projectsData } from "@/utils/projectsData";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 mb-36">
      <h1 className="text-4xl font-extrabold my-5">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {projectsData.map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            img={project.img}
            github={project.github}
            demo={project.demo}
            tools={project.tools}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
