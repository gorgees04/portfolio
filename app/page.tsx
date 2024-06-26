import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/about/AboutMe";
import ContactUs from "@/components/contact-us/ContactUs";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <main className="w-full relative bg-black flex flex-col justify-center items-center overflow-auto mx-auto text-gBlue">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Projects />
      <ContactUs />
      <Footer />
    </main>
  );
}
