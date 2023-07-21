import SectionHeader from "./SectionHeader";
import { responsiveTextSize } from "./responsiveSize";

type Experience = {
  location: string;
  duration: string;
  description: string;
};

type Experiences = Experience[];

const ExperienceList = ({ experience }: { experience: Experience }) => {
  return (
    <div className="flex gap-[2%] items-start mt-[2%]">
      <div className="flex flex-col justify-center">
        <h3 className="font-bold">
          {experience.location}
          <span className="capitalize">{` ( ${experience.duration} )`}</span>
        </h3>
        <p className="tracking-tight">{experience.description}</p>
      </div>
    </div>
  );
};

const ExperienceSection = ({
  text,
  experiences,
}: {
  text: string;
  experiences: Experiences;
}) => {
  return (
    <section className="mt-[2%]">
      <SectionHeader text={text}></SectionHeader>
      <div className={`px-[2%] -mt-[1%] ${responsiveTextSize}`}>
        {experiences.reverse().map((value: Experience, index) => (
          <ExperienceList key={index} experience={value}></ExperienceList>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
