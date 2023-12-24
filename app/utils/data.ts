import gMarvelImg from "@/public/images/projects/g-marvel.png";
import techTicketsImg from "@/public/images/projects/tech-tickets.png";

export const projectsData = [
  {
    name: "G-Marvel",
    descrption:
      "G-Marvel is a project that utilizes the Marvel API to fetch and display information about Marvel comics, characters, and more.",
    tools: ["JavaScript", "TypeScript", "React", "NextJs", "Tailwind CSS"],
    img: gMarvelImg,
    demo: "https://marvel-app-beta-ruddy.vercel.app/",
    github: "https://github.com/gorgees04/marvel-app",
  },
  {
    name: "Tech Tickets",
    descrption:
      "The Tech Tickets app is a website designed to facilitate the creation, display, editing, and deletion of tickets through the implementation of CRUD (Create, Read, Update, Delete) operations.",
    tools: [
      "JavaScript",
      "TypeScript",
      "React",
      "NextJs",
      "Tailwind CSS",
      "MongoDB - Mongoose",
    ],
    img: techTicketsImg,
    demo: "https://tech-tickets.vercel.app/",
    github: "https://github.com/gorgees04/tech-tickets?tab=readme-ov-file",
  },
];
