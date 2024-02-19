import { FC } from "react";
import { Button } from "./ui/button";

interface SubscriptionEmailBoxProps {}

const SubscriptionEmailBox: FC<SubscriptionEmailBoxProps> = ({}) => {
  return (
    <div className="h-[18rem] w-full p-8 flex flex-col items-center justify-center">
      <h1 className="text-xl lg:text-2xl p-4 text-primary/80">{`Don't miss any update!`}</h1>
      <div className="h-32 lg:h-20 w-full max-w-[40rem] flex flex-col lg:flex-row gap-y-4 lg:gap-x-4 lg:items-center lg:justify-center">
        <input className="border py-2 px-4 rounded-md lg:h-12 lg:w-96" type="text" placeholder="Enter your email address" />
        <Button size={"lg"} variant={"secondary"} className="text-primary/80 lg:w-72 lg:h-12">Subscribe</Button>
      </div>
    </div>
  );
};

export default SubscriptionEmailBox;
