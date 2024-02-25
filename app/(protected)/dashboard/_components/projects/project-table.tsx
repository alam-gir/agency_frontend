"use client";
import { FC, useCallback, useEffect, useState } from "react";
import ProjectCard from "./project-card";
import { useGetProjectsQuery } from "@/redux/features/project/projectSlice";
import { FaSpinner } from "react-icons/fa";

interface ProjectTableProps {}

const ProjectTable: FC<ProjectTableProps> = ({}) => {
  //-------------------redux hook---------------------
  const { data, error, isSuccess, isError, isLoading } = useGetProjectsQuery({});

  //-------------------react hook---------------------
  const [isProjectLoading, setProjectLoading] = useState<boolean>(true);
  const [isProjectError, setProjectError] = useState<boolean>(false);

  //-------------------callback functions---------------------
  const projectFetchStateCallback = useCallback(() => {
    // set loading state ----------------
    if (isLoading) {
      setProjectLoading(true);
    } else {
      setProjectLoading(false);
    }

    // set error state ----------------
    if (isError) {
      setProjectError(true);
    } else {
      setProjectError(false);
    }
  }, [isLoading, isError]);

  //-------------------useEffect---------------------
  useEffect(() => {
    projectFetchStateCallback();
  });

  console.log({ data });

  //-------------------JSX---------------------
  const projects = (data?.data as any)?.projects;
  const ProjectCards = projects
    ? projects.map((project: any, index: number) => {
        return <ProjectCard key={index} project={project} />;
      })
    : null;

  return (
    <div className="relative h-full w-full flex flex-col">
      <div className="h-full overflow-y-scroll flex flex-col gap-y-2 p-4 bg-secondary/50 rounded-md">
        {isProjectError ? (
          <div className="flex items-center justify-center h-full w-full">
            <h1 className="">Something went wrong to fetch projects!</h1>
          </div>
        ) : null}

        {isProjectLoading ? (
          <div className="flex items-center justify-center h-full w-full">
            <FaSpinner className=" animate-spin" />
          </div>
        ) : null}

        {!projects && !isProjectLoading ? (
          <div className="flex items-center justify-center h-full w-full">
            <h1 className="">No projects Found!</h1>
          </div>
        ) : null}

        {ProjectCards}
      </div>

      <div className=" w-full  h-[12%] flex justify-end ">pagination</div>
    </div>
  );
};

export default ProjectTable;
