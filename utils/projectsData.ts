// import gMarvelImg from "@/public/images/projects/g-marvel.png";
// import techTicketsImg from "@/public/images/projects/tech-tickets.png";
// import restaurantImg from "@/public/images/projects/restaurant-project.png";
// import bookshelfImg from "@/public/images/projects/bookshelf.png";
// import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  description: string;
  tools: string[];
  img: string;
  demo: string;
  github: string;
};

export const projectsData = [
  {
    title: "FreshFix",
    description:
      "freshFix is a full-stack teamwork e-commerce website enabling restaurants and customers to place and manage online orders.",
    tools: [
      "JavaScript",
      "React",
      "NextJs",
      "Tailwind CSS",
      "Firebase",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "Bcrypt",
      "Passport",
      "Google OAuth",
    ],
    img: "images/projects/restaurant-project.png",
    demo: "https://capstone-team-1.vercel.app/",
    github: "https://github.com/202309-EKTA-JO-FSW/capstone-team-1",
  },
  {
    title: "Bookshelf Server",
    description:
      "Bookshelf API is a backend server use to explore and share books. Create your account and store your private book or make them public to other can explore.",
    tools: [
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "Firebase",
      "PostgreSQL",
      "JWT",
      "Bcrypt",
      "AWS",
    ],
    img: "images/projects/bookshelf.png",
    demo: "http://ec2-16-171-34-117.eu-north-1.compute.amazonaws.com/api-doc",
    github: "https://github.com/gorgees04/bookshelf_app",
  },
  {
    title: "G-Marvel",
    description:
      "G-Marvel is a project that utilizes the Marvel API to fetch and display information about Marvel comics, characters, and more.",
    tools: ["JavaScript", "TypeScript", "React", "NextJs", "Tailwind CSS"],
    img: "images/projects/g-marvel.png",
    demo: "https://marvel-app-beta-ruddy.vercel.app/",
    github: "https://github.com/gorgees04/marvel-app",
  },
  {
    title: "Tech Tickets",
    description:
      "The Tech Tickets app is a website designed to facilitate the creation, display, editing, and deletion of tickets through the implementation of CRUD (Create, Read, Update, Delete) operations.",
    tools: [
      "JavaScript",
      "TypeScript",
      "React",
      "NextJs",
      "Tailwind CSS",
      "MongoDB - Mongoose",
    ],
    img: "images/projects/tech-tickets.png",
    demo: "https://tech-tickets.vercel.app/",
    github: "https://github.com/gorgees04/tech-tickets?tab=readme-ov-file",
  },
];
