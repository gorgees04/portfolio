import Image from "next/image";
import profileImg from "@/public/images/about/profile.jpg";
const About = () => {
  const experience = [
    "JavaScript",
    "TypeScript",
    "Python",
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
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center mt-[50px] md:mt-[100px]">
      <div className="flex justify-center items-center flex-col md:flex-row mb-20">
        <div>
          <Image
            src={profileImg}
            alt="home_img"
            width={380}
            height={0}
            className="rounded-md shadow-lg shadow-black border-2 border-gBlue"
          />
        </div>
        <div className="flex flex-col ml-5  p-5 md:w-[600px] text-justify">
          <h1 className="text-center text-4xl font-bold m-5">Gorgees Odisho</h1>
          <div className="text-[#A6E9EB]">
            Experienced coding enthusiast turned web developer after completing
            Re:coder bootcamp. Proficient in front-end technologies like HTML,
            CSS, JavaScript, React, Next.js, and Tailwind. Skilled in backend
            with Node.js and NoSQL databases. Committed to learning and adapting
            to new technologies, adept at problem-solving, and excels in
            teamwork and communication. Passionate about building robust web
            applications.
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center px-[10%] md:px-[20%]">
        <h1 className="text-2xl font-bold m-5">Experience</h1>
        <div className="w-full border-2 border-gBlue bg-gBlue bg-opacity-10 rounded-lg">
          <ul className=" p-5 grid grid-cols-2 grid-flow-row gap-4 text-center">
            {experience.map((exp: string) => (
              <li key={exp} className="text-[#A6E9EB]">
                {exp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
