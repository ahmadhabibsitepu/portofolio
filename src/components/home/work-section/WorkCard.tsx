"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <Card
      ref={ref}
      className={cn(
        "group flex w-full max-w-3xl animate-slide-in-from-bottom flex-col text-left shadow-md delay-200",
        !inView && "paused",
      )}
    >
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
        <p className="font-semibold">{work.description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-col gap-2 text-sm tracking-tight">
          <p>{work.note}</p>
          <div className="font-semibold">{work.tech}</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WorkCard;
