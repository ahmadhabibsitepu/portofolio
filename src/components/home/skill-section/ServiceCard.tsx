import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Service } from "@/lib/staticData";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Card className="flex w-full flex-col text-left shadow-md">
      <CardHeader>
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ServiceCard;
