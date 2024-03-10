"use client";
import { FC, useCallback, useEffect, useState } from "react";
import WorksGalleryCard from "./works-gallery-card";
import { useSearchParams } from "next/navigation";
import { useGetProjectsQuery } from "@/redux/features/project/projectSlice";
import { Project } from "@/@types/types";

interface WorksGalleryProps {}

const WorksGallery: FC<WorksGalleryProps> = ({}) => {
  //-------------------react hook---------------------
  const searchParams = useSearchParams();
  const categoryParams = searchParams.get("category");
  const search = searchParams.get("search");
  const [isProjectsLoading, setProjectsLoading] = useState<boolean>(true);
  const [isProjectsError, setProjectsError] = useState<boolean>(true);

  //-------------------redux hook---------------------
  const { data, error, isSuccess, isError, isLoading } = useGetProjectsQuery({
    filter: {
      category: categoryParams,
      search: search,
    },
  });

  //------------------variables-----------------------
  const projects = (data?.data as any)?.projects as Project[];

  //----------------------callbacks-------------------
  const projectsStateCallback = useCallback(() => {
    //setLoading
    if (isLoading) setProjectsLoading(true);
    else setProjectsLoading(false);
    //setError
    if (isError) setProjectsError(true);
    else setProjectsError(false);
  }, [isLoading, isError]);
  //----------------------useEffetcs-------------------
  useEffect(() => {
    projectsStateCallback();
  });

  const images = projects?.reduce(
    (acc, project) => {
      if ((project?.category as any)[0].title === "Logo Design") {
        for (let image of project.images) {
          const imageUrl = (image as any)?.url;
          acc.push(imageUrl as string);
        }
      }
      return acc;
    },
    [] as string[]
  );
  const GelleryCards = images?.length ? (
    images.map((image, index) => (
      <WorksGalleryCard key={index} image_url={image}  />
    ))
  ) : null
  return (
    <div className="w-full h-full">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl text-primary">Our Works</h1>
        <p className="text-muted-foreground">
          Here is our previous works. Order us to get yours!
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-full m-auto py-4">
        {GelleryCards}
      </div>
    </div>
  );
};

export default WorksGallery;
