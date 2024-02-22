import MobileNavbar from "@/components/navbar/mobile-navbar";
import Navbar from "@/components/navbar/navbar";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="h-fit w-full">
        <Navbar />
        <MobileNavbar />
      </div>
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default layout;
