import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/about/AboutMe";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="w-full relative bg-black flex flex-col justify-center items-center overflow-auto mx-auto text-gBlue">
      <Navbar />
      <Hero />

      <AboutMe />
    </main>
  );
}
