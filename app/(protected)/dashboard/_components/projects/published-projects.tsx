"use client";
import { FC } from "react";
import ProjectTable from "./project-table";
import DashboardPageheader from "../dashboard-page-header";
import ProjectpageHeader from "./project-page-header";
import ProjectCreateModal from "./project-create-modal";

interface PublishedProjectsProps {}

const PublishedProjects: FC<PublishedProjectsProps> = ({}) => {

  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-[10vh] w-full">
        <DashboardPageheader
          title="Published projects"
          description="These projects are published project. Peoples can see."
        />
      </div>
      <div className="h-14 w-full px-4">
        <ProjectpageHeader />
      </div>
      <div className="h-full flex flex-col p-4 ">
        <ProjectTable />
      </div>
      <ProjectCreateModal />
    </div>
  );
};

export default PublishedProjects;
