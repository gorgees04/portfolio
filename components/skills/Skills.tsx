"use client";
import React, { useEffect, useState } from "react";
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

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center my-16 w-full px-7">
      <h1 className="text-4xl font-extrabold my-5">Technical Skills</h1>
      <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={skills} direction="right" speed="slow" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gBlackLight p-5 rounded-lg">
        <SkillsCollection title="programing languages" skills={languages} />
        <SkillsCollection title="front end" skills={frontEnd} />
        <SkillsCollection title="back end " skills={backEnd} />
        <SkillsCollection title="database" skills={database} />
        <SkillsCollection title="devops" skills={devops} />
      </div>
    </div>
  );
};

export default Skills;
