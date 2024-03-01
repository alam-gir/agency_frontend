import { Button } from "@nextui-org/react";
import { Check } from "lucide-react";
import { FC } from "react";

interface ServicePackageCardContentProps {}

const ServicePackageCardContent: FC<ServicePackageCardContentProps> = ({}) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      {/* title and price */}
      <div className="flex justify-between gap-4">
        <h1 className="uppercase text-xl md:text-2xl font-medium">
          this is the title of package{" "}
        </h1>
        <h1 className="uppercase text-xl md:text-2xl font-medium text-nowrap">
          USD <span> 20</span>
        </h1>
      </div>
      {/* short description */}
      <div>
        <p className="text-justify font-light">
          this is the short attractive description about our package. and its
          important to attract customer at once.
        </p>
      </div>
      {/* delivery duration and revision time */}
      <div className="flex gap-4 mt-4 text-lg">
        <p className="w-full bg-gray-100 dark:bg-gray-700 p-1 px-6 rounded">
          Delivery: <span>3 days</span>
        </p>
        <p className="w-full bg-gray-100 dark:bg-gray-700 p-1 px-6 rounded">
          Revisions: <span>2</span>
        </p>
      </div>
      {/* list of features */}
      <div className="w-full h-fit flex flex-col gap-2 py-2">
        <div className="flex gap-2">
          <Check size={24} />
          <p className="w-full text-lg text-primary/90">
            original design super quality original design original design super
            quality
          </p>
        </div>
        <div className="flex gap-2">
          <Check size={24} />
          <p className="w-full text-lg text-primary/90">
            original design super quality
          </p>
        </div>
        <div className="flex gap-2">
          <Check size={24} />
          <p className="w-full text-lg text-primary/90">
            original design super quality
          </p>
        </div>
        <div className="flex gap-2 opacity-20">
          <Check size={24} className="" />
          <p className="w-full text-lg text-primary/90">
            original design super quality
          </p>
        </div>
        <div className="flex gap-2">
          <Check size={24} />
          <p className="w-full text-lg text-primary/90">
            original design super quality
          </p>
        </div>
        <div className="flex gap-2  opacity-20">
          <Check size={24} className="" />
          <p className="w-full text-lg text-primary/90">
            original design super quality
          </p>
        </div>
      </div>
      {/* order now and contact us buttons */}
      <div className="flex flex-col gap-4">
        <Button className="w-full" color="primary">
          Order Now
        </Button>
        <Button className="w-full" color="secondary">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default ServicePackageCardContent;
