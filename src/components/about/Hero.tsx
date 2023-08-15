import Image from "next/image";

import profilePicture from "../../../public/profilePicture.jpg";
import AboutCTA from "./AboutCTA";

const Hero = () => {
  return (
    <section className="flex w-full flex-col gap-6 sm:flex-row-reverse">
      <div className="flex w-full items-start justify-center sm:w-2/5">
        <div className="relative aspect-square w-40 overflow-hidden rounded-full shadow-lg sm:w-56">
          <Image
            src={profilePicture}
            alt="profile picture"
            className="-translate-y-6 sm:-translate-y-16"
          ></Image>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 sm:w-3/5">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-left">
          Hi, i&apos;m Habib
        </h2>
        <p className="w-full text-center leading-7 text-muted-foreground sm:text-justify">
          Bachelor of Computer Science from Universitas Sumatera Utara. I am a
          highly motivated individual who is committed to working diligently in
          order to achieve my goals. I possess a strong work ethic and a
          steadfast dedication to undertaking tasks related to my areas of
          interest. I am enthusiastic about exploring new knowledge and
          continually expanding my skill set. My primary focus lies within the
          realm of web development.
        </p>
        <div className="flex w-full justify-center sm:justify-start">
          <AboutCTA></AboutCTA>
        </div>
      </div>
    </section>
  );
};

export default Hero;
