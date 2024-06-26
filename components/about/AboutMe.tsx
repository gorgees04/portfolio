"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import devImg from "@/public/images/dev/dev-2.jpg";

const AboutMe = () => {
  return (
    <section className="w-full px-4 mb-36">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        id="about-me"
        className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 w-full bg-[#111212] rounded-2xl text-center overflow-hidden"
      >
        <div className="md:col-span-1 flex justify-center item-center mx-auto max-w-[500px] w-full">
          <Image
            src={devImg}
            alt="home_img"
            priority={true}
            className="rounded"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            margin: "-200px",
            once: true,
          }}
          transition={{
            ease: "linear",
            duration: 2,
            delay: 0.5,
            x: { duration: 1 },
          }}
          className="md:col-span-1 lg:col-span-2 my-5"
        >
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            About Me
          </h1>
          <ul className="text-justify flex flex-col justify-center p-2 sm:p-5 text-[12px] lg:text-[15px] lg:px-10 text-gLightBlue">
            <li>
              As a web developer, I have experience in both front-end and
              back-end development, where I focus on creating engaging user
              experiences. I enjoy using React, Redux, and Tailwind CSS for the
              front-end, along with other tools. On the back-end, I work with
              PostgreSQL and Node.js to build strong API servers. I handle tasks
              like authentication, authorization, and explore different
              databases like MongoDB.{" "}
            </li>
            <br />
            <li>
              Started learning a couple of years ago, and yes, it was tough at
              first! But CS50 opened my eyes to the exciting world of computer
              science, and I fell in love with coding and problem-solving.
            </li>
            <br />
            <li>
              Additionally, I underwent an immersive learning experience at the
              ReCoder bootcamp, refining my skills and deepening my
              understanding of software development & I&apos;ve gained
              invaluable experience in collaborating with my team and our
              exceptional trainers.
            </li>
            <br />
            <li>
              Sci-fi movies are my jam! They spark my imagination and drive me
              to explore new things. I&apos;m all about building my own stuff,
              dreaming of the day when the kind of tech we see in those movies
              becomes real.
            </li>
            <br />
            <li>
              Let&apos;s team up, dream big, and code our way into the future!
              Hit me up, I&apos;m always down for a chat about tech, coding, or
              the latest sci-fi flick. Cheers to the journey ahead!
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
