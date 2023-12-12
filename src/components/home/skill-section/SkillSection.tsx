"use client";
import LayoutContainer from "@/components/LayoutContainer";
import SkillCTA from "./SkillCTA";
import Services from "./service/Services";
import TechStack from "./tech/TechStack";

const SkillSection = () => {
  return (
    <LayoutContainer outerDivClassName="border-t">
      <div className="flex w-full flex-col items-center gap-12 pb-6 text-center">
        <Services></Services>
        <TechStack></TechStack>
        <SkillCTA></SkillCTA>
      </div>
    </LayoutContainer>
  );
};

export default SkillSection;
