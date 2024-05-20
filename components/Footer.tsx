import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full p-14 border-t border-gBlue">
      <div className="flex flex-col md:flex-row justify-start items-center w-full">
        <p className="mr-10 text-2xl font-extrabold flex items-center">
          <span className="mr-2">
            <FaCode />
          </span>
          Assyrian Coder
        </p>
        <p className=" text-gLightBlue text-sm">
          Copyright @ 2024 Gorgees Odisho
        </p>
      </div>
      <div className="w-full text-end "></div>
    </div>
  );
};

export default Footer;
