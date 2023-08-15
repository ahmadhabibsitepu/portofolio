import WorkCard from "./WorkCard";

import { Work, works } from "@/lib/staticData";

const WorksSection = () => {
  return (
    <div className="flex w-full flex-col items-center gap-6 pb-6">
      <h2 className="text-3xl font-semibold tracking-tight">My Works</h2>
      <div className="flex w-full flex-col items-center gap-8 px-2">
        {works.map((work: Work, index) => (
          <WorkCard key={index} work={work}></WorkCard>
        ))}
      </div>
    </div>
  );
};

export default WorksSection;
