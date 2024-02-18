import { FC } from "react";
import ProjectCard from "./project-card";

interface ProjectTableProps {}

const ProjectTable: FC<ProjectTableProps> = ({}) => {
  return (
    <div className="relative h-full w-full flex flex-col">
      <div className="h-full overflow-y-scroll flex flex-col gap-y-2 p-4 bg-secondary/50 rounded-md">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <div className=" w-full  h-[12%] flex justify-end ">pagination</div>
    </div>
  );
};

export default ProjectTable;
