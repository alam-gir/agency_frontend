import { FC, useCallback, useEffect, useState } from "react";
import { UserAvatar } from "../global/userAvatar";
import DashboardButton from "./dashboar-button";
import RedirectButton from "./redirect-button";
import { FaSpinner } from "react-icons/fa";

import { useSelector } from "react-redux";
import { selectSession } from "@/redux/features/session-slice";
import { usePathname } from "next/navigation";

interface AuthButtonProps {}

const AuthButton: FC<AuthButtonProps> =async ({}) => {

  const pathname = usePathname();

  const [isLoading, setLoading] = useState<boolean>(true);
  const [isLogged, setLogged] = useState<boolean>(false);
  const [isAuthPage, setAuthPage] = useState<boolean>(false);

  const { user, status } = useSelector(selectSession);

  const loggedinSetCallback = useCallback(() => {
    if (user?._id && status === "loggedIn") {
      setLogged(true);
    } else {
      setLogged(false);
    }
    setLoading(false);
  }, [user, status]);

  const authPageSetCallback = useCallback(() => {
    if (pathname.includes("auth")) setAuthPage(true);
    else setAuthPage(false);
  }, [pathname]);

  useEffect(() => {
    loggedinSetCallback();
    authPageSetCallback();
  });

  if (isLoading) return <div className="flex items-center"><FaSpinner className=" animate-spin text-primary/15" /></div>;
  return (
    !isAuthPage ? <div className="w-full gap-x-2 flex items-center justify-end">
      {isLogged && user?.role === "admin" ? <DashboardButton /> : null}

      {isLogged && user ? (
        <div className="flex gap-x-2 items-center justify-center">
          <UserAvatar />
        </div>
      ) : (
        <RedirectButton title="Login" redirectTo="/auth/login" />
      )}
    </div>
   : null);
};

export default AuthButton;
