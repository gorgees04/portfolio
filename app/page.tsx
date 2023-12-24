import Image from "next/image";
import dev5 from "@/public/images/home/dev-5.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-10 pt-[100px] sm:pt-[150px]">
      <div className="flex flex-col md:flex-row">
        <div>
          <Image
            src={dev5}
            alt="home_img"
            width={600}
            height={0}
            className="rounded-md mr-20 shadow-lg shadow-black"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-gLightBlue">This is</p>
          <h1 className="text-5xl ml-2 my-1 font-extrabold">Gorgees Odisho</h1>
          <p className="text-2xl text-right text-gLightBlue">Web Developer</p>
        </div>
      </div>
    </main>
  );
}
