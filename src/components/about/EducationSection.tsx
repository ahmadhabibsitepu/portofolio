"use client";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

import { AboutPageContext } from "@/context";
import { Education, educations } from "@/lib/staticData";
import EducationDetail from "./EducationDetail";

const EducationSection = () => {
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
        <h2 className="text-3xl font-semibold tracking-tight">Education</h2>
        <div className="h-[2px] w-full bg-muted"></div>
      </div>
      <ul className="ml-6 flex flex-col gap-2 px-3 ">
        {[...educations].reverse().map((education: Education, index) => (
          <EducationDetail
            key={index}
            isVisible={isHeroAnimationFinish}
            education={education}
          ></EducationDetail>
        ))}
      </ul>
    </section>
  );
};

export default EducationSection;
