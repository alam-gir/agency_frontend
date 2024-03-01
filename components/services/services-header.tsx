import { FC } from "react";
import ServiceFilterButton from "./service-filter-button";
import ServiceSearchbar from "./service-search";

interface ServicesHeaderProps {}

const ServicesHeader: FC<ServicesHeaderProps> = ({}) => {
  return (
    <div className="h-full w-full border-b border-b-gray-100 dark:border-b-gray-700 backdrop-blur-3xl">
      <div className="flex justify-between items-center px-4 lg:px-8 py-2 h-full w-full md:max-w-4xl lg:max-w-7xl m-auto">
        <ServiceFilterButton />
        <ServiceSearchbar />
      </div>
    </div>
  );
};

export default ServicesHeader;
