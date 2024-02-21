"ues client";
import { FC } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { socialLogin } from "@/lib/actions/auth.actions";
interface SocialLoginButtonProps {}

const SocialLoginButton: FC<SocialLoginButtonProps> = ({}) => {


  const loginHandle = async (provider: "google" | "facebook" | "github") => {
    await socialLogin({ provider });
  };

  return (
    <div className="w-full h-fit">
      <div className="w-full h-full flex flex-wrap flex-col gap-2">
        <Button variant={"outline"} size={"lg"} onClick={() => loginHandle("github")} className="flex gap-x-2">
          <FaGithub />
          Login with github
        </Button>
        <Button variant={"outline"} size={"lg"} onClick={() => loginHandle("google")} className="flex gap-x-2">
          <FcGoogle />
          Login with google
        </Button>
        <Button variant={"outline"} size={"lg"}
          onClick={() => loginHandle("facebook")}
          className="flex gap-x-2"
        >
          <FaFacebook />
          Login with google
        </Button>
      </div>
    </div>
  );
};

export default SocialLoginButton;
