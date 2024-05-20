import jsImg from "@/public/images/icons/javascript.png";
import tsImg from "@/public/images/icons/typescript.png";
import pythonImg from "@/public/images/icons/python.png";
import reactImg from "@/public/images/icons/react.png";
import nextjsImg from "@/public/images/icons/nextjs.png";
import reduxImg from "@/public/images/icons/redux.png";
import htmlImg from "@/public/images/icons/html.png";
import cssImg from "@/public/images/icons/css.png";
import tailwindImg from "@/public/images/icons/tailwind.png";
import bootstrapImg from "@/public/images/icons/bootstrap.png";
import materialImg from "@/public/images/icons/material-ui.png";
import nodejsImg from "@/public/images/icons/nodejs.png";
import expressjsImg from "@/public/images/icons/exoressjs.png";
import apiImg from "@/public/images/icons/api.png";
import sqlImg from "@/public/images/icons/sql.png";
import nosqlImg from "@/public/images/icons/nosql.png";
import gitImg from "@/public/images/icons/git.png";
import cliImg from "@/public/images/icons/cli.png";
import dockerImg from "@/public/images/icons/docker.png";
import postgresqlImg from "@/public/images/icons/postgresql.png";
import mongodbImg from "@/public/images/icons/mongodb.png";
import { StaticImageData } from "next/image";

export type Skill = { name: string; img: StaticImageData };

export const skills: Skill[] = [
  { name: "javaScript", img: jsImg },
  { name: "typescript", img: tsImg },
  { name: "Python", img: pythonImg },
  { name: "react", img: reactImg },
  { name: "nextJS", img: nextjsImg },
  { name: "redux", img: reduxImg },
  { name: "HTML", img: htmlImg },
  { name: "CSS", img: cssImg },
  { name: "tailwind CSS", img: tailwindImg },
  { name: "bootstrap", img: bootstrapImg },
  { name: "material UI", img: materialImg },
  { name: "nodeJS", img: nodejsImg },
  //   { name: "expressJS", img: expressjsImg },
  { name: "API", img: apiImg },
  { name: "SQL", img: sqlImg },
  //   { name: "NOSQL", img: nosqlImg },
  { name: "git", img: gitImg },
  { name: "CLI", img: cliImg },
  { name: "docker", img: dockerImg },
  { name: "PostgreSQL (SQL)", img: postgresqlImg },
  { name: "MongoDB (NOSQL)", img: mongodbImg },
];

export const languages = [
  { name: "javaScript", img: jsImg },
  { name: "typescript", img: tsImg },
  { name: "Python", img: pythonImg },
];

export const frontEnd = [
  { name: "react", img: reactImg },
  { name: "nextJS", img: nextjsImg },
  { name: "redux", img: reduxImg },
  { name: "HTML", img: htmlImg },
  { name: "CSS", img: cssImg },
  { name: "tailwind CSS", img: tailwindImg },
  { name: "bootstrap", img: bootstrapImg },
  { name: "material UI", img: materialImg },
];

export const backEnd = [
  { name: "nodeJS", img: nodejsImg },
  { name: "expressJS", img: expressjsImg },
  { name: "API", img: apiImg },
  { name: "SQL", img: sqlImg },
  { name: "NOSQL", img: nosqlImg },
];

export const devops = [
  { name: "git", img: gitImg },
  { name: "CLI", img: cliImg },
  { name: "docker", img: dockerImg },
];

export const database = [
  { name: "PostgreSQL (SQL)", img: postgresqlImg },
  { name: "MongoDB (NOSQL)", img: mongodbImg },
];

export default skills;
