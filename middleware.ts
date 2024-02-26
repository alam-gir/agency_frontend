
import { NextRequest, NextResponse } from "next/server";
import { isLoggedin } from "./lib/utills/loggedin-status";

const middleware = async (req: NextRequest, res: NextResponse) => {
  const { nextUrl } = req;

 const isUserLoggedin = await isLoggedin();
  
  console.log({isUserLoggedin:isUserLoggedin})

  if(isUserLoggedin && nextUrl.pathname.includes("/auth")){
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
