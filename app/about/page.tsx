import Link from "next/link";
import Bio from "../components/about/Bio";
import Experience from "../components/about/Experience";
import Languages from "../components/about/Languages";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-[20px] md:mt-[50px]">
      {/* Main */}
      <Bio />

      {/* Experience */}
      <Experience />

      {/* Lagnguages */}
      <Languages />

      <Link
        href={"/projects"}
        className="mb-14 mx-5 text-lg md:text-lg hover:text-gLightBlue"
      >
        <p className="flex items-center">
          Take a look at what I have built
          <span className="text-3xl flex justify-end bounce-right cursor-pointer pl-3">
            <BsArrowRight />
          </span>
        </p>
      </Link>
    </section>
  );
};

export default About;
