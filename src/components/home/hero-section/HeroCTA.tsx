import Link from "next/link";
import { Button } from "../../ui/button";

import ContactButton from "../../ui/custom/ContactButton";

const HeroCTA = () => {
  return (
    <div className="mt-6 flex w-[320px] justify-center gap-4 px-4 sm:w-[400px] md:w-[440px]">
      <ContactButton className="h-full w-full text-lg font-semibold shadow-md sm:text-xl md:text-2xl"></ContactButton>
      <Button
        asChild
        variant={"outline"}
        className="h-full w-full border-2 border-slate-900 text-lg font-semibold shadow-md sm:text-xl md:text-2xl"
      >
        <Link href={"/about"}>About Me</Link>
      </Button>
    </div>
  );
};

export default HeroCTA;
