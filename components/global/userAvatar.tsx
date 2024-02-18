"use client";
import { FC, useEffect, useTransition } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { userNameIcon } from "@/lib/utills/userNameIcon";
import { useRouter } from "next/navigation";
import { useLogoutMutation } from "@/redux/features/auth/authSlice";
import { UseSelector, useSelector } from "react-redux";
import { selectSession } from "@/redux/features/session-slice";

interface UserAvatarProps {
  view?: "RTL" | "LTR";
  isNameBox?: boolean;
}

export const UserAvatar: FC<UserAvatarProps> = ({
  view,
  isNameBox = false,
}) => {
  const { user } = useSelector(selectSession);
  const [logout, { isLoading, isSuccess }] = useLogoutMutation();

  const router = useRouter();

  // functions
  const logoutAccount = () => {
    logout();
  };
  useEffect(() => {
    if(isSuccess){
      router.push("/auth/login");
    }
  }, [isSuccess, router]);

  const secret_email =
    user.email?.slice(0, 4) +
    "*********" +
    user.email?.slice(user.email?.length - 3, user.email?.length);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div
            className={`flex ${
              view === "LTR" ? "flex-row-reverse" : ""
            }  justify-center items-center lg:justify-start lg:hover:bg-secondary-foreground/10 lg:rounded-lg lg:w-auto lg:mx-auto`}
          >
            <Avatar className={`${view === "LTR" ? " ml-2" : ""}`}>
              <AvatarImage src={user?.avatar!} alt="profile image" />
              <AvatarFallback className="bg-secondary-foreground/10 text-primary/50 font-bold">
                {userNameIcon(user?.name!)}
              </AvatarFallback>
            </Avatar>
            {isNameBox ? (
              <div className="hidden lg:block">
                <h4 className="text-sm text-primary/60 uppercase dark:text-gray-200 font-bold text-center lg:text-left lg:ml-2">
                  {user?.name}
                </h4>
                <p className="text-sm text-gray-400 text-center lg:text-left lg:ml-2">
                  {secret_email}
                </p>
              </div>
            ) : null}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" w-48">
          <DropdownMenuLabel className=" cursor-pointer">
            <h4 className="text-sm text-primary/60 uppercase dark:text-gray-200 font-bold text-center lg:text-left lg:ml-2">
              {user?.name}
            </h4>
            <p className="text-sm text-gray-400 text-center lg:text-left lg:ml-2">
              {secret_email}
            </p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            className=" cursor-pointer"
            onClick={() => router.push("/profile")}
          >
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            className=" cursor-pointer"
            disabled={isLoading}
            onClick={async () => logoutAccount()}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
