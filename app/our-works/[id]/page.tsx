import Footer from "@/components/footer";
import MobileNavbar from "@/components/navbar/mobile-navbar";
import Navbar from "@/components/navbar/navbar";
import BackButton from "@/components/our works/back-button";
import WorkView from "@/components/our works/work-view";
import { FC } from "react";

interface WorkSingleProps {}

const WorkSingle: FC<WorkSingleProps> = ({}) => {
  return (
    <>
      <div className="h-full min-h-screen w-full ">
        <div className="h-fit w-full">
          <Navbar />
          <MobileNavbar />
        </div>
        <div className="h-full w-full md:max-w-4xl lg:max-w-7xl m-auto flex flex-col gap-10 lg:flex-row">
          <BackButton />
        </div>
        <WorkView />
      </div>
      <Footer isSubcriptionBox={false} />
    </>
  );
};

export default WorkSingle;
