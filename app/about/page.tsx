import Bio from "../components/about/Bio";
import Experience from "../components/about/Experience";
import Languages from "../components/about/Languages";

const About = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-[50px] md:mt-[100px]">
      {/* Main */}
      <Bio />

      {/* Experience */}
      <Experience />

      {/* Lagnguages */}
      <Languages />
    </section>
  );
};

export default About;
