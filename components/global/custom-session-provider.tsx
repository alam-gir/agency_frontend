"use client";
import { setSession } from "@/redux/features/session-slice";
import { RootState } from "@/redux/store";
import { getSession, useSession } from "next-auth/react";
import { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface CustomSessionProviderProps {
  children?: React.ReactNode;
}

const CustomSessionProvider: FC<CustomSessionProviderProps> = ({
  children,
}) => {
  const dispatch = useDispatch();

  //select session
  const storeSessionData = useSelector(
    (state: RootState) => state.session.data
  );

  // select new refresh token
  const storeRefresToken = (storeSessionData as any).user?.refresh_token;

  // get session
  const { data, update } = useSession();


  // update session if boths available and new generated
  const updateSession = useCallback(async () => {
    if (
      storeRefresToken &&
      data?.user.refresh_token &&
      storeRefresToken !== data?.user.refresh_token
    ) {
      // otherwise update the session
      await update({
        ...storeSessionData,
      });
    }
  }, [data?.user.refresh_token, storeRefresToken, storeSessionData, update]);


  useEffect(() => {
    getSession().then((session) => dispatch(setSession({ ...session })));
    updateSession();
    
    // eslint-disable-next-line
  },[dispatch]);

  return <>{children}</>;
};

export default CustomSessionProvider;
