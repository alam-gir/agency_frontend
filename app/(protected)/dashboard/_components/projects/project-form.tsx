"use client";
import { FC, useCallback, useEffect, useState } from "react";
import ProjectFormFiles from "./project-form-files";
import ProjectFormImages, { IFile } from "./project-form-images";
import ProjectFormStatus from "./Project-form-status";
import { useParams } from "next/navigation";
import { useGetProjectQuery } from "@/redux/features/project/projectSlice";

import { FaSpinner } from "react-icons/fa";
import ProjectFormTitleField from "./project-form-title-field";
import ProjectFormShortDescriptionField from "./project-form-short-description-field";
import ProjectFormDescriptionField from "./project-form-description-field";
import Link from "next/link";

interface ProjectFormProps {}

const ProjectForm: FC<ProjectFormProps> = ({}) => {
  //<-------------------React states--------------------->
  const project_id = useParams().id;

  //<-------------------Redux states--------------------->
  const { data, isError, isLoading, error } =
    useGetProjectQuery(
      { project_id: project_id as string },
      { skip: !project_id }
    );

  //<-------------------React Callbacks--------------------->
  const projectArrange = useCallback(() => {}, []);

  //<-------------------React useEffects--------------------->
  useEffect(() => {
    projectArrange();
  });

  //<-------------------if loading--------------------->
  if (isLoading)
    return (
      <div className="flex w-full min-h-40 items-center justify-center">
        <FaSpinner className=" animate-spin text-primary/80" />
      </div>
    );

  //<-------------------if Error--------------------->
  if (isError)
    return (
      <div className="flex flex-col w-full min-h-40 items-center justify-center gap-4">
        <h1>{(error as any).message || "No Project Found!"}</h1>
        <div className="flex gap-2">
          <p>Go to {`->`}</p>
          <div className="flex flex-col gap-2">
            <p className=" text-blue-300">
              {" "}
              <Link href={"/dashboard/projects/published"}>
                Published Projects
              </Link>
            </p>
            <p className=" text-blue-300">
              {" "}
              <Link href={"/dashboard/projects/archived"}>
                Archived Projects
              </Link>
            </p>
          </div>
        </div>
      </div>
    );

  //<-------------------if Success--------------------->
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <ProjectFormTitleField title={data?.data.title!} />
          <ProjectFormShortDescriptionField
            short_description={data?.data.short_description!}
          />
          <ProjectFormDescriptionField description={data?.data.description!} />
          <ProjectFormImages images={data?.data.images as unknown as IFile[]} />
          <ProjectFormFiles files={data?.data.files as unknown as IFile[]} />
          <ProjectFormStatus />
        </div>
      </div>
    </main>
  );
};

export default ProjectForm;
