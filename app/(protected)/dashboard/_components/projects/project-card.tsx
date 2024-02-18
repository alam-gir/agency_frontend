import { Input } from "@/components/ui/input";
import { MoreVertical } from "lucide-react";
import { FC } from "react";
import ProjectOptions from "./project-card-dropdown-ment";

interface ProjectCardProps {}

const ProjectCard: FC<ProjectCardProps> = ({}) => {
  return (
    <div className="w-full select-none">
      <div className="w-full h-full flex bg-primary-foreground border hover:bg-primary/5 duration-300 rounded-md p-2 md:p-4 items-start">
        <div className="w-16 flex items-start justify-start">
          <Input
            type="checkbox"
            className="h-4 w-4 md:h-5 md:w-5 cursor-pointer"
          />
        </div>
        <div className=" max-w-12 md:max-w-14">
          <img
            src="https://via.placeholder.com/150"
            alt="project"
            className="w-full h-full rounded-md object-center object-cover"
          />
        </div>
        <div className="px-2 flex flex-col min-w-50 grow gap-y-1">
          <h1 className="uppercase leading-tight line-clamp-2 font-medium text-primary/80">
            Project Name als o l thi snam oc acan can be very long
          </h1>
          <p className=" text-muted-foreground text-sm line-clamp-3">
            Project Description, and this ddescription can be a lv er fderuy
            veriy dkskdfo long of. yes can be a very long or shor description.
          </p>
        </div>
        <div className="hidden lg:block w-64">
          <h1 className="text-primary/80 font-medium">Mr. Owner Name</h1>
        </div>
        <div className="hidden lg:block w-64">
          <p className="text-primary/80 font-medium">12-JUL-2024</p>
        </div>
        <div className="hidden md:block w-64">
          <div className="h-full w-full bg-emerald-300/50 rounded-md px-3 py-1 flex items-center justify-center">
            <p className=" text-emerald-500 font-medium">published</p>
          </div>
          {/* <div className="h-full w-full bg-red-300/50 rounded-md px-3 py-1 flex items-center justify-center"><p className=" text-red-500 font-medium">archived</p></div> */}
        </div>
        <div className="pl-4 flex items-center justify-center">
          <ProjectOptions>
            <MoreVertical className="h-6 w-6 text-primary/70 hover:text-primary cursor-pointer" />
          </ProjectOptions>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
