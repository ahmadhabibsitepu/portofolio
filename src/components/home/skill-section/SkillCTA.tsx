"use client";
import { useInView } from "react-intersection-observer";

import ContactButton from "../../ui/custom/ContactButton";
import { cn } from "@/lib/utils";

const SkillCTA = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className={"flex w-full flex-col items-center"}>
      <h3
        className={cn(
          "animate-slide-in-from-bottom px-3 text-2xl font-semibold tracking-tight delay-200",
          !inView && " paused",
        )}
      >
        Got A Project In Mind? Or Want Me To Do Something Else?
      </h3>
      <p
        className={cn(
          "mt-2 animate-slide-in-from-bottom text-muted-foreground delay-300",
          !inView && "paused",
        )}
      >
        Let&apos;s discuss it, i&apos;ll assist you to accomplish that!
      </p>
      <div
        className={cn(
          "mt-6 flex w-[320px] animate-slide-in-from-bottom justify-center gap-4 px-4 delay-500 duration-700 sm:w-[400px] md:w-[440px]",
          !inView && "paused",
        )}
      >
        <ContactButton className="h-full w-1/2 text-lg font-semibold shadow-md sm:text-xl md:text-2xl"></ContactButton>
      </div>
    </div>
  );
};

export default SkillCTA;
