import Image from "next/image";
import profileImg from "@/public/images/about/202309-EKTA-JO-FSW_Gorgees_Odisho-2.jpg";

const Bio = () => {
  const resumLink = process.env.RESUME_LINK;
  console.log(resumLink);
  return (
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
          Hello tech, I'm <span className="font-bold text-gBlue">Assyrian</span>{" "}
          from Iraq & currently live in Jordan, diving into the realm of web
          development, fascinated by how computers, websites, and technology
          come to life!
          <span className="font-bold text-gBlue"> I'm a Full-Stack</span>{" "}
          developer. Through my journey, I've picked up problem-solving and
          teamwork skills, which I bring to every project I'm involved in.
        </div>

        {/* Resume download butto */}
        <div className="mt-10 text-center">
          <a
            href={resumLink}
            className="border-2 border-gBlue bg-gBlue bg-opacity-10 rounded-md p-4 text-lg font-bold hover:bg-gray-600"
            target="_blank"
          >
            <button>CV / Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bio;
