"use client";
import ProjectCard from "./ProjectCard";
import { Project, projectsData } from "@/utils/projectsData";
import { motion } from "framer-motion";

const projectsVariants = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.5 },
  },
};

const Projects = () => {
  return (
    <motion.div
      variants={projectsVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ margin: "-200px", once: true }}
      className="flex flex-col justify-center items-center px-10 mb-36"
      id="projects"
    >
      <h1 className="text-4xl font-extrabold my-5">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projectsData.map((project: Project, idx: number) => (
          <motion.div variants={projectsVariants} key={idx}>
            <ProjectCard
              title={project.title}
              description={project.description}
              img={project.img}
              github={project.github}
              demo={project.demo}
              tools={project.tools}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
