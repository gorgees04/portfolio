import Image from "next/image";
import profileImg from "@/public/images/about/profile.jpg";

const About = () => {
  const experience = [
    "JavaScript",
    "TypeScript",
    "React",
    "NextJS",
    "Redux",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "CLI/Shell Scripting",
    "NodeJS",
    "NOSQL",
    "MONGODB",
    "Python",
  ];

  const languages = [
    { language: "assyrian", level: "native" },
    { language: "english", level: "fluent" },
    { language: "arabic", level: "fluent" },
    { language: "kurdish", level: "fluent" },
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center mt-[50px] md:mt-[100px]">
      {/* Main */}
      <div className="flex justify-center items-center flex-col md:flex-row mb-20 px-[5%]">
        <div>
          <Image
            src={profileImg}
            alt="home_img"
            width={380}
            height={0}
            className="rounded-md shadow-lg shadow-black border-2 border-gBlue"
          />
        </div>
        <div className="flex flex-col md:ml-5 md:p-5 md:w-[600px] text-justify">
          <h1 className="text-center text-4xl font-bold m-5">Gorgees Odisho</h1>
          <div className="text-gLightBlue">
            Hello tech, I'm{" "}
            <span className="font-bold text-gBlue">Assyrian</span> from Iraq &
            currently live in Jordan, diving into the realm of web development,
            fascinated by how computers, websites, and technology come to life!
            <span className="font-bold text-gBlue"> I'm a Front-End</span>{" "}
            developer and on the path to mastering{" "}
            <span className="font-bold text-gBlue">Full-Stack</span>{" "}
            development. Through my journey, I've picked up problem-solving and
            teamwork skills, which I bring to every project I'm involved in.
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="w-full flex flex-col justify-center items-center px-[10%] md:px-[20%]">
        <h1 className="text-3xl font-bold m-5">Experience</h1>
        <div className="w-full border-2 border-gBlue bg-gBlue bg-opacity-10 rounded-lg">
          <ul className=" p-5 grid grid-cols-2 grid-flow-row gap-4 text-center">
            {experience.map((exp: string) => (
              <li key={exp} className={"text-gLightBlue"}>
                {exp}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Lagnguages */}
      <div className="my-[100px]">
        <h1 className="text-center text-3xl font-bold">Languages</h1>
        <div className="flex flex-wrap justify-center my-5">
          {languages.map((lang: { language: string; level: string }) => {
            return (
              <div key={lang.language} className="m-7 text-center">
                <h1 className="capitalize text-2xl font-bold">
                  {lang.language}
                </h1>
                <p className="text-gLightBlue capitalize">({lang.level})</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
