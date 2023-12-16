"use client";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const pages = ["home", "about", "projects", "contact"];

  const selectedPage = (page: string) => {
    if (pathname === "/" && page === "home") {
      return "text-red-700";
    } else if (`/${page}` === `${pathname}`) {
      return "text-red-700";
    } else {
      return "";
    }
  };

  return (
    <Navbar fluid={true} rounded={true} className="bg-black">
      <Navbar.Brand href="https://flowbite.com/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Galaxy Coder
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {pages.map((page, id) => {
          console.log("pathname", pathname, "page", page);
          return (
            <div key={id} className="text-lg font-bold text-center">
              <Link
                href={page === "home" ? "/" : `/${page}`}
                className={selectedPage(page)}
              >
                {page}
              </Link>
            </div>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
