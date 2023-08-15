import SectionHeader from "./SectionHeader";
import {
  responsiveSectionHeaderSize,
  responsiveTextSize,
} from "./responsiveSize";

type SkillDetail = string | { label: string; list: string[] };

type Skill = {
  skillCategory: string;
  skillDetails: SkillDetail[];
};

type Skills = Skill[];

const SkillList = ({ skill }: { skill: Skill }) => {
  return (
    <section className={`flex justify-evenly w-[30%] ${responsiveTextSize}`}>
      <div
        className={`flex justify-between w-1/2 font-bold ${responsiveSectionHeaderSize}`}
      >
        <h3 className="capitalize">{skill.skillCategory}</h3>
        <span> : </span>
      </div>
      <div className="w-1/2 mt-[2%] ml-[12%]">
        <ul className="list-disc">
          {skill.skillDetails.map((value: SkillDetail, index) =>
            typeof value === "object" ? (
              <li key={index}>
                {`${value.label} :`}
                <ul className="list-disc ml-[16%]">
                  {value.list.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={index}>{value}</li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

const SkillSection = ({ skills }: { skills: Skills }) => {
  return (
    <section>
      <SectionHeader text="web development skills"></SectionHeader>
      <div className="w-full flex justify-around leading-tight mt-[1%]">
        {skills.map((value: Skill, index) => (
          <SkillList key={index} skill={value}></SkillList>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
