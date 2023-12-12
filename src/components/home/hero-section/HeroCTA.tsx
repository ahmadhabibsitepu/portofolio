"use client";
import { useContext, useEffect, useRef } from "react";
import Link from "next/link";
import { buttonVariants } from "../../ui/button";
import { cn } from "@/lib/utils";

import ContactButton from "../../ui/custom/ContactButton";
import { HomePageContext } from "@/context";

const HeroCTA = ({ ctaAnimationStart }: { ctaAnimationStart: boolean }) => {
  const ctaTextRef = useRef<HTMLHeadingElement>(null);
  const { setIsHeroAnimationFinish } = useContext(HomePageContext);

  useEffect(() => {
    ctaTextRef.current?.addEventListener("animationend", () => {
      setIsHeroAnimationFinish(true);
    });
  }, [ctaTextRef]);

  return (
    <>
      <h4
        ref={ctaTextRef}
        className={cn(
          "mt-6 w-full animate-slide-in-from-bottom text-lg font-semibold tracking-tight delay-200 sm:w-[480px] md:w-[760px]",
          !ctaAnimationStart && "paused",
        )}
      >
        Let&apos;s collaborate to bring our ideas to life and make a positive
        impact on the digital world!
      </h4>
      <div className="mt-6 flex w-[320px] justify-center gap-4 px-4 sm:w-[400px] md:w-[440px]">
        <ContactButton
          className={cn(
            "h-full w-full animate-slide-in-from-bottom text-lg font-semibold shadow-md delay-500 duration-700 sm:text-xl md:text-2xl",
            !ctaAnimationStart && "paused",
          )}
        ></ContactButton>
        <Link
          href={"/about"}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-full w-full animate-slide-in-from-bottom border-2 border-foreground px-[14px] py-[6px] text-lg font-semibold shadow-md delay-500 duration-700 sm:text-xl md:text-2xl",
            !ctaAnimationStart && "paused",
          )}
        >
          About Me
        </Link>
      </div>
    </>
  );
};

export default HeroCTA;
