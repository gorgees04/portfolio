import { StaticImageData } from "next/image";

type Skill = { name: string; img: StaticImageData };

const SkillsCollection = ({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl capitalize">{title}</h1>
      <div className="flex flex-wrap font-blod my-5">
        {skills.map((skill: Skill, idx: number) => (
          <div key={idx} className="text-lg mr-5 text-gLightBlue capitalize">
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCollection;
