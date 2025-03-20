"use client";

import projectInfo from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function SolidBento() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4 mt-10">
      {projectInfo.map((project, index) => (
        <Link
          key={project.id}
          href={project.link}
          className={`group relative  overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] border border-feature ${
            index === 0
              ? "md:col-span-2 md:row-span-2"
              : index === 1
              ? "md:col-span-1 md:row-span-1"
              : "md:col-span-1 md:row-span-1 lg:row-span-2"
          }`}
        >
          <div className="relative  h-full w-full flex-col justify-end p-6 text-white">
            <Image alt={project.title} src={project.image} />
            <h2 className="mb-2 text-2xl font-bold">{project.title}</h2>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-300">{project.date}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
