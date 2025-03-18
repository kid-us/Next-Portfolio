import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <>
      <Link
        href="#"
        className="flex items-center lg:gap-x-2 gap-x-1 group text-color-secondary lg:text-md text-lg"
      >
        <Github size={19} className="text-color-secondary" />
        Github
        <span className="group-hover:rotate-45 transition-all duration-400 lg:block hidden">
          <ArrowUpRight size={19} className="text-color-secondary" />
        </span>
      </Link>

      <Link
        href="#"
        className="flex items-center lg:gap-x-2 gap-x-1 group text-color-secondary lg:text-md text-lg"
      >
        <Linkedin size={19} className="text-color-secondary" /> LinkedIn
        <span className="group-hover:rotate-45 transition-all duration-400 lg:block hidden">
          <ArrowUpRight size={19} className="text-color-secondary" />
        </span>
      </Link>

      <Link
        href="#"
        className="flex items-center lg:gap-x-2 gap-x-1 group text-color-secondary lg:text-md text-lg"
      >
        <Mail size={19} className="text-color-secondary" /> Gmail
        <span className="group-hover:rotate-45 transition-all duration-400 lg:block hidden">
          <ArrowUpRight size={19} className="text-color-secondary" />
        </span>
      </Link>
    </>
  );
};

export default SocialLinks;
