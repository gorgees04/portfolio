import { ReactNode } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaBusinessTime } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import { FaLaptopCode } from "react-icons/fa6";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    title: "Problem-Solving",
    description: "Help to solev problem and bugs of existing project",
    icon: <MdOutlineErrorOutline />,
  },
  {
    title: "E-commerce Websites",
    description: "Build dynamic e-commerce websites for small businesses",
    icon: <CgWebsite />,
  },
  {
    title: "Freelance",
    description:
      "Provide expert freelance services for various development needs",
    icon: <FaBusinessTime />,
  },
  {
    title: "Traning",
    description:
      "Provide expert freelance services for various development needs",
    icon: <FaLaptopCode />,
  },
];

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-20">
      <h1 className="text-4xl font-extrabold my-10">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {services.map((service: Service, i: number) => (
          <ServiceCard
            key={i}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
