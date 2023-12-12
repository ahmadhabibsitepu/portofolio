"use client";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

import TechCard from "./TechCard";
import { techIcons, TechIcon } from "@/lib/staticData";

const TechStack = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <div ref={ref} className="flex w-full flex-col items-center gap-6">
      <h2
        className={cn(
          "animate-fading-in text-3xl font-semibold tracking-tight duration-700",
          !inView && "paused",
        )}
      >
        My Tech Stack
      </h2>
      <div className="flex w-full grid-cols-6 grid-rows-2 flex-wrap place-items-center justify-center gap-4 md:grid md:max-w-[960px]">
        {techIcons.map((techIcon: TechIcon, index) => (
          <TechCard key={index} techIcon={techIcon}></TechCard>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
