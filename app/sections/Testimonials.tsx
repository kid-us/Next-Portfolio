"use client";

import testimonials, { TestimonialsType } from "@/constants/testimonials";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";

const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  const TestimonialsColumn = ({
    testimonials,
    className,
    duration,
  }: {
    testimonials: TestimonialsType[];
    className?: string;
    duration?: number;
  }) => (
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
                className="card p-10 border border-secondary-border rounded-3xl shadow-[0_7px_14px_rgba(234,234,234,0.5)] w-full bg-white"
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

  return (
    <section className="bg-background py-24">
      <div className="flex justify-center">
        <p>Testimonials</p>
      </div>

      <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)_25%,rgba(0,0,0,1)_75%,rgba(0,0,0,0))] max-h-[738px] overflow-hidden mt-10">
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="hidden md:block"
          duration={19}
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          className="hidden lg:block"
          duration={17}
        />
      </div>
    </section>
  );
};

export default Testimonials;
