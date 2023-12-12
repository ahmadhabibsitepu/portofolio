"use client";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Service } from "@/lib/staticData";

const ServiceCard = ({ service }: { service: Service }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <Card
      ref={ref}
      className={cn(
        "flex w-full animate-slide-in-from-bottom flex-col text-left shadow-md delay-200",
        !inView && "paused",
      )}
    >
      <CardHeader>
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ServiceCard;
