import ServiceCard from "./ServiceCard";
import { Service, services } from "@/lib/staticData";

const Services = () => {
  return (
    <div className="flex w-full flex-col items-center gap-6">
      <h2 className="text-3xl font-semibold tracking-tight">What Can I Do?</h2>
      <div className="flex w-full flex-wrap gap-3 px-5 sm:w-full sm:flex-nowrap sm:px-2">
        {services.map((service: Service, index) => (
          <ServiceCard key={index} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
