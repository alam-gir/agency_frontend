"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { SyncLoader } from "react-spinners";

import { FC, useCallback, useEffect, useState, useTransition } from "react";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { LoginSchema } from "@/schemas/zodSchemas";
import { Button } from "@/components/ui/button";
import FormSuccess from "./form-success";
import FormError from "./form-error";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { useLoginMutation } from "@/redux/features/auth/authSlice";
import { selectSession } from "@/redux/features/session-slice";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const [isLoging, setLoging] = useState<boolean>(false);
  const { user } = useSelector(selectSession);
  const [
    login,
    {
      data: loginData,
      isLoading: loging,
      error: loginError,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
    },
  ] = useLoginMutation();

  const router = useRouter();
  const searchParams = useSearchParams();

  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const errorAnotherAccount =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "This email is already registered with anoter provider!"
      : "";

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    login(data);
  };

  const loginCallback = useCallback(() => {
    if (isLoginSuccess) {
      const message = (loginData as any)?.message;

      if ((user as any)?.emailVarified) {
        setSuccess(message);
        router.push("/");
      } else {
        setSuccess(message);
        router.push("/?email-verification=true");
      }
    }
    if (isLoginError) {
      setError((loginError as any).data.message);
    }
  }, [isLoginSuccess, isLoginError, loginError, loginData, router, user]);
  const logingStatus = useCallback(() => {
    if (loging) {
      setLoging(true);
    } else setLoging(false);
  }, [loging]);
  useEffect(() => {
    loginCallback();
    logingStatus();
  });

  return (
    <CardWrapper
      headerLabel="Login to your account"
      backButtonLabel="Dont have an acocunt ?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoging}
                      {...field}
                      placeholder="example@mail.com"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoging}
                      {...field}
                      type="password"
                      placeholder="********"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <FormSuccess message={success} />
          <FormError message={error || errorAnotherAccount} />
          <Button
            disabled={isLoging}
            type="submit"
            variant="outline"
            className="w-full"
            size="lg"
          >
            {isLoging ? <SyncLoader size={7} color="#36d7b7" /> : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
