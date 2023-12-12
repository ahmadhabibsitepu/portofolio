import { createContext } from "react";

export const HomePageContext = createContext({
  isHeroAnimationFinish: false,
  setIsHeroAnimationFinish: (isHeroAnimationFinish: boolean) => {},
});

export const AboutPageContext = createContext({
  isHeroAnimationFinish: false,
  setIsHeroAnimationFinish: (isHeroAnimationFinish: boolean) => {},
});
