import HeroText from "./HeroText";
import HeroCTA from "./HeroCTA";

const HeroSection = () => {
  return (
    <section className="flex w-full justify-center pb-6">
      <div className="flex w-full flex-col items-center justify-center px-2 text-center">
        <HeroText></HeroText>
        <HeroCTA></HeroCTA>
      </div>
    </section>
  );
};

export default HeroSection;
