import { redirect } from "next/navigation";
import { FC } from "react";

interface pageProps {}

// this is initial page for redirecting to dashboard
const page: FC<pageProps> = async ({}) => {
  redirect("/dashboard/overview");
};

export default page;
