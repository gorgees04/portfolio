"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";

const NavBar = () => {
  const route = useRouter();
  const [nav, setNav] = useState(false);
  const pathname = usePathname();
  const pages = ["home", "about", "projects", "contact"];

  // check from path to highlight the page
  const selectedPage = (page: string) => {
    if (pathname === "/" && page === "home") {
      return " bg-gray-800 ";
    } else if (`/${page}` === `${pathname}`) {
      return " bg-gray-800 ";
    } else {
      return "";
    }
  };

  const handleClick = (page: string = "") => {
    setNav(!nav);
    selectedPage(page);
    if (page !== "") {
      if (page == "home") {
        setNav(false);
        route.push("/");
      } else {
        route.push(page);
      }
    }
  };

  return (
    <nav className="h-16 static w-full flex items-center px-3 justify-between ">
      <h1 className="text-xl font-semibold">Galaxy Coder</h1>
      <div>
        <div
          className="text-3xl cursor-pointer md:hidden"
          onClick={() => handleClick()}
        >
          {nav ? "x" : <LiaBarsSolid />}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {pages.map((page, id) => (
            <li
              key={id}
              onClick={() => handleClick(page)}
              className={`p-4 capitalize font-bold rounded-xl  cursor-pointer duration-300 ${selectedPage(
                page
              )}`}
            >
              {page}
            </li>
          ))}
        </ul>

        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "hidden"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold m-4">Galaxy Coder</h1>

          {/* Mobile Navigation Items */}
          {pages.map((page, id) => (
            <li
              key={id}
              onClick={() => handleClick(page)}
              className={`py-4 font-bold capitalize  border-b  hover:text-gray-200 duration-300 cursor-pointer border-gray-600 text-center ${selectedPage(
                page
              )}`}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
