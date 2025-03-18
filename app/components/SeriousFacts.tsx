"use client";

import facts, { Facts } from "@/constants/facts";
import { MoveLeft, MoveRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const SeriousFacts = () => {
  const [seriousFacts, setSeriousFacts] = useState<Facts>(facts[0]);
  const [changingInterval, setChangingInterval] = useState<number>(10000);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto Serious facts changer with dynamic interval
  useEffect(() => {
    const startAutoChange = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setSeriousFacts((prevFact) => {
          const index = prevFact.id - 1;
          return facts[index === facts.length - 1 ? 0 : index + 1];
        });
      }, changingInterval);
    };

    startAutoChange();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [facts, changingInterval]);

  // Handle Next
  const handleNext = () => {
    setSeriousFacts((prevFact) => {
      const index = prevFact.id - 1;
      return facts[index === facts.length - 1 ? 0 : index + 1];
    });

    setChangingInterval((prev) => prev + 1);
  };

  // Handle Prev
  const handlePrev = () => {
    setSeriousFacts((prevFact) => {
      const index = prevFact.id - 1;
      return facts[index === 0 ? facts.length - 1 : index - 1];
    });

    setChangingInterval((prev) => prev + 1);
  };
  return (
    <>
      <div className="flex justify-between text-color-secondary border-b border-secondary-border pb-4 mb-8">
        <p>Serious Facts</p>
        <p>
          {seriousFacts.id} - {facts.length}
        </p>
      </div>
      <p className="text-lg font-bold">{seriousFacts.title}</p>
      <p className="font-extrabold lg:text-3xl text-2xl mt-5">
        {seriousFacts.value} +
      </p>
      <p className="mt-3 text-sm text-color-secondary">{seriousFacts.note}</p>
      <div className="flex mt-5 gap-x-5">
        <button onClick={handlePrev}>
          <MoveLeft className="text-color-secondary" />
        </button>
        <button onClick={handleNext}>
          <MoveRight className="text-color-secondary" />
        </button>
      </div>
    </>
  );
};

export default SeriousFacts;
