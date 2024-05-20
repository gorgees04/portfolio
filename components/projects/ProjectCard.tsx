import React from "react";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { FaCode } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { Project } from "@/utils/projectsData";

const ProjectCard = ({
  img,
  title,
  description,
  github,
  demo,
  tools,
}: Project) => {
  return (
    <div className="bg-gBlackLight overflow-hidden rounded-lg">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${img})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <a
            href={github}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <FaCode className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </a>
          <a
            href={demo}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <IoEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </a>
        </div>
      </div>
      <div className=" rounded-b-xl mt-3 bg-[#181818]py-6 p-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <div className="flex flex-wrap my-2">
          {tools.map((tool: string, idx: number) => (
            <div key={idx}>
              <p className="mr-3 text-gLightBlue text-sm">{tool}</p>
            </div>
          ))}
        </div>
        <p className="text-[#ADB7BE] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
