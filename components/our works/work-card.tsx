import { FC } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Project } from "@/@types/types";

interface WorkCardProps {
  project: Project;
}

const WorkCard: FC<WorkCardProps> = ({project}) => {
  //-------------------variables---------------------
  const projectFirstImage = (project?.images[0] as {url:string})?.url || "https://fakeimg.pl/600x600";
  return (
    <Card>
      <CardContent className="p-4">
        <Image
          alt="Cover image"
          className=" h-[12rem] md:h-[16rem] w-full overflow-hidden rounded-lg object-contain"
          height="150"
          priority = {true}
          src={ projectFirstImage}
          width="300"
        />
      </CardContent>
      <CardHeader className="p-4">
        <h3 className="text-base font-bold">{project?.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {project?.short_description}
        </p>
      </CardHeader>
    </Card>
  );
};

export default WorkCard;
