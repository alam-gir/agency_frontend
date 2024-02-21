import LoginForm from "@/components/auth/login-form";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default Page;
