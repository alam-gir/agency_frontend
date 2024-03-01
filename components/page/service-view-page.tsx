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
    { project_id: params.id as string },
    { skip: !params.id }
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
    <div className="h-full w-full md:max-w-4xl lg:max-w-6xl lg:mt-10 flex flex-col md:flex-row m-auto">
      {/* card */}
      <div className="h-fit w-full md:w-1/2">
        <ServiceViewCard service={service!} />
      </div>
      {/* action button  */}
      <div className="h-fit w-full md:w-1/2 md:mt-4">
        <ServiceViewActionButtons />
        {/* package card */}
        <div className="p-4 mt-4">
          <ServicePackageCard />
        </div>
      </div>
      <OrderModal />
    </div>
  );
};

export default ServiceViewPage;
