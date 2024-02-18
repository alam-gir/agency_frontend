import { FC } from "react";
import { ClimbingBoxLoader } from "react-spinners";

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <ClimbingBoxLoader />
    </div>
  );
};

export default Loading;
