import ContactButton from "../ui/custom/ContactButton";
import DownloadButton from "../ui/custom/DownloadButton";

const AboutCTA = () => {
  return (
    <div className="mt-6 flex w-[320px] flex-col justify-center gap-4 sm:w-[400px] sm:flex-row md:w-[440px]">
      <ContactButton className="h-full w-full text-lg font-semibold shadow-md sm:text-xl md:text-2xl"></ContactButton>
      <DownloadButton text="CV" version="cv1"></DownloadButton>
    </div>
  );
};

export default AboutCTA;
