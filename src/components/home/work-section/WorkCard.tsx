import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Work } from "@/lib/staticData";

const WorkCard = ({ work }: { work: Work }) => {
  return (
    <Card className="group flex w-full max-w-3xl flex-col text-left shadow-md">
      <div className="relative overflow-hidden border-b">
        <Image
          src={work.hover}
          alt={work.alt}
          width={640}
          height={400}
          className="absolute w-full -translate-y-[640px] rounded-t-lg transition-transform duration-500 group-hover:translate-y-0"
        ></Image>
        <Image
          src={work.image}
          alt={work.alt}
          width={640}
          height={400}
          className="w-full rounded-t-lg"
        ></Image>
      </div>
      <CardHeader>
        <CardTitle>{work.title}</CardTitle>
        <CardDescription className="border-b pb-2">{work.user}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="leading-7">{work.description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-col gap-1 text-sm font-medium tracking-tight">
          <p>{work.note}</p>
          <div className="flex flex-nowrap gap-1">
            <p className="whitespace-nowrap">Tech Stack :</p>
            <span>{work.tech}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WorkCard;
