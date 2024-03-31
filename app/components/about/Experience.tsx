import ExpField from "./ExpField";

const Experience = () => {
  const languages = ["JavaScript", "Python"];

  const frontEnd = [
    "TypeScript",
    "React",
    "NextJS",
    "Redux",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "CLI/Shell Scripting",
  ];

  const backEnd = [
    "SQL/NOSQL",
    "MongoDB",
    "NodeJS",
    "ExpressJS",
    "API",
    "Docker",
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center px-[10%] md:px-[20%]">
      <h1 className="text-3xl font-bold m-5">Experience</h1>
      <div className="w-full border-2 border-gBlue bg-gBlue bg-opacity-10 rounded-lg">
        <ExpField title={"programming langauage"} techs={languages} />
        <ExpField title={"front End"} techs={frontEnd} />
        <ExpField title={"Back End"} techs={backEnd} />
      </div>
    </div>
  );
};

export default Experience;
