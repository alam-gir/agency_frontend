import { FC } from "react";
import ProjectTable from "./project-table";
import DashboardPageHeader from "../dashboard-page-header";
import ProjectpageHeader from "./project-page-header";
import ProjectCreateModal from "./project-create-modal";

interface ArchivedProjectsProps {}

const ArchivedProjects: FC<ArchivedProjectsProps> = ({}) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-[10vh] w-full">
        <DashboardPageHeader
          title="Archived projects"
          description="These projects are archived projec. Peoples are not see."
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

export default ArchivedProjects;
