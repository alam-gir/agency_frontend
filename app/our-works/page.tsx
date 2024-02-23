import MobileNavbar from "@/components/navbar/mobile-navbar";
import Navbar from "@/components/navbar/navbar";
import OurWorksPage from "@/components/page/our-works-page";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="h-auto w-full relative">
        <Navbar />
        <MobileNavbar />
      <div className="h-full">
        {/* <EmailVerificationModal /> */}
        <OurWorksPage />
      </div>
    </div>
  );
};

export default page;