import { ReactNode } from "react";
import { FaGithubAlt } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

export type Social = {
  name: string;
  link: string;
  place: string;
  icon: ReactNode;
};
// connection platforms
export const social: Social[] = [
  {
    name: "github",
    link: "https://github.com/gorgees04",
    place: "github.com/gorgees04",
    icon: <FaGithubAlt />,
  },
  {
    name: "linkedIn",
    link: "https://www.linkedin.com/in/gorgees",
    place: "linkedin.com/in/gorgees",
    icon: <FiLinkedin />,
  },
  {
    name: "email",
    link: "mailto:gorgees041@gmail.com",
    place: "gorgees041@gmail.com",
    icon: <MdOutlineAlternateEmail />,
  },
  {
    name: "address",
    link: "https://www.google.com/maps/place/Melbourne+VIC",
    place: "Melbourne, Australia",
    icon: <FaMapLocationDot />,
  },
];
