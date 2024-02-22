import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyRefreshToken } from "./lib/utills/verify-refresh-token";

const middleware = async (req: NextRequest, res: NextResponse) => {
  const { nextUrl } = req;
  const refresh_token = cookies().get("refresh_token")?.value;
  let isLoggedIn = false;
  if (refresh_token) {
    isLoggedIn = await verifyRefreshToken({
      refresh_token: (refresh_token as unknown) as string,
    });
  }

  if(isLoggedIn && nextUrl.pathname.includes("/auth")){
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  // by default, nothing to do
  return null;
};

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export default middleware;
