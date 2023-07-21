import SectionHeader from "./SectionHeader";
import {
  responsiveBarTimestampSize,
  responsiveCircleTimestampSize,
  responsiveTextSize,
} from "./responsiveSize";

type Education = {
  location: string;
  description: string;
  year: string;
};

type Educations = Education[];

const EducationList = ({
  education,
  isLast = false,
}: {
  education: Education;
  isLast: boolean;
}) => {
  return (
    <div className="flex h-full gap-[2%] items-start">
      <p className="font-bold">{education.year}</p>
      <div className="flex flex-col items-center">
        <div
          className={`rounded-full bg-neutral-700 ${responsiveCircleTimestampSize}`}
        ></div>
        {!isLast && (
          <div
            className={`bg-neutral-700 ${responsiveBarTimestampSize} scale-y-150`}
          ></div>
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="font-bold">{education.location}</h3>
        <p className="leading-none tracking-tight">{education.description}</p>
      </div>
    </div>
  );
};

const EducationSection = ({ educations }: { educations: Educations }) => {
  return (
    <section className={`mt-[2%] ${responsiveTextSize}`}>
      <SectionHeader text="education" />
      <div className="px-[2%] pt-[2%]">
        {educations.reverse().map((value: Education, index) => (
          <EducationList
            key={index}
            education={value}
            isLast={index + 1 === educations.length}
          ></EducationList>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
