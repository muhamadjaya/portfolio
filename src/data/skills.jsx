import React from "react";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiRedux,
  SiTailwindcss,
  SiPhp,
  SiGraphql,
  SiGithub,
  SiFigma,
  SiOracle,
  SiVisualstudio,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";

export default [
  {
    title: "HTML",
    icon: <FaHtml5 className="w-full h-full text-orange-600" />,
  },
  {
    title: "CSS",
    icon: <FaCss3 className="w-full h-full text-blue-500" />,
  },
  {
    title: "Javascript",
    icon: <IoLogoJavascript className="w-full h-full text-yellow-300" />,
  },
  {
    title: "React Js",
    icon: <FaReact className="w-full h-full text-blue-300" />,
  },
  {
    title: "Redux",
    icon: <SiRedux className="w-full h-full text-purple-700" />,
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss className="w-full h-full text-blue-300" />,
  },
  {
    title: "PHP",
    icon: <SiPhp className="w-full h-full text-blue-900" />,
  },
  {
    title: "GraphQL",
    icon: <SiGraphql className="w-full h-full text-pink-600" />,
  },
  {
    title: "Github",
    icon: <SiGithub className="w-full h-full text-black" />,
  },
  {
    title: "Figma",
    icon: <SiFigma className="w-full h-full text-rose-500" />,
  },
  {
    title: "Next Js",
    icon: <TbBrandNextjs className="w-full h-full text-black" />,
  },
  {
    title: "Oracle",
    icon: <SiOracle className="w-full h-full text-red-600" />,
  },
  {
    title: "VB.Net",
    icon: <SiVisualstudio className="w-full h-full text-purple-800" />,
  },
  {
    title: "SQL Server",
    icon: <SiMicrosoftsqlserver className="w-full h-full text-red-500" />,
  },
  {
    title: "MySQL",
    icon: <GrMysql className="w-full h-full text-blue-800" />,
  },
];
