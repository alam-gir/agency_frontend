"use client";
import { FC, useCallback, useEffect, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { verifyEmail } from "@/lib/actions/auth.actions";
import FormError from "./form-error";
import FormSuccess from "./form-success";
import { Button } from "../ui/button";
import { FaSpinner } from "react-icons/fa";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";

const OTPSchema = z.object({
  otp: z.string().min(5, { message: "OTP must be 5 characters long" }),
});

interface EmailVerificationFormProps {}

const EmailVerificationForm: FC<EmailVerificationFormProps> = ({}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const token = searchParams.get("token");

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm({
    resolver: zodResolver(OTPSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data: z.infer<typeof OTPSchema>) => {};

  return (
    <div className="flex items-center justify-center flex-col gap-4 p-4">
      <div className="flex items-center justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4">
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your OTP here</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="otp"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.otp?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormSuccess message={success} />
              <FormError message={error} />
              {isPending ? (
                <div className="flex items-center justify-center py-2 px-4 gap-x-2">
                  <FaSpinner className=" animate-spin h-6 w-6 text-primary/15" />
                  <p className=" text-muted-foreground">processing</p>
                </div>
              ) : (
                <Button type="submit" variant={"outline"}>
                  Verify
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
      <div>
        <p className="text-muted-foreground">
          {`Didn't receive the email?`}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              startTransition(() => {
                // verifyEmail(token);
              });
            }}
            className="text-primary"
          >
            Resend
          </a>
        </p>
      </div>
    </div>
  );
};

export default EmailVerificationForm;
