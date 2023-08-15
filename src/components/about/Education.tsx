import { Education, educations } from "@/lib/staticData";

const Education = () => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex w-full items-center gap-2">
        <h2 className="text-3xl font-semibold tracking-tight">Education</h2>
        <div className="h-[2px] w-full bg-muted"></div>
      </div>
      <ul className="ml-6 flex flex-col gap-2 px-3">
        {[...educations].reverse().map((education: Education, index) => (
          <li key={index} className="list-disc">
            <div className="flex w-full flex-col justify-between sm:flex-row">
              <h5 className="text-lg font-bold tracking-tight">
                {education.location}
                <span className="font-medium sm:hidden">{` (${education.start} - ${education.finish})`}</span>
              </h5>
              <div className="hidden font-medium sm:flex">{`${education.start} - ${education.finish}`}</div>
            </div>
            <p className="text-sm font-medium italic">
              {education.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
