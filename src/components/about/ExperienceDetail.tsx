import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

import { Experience } from "@/lib/staticData";

const ExperienceDetail = ({
  isVisible,
  experience,
}: {
  isVisible: boolean;
  experience: Experience;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <li
      ref={ref}
      className={cn(
        "animate-slide-in-from-bottom list-disc delay-200 duration-500",
        !(isVisible && inView) && "paused",
      )}
    >
      <div className="flex w-full flex-col justify-between text-lg font-bold tracking-tight sm:flex-row">
        <h4 className="w-full">
          {experience.location}
          <span className="sm:hidden">{` (${experience.start} - ${experience.finish})`}</span>
        </h4>
        <div className="hidden whitespace-nowrap sm:flex">{`${experience.start} - ${experience.finish}`}</div>
      </div>
      <p className="font-medium tracking-tight">{experience.role}</p>
      <p className="max-w-prose tracking-tight text-muted-foreground sm:text-justify">
        {experience.description}
      </p>
    </li>
  );
};

export default ExperienceDetail;
