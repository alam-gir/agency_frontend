"use client";
import { FC, useTransition } from "react";
import { Button } from "../ui/button";
import { logout } from "@/lib/actions/auth.actions";
import { FaSpinner } from "react-icons/fa";

interface LogoutButtonProps {}

const LogoutButton: FC<LogoutButtonProps> = ({}) => {
  const [isPending, startTransition] = useTransition();

  // functions
  const clickHandle = () => {
    startTransition(async () => {
      await logout();
      window.location.reload();
    });
  };
  return (
    <Button
      disabled={isPending}
      onClick={clickHandle}
      variant={"outline"}
      className=" disabled:cursor-not-allowed disabled:opacity-65"
    >
      {isPending ? <FaSpinner className=" animate-spin" /> : "Logout"}
    </Button>
  );
};

export default LogoutButton;
