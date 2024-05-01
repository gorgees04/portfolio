import Image from "next/image";
import dev5 from "@/public/images/home/dev-5.png";
import { LuMoveRight } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-10 pt-[100px] sm:pt-[100px]">
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
          <Link href={"/about"}>
            <div className="text-5xl flex justify-end bounce-right hover:text-gLightBlue cursor-pointer">
              <BsArrowRight />
            </div>
          </Link>
        </div>
      </div>
      <Link
        href={"/projects"}
        className="mt-24 mb-10 text-lg md:text-lg hover:text-gLightBlue"
      >
        <p className="flex items-center">
          Take a look at what I have built
          <span className="text-3xl flex justify-end bounce-right cursor-pointer pl-3">
            <BsArrowRight />
          </span>
        </p>
      </Link>
    </main>
  );
}
