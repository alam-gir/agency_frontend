"use client";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
} from "@nextui-org/react";

import { FC, useCallback, useEffect, useState } from "react";
import ServicePackageCardContent from "./service-package-sub-card";
import { FaSpinner } from "react-icons/fa";
import { ServicePopulated } from "@/@types/types";
import { useGetServiceQuery } from "@/redux/features/service/serviceSlice";
import { useParams } from "next/navigation";

interface ServicePackageCardProps {}

const ServicePackageCard: FC<ServicePackageCardProps> = ({}) => {
  const [selected, setSelected] = useState("login");

  
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
    } = useGetServiceQuery({project_id: params.id as string}, {skip: !params.id});
  
    //--------------------------------useCallback hooks-------------------------------
  
    const serviceStateCallback = useCallback(() => {
      if (isServicesError) setError(true);
      else setError(false);
  
      if (isServicesLoading) setLoading(true);
      else setLoading(false);

      if(data?.data){
        setService(data?.data as ServicePopulated);
      }
    }, [isServicesError, isServicesLoading, data]);
  
    //--------------------------------useEffects hooks--------------------------------
    useEffect(() => {
      serviceStateCallback();
    });
  
    console.log("services", service);
  
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
    <div className="flex flex-col w-full">
      <Card className="max-w-full bg-gray-100 dark:bg-gray-800">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="lg"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={(key) => setSelected(key as string)}
          >
            <Tab key="Basic" title="Basic">
              <ServicePackageCardContent />
            </Tab>
            <Tab key="Standard" title="Standard">
              <ServicePackageCardContent />
            </Tab>
            <Tab key="Premium" title="Premium">
              <ServicePackageCardContent />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default ServicePackageCard;
