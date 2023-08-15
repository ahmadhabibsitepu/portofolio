import ContactButton from "../../ui/custom/ContactButton";

const SkillCTA = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <h3 className="px-3 text-2xl font-semibold tracking-tight">
        Got A Project In Mind? Or Want Me To Do Something Else?
      </h3>
      <h5 className="mt-2 w-full text-lg font-semibold tracking-tight">
        Let's discuss it, i'll assist you to accomplish that!
      </h5>
      <div className="mt-6 flex w-[320px] justify-center gap-4 px-4 sm:w-[400px] md:w-[440px]">
        <ContactButton className="h-full w-1/2 text-lg font-semibold shadow-md sm:text-xl md:text-2xl"></ContactButton>
      </div>
    </div>
  );
};

export default SkillCTA;
