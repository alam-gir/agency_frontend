export const verifyRefreshToken = async ({
  refresh_token,
}: {
  refresh_token: string;
}) => {
  console.log({ refresh_token });
  if (!refresh_token) return false;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-refresh-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh_token }),
    }
  );

  const data = await response.json();
  console.log({ data });
  return data.success;
};
