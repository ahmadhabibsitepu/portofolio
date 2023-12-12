import { StaticImageData } from "next/image";

import logo from "@/public/logo.svg";
import menuIcon from "@/public/menuIcon.svg";
import closeIcon from "@/public/closeIcon.svg";
import hand from "@/public/hand.svg";
import html from "@/public/tech-icon/html.svg";
import css from "@/public/tech-icon/css.svg";
import javascript from "@/public/tech-icon/javascript.svg";
import reactjs from "@/public/tech-icon/reactjs.svg";
import nextjs from "@/public/tech-icon/nextjs.svg";
import tailwindcss from "@/public/tech-icon/tailwindcss.svg";
import typescript from "@/public/tech-icon/typescript.svg";
import nodejs from "@/public/tech-icon/nodejs.svg";
import mysql from "@/public/tech-icon/mysql.svg";
import mongodb from "@/public/tech-icon/mongodb.svg";
import prisma from "@/public/tech-icon/prisma.svg";
import github from "@/public/tech-icon/github.svg";
import portofolio from "@/public/work-images/portofolio.svg";
import portofolioHover from "@/public/work-images/portofolio-hover.svg";
import pcms from "@/public/work-images/pcms.svg";
import pcmsHover from "@/public/work-images/pcms-hover.svg";
import anjab from "@/public/work-images/anjab.svg";
import anjabHover from "@/public/work-images/anjab-hover.svg";

type Service = { title: string; description: string };
type TechIcon = { image: StaticImageData; text: string };
type Work = {
  image: StaticImageData;
  hover: StaticImageData;
  alt: string;
  title: string;
  user: string;
  description: string;
  note: string;
  tech: string;
};
type Contact = { label: string; value: string; action: string };
type Education = {
  location: string;
  start: string;
  finish: string;
  description?: string;
};
type Experience = {
  location: string;
  start: string;
  finish: string;
  role: string;
  description?: string;
};

const jobTitles: string[] = [
  "Full Stack Web Developer",
  "Front-End Web Developer",
  "Back-End Web Developer",
];

const services: Service[] = [
  {
    title: "Website Development",
    description:
      "Create a fully functioned custom website from your web design / idea to fulfill your needs.",
  },
  {
    title: "Front-End Development",
    description:
      "Design and implement visually appealing, responsive, and user-friendly UI/UX for your websites.",
  },
  {
    title: "Back-End Development",
    description:
      "Build the server-side function for your website's data management and REST API services.",
  },
];

const techIcons: TechIcon[] = [
  { image: html, text: "HTML" },
  { image: css, text: "CSS" },
  { image: javascript, text: "JavaScript" },
  { image: reactjs, text: "React JS" },
  { image: nextjs, text: "Next JS" },
  { image: tailwindcss, text: "Tailwind CSS" },
  { image: typescript, text: "TypeScript" },
  { image: nodejs, text: "Node JS" },
  { image: mysql, text: "MySQL" },
  { image: mongodb, text: "MongoDB" },
  { image: prisma, text: "Prisma" },
  { image: github, text: "GitHub" },
];

const works: Work[] = [
  {
    image: portofolio,
    hover: portofolioHover,
    alt: "My Portofolio",
    title: "My Portofolio",
    user: "Personal Project",
    description: "My personal project, a portofolio website about myself.",
    note: "A full stack website developed by me as a Sole Full Stack Web Developer",
    tech: "Next JS, TypeScript, Tailwind CSS, shadcn/ui, MySQL, Prisma, Puppeteer",
  },
  {
    image: pcms,
    hover: pcmsHover,
    alt: "Contract Management System",
    title: "Contract Management System",
    user: "PT Pelindo Multi Terminal",
    description:
      "A web-based application to manage contract data related to cooperation agreements within the operational area of PT Pelindo Multi Terminal.",
    note: "Separated front-end and back-end system developed by me as a Sole Full Stack Web Developer",
    tech: "React JS, Tailwind CSS, JavaScript, Node JS, Express JS, MongoDB",
  },
  {
    image: anjab,
    hover: anjabHover,
    alt: "Analisis Jabatan (ANJAB)",
    title: "Analisis Jabatan (ANJAB)",
    user: "Dinas Komunikasi dan Informatika Provinsi Sumatera Utara",
    description:
      "A web-based application to manage data about job positions within the scope of Dinas Komunikasi dan Informatika Provinsi Sumatera Utara.",
    note: "A full stack website developed in a team, my role in the team was a Full Stack Programmer.",
    tech: "HTML, CSS, Bootstrap, PHP, MySQL",
  },
];

const contacts: Contact[] = [
  {
    label: "WhatsApp",
    value: "+6282218802442",
    action:
      "https://api.whatsapp.com/send?phone=6282218802442&text=Hello%20Habib",
  },
  {
    label: "Email",
    value: "ahmadhabibsitepu@gmail.com",
    action: "mailto:ahmadhabibsitepu@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "ahmadhabibsitepu",
    action: "http://linkedin.com/in/ahmadhabibsitepu",
  },
];

const educations: Education[] = [
  {
    location: "SDIT Al-Hijrah, Medan",
    start: "2004",
    finish: "2010",
    description: "",
  },
  {
    location: "SMPIT Al-Fityan School, Medan",
    start: "2010",
    finish: "2013",
    description: "",
  },
  {
    location: "SMAT Krida Nusantara, Bandung",
    start: "2013",
    finish: "2016",
    description: "Ilmu Pengetahuan Alam (IPA)",
  },
  {
    location: "Universitas Sumatera Utara, Medan",
    start: "2016",
    finish: "2022",
    description: "S-1 Ilmu Komputer, IPK/GPA: 3.74",
  },
];

const experiences: Experience[] = [
  {
    location: "Dinas Kominfo Provinsi Sumatera Utara",
    start: "Jun 2019",
    finish: "Aug 2019",
    role: "Member of Application Development for E-Government Services Section (Internship)",
    description:
      "Working as a web programmer in a team for developing a web-based application to manage data about job positions within the scope of Dinas Komunikasi dan Informatika Provinsi Sumatera Utara.",
  },
  {
    location: "PT Pelindo Multi Terminal",
    start: "Nov 2022",
    finish: "Jun 2023",
    role: "Member of Commercial and Customer Relations Division (Internship)",
    description:
      "Working as an intern employee, performing administrative document processing regarding port services cooperation, analyzing traffic and production of goods, developing applications for the division, and providing support to the division.",
  },
];

export {
  logo,
  menuIcon,
  closeIcon,
  hand,
  jobTitles,
  services,
  techIcons,
  works,
  contacts,
  educations,
  experiences,
};
export type { Service, TechIcon, Work, Contact, Education, Experience };
