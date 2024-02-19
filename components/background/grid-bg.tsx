import { FC } from "react";

interface GridBackgroundProps {}

const GridBackground: FC<GridBackgroundProps> = ({}) => {
  return (
    <div className="absolute h-[50rem] w-full dark:bg-grid-small-white/[0.4] bg-grid-small-black/[0.2] flex items-center justify-center -z-50 ">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
  </div>
  );
};

export default GridBackground;
