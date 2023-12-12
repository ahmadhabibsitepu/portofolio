import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

import { Education } from "@/lib/staticData";

const EducationDetail = ({
  isVisible,
  education,
}: {
  isVisible: boolean;
  education: Education;
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
          {education.location}
          <span className="sm:hidden">{` (${education.start} - ${education.finish})`}</span>
        </h4>
        <div className="hidden w-fit justify-between text-center sm:flex">
          <span className="w-16">{education.start}</span>
          {` - `}
          <span className="w-16">{education.finish}</span>
        </div>
      </div>
      <p className="font-medium tracking-tight text-muted-foreground">
        {education.description}
      </p>
    </li>
  );
};

export default EducationDetail;
