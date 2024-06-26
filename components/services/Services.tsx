"use client";
import { ReactNode } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaBusinessTime } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import { FaLaptopCode } from "react-icons/fa6";
import { motion } from "framer-motion";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    title: "Problem-Solving",
    description: "Assist with fixing bugs and issues in existing project",
    icon: <MdOutlineErrorOutline />,
  },
  {
    title: "E-commerce Websites",
    description: "Create dynamic e-commerce websites for small businesses",
    icon: <CgWebsite />,
  },
  {
    title: "Freelance",
    description: "Offer expert freelance services for various dev needs",
    icon: <FaBusinessTime />,
  },
  {
    title: "Training",
    description:
      "Help kickstart your journey as a web developer with self-teaching",
    icon: <FaLaptopCode />,
  },
];

// animation

const servicesVariants = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, staggerChildren: 0.5 },
  },
};

const Services = () => {
  return (
    <motion.div
      variants={servicesVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ margin: "-200px", once: true }}
      className="flex flex-col justify-center items-center mb-36"
      id="services"
    >
      <h1 className="text-4xl font-extrabold my-10">Services</h1>
      <motion.div
        variants={servicesVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
      >
        {services.map((service: Service, i: number) => (
          <motion.div variants={servicesVariants} key={i}>
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
