"use client";
import Image from "next/image";
import { FC } from "react";
import demoImage from "../../public/demoImage.jpg";
import { ServicePopulated } from "@/@types/types";

interface ServiceViewCardProps {
  service: ServicePopulated;
}

const ServiceViewCard: FC<ServiceViewCardProps> = ({ service }) => {
  // ---------------------------- react hooks -----------------------

  // ---------------------------- functions -----------------------

  return (
    <div
      className={`h-full w-full flex flex-col gap-4 p-4 rounded-md min-w-[18rem] flex-grow duration-300`}
    >
      {/* category and title */}
      <div>
        <p className="text-primary/80 font-light w-fit">
          {service?.category.title}
        </p>
        <h1 className="uppercase text-xl md:text-2xl font-medium tracking-wide text-primary">
          {service?.title}
        </h1>
      </div>
      {/* image */}
      <div className="w-full h-auto flex items-start">
        <Image
          src={ service?.icon?.url || demoImage}
          alt="service"
          width={600}
          height={600}
          className="h-auto w-full object-cover md:object-contain rounded"
        />
      </div>
      {/* info */}
      <div className="flex flex-col gap-4 h-full w-full justify-between">
        {/* description */}
        <div>
          <p className="text-primary font-light text-justify">
            {service?.description } 
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceViewCard;
