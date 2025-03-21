"use client";

import testimonials, { TestimonialsType } from "@/constants/testimonials";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import TestimonialColumn from "../components/TestimonialColumn";

const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="bg-background py-24">
      <div className="flex justify-center">
        <p>Testimonials</p>
      </div>

      <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)_25%,rgba(0,0,0,1)_75%,rgba(0,0,0,0))] max-h-[738px] overflow-hidden mt-10">
        <TestimonialColumn testimonials={firstColumn} duration={25} />
        <TestimonialColumn
          testimonials={secondColumn}
          className="hidden md:block"
          duration={29}
        />
        <TestimonialColumn
          testimonials={thirdColumn}
          className="hidden lg:block"
          duration={27}
        />
      </div>
    </section>
  );
};

export default Testimonials;
