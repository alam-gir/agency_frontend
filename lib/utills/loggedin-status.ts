import { cookies } from "next/headers";
export const isLoggedin = async () => {

  const refresh_token = cookies().get("refresh_token")?.value;

  if (!refresh_token) return false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-refresh-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh_token }),
        credentials: "include"
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error : any) {
    return false;
  }
};
