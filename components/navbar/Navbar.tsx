"use client";
import { motion } from "framer-motion";
import { Social, social } from "@/utils/contactData";
import { FaCode } from "react-icons/fa";

const iconAnim = {
  hidden: { x: "-100vh" },
  show: {
    x: 1,
    transition: { duration: 0.5, type: "spring" },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "linear",
      duration: 1,
    },
  },
};

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-10 md:mx-24 w-[90%]">
      <motion.h1
        className="text-base md:text-xl font-extrabold flex items-center"
        variants={iconAnim}
        initial="hidden"
        animate="show"
        whileInView={{ opacity: 1 }}
      >
        <span className="mr-2">
          <FaCode />{" "}
        </span>
        Assyrian Coder
      </motion.h1>

      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="flex justify-end items-center text-sm"
      >
        {social.map((soc: Social) => (
          <motion.div
            variants={item}
            key={soc.name}
            className="m-5 text-base md:text-xl text-gLightBlue;"
          >
            <a href={soc.link} target="_blank">
              {soc.icon}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Navbar;
