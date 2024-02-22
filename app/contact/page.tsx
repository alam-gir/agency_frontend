import Navbar from "@/components/navbar/navbar";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <Navbar />
      <div>contact page</div>
    </div>
  );
};

export default page;
