"use client"
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";
import demoImage from "../../public/demoImage.jpg";
import { useRouter } from "next/navigation";
import { ServicePopulated } from "@/@types/types";
import RedirectButton from "../navbar/redirect-button";
import ContactUsButton from "../global/contact-us-button";

interface ServiceCardProps {
  service: ServicePopulated;
  reverse?: boolean;
}

const ServiceCard: FC<ServiceCardProps> = ({ service,reverse }) => {
    // ---------------------------- react hooks -----------------------
    const router = useRouter();

    // ---------------------------- functions -----------------------
    const viewHandle = (service_id: string) => {
        router.push(`/services/${service_id}`)
    }
    const redirectToContactUs = () => {
        router.push("/contact")
    }
  return (
    <div className={`h-full w-full flex flex-col gap-6 p-4 rounded-md min-w-[18rem] flex-grow bg-gray-100 dark:bg-gray-800 md:bg-gray-50 md:dark:bg-gray-900  m-auto shadow-md md:shadow-none  hover:shadow-lg md:hover:shadow-none duration-300 ${reverse ? "md:flex-row-reverse" :"md:flex-row"}`}>
      {/* image */}
      <div className="w-full h-auto flex items-start  md:w-1/2">
        <Image src={ service.icon.url || demoImage} alt="service" width={600} height={600} className="h-auto w-full object-cover md:object-contain rounded" />
      </div>
      {/* info */}
      <div className="flex flex-col gap-4 h-full w-full justify-between md:w-1/2 ">
      {/* description */}
        <div>
          <p className="text-primary/80 font-light w-fit py-2 md:pt-0">{service.category.title}</p>
          <h1 className="uppercase text-xl font-medium py-1 tracking-wide text-primary">{service.title}</h1>
          <p className="text-primary font-light text-justify">{service.short_description}</p>
        </div>
        {/* buttons */}
        <div className="flex gap-2">
          <RedirectButton redirectTo={`/services/${service._id}`} title="View" varient="flat"  />
          <ContactUsButton />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
