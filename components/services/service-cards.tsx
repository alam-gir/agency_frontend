"use client";
import { FC, useCallback, useEffect, useState } from "react";
import ServiceCard from "./service-card";
import { useGetServicesQuery } from "@/redux/features/service/serviceSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSpinner } from "react-icons/fa";
import { ServicePopulated } from "@/@types/types";

interface ServiceCardsProps {}
interface Datas {
  services: ServicePopulated[] | [];
  show_limit: number;
  total_docs: number;
  total_pages: number;
}

const ServiceCards: FC<ServiceCardsProps> = ({}) => {
  //--------------------------------React hooks--------------------------------
  const searchParams = useSearchParams();

  const [category, setCategory] = useState<string | undefined>("");
  const [search, setSearch] = useState<string | undefined>("");
  const [isError, setError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [datas, setDatas] = useState<Datas>();

  //--------------------------------Redux hooks--------------------------------
  const {
    data,
    isError: isServicesError,
    isLoading: isServicesLoading,
    isSuccess,
    error,
  } = useGetServicesQuery({ filter: { category, search } });

  //--------------------------------useCallback hooks--------------------------------
  const filterServicesCallback = useCallback(() => {
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    if (category) setCategory(category);
    if (search) setSearch(search);
  }, [searchParams]);

  const serviceStateCallback = useCallback(() => {
    if (isServicesError) setError(true);
    else setError(false);

    if (isServicesLoading) setLoading(true);
    else setLoading(false);

    if ((data?.data as any)?.services.length > 0) {
      setDatas((data?.data as unknown) as Datas);
    }
  }, [isServicesError, isServicesLoading, data]);

  //--------------------------------useEffects hooks--------------------------------
  useEffect(() => {
    filterServicesCallback();
    serviceStateCallback();
  });

  //--------------------------------JSX Model--------------------------------
  const Cards = datas?.services?.length ? (
    datas.services.map((service, index) => {
      const reverse = index % 2 !== 0;
      return <ServiceCard reverse={reverse} key={index} service={service} />;
    })
  ) : (
    <div className="h-full min-h-screen w-full flex justify-center pt-56 ">
      <p>No service found.</p>
    </div>
  );

  console.log("services", datas);

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
    <div className="flex flex-wrap justify-center gap-8 w-full h-full md:gap-16">
      {Cards}
    </div>
  );
};

export default ServiceCards;
