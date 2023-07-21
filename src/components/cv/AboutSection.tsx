import SectionHeader from "./SectionHeader";
import { responsiveTextSize } from "./responsiveSize";

const AboutSection = () => {
  return (
    <section>
      <SectionHeader text="about me"></SectionHeader>
      <p
        className={`px-[2%] pt-[2%] text-justify leading-snug tracking-tight indent-[6%] ${responsiveTextSize}`}
      >
        Bachelor of Computer Science from Universitas Sumatera Utara. I am a
        highly motivated individual who is committed to working diligently in
        order to achieve my goals. I possess a strong work ethic and a steadfast
        dedication to undertaking tasks related to my areas of interest. I am
        enthusiastic about exploring new knowledge and continually expanding my
        skill set. My primary focus lies within the realm of web development.
      </p>
    </section>
  );
};

export default AboutSection;
