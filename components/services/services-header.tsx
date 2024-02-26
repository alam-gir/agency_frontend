import { FC } from "react";
import Searchbar from "../global/searchbar";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/button";

interface ServicesHeaderProps {}

const ServicesHeader: FC<ServicesHeaderProps> = ({}) => {
  return (
    <div className="h-full w-full border-b border-b-gray-100 dark:border-b-gray-700 backdrop-blur-3xl">
      <div className="flex justify-between items-center px-4 lg:px-8 py-2 h-full w-full md:max-w-4xl lg:max-w-7xl m-auto">
        <Button variant={"outline"} size={"icon"}>
          <SlidersHorizontal className="text-primary/80" />
        </Button>
        <div className="w-1/2 max-w-[30rem]">
          <Searchbar searchPlaceholder="Search services..." />
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;
