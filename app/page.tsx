import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className="w-full relative bg-black flex flex-col justify-center items-center overflow-auto mx-auto sm:p-10 p-5 min-h-screen text-gBlue">
      <Hero />
    </main>
  );
}
