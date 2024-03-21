"use client";
import { FC, useCallback, useEffect, useState } from "react";
import ServiceViewCard from "../services/service-view-card";
import ServiceViewActionButtons from "../services/service-view-action-buttons";
import ServicePackageCard from "../services/service-package-card";
import { useGetServiceQuery } from "@/redux/features/service/serviceSlice";
import { useParams } from "next/navigation";
import { ServicePopulated } from "@/@types/types";
import { FaSpinner } from "react-icons/fa";
import OrderModal from "../global/order-modal";
import WorksGallery from "../services/works-gallery";
import Footer from "../footer";

interface ServiceViewPageProps {}

const ServiceViewPage: FC<ServiceViewPageProps> = ({}) => {
  //--------------------------------React hooks--------------------------------
  const params = useParams();
  const [isError, setError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  const [service, setService] = useState<ServicePopulated>();

  //--------------------------------Redux hooks--------------------------------
  const {
    data,
    isError: isServicesError,
    isLoading: isServicesLoading,
    isSuccess,
    error,
  } = useGetServiceQuery(
    { service_name: params.name as string },
    { skip: !params.name }
  );

  //--------------------------------useCallback hooks-------------------------------

  const serviceStateCallback = useCallback(() => {
    if (isServicesError) setError(true);
    else setError(false);

    if (isServicesLoading) setLoading(true);
    else setLoading(false);

    if (data?.data) {
      setService(data?.data as ServicePopulated);
    }
  }, [isServicesError, isServicesLoading, data]);

  //--------------------------------useEffects hooks--------------------------------
  useEffect(() => {
    serviceStateCallback();
  });

  //-----------------------------JSX----------------------------------
  if (isLoading)
    return (
      <div className="h-full min-h-screen w-full flex justify-center pt-56 ">
        <FaSpinner className="animate-spinner-ease-spin" />
      </div>
    );
  if (isError)
    return (
      <div className="h-full min-h-screen w-full flex justify-center pt-56 ">
        <p>Failed to fetch services.</p>
      </div>
    );

  return (
    <>
      <div className="h-full w-full md:max-w-4xl lg:max-w-7xl lg:mt-10 flex flex-col m-auto">
        {/* card */}
        <div className="h-fit w-full p-4">
          {/* <ServiceViewCard service={service!} /> */}
          <WorksGallery category={service?.category?.title} />
        </div>
        {/* action button  */}
        <div className="h-fit w-full max-w-[60rem] m-auto md:py-10">
          <ServiceViewActionButtons />
          {/* package card */}
          <div className="p-4 mt-4">
            <ServicePackageCard />
          </div>
        </div>
        <OrderModal />
      </div>
      <Footer isSubcriptionBox={false} />
    </>
  );
};

export default ServiceViewPage;
