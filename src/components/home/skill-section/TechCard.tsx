import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { TechIcon } from "@/lib/staticData";

const TechCard = ({ techIcon }: { techIcon: TechIcon }) => {
  return (
    <Card className="flex w-24 flex-shrink-0 flex-col items-center border-none text-center shadow-none">
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
