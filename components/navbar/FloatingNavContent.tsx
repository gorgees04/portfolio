"use client";
import React from "react";
import { FloatingNav } from "../ui/FloatingNavbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FaBusinessTime } from "react-icons/fa";
import { GoTools, GoProjectSymlink } from "react-icons/go";

export function FloatingNavContent() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4" />,
    },
    {
      name: "About",
      link: "#about-me",
      icon: <IconUser className="h-4 w-4" />,
    },
    {
      name: "Services",
      link: "#services",
      icon: <FaBusinessTime className="h-4 w-4" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <GoTools className="h-4 w-4" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <GoProjectSymlink className="h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "#contact-me",
      icon: <IconMessage className="h-4 w-4" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      {/* <DummyContent /> */}
    </div>
  );
}
