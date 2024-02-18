"ues client";
import {signIn} from "next-auth/react"
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
interface SocialLoginButtonProps {}

const SocialLoginButton: FC<SocialLoginButtonProps> = ({}) => {
  const router = useRouter();
  //functions

  const loginHandle = (provider: "github" | "google") => {
    try {
     signIn(provider,{
      callbackUrl: "/"
     })
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button onClick={() => loginHandle("github")} className="flex gap-x-2">
        <FaGithub />
        Login with github
      </Button>
      <Button onClick={() => loginHandle("google")} className="flex gap-x-2">
        <FcGoogle />
        Login with google
      </Button>
    </div>
  );
};

export default SocialLoginButton;
