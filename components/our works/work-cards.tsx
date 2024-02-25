"use client";
import { FC, useCallback, useEffect, useState } from "react";
import WorkCard from "./work-card";
import { useGetProjectsQuery } from "@/redux/features/project/projectSlice";
import { useSearchParams } from "next/navigation";
import { FaSpinner } from "react-icons/fa";
import { Project } from "@/@types/types";
import { Pagination } from "../ui/pagination";

interface WorkCardsProps {}

const WorkCards: FC<WorkCardsProps> = ({}) => {
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

  //----------------------JSX-------------------
  const Cards =
    projects?.length > 0
      ? projects.map((project, index) => {
          return <WorkCard key={index} project={project} />;
        })
      : null;

  if (isProjectsLoading) {
    return (
      <div className="h-full min-h-[50vh] w-full flex items-center justify-center">
        <FaSpinner className=" animate-spin" />
      </div>
    );
  } else {
    if (projects?.length === 0) {
      return (
        <div className="h-full min-h-[50vh] w-full flex items-center justify-center">
          <p className="text-muted-froreground">Sorry! No project found.</p>
        </div>
      );
    }
    if (isProjectsError) {
      return (
        <div className="h-full min-h-[50vh] w-full flex items-center justify-center">
          <p className="text-muted-froreground">something went wrong!</p>
        </div>
      );
    }
  }

  return (
    <div className=" grid grid-cols-1 gap-12 p-4 md:grid-cols-2 md:gap-8 lg:gap-12 xl:grid-cols-3 w-full max-w-xl md:max-w-full mx-auto">
      {Cards}
      <Pagination />
    </div>
  );
};

export default WorkCards;
