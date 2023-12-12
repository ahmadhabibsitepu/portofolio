"use client";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

import LayoutContainer from "@/components/LayoutContainer";
import WorkCard from "./WorkCard";
import { Work, works } from "@/lib/staticData";

const WorkSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <LayoutContainer outerDivClassName="border-t">
      <div ref={ref} className="flex w-full flex-col items-center gap-6 pb-6">
        <h2
          className={cn(
            "animate-fading-in text-3xl font-semibold tracking-tight duration-700",
            !inView && "paused",
          )}
        >
          My Works
        </h2>
        <div className="flex w-full flex-col items-center gap-8 px-2">
          {works.map((work: Work, index) => (
            <WorkCard key={index} work={work}></WorkCard>
          ))}
        </div>
      </div>
    </LayoutContainer>
  );
};

export default WorkSection;
