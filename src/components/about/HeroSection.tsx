"use client";
import { useContext, useEffect, useRef } from "react";
import Image from "next/image";

import profilePicture from "../../../public/profilePicture.jpg";
import AboutCTA from "./AboutCTA";
import { hand } from "@/lib/staticData";
import { AboutPageContext } from "@/app/(portofolio)/about/page";

const HeroSection = () => {
  const { setIsHeroAnimationFinish } = useContext(AboutPageContext);
  const profilePictureRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    profilePictureRef.current?.classList.remove("paused", "sm:paused");
    profilePictureRef.current?.addEventListener("animationend", () => {
      profilePictureRef.current?.classList.remove(
        "animate-slide-in-from-top",
        "sm:animate-fading-in",
        "sm:delay-1000",
      );
    });
    greetingRef.current?.classList.remove("paused");
    greetingRef.current?.addEventListener("animationend", () => {
      descriptionRef.current?.classList.remove("paused");
      ctaRef.current?.classList.remove("paused");
    });
    ctaRef.current?.addEventListener("animationend", () => {
      setIsHeroAnimationFinish(true);
    });
  }, [profilePictureRef, greetingRef, descriptionRef, ctaRef]);

  return (
    <section className="flex w-full flex-col justify-end gap-6 sm:flex-row-reverse md:gap-0">
      <div className="flex w-full items-start justify-center">
        <div
          ref={profilePictureRef}
          className="relative mt-0 aspect-square w-40 animate-slide-in-from-top overflow-hidden rounded-full shadow-lg paused sm:mt-8 sm:w-56 sm:animate-fading-in sm:delay-1000 sm:paused lg:mt-0 lg:w-72"
        >
          <Image
            src={profilePicture}
            alt="profile picture"
            className="-translate-y-6 sm:-translate-y-16"
          ></Image>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <h2
          ref={greetingRef}
          className="animate-fading-in text-center text-3xl font-semibold tracking-tight paused sm:text-left"
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
        <p
          ref={descriptionRef}
          className="w-full max-w-prose animate-fading-in text-center text-muted-foreground duration-700 paused sm:text-justify"
        >
          Bachelor of Computer Science from Universitas Sumatera Utara. I am a
          highly motivated individual who is committed to working diligently in
          order to achieve my goals. I possess a strong work ethic and a
          steadfast dedication to undertaking tasks related to my areas of
          interest. I am enthusiastic about exploring new knowledge and
          continually expanding my skill set. My primary focus lies within the
          realm of web development.
        </p>
        <div
          ref={ctaRef}
          className="flex w-full animate-slide-in-from-bottom justify-center delay-200 paused sm:justify-start"
        >
          <AboutCTA></AboutCTA>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
