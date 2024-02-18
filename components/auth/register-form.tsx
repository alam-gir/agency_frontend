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

import { Input } from "@/components/ui/input";
import { FC, useState } from "react";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { RegisterSchema } from "@/schemas/zodSchemas";
import { Button } from "@/components/ui/button";
import FormError from "@/components/auth/form-error";
import FormSuccess from "@/components/auth/form-success";
import { register } from "@/lib/actions/auth.actions";
import { SyncLoader } from "react-spinners";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      register({
        name: data.name,
        email: data.email,
        password: data.password,
      }).then((data) => {
        if ((data as any)?.success) {
          setSuccess((data as any)?.success);
          router.replace("/auth/login?send-email-verification=true");
        } else setError((data as any)?.error);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Register an account"
      backButtonLabel="Already have an acocunt ?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="example"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.name?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="example@email.com"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.email?.message}
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
                      disabled={isPending}
                      {...field}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.confirm_password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            variant={"outline"}
            size={"lg"}
            type="submit"
            className="w-full"
          >
            {isPending ? (
              <SyncLoader size={7} color="#36d7b7" />
            ) : (
              "Create account"
            )}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
