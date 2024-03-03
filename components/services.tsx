import { services } from "@/constants";
import ServiceCard from "./serviceCard";

const Services = () => {
  return (
    <div className="w-full my-4 mt-8  md:pl-24">
      <div className="flex items-baseline justify-start gap-8">
        <h1 className="text-lg md:text-xl font-medium text-start w-max mb-2">
          My Services
        </h1>
        <div className="flex gap-1">
          <div className="w-[40px] h-1 bg-gray-400" />
          <div className="w-2 h-1 bg-gray-400" />
        </div>
      </div>
      <div className="md:ml-0 w-full flex items-center flex-col justify-center md:flex-row flex-wrap gap-4">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
