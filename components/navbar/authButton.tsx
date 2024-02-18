"use client";
import { FC, useEffect, useState } from "react";
import { UserAvatar } from "../global/userAvatar";
import DashboardButton from "./dashboar-button";
import RedirectButton from "./redirect-button";
import { FaSpinner } from "react-icons/fa";

import { useSelector } from "react-redux";
import { selectSession } from "@/redux/features/session-slice";

interface AuthButtonProps {}

const AuthButton: FC<AuthButtonProps> = ({}) => {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [isLogged, setLogged] = useState<boolean>(false);

  const { user, status } = useSelector(selectSession);

  useEffect(() => {

    if (user?._id && status === "loggedIn") {
      setLogged(true);
    } else {
      setLogged(false);
    }
    setLoading(false)
  }, [status, user]);

  if (isLoading) return <FaSpinner className=" animate-spin text-primary/15" />;
  return (
    <div className="w-full gap-x-2 flex items-center justify-end">
      {isLogged && user?.role === "admin" ? <DashboardButton /> : null}

      {isLogged && user ? (
        <div className="flex gap-x-2 items-center justify-center">
          <UserAvatar />
        </div>
      ) : (
        <RedirectButton title="Login" redirectTo="/auth/login" />
      )}
    </div>
  );
};

export default AuthButton;
