"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { hand } from "@/lib/staticData";
import HeroJobTitle from "./HeroJobTitle";

const HeroText = ({
  setCtaAnimationStartHandler,
}: {
  setCtaAnimationStartHandler: Function;
}) => {
  const [jobTitleAnimationStart, setJobTitleAnimationStart] =
    useState<boolean>(false);
  const greetingRef = useRef<HTMLHeadingElement>(null);
  const jobTitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    greetingRef.current?.classList.remove("paused");

    greetingRef.current?.addEventListener("animationend", () => {
      jobTitleRef.current?.classList.remove("opacity-0");
      setJobTitleAnimationStart(true);
      descriptionRef.current?.classList.remove("paused");
    });

    descriptionRef.current?.addEventListener("animationstart", () => {
      setCtaAnimationStartHandler();
    });
  }, [greetingRef]);

  return (
    <>
      <h2
        ref={greetingRef}
        className="animate-slide-in-from-top text-2xl font-semibold tracking-tight paused"
      >
        Hi, i&apos;m Habib
        <span className="inline-block translate-x-[5px] translate-y-[2px] rotate-[-20deg]">
          <Image
            className="origin-bottom animate-waving"
            src={hand}
            alt=""
          ></Image>
        </span>
      </h2>
      <h1
        ref={jobTitleRef}
        className="relative mt-2 h-fit min-h-[84px] pb-1 text-4xl font-extrabold tracking-tight opacity-0 min-[356px]:min-h-[100px] min-[356px]:text-5xl sm:min-h-fit"
        aria-label="Full Stack Web Developer, Front End Web Developer, Back End Web Developer"
      >
        <HeroJobTitle
          jobTitleAnimationStart={jobTitleAnimationStart}
        ></HeroJobTitle>
      </h1>
      <p
        ref={descriptionRef}
        className="mt-6 w-full max-w-prose animate-fading-in text-muted-foreground delay-2000 duration-700 paused"
      >
        I&apos;m a web developer from Indonesia, who follows the industry best
        practices in order to develop cutting-edge websites, currently seeking
        opportunities to collaborate in web app development.
      </p>
    </>
  );
};

export default HeroText;
