import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mineSweeperImg from "@/../public/minesweeper.png";
import communiChatImg from "@/../public/communi-chat.png";
import moviesAppImg from "@/../public/movies-app.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Tech ICT (with CS), DA-IICT",
    location: "Gandhinagar, IN",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "M.Tech CSE, IIT Madras",
    location: "Chennai, IN",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Software Engineer, Cisco Systems",
    location: "Bangalore, IN",
    description:
      "I worked as Software Engineer on developing scalable Cloud Native Firewalls (STS in SFCN). My stack included Python, Go, Docker, Kubernetes and AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Software Engineer, Leap Wallet",
    location: "Remote, IN",
    description:
      "I am currently working as Software Engineer in Leap Wallet, where I am leading the development of Leapboard, all-in-one dashboard for cosmos wallets. My stack includes React, TypeScript, REST APIs, GraphQL, and Tailwind.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Discord Clone",
    description:
      "Discord Clone with features like servers management, real-time messaging using sockets.io with fallback to polling, audio/video calls and many more!",
    tags: ["Nextjs", "React.js", "sockets.io", "postgresql", "prisma"],
    imageUrl: communiChatImg,
  },
  {
    title: "Minesweeper",
    description:
      "Recreated the classic Minesweeper with a modern UI and engaging animations using React.",
    tags: [
      "React.js",
      "JavaScript",
      "HTML",
      "Cascading Style Sheets (CSS)",
      "React Hooks",
    ],
    imageUrl: mineSweeperImg,
  },
  {
    title: "Movies App",
    description:
      "Designed and implemented a Movies Database Application with a range of features for seamless movie browsing.",
    tags: [
      "React.js",
      "JavaScript",
      "HTML",
      "Cascading Style Sheets (CSS)",
      "React Hooks",
    ],
    imageUrl: moviesAppImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Git",
  "Tailwind",
  "Recoil",
  "Framer Motion",
  "HTML",
  "CSS",
  "Node.js",
  "Next.js",
  "GraphQL",
  "Apollo",
  "Python",
  "Go",
  "Docker",
  "Kubernetes",
] as const;
