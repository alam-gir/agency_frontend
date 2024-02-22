
import { signOut } from "@/auth";

export const register = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }
  );
  if (!response.ok) {
    const error = await response.json();
    console.log(error);
    return {
      error: error,
    };
  }

  // send verification email
  const mailInfo = await sendVerificationEmail({
    email,
    redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-email`,
  });

  return mailInfo;
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    // send sign in request to api
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/credential`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
      mode: "cors",
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        error: data.error,
      };
    }
    if (res.status === 201) {
      return {
        verification: data.message,
      };
    }
    return {
      success: data.message,
    }
  } catch (error) {
    return {
      error: "Invalid credentials! Please try again!",
    };
  }
};

export const socialLogin = async ({provider}:{provider: "google" | "facebook" | "github"}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login/${provider}`
    );
    const data = await response.json();
    window.location.href = data.redirectUrl;
  } catch (error) {
    console.log({ error });
  }
}

export const logout = async () => {
  await signOut({ redirect: false });
};



// verifyEmail

export const verifyEmail = async (token: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-mail?token=${token}`
    );
    const data = await response.json();
    if (!response.ok) {
      return { error: data.error };
    }
    return { success: data.message };
  } catch (error) {
    return { error: (error as any).message };
  }
};

// check email verified or not

export const checkEmailVerification = async (email: string) => {
  // check email verified or not
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/email-verification-status?email=${email}`
  );
  if (!response.ok) {
    const error = await response.json();
    return false;
  }
  return true;
};

export const sendVerificationEmail = async ({
  email,
  redirectUrl,
}: {
  email: string;
  redirectUrl: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/send-verification-mail`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        redirectUrl,
      }),
    }
  );
  const data = await response.json();
  if (!response.ok) return { error: data.error };
  return {
    error: data.message,
  };
};
