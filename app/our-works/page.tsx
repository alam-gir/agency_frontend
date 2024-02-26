import Footer from "@/components/footer";
import MobileNavbar from "@/components/navbar/mobile-navbar";
import Navbar from "@/components/navbar/navbar";
import OurWorksPage from "@/components/page/our-works-page";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
    <div className="h-full w-full relative">
        <Navbar />
        <MobileNavbar />
      <div className="h-full w-full relative">
        <OurWorksPage />
      </div>
    </div>
    <Footer isSubcriptionBox={false} />
    </>
  );
};

export default page;
