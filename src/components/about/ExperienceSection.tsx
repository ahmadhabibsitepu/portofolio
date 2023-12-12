"use client";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

import { AboutPageContext } from "@/app/(portofolio)/about/page";
import { Experience, experiences } from "@/lib/staticData";
import ExperienceDetail from "./ExperienceDetail";

const ExperienceSection = () => {
  const { isHeroAnimationFinish } = useContext(AboutPageContext);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section className="flex flex-col gap-2">
      <div
        ref={ref}
        className={cn(
          "flex w-full animate-slide-in-from-bottom items-center gap-2 duration-700",
          !(isHeroAnimationFinish && inView) && "paused",
        )}
      >
        <h2 className="whitespace-nowrap text-3xl font-semibold tracking-tight">
          Work Experience
        </h2>
        <div className="h-[2px] w-full bg-muted"></div>
      </div>
      <ul className="ml-6 flex flex-col gap-2 px-3">
        {[...experiences].reverse().map((experience: Experience, index) => (
          <ExperienceDetail
            key={index}
            isVisible={isHeroAnimationFinish}
            experience={experience}
          ></ExperienceDetail>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
