import { Button } from "@nextui-org/react";
import { FC } from "react";

interface WorkDetailsProps {}

const WorkDetails: FC<WorkDetailsProps> = ({}) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <p className="lg:text-lg text-accent-purple font-light bg-accent-purple/20  dark:bg-accent-purple/60 dark:text-primary/80 w-fit px-2 rounded ">
          Category of product
        </p>
        <div className="flex flex-col gap-1">
          <h1 className="text-primary/80 font-medium text-lg lg:text-xl uppercase">
            The name of the project | short title of this current work.
          </h1>
          <p className=" text-primary/80 lg:text-lg font-light text-justify">
            In a professional context it often happens that private or corporate
            clients corder a publication to be made and presented with the
            actual content still not being ready.
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
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but occasionally circumstances occur
            in which toil and pain can procure him some great pleasure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
