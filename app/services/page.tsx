import MobileNavbar from "@/components/navbar/mobile-navbar";
import Navbar from "@/components/navbar/navbar";
import ServicesPage from "@/components/page/services-page";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="h-auto w-full relative">
        <Navbar />
        <MobileNavbar />
      <div className="h-full">
        {/* <EmailVerificationModal /> */}
        <ServicesPage />
      </div>
    </div>
  );
};

export default page;
