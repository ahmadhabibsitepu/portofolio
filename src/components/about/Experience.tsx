import { Experience, experiences } from "@/lib/staticData";

const Experience = () => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex w-full items-center gap-2">
        <h2 className="whitespace-nowrap text-3xl font-semibold tracking-tight">
          Work Experience
        </h2>
        <div className="h-[2px] w-full bg-muted"></div>
      </div>
      <ul className="ml-6 flex flex-col gap-2 px-3">
        {[...experiences].reverse().map((experience: Experience, index) => (
          <li key={index} className="list-disc">
            <div className="flex w-full flex-col justify-between sm:flex-row">
              <h5 className="text-lg font-bold tracking-tight">
                {experience.location}
                <span className="font-medium sm:hidden">{` (${experience.start} - ${experience.finish})`}</span>
              </h5>
              <div className="hidden font-medium sm:flex">{`${experience.start} - ${experience.finish}`}</div>
            </div>
            <p className="text-sm font-medium italic">{experience.role}</p>
            <p className="leading-7 text-muted-foreground">
              {experience.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
