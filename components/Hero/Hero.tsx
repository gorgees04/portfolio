"use client";
import React from "react";
import profileImg from "@/public/images/profile/profile-4.png";
import scrollIcon from "@/public/images/dev/scroll.png";
import Image from "next/image";
import HeroBtn from "./HeroBtn";
import HireBtn from "./HireBtn";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const btnAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 2,
      delay: 1,
      x: { duration: 1 },
    },
  },
};

const TextVariants = {
  hidden: {
    x: -500,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

// resume's url
const resumUrl = process.env.RESUME_URL;

const Hero = () => {
  return (
    <div
      className=" relative grid grid-rows-1 md:grid-cols-2 md:gap-5 lg:gap-10 w-full p-5 mb-24 xl:mb-0 xl:min-h-[880px]"
      id="home"
    >
      {/* section 1 */}
      <motion.div
        variants={TextVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col justify-start items-start col-span-1 lg:pl-12 lg:pt-28"
      >
        {/* Title */}
        <motion.div
          variants={TextVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center text-3xl xl:text-5xl my-10"
        >
          <motion.p variants={TextVariants} className="text-gLightBlue">
            This is
          </motion.p>
          <motion.h1
            variants={TextVariants}
            className="text-4xl md:text-5xl xl:text-7xl ml-2 my-1 font-extrabold"
          >
            Gorgees Odisho
          </motion.h1>
          <motion.p
            variants={TextVariants}
            className="text-left text-gLightBlue ml-3"
          >
            <span className="text-white">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Fron-End",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Back-End",
                  1000,
                  "Full Stack",
                  1000,
                ]}
                wrapper="span"
                speed={40}
                // style={{ fontSize: "40px", display: "inline-block" }}
                className="inline-block"
                repeat={Infinity}
              />
            </span>
            Developer
          </motion.p>
        </motion.div>

        {/* paragraph */}
        <motion.div
          variants={TextVariants}
          className="text-gLightBlue text-justify opacity-70"
        >
          Hello tech, I&apos;m{" "}
          <span className="font-bold text-gBlue">Assyrian</span> from Iraq &
          currently live in Jordan, embarking into the dynamic world of web
          development.
          <span className="font-bold text-gBlue"> As a Full-Stack</span>{" "}
          developer. I&apos;m captivated by the process of transforming ideas
          into digital realities. Through my journey, I&apos;ve picked up not
          only technical skills but skills for problem-solving and
          collaboration, which I bring to every project I&apos;m involved in.
        </motion.div>

        {/* buttons */}
        <div className="w-full flex justify-center items-center my-8 ">
          <motion.div variants={btnAnim} initial="hidden" animate="show">
            <HireBtn title="HIRE ME" url={"#contact-me"} />
          </motion.div>
          {/* <motion.div variants={btnAnim} initial="hidden" animate="show">
            <HeroBtn title="CV / RESUME" url={resumUrl} />
          </motion.div> */}
        </div>
      </motion.div>

      {/* section 2 */}
      <motion.div
        variants={TextVariants}
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="col-span-1 flex justify-center lg:justify-center items-center"
      >
        <Image
          src={profileImg}
          alt="home_img"
          width={580}
          height={0}
          priority={true}
          className="rounded-md shadow-lg shadow-black border-2 border-gBlue w-[400px] md:w-[300px] lg:w-[400px] xl:w-[500px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 hidden sm:flex"
      >
        <Image
          src={scrollIcon}
          alt="scroll icon"
          width={40}
          priority={true}
        ></Image>
      </motion.div>
    </div>
  );
};

export default Hero;
