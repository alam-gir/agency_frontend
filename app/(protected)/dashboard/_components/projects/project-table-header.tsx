import { FC } from "react";

interface ProjectTableHeaderProps {}

const ProjectTableHeader: FC<ProjectTableHeaderProps> = ({}) => {
  return (
    <div className="w-full">
      <div className="w-full h-full flex bg-white border-b border-gray-200 rounded-t-md p-2 md:p-4 items-center">
        <div className="w-12 md:w-14">
          
        </div>
        <div className="px-2 flex flex-col min-w-50 grow gap-y-1">
          <h1 className="uppercase leading-tight line-clamp-2 font-medium text-primary/80">
            Project Name
          </h1>
          <p className="text-muted-foreground text-sm line-clamp-3">
            Description
          </p>
        </div>
        <div className="hidden lg:block w-64">
          <h1 className="text-primary/80 font-medium">Owner</h1>
        </div>
        <div className="hidden md:block w-64">
          <p className="text-primary/80 font-medium">Date</p>
        </div>
        <div className="hidden md:block w-64">
          <p className="text-primary/80 font-medium">Status</p>
        </div>
        <div className="pl-4 flex items-center justify-center">
          {/* Empty space for options column */}
        </div>
      </div>
    </div>
  );
};

export default ProjectTableHeader;
