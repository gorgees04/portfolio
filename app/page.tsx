import Image from "next/image";
import dev5 from "@/public/images/home/dev-5.png";
// import reactLogo from "@/app/ui/img/react-0.png";
// import jsLogo from "@/app/ui/img/js-0.png";
// import tsLogo from "@/app/ui/img/ts-0.png";
// import tailwindLogo from "@/app/ui/img/tailwind-0.png";
// import nodeLogo from "@/app/ui/img/node-1.png";
// import pythonLogo from "@/app/ui/img/python.png";
// import TsParticles from "./ui/components/TsParticles";

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
          <p className="text-white">This is</p>
          <h1 className="text-5xl ml-2 my-1 font-extrabold">Gorgees Odisho</h1>
          <p className="text-2xl text-right text-white">Web Developer</p>
        </div>
      </div>

      {/* <TsParticles /> */}
      {/* <div className="flex my-10 justify-around items-center h-[250px]">
        <div>
          <Image
            src={jsLogo}
            alt="home_img"
            width={80}
            height={0}
            className="rounded-md mr-20"
          />
        </div>
        <div>
          <Image
            src={tsLogo}
            alt="home_img"
            width={80}
            height={0}
            className="rounded-md mr-20"
          />
        </div>
        <div>
          <Image
            src={reactLogo}
            alt="home_img"
            width={80}
            height={0}
            className="rounded-md mr-20"
          />
        </div>
        <div>
          <Image
            src={tailwindLogo}
            alt="home_img"
            width={80}
            height={0}
            className="rounded-md mr-20"
          />
        </div>
        <div>
          <Image
            src={nodeLogo}
            alt="home_img"
            width={80}
            height={0}
            className="rounded-md mr-20"
          />
        </div>
        <div>
          <Image
            src={pythonLogo}
            alt="home_img"
            width={80}
            height={0}
            className="rounded-md mr-20"
          />
        </div>
      </div> */}
    </main>
  );
}
