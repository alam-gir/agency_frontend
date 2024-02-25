"use client";
import { Input } from "@/components/ui/input";
import { MoreVertical } from "lucide-react";
import { FC } from "react";
import ProjectOptions from "./project-card-dropdown-ment";
import Image from "next/image";
import { ProjectPopulated } from "@/@types/types";
import { useRouter } from "next/navigation";
import { toBdDateTime } from "@/lib/convert-to-bd-time";

interface ProjectCardProps {
  project: ProjectPopulated;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  //-------------------react hooks---------------------
  const router = useRouter();
  
  //-------------------functions---------------------
  const redirectToEdit = (id: string) => {
    router.push(`projects/${id}`);
  };
  return (
    <div className="w-full select-none z-0">
      <div className="w-full h-full flex bg-primary-foreground border hover:bg-primary/5 duration-300 rounded-md p-2 md:p-4">
        <div className=" w-8 md:w-12 lg:w-16 flex items-start justify-start">
          <Input
            type="checkbox"
            className="h-4 w-4 md:h-5 md:w-5 cursor-pointer"
          />
        </div>
        <div className=" w-20  md:w-24 h-12 md:h-26 flex items-start">
          <Image
            src={project?.images[0]?.url || "https://via.placeholder.com/150"}
            alt="project"
            height={150}
            width={150}
            className="w-full h-full rounded-md object-center object-contain"
          />
        </div>
        <div className="px-2 w-full flex-grow gap-y-1">
          <h1 className="uppercase leading-tight line-clamp-2 font-medium text-primary/80">
            {project?.title}
          </h1>
          <p className=" text-muted-foreground text-sm line-clamp-3">
            {project?.short_description}
          </p>
        </div>
        <div className="hidden lg:block w-64">
          <h1 className="text-primary/80 font-medium">
            {project?.author?.name}
          </h1>
        </div>
        <div className="hidden lg:block w-64">
          <p className="text-primary/80 font-medium">
            { toBdDateTime(new Date(),{showTime: false})}
          </p>
        </div>
        <div className="hidden md:block w-64">
          <div className="h-full w-full bg-emerald-300/50 rounded-md px-3 py-1 flex items-center justify-center">
            <p className=" text-emerald-500 font-medium">{project?.status}</p>
          </div>
        </div>
        <div className="pl-4 flex items-center justify-center">
          <ProjectOptions editHandle={() => redirectToEdit(project?._id!)}>
            <MoreVertical className="h-6 w-6 text-primary/70 hover:text-primary cursor-pointer" />
          </ProjectOptions>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
