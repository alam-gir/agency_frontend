import MobileNavbar from "@/components/navbar/mobile-navbar";
import Navbar from "@/components/navbar/navbar";
import ContactPage from "@/components/page/contact-page";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="h-auto w-full relative">
        <Navbar />
        <MobileNavbar />
      <div className="h-full">
        {/* <EmailVerificationModal /> */}
        <ContactPage />
      </div>
    </div>
  );
};

export default page;
