import { FC } from "react";
import { HashLoader } from "react-spinners";

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <HashLoader />
    </div>
  );
};

export default Loading;
