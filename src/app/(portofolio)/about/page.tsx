import Link from "next/link";
import { Button } from "@/components/ui/button";

import DownloadButton from "@/components/ui/custom/DownloadButton";
import Hero from "@/components/about/Hero";
import Education from "@/components/about/Education";
import Experience from "@/components/about/Experience";

const Page = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="mt-16 flex w-full max-w-7xl flex-col justify-center gap-16 text-center">
        <div className="flex w-full flex-col gap-16 px-4 pb-6 text-left">
          <Hero></Hero>
          <Education></Education>
          <Experience></Experience>
        </div>
        {/* <div className="flex w-full flex-wrap justify-between gap-4">
          <Button asChild>
            <Link href="/cv1">View CV 1</Link>
          </Button>
          <DownloadButton text="CV 1" version="cv1"></DownloadButton>
          <Button asChild>
            <Link href="/cv2">View CV 2</Link>
          </Button>
          <DownloadButton text="CV 2" version="cv2"></DownloadButton>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
