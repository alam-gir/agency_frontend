"use client"
import { ChevronLeft } from "lucide-react";
import { FC } from "react";
import { useRouter } from "next/navigation";

interface BackButtonProps {}

const BackButton: FC<BackButtonProps> = ({}) => {
    const router = useRouter();

    const clickHandle = () => {
        router.back();
    }
  return (
    <li onClick={clickHandle} className="text-primary/80 bg-transparent max-w-fit list-none flex mx-2 cursor-pointer group hover:text-primary/60 duration-300">
      <ChevronLeft className="text-primary/60 group-hover:text-primary/40 duration-300" />
      Back
    </li>
  );
};

export default BackButton;
