"use client";
import { FC, useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import WorkDetails from "./work-details";
import { useParams } from "next/navigation";
import { useGetProjectQuery } from "@/redux/features/project/projectSlice";
import EmblaCarousel from "../embla/embla-carousel";
import { File, ProjectPopulated } from "@/@types/types";
import { FaSpinner } from "react-icons/fa";

interface WorkViewProps {}

const WorkView: FC<WorkViewProps> = ({}) => {
  //---------------------react hooks---------------------
  const params = useParams();
  const [images, setImages] = useState<File[]>([]);
  const [isProjectLoading, setProjectLoading] = useState<boolean>(true);
  const [isProjectError, setProjectError] = useState<boolean>(true);

  //---------------------redux hooks---------------------
  const { data, error, isError, isLoading, isSuccess } = useGetProjectQuery(
    { project_id: params.id as string },
    { skip: !params.id }
  );

  //---------------------functions--------------------


  //---------------------callback---------------------
  const projectStateCallback = useCallback(() => {
    if (isLoading) setProjectLoading(true);
    else setProjectLoading(false);

    if (isError) setProjectError(true);
    else setProjectError(false);

    if (isSuccess && data?.data?.images) {
      const images = (data?.data?.images as unknown) as File[];
      setImages(images);
    }
  }, [isSuccess, data, isLoading, isError]);
  //---------------------useEffect---------------------
  useEffect(() => {
    projectStateCallback();
  });

  const OPTIONS: EmblaOptionsType = {};
  if (isProjectLoading)
    return (
      <div className="h-full w-full min-h-screen flex items-center justify-center bg-white brightness-90 animate-pulse ">
        <FaSpinner className="animate-spinner-ease-spin" />
      </div>
    );

  if (!isProjectLoading && isError)
    return (
      <div className="h-full w-full min-h-screen flex items-center justify-center ">
        <p>{(error as any).message ||"Work not found!"}</p>
      </div>
    );
  return (
    <div className="h-full w-full md:max-w-2xl lg:max-w-6xl m-auto flex flex-col gap-10 lg:flex-row p-4">
      {/* slider */}
      <div className="h-auto w-full lg:w-1/2">
        <EmblaCarousel images={images} options={OPTIONS} />
      </div>
      {/*details  */}
      <div className="lg:w-1/2">
        <WorkDetails work={data?.data as ProjectPopulated} />
      </div>
    </div>
  );
};

export default WorkView;
