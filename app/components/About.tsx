import { Atom } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="mt-20">
      <p className="flex items-center justify-center gap-x-3">
        <Atom size={16} className="text-primary" /> About Me
      </p>

      <p className="text-center lg:text-2xl text-lg lg:leading-10 mt-10">
        I’m Kidus Wondmagegnehu, a passionate Frontend Developer with over 3
        years of experience in crafting seamless, user-centric web applications.
        Specializing in modern technologies and best practices, I’ve
        collaborated with industry-leading teams to build dynamic, responsive,
        and visually stunning digital products that deliver exceptional user
        experiences.
      </p>
    </div>
  );
};

export default About;
