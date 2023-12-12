"use client";
import { useState } from "react";

import LayoutContainer from "@/components/LayoutContainer";
import HeroText from "./HeroText";
import HeroCTA from "./HeroCTA";

const HeroSection = () => {
  const [ctaAnimationStart, setCtaAnimationStart] = useState<boolean>(false);

  const setCtaAnimationStartHandler = () => {
    setCtaAnimationStart(true);
  };

  return (
    <LayoutContainer>
      <section className="flex w-full flex-col items-center pb-6">
        <div className="flex w-full flex-col items-center justify-center px-2 text-center">
          <HeroText
            setCtaAnimationStartHandler={setCtaAnimationStartHandler}
          ></HeroText>
          <HeroCTA ctaAnimationStart={ctaAnimationStart}></HeroCTA>
        </div>
      </section>
    </LayoutContainer>
  );
};

export default HeroSection;
