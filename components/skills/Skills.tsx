"use client";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import {
  Skill,
  skills,
  languages,
  frontEnd,
  backEnd,
  database,
  devops,
} from "@/utils/skillsIcons";
import SkillsCollection from "./SkillsCollection";
import { motion } from "framer-motion";

const skillsVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.1, staggerChildren: 0.5 },
  },
};

const Skills = () => {
  return (
    <motion.div
      variants={skillsVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center mb-36 w-full px-7"
      id="skills"
    >
      <h1 className="text-4xl font-extrabold my-5">Technical Skills</h1>
      <div className=" w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={skills} direction="right" speed="slow" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gBlackLight p-5 rounded-lg">
        <SkillsCollection title="programing languages" skills={languages} />
        <SkillsCollection title="front end" skills={frontEnd} />
        <SkillsCollection title="back end " skills={backEnd} />
        <SkillsCollection title="database" skills={database} />
        <SkillsCollection title="devops" skills={devops} />
      </div>
    </motion.div>
  );
};

export default Skills;
