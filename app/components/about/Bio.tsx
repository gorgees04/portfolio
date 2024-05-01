"use client";
import Image from "next/image";
import profileImg from "@/public/images/about/202309-EKTA-JO-FSW_Gorgees_Odisho-2.jpg";
import { BsChevronCompactUp } from "react-icons/bs";
import { LuPlusCircle } from "react-icons/lu";
import { useState } from "react";

const Bio = () => {
  const [showMore, setShowMore] = useState(false);
  const resumLink = process.env.RESUME_LINK;

  return (
    <div className="flex flex-col items-center mb-5 px-[5%]">
      <div className="flex justify-center items-center flex-col md:flex-row mb-5">
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
            currently live in Jordan, embarking into the dynamic world of web
            development.
            <span className="font-bold text-gBlue"> As a Full-Stack</span>{" "}
            developer. I'm captivated by the process of transforming ideas into
            digital realities. Through my journey, I've picked up not only
            technical skills but skills for problem-solving and collaboration,
            which I bring to every project I'm involved in.
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
      <div className="my-10 md:my-1 flex flex-col items-center">
        {showMore && (
          <div className="lg:w-[980px] text-gLightBlue text-justify">
            <ul>
              <li>
                💼 As a web developer, I have experience in both front-end and
                back-end development, where I focus on creating engaging user
                experiences. I enjoy using React, Redux, and Tailwind CSS for
                the front-end, along with other tools. On the back-end, I work
                with PostgreSQL and Node.js to build strong API servers. I
                handle tasks like authentication, authorization, and explore
                different databases like MongoDB.{" "}
              </li>
              <br />
              <li>
                🌟 Started learning a couple of years ago, and yes, it was tough
                at first! But CS50 opened my eyes to the exciting world of
                computer science, and I fell in love with coding and
                problem-solving.
              </li>
              <br />
              <li>
                🎓 Additionally, I underwent an immersive learning experience at
                the ReCoder bootcamp, refining my skills and deepening my
                understanding of software development & I've gained invaluable
                experience in collaborating with my team and our exceptional
                trainers.
              </li>
              <br />
              <li>
                🛸 Sci-fi movies are my jam! They spark my imagination and drive
                me to explore new things. I'm all about building my own stuff,
                dreaming of the day when the kind of tech we see in those movies
                becomes real.
              </li>
              <br />
              <li>
                💬 Let's team up, dream big, and code our way into the future!
                Hit me up, I'm always down for a chat about tech, coding, or the
                latest sci-fi flick. Cheers to the journey ahead! 🚀
              </li>
            </ul>
          </div>
        )}
        {showMore ? (
          // minimize extra paragraph
          <div
            className="text-6xl cursor-pointer hover:text-gLightBlue px-2 my-5"
            onClick={() => setShowMore(!showMore)}
          >
            <BsChevronCompactUp />
          </div>
        ) : (
          // show extra paragraph
          <div
            className="text-5xl cursor-pointer hover:text-gLightBlue px-2"
            onClick={() => setShowMore(!showMore)}
          >
            <LuPlusCircle />
          </div>
        )}
      </div>
    </div>
  );
};

export default Bio;
