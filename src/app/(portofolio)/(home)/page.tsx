"use client";
import { createContext, useState } from "react";

import HeroSection from "@/components/home/hero-section/HeroSection";
import SkillSection from "@/components/home/skill-section/SkillSection";
import WorkSection from "@/components/home/work-section/WorkSection";
import SectionPostpone from "@/components/home/SectionPostpone";

export const HomePageContext = createContext({
  isHeroAnimationFinish: false,
  setIsHeroAnimationFinish: (isHeroAnimationFinish: boolean) => {},
});

const Page = () => {
  const [isHeroAnimationFinish, setIsHeroAnimationFinish] =
    useState<boolean>(false);

  return (
    <>
      <HomePageContext.Provider
        value={{ isHeroAnimationFinish, setIsHeroAnimationFinish }}
      >
        <HeroSection></HeroSection>
        <SectionPostpone isPostpone={!isHeroAnimationFinish}>
          <SkillSection></SkillSection>
          <WorkSection></WorkSection>
        </SectionPostpone>
      </HomePageContext.Provider>
    </>
  );
};

export default Page;
