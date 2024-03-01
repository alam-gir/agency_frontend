import { Check } from "lucide-react";
import { FC } from "react";
import OrderNowButton from "../global/order-now-button";
import ContactUsButton from "../global/contact-us-button";
import { PackageOption } from "@/@types/types";

interface ServicePackageCardContentProps {
  packageOption: PackageOption;
}

const ServicePackageCardContent: FC<ServicePackageCardContentProps> = ({
  packageOption,
}) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      {/* title and price */}
      <div className="flex justify-between gap-4">
        <h1 className="uppercase text-xl md:text-2xl font-medium">
          {packageOption?.title}
        </h1>
        <h1 className="uppercase text-xl md:text-2xl font-medium text-nowrap">
          BDT <span> {packageOption?.price_bdt}</span>
        </h1>
      </div>
      {/* short description */}
      <div>
        <p className="text-justify font-light">{packageOption?.description}</p>
      </div>
      {/* delivery duration and revision time */}
      <div className="flex gap-4 mt-4 text-lg">
        <p className="w-full bg-gray-200 dark:bg-gray-700 p-1 rounded-md">
          Delivery: <span>{packageOption?.delivery_time}</span>
        </p>
        <p className="w-full bg-gray-200 dark:bg-gray-700 p-1 rounded-md">
          Revisions: <span>{packageOption?.revision}</span>
        </p>
      </div>
      {/* list of features */}
      <div className="w-full h-fit flex flex-col gap-2 py-2">
        {packageOption?.features?.map((feature, index) => (
          <div className="flex gap-2" key={index}>
            <Check size={24} />
            <p className="w-full text-lg text-primary/90">{feature}</p>
          </div>
        ))}
      </div>
      {/* order now and contact us buttons */}
      <div className="flex flex-col gap-4">
        <OrderNowButton package_option_id= {packageOption._id as string} />
        <ContactUsButton />
      </div>
    </div>
  );
};

export default ServicePackageCardContent;
