import Navbar from "@/components/navbar/navbar";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <Navbar />
      <div>services page</div>
    </div>
  );
};

export default page;
