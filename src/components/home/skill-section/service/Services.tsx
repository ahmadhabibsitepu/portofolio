"use client";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

import ServiceCard from "./ServiceCard";
import { Service, services } from "@/lib/staticData";

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <div ref={ref} className="flex w-full flex-col items-center gap-6">
      <h2
        className={cn(
          "animate-fading-in text-3xl font-semibold tracking-tight duration-700",
          !inView && "paused",
        )}
      >
        What Can I Do?
      </h2>
      <div className="flex w-full flex-wrap gap-3 px-5 sm:w-full sm:flex-nowrap sm:px-2">
        {services.map((service: Service, index) => (
          <ServiceCard key={index} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
