import { FC } from "react";
import { FaSpinner } from "react-icons/fa";


interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <FaSpinner className="animate-spinner-ease-spin text-primary/80" />
    </div>
  );
};

export default Loading;
