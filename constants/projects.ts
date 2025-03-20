import { StaticImageData } from "next/image";

interface Project {
  id: number;
  title: string;
  date: string;
  image: StaticImageData;
  secondImage?: StaticImageData;
  link: string;
}

import zusebingo from "@/public/images/projects/zusebingo_1.png";
import zusebingo2 from "@/public/images/projects/zusebingo_2.png";

import tigat from "@/public/images/projects/tigat_1.png";
import tigat2 from "@/public/images/projects/tigat_2.png";

import vibecard from "@/public/images/projects/vibecard_1.png";
import vibecard2 from "@/public/images/projects/vibecard_2.png";

import keyfundme from "@/public/images/projects/keyfundme_1.png";
import keyfundme2 from "@/public/images/projects/keyfundme_2.png";

import vidly from "@/public/images/projects/vidly_1.png";
import vidly2 from "@/public/images/projects/vidly_2.png";

import sketch from "@/public/images/projects/sketch_1.png";

import shoresh from "@/public/images/projects/shoresh_1.png";
import shoresh2 from "@/public/images/projects/shoresh_2.png";

import shegerlace from "@/public/images/projects/shegerlace_1.png";
import shegerlace2 from "@/public/images/projects/shegerlace_2.png";

import gamefront from "@/public/images/projects/gamefront_1.png";
import gamefront2 from "@/public/images/projects/gamefront_2.png";

import devmeetup from "@/public/images/projects/devmeetup_1.png";

import hoppscotch from "@/public/images/projects/hoppscotch_1.png";

import offside from "@/public/images/projects/offside_1.png";
import offside2 from "@/public/images/projects/offside_2.png";

const projectInfo: Project[] = [
  {
    id: 1,
    title: "Keyfundme",
    date: "2024",
    image: keyfundme,
    secondImage: vibecard,
    link: "/",
  },
  {
    id: 2,
    title: "Vibecard",
    date: "2024",
    image: keyfundme,
    secondImage: vibecard,
    link: "/",
  },
  {
    id: 3,
    title: "Tigat",
    date: "2021",
    image: keyfundme,
    secondImage: vibecard,
    link: "/",
  },
  {
    id: 4,
    title: "Zusebingo",
    date: "2022",
    image: keyfundme,
    secondImage: vibecard,
    link: "/",
  },
  {
    id: 5,
    title: "Shegerlace",
    date: "2024",
    image: keyfundme,
    secondImage: vibecard,
    link: "/",
  },
  {
    id: 6,
    title: "Shegerlace",
    date: "2024",
    image: keyfundme,
    secondImage: vibecard,
    link: "/",
  },
  {
    id: 7,
    title: "Keyfundme",
    date: "2024",
    image: keyfundme,
    secondImage: vibecard,
    link: "/",
  },
  {
    id: 8,
    title: "Vibecard",
    date: "2024",
    image: keyfundme,
    secondImage: vibecard,
    link: "/",
  },
  {
    id: 9,
    title: "Tigat",
    date: "2021",
    image: keyfundme,
    secondImage: vibecard,
    link: "/",
  },
  {
    id: 10,
    title: "Zusebingo",
    date: "2022",
    image: keyfundme,
    secondImage: vibecard,
    link: "/",
  },
  {
    id: 11,
    title: "Shegerlace",
    date: "2024",
    image: keyfundme,
    secondImage: vibecard,
    link: "/",
  },
  {
    id: 12,
    title: "Shegerlace",
    date: "2024",
    image: keyfundme,
    secondImage: vibecard,
    link: "/",
  },
];

export default projectInfo;
