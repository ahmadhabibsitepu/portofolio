import Services from "./Services";
import TechStack from "./TechStack";
import SkillCTA from "./SkillCTA";

const SkillSection = () => {
  return (
    <div className="flex w-full flex-col items-center gap-12 pb-6">
      <Services></Services>
      <TechStack></TechStack>
      <SkillCTA></SkillCTA>
    </div>
  );
};

export default SkillSection;
