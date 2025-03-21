import { TestimonialsType } from "@/constants/testimonials";
import useThemeStore from "@/store/themeStore";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const TestimonialColumn = ({
  testimonials,
  className,
  duration,
}: {
  testimonials: TestimonialsType[];
  className?: string;
  duration?: number;
}) => {
  const { theme } = useThemeStore();

  return (
    <div className={className}>
      <motion.div
        className="flex flex-col gap-6 pb-6"
        animate={{ translateY: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: duration || 10,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, imageSrc, name, username }, index) => (
              <div
                key={index}
                className={`card p-10 border border-secondary-border rounded-xl w-full ${
                  theme === "light" ? "bg-white" : "bg-secondary"
                }`}
              >
                <div>{text}</div>
                <div className=" mt-5 flex items-center gap-2">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium leading-5 tracking-tight">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialColumn;
