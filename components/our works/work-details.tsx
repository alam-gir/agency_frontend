import { ProjectPopulated } from "@/@types/types";
import { Button } from "@nextui-org/react";
import { FC } from "react";

interface WorkDetailsProps {
  work: ProjectPopulated
}

const WorkDetails: FC<WorkDetailsProps> = ({work}) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <p className="lg:text-lg text-accent-purple font-light bg-accent-purple/20  dark:bg-accent-purple/60 dark:text-primary/80 w-fit px-2 rounded ">
          {work?.category?.title}
        </p>
        <div className="flex flex-col gap-1">
          <h1 className="text-primary/80 font-medium text-lg lg:text-xl uppercase">
            {work?.title}
          </h1>
          <p className=" text-primary/80 lg:text-lg font-light text-justify">
            {work?.short_description}
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="bordered" className="md:min-w-72">Order now</Button>
          <Button variant="bordered" className="md:min-w-72">Contact us</Button>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 text-justify">
          <h2 className=" text-primary/80 font-medium text-lg">Project details</h2>
          <p className="text-primary/80 lg:text-lg font-light">
            {work?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
