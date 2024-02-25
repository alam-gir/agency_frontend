import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";
import draw from "/public/icons/draw-m-w.svg";

interface HomeHeroProps {}

const HomeHero: FC<HomeHeroProps> = ({}) => {
  return (
    <div className="h-full w-full">
      {/* dot background */}
      <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center absolute -z-10">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute top-0 left-0 bottom-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* hero content */}
      <div className="h-auto w-full md:max-w-4xl lg:max-w-7xl m-auto px-4 flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="h-screen md:h-[93vh] flex flex-col justify-center gap-y-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl w-full font-bold text-primary/80 leading-tight md:leading-snug lg:leading-tight">
              Grow your <span className="text-accent-purple">Business</span> with
              us.
            </h1>
            <p className=" max-w-xl text-muted-foreground tracking-wide">
              We will design everything so elegently that what your company
              needs to grow, ingshaAllah. We are a team who just looks your
              quality that how your business attract customers.
            </p>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:gap-x-4 gap-y-3">
            <Button variant={"default"} size={"lg"} className="lg:w-72">
              Order us
            </Button>
            <Button variant={"outline"} size={"lg"} className="lg:w-72">
              Our recent works
            </Button>
          </div>
        </div>
        <div className=" h-screen w-full lg:w-1/2 flex items-center justify-center">
          <Image
            src={draw}
            alt="Picture of the author"
            width={500}
            height={500}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
