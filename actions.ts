"use server";

import { AuthError } from "next-auth";
import { signIn } from "./auth";
import { IUser, UserModel } from "./schemas/user.shema";
import { connectDB } from "./lib/db/db";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";

export const signinAction = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    console.log({ error: error });
    if(isRedirectError(error)){
      throw error;
    }
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          return { error: "Invalid credentials." };
        }
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};

export const providerSignin = async (provider: "google" | "github") => {
  const res = await signIn('github');
}

export const register = async (data: IUser) => {
  try {
    await connectDB();
    // exist user
    const exist = await UserModel.findOne({ email: data.email });
    if (exist) throw new Error("User already exist!");
    // create user
    const user = await UserModel.create(data);
    if(!user) throw new Error("User not created!");
    return user;
  } catch (error) {
    throw error;
  }
};

