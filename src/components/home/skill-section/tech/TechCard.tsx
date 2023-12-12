import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { TechIcon } from "@/lib/staticData";

const TechCard = ({ techIcon }: { techIcon: TechIcon }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <Card
      ref={ref}
      className={cn(
        "flex w-24 flex-shrink-0 animate-slide-in-from-bottom flex-col items-center border-none text-center shadow-none delay-200",
        !inView && "paused",
      )}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-[0px_2px_20px_0px_rgba(0,0,0,0.1)]">
        <Image src={techIcon.image} alt={techIcon.text}></Image>
      </div>
      <CardHeader className="p-0 pt-4">
        <CardTitle className="text-sm">{techIcon.text}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default TechCard;
