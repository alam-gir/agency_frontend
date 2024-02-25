import { FC } from "react";
import GridBackground from "../background/grid-bg";
import ReviewScroll from "./review-scroll";

interface WhatOurCustomerSaysProps {}

const WhatOurCustomerSays: FC<WhatOurCustomerSaysProps> = ({}) => {
  return (
    <div className="h-fit">
      <div className="">
        <div className=" w-full h-auto p-4 md:max-w-4xl lg:max-w-7xl  m-auto flex flex-col gap-2">
          <h1 className="text-xl md:text-3xl text-primary/80 font-bold tracking-wide uppercase">
            {`Our customer's `}
            <span className="text-accent-purple">{"saying's >"}</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-widest">
            What our happy customers are saying about us. you can also leave
            your feedback.
          </p>
          <div className=" w-full h-fit flex flex-wrap gap-8 items-center justify-center py-24">
            <ReviewScroll />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatOurCustomerSays;
