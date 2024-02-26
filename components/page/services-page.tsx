import { FC } from "react";
import PageBanner from "../global/page-banner";
import ServicesHeader from "../services/services-header";
import ServiceCards from "../services/service-cards";
import Footer from "../footer";

interface ServicesPageProps {}

const ServicesPage: FC<ServicesPageProps> = ({}) => {
  return (
    <div>
      <PageBanner
        title="Our best services"
        description="Choose a service to spread your company across the universe"
      />
      <ServicesHeader />
      <div className="p-4 h-full w-full md:max-w-3xl lg:max-w-6xl m-auto py-4 ">
        <ServiceCards />
      </div>
      <Footer isSubcriptionBox={false} />
    </div>
  );
};

export default ServicesPage;
