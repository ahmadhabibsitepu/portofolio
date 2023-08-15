import HeroSection from "@/components/home/hero-section/HeroSection";
import SkillSection from "@/components/home/skill-section/SkillSection";
import WorksSection from "@/components/home/work-section/WorksSection";

const Page = () => {
  return (
    <>
      <div className="flex w-full justify-center border-b">
        <div className="mt-16 flex w-full max-w-7xl justify-center text-center">
          <HeroSection></HeroSection>
        </div>
      </div>
      <div className="flex w-full justify-center border-b">
        <div className="mt-16 flex w-full max-w-7xl justify-center text-center">
          <SkillSection></SkillSection>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="mt-16 flex w-full max-w-7xl justify-center text-center">
          <WorksSection></WorksSection>
        </div>
      </div>
    </>
  );
};

export default Page;
