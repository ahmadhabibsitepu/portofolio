"use client";
import { createContext, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import DownloadButton from "@/components/ui/custom/DownloadButton";
import LayoutContainer from "@/components/LayoutContainer";
import HeroSection from "@/components/about/HeroSection";
import EducationSection from "@/components/about/EducationSection";
import ExperienceSection from "@/components/about/ExperienceSection";

export const AboutPageContext = createContext({
  isHeroAnimationFinish: false,
  setIsHeroAnimationFinish: (isHeroAnimationFinish: boolean) => {},
});

const Page = () => {
  const [isHeroAnimationFinish, setIsHeroAnimationFinish] =
    useState<boolean>(false);

  return (
    <LayoutContainer innerDivClassName="flex-col gap-16 text-center">
      <div className="flex w-full flex-col gap-16 px-4 pb-6 text-left">
        <AboutPageContext.Provider
          value={{ isHeroAnimationFinish, setIsHeroAnimationFinish }}
        >
          <HeroSection></HeroSection>
          <EducationSection></EducationSection>
          <ExperienceSection></ExperienceSection>
        </AboutPageContext.Provider>
      </div>
      {/* <div className="flex w-full flex-wrap justify-between gap-4">
          <Button asChild>
          <Link href="/cv1">View CV 1</Link>
          </Button>
          <DownloadButton text="CV 1" version="cv1"></DownloadButton>
          <Button asChild>
          <Link href="/cv2">View CV 2</Link>
          </Button>
          <DownloadButton text="CV 2" version="cv2"></DownloadButton>
        </div> */}
    </LayoutContainer>
  );
};

export default Page;
