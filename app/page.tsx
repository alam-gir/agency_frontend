import Navbar from "@/components/navbar/navbar";
import { FC } from "react";
import EmailVerificationModal from "@/components/auth/email-verification-modal";
import HomePage from "@/components/page/home-page";
interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  return (
    <div className="h-auto w-full relative">
        <Navbar />
      <div className="h-full">
        {/* <EmailVerificationModal /> */}
        <HomePage />
      </div>
    </div>
  );
};

export default page;
