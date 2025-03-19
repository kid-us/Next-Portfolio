"use client";

import facts, { Facts } from "@/constants/facts";
import { MoveLeft, MoveRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import "animate.css";

const SeriousFacts = () => {
  const [animation, setAnimation] = useState("animate__fadeInRight");
  const [isChanging, setIsChanging] = useState(false);
  const [seriousFacts, setSeriousFacts] = useState<Facts>(facts[0]);
  const [changingInterval, setChangingInterval] = useState<number>(20000);

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

  // Handles the transition effect
  const changeFact = (
    nextFact: Facts,
    enterAnimation: string,
    exitAnimation: string
  ) => {
    setIsChanging(true);
    setAnimation(exitAnimation);

    setTimeout(() => {
      setSeriousFacts(nextFact);
      setAnimation(enterAnimation);
      setIsChanging(false);
    }, 500); // Matches animation duration
  };

  // Handle Next
  const handleNext = () => {
    const index = seriousFacts.id - 1;
    const nextFact = facts[(index + 1) % facts.length];

    changeFact(nextFact, "animate__fadeInRight", "animate__fadeOutLeft");
  };

  // Handle Prev
  const handlePrev = () => {
    const index = seriousFacts.id - 1;
    const prevFact = facts[(index - 1 + facts.length) % facts.length];

    changeFact(prevFact, "animate__fadeInLeft", "animate__fadeOutRight");
  };

  return (
    <div className="overflow-hidden">
      <div className="flex justify-between text-color-secondary border-b border-secondary-border pb-4 mb-8">
        <p>Serious Facts</p>
        <p>
          {seriousFacts.id} - {facts.length}
        </p>
      </div>
      <div
        key={seriousFacts.id} // Ensures re-render
        className={`animate__animated ${animation}`}
      >
        <p className="text-lg font-bold">{seriousFacts.title}</p>
        <p className="font-extrabold lg:text-3xl text-2xl mt-5">
          {seriousFacts.value} +
        </p>
        <p className="mt-3 text-sm text-color-secondary">{seriousFacts.note}</p>
      </div>
      <div className="flex mt-5 gap-x-5">
        <button onClick={handlePrev} disabled={isChanging}>
          <MoveLeft className="text-primary" />
        </button>
        <button onClick={handleNext} disabled={isChanging}>
          <MoveRight className="text-primary" />
        </button>
      </div>
    </div>
  );
};

export default SeriousFacts;
