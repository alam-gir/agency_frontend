"use client";
import { FC } from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

import { ContactFormSchema } from "@/schemas/zodSchemas";

interface ContactFormProps {
  title?: string;
  description?: string;
}

const ContactForm: FC<ContactFormProps> = ({ title, description }) => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof ContactFormSchema>) => {
    console.log({ data });
  };
  return (
    <div className="h-auto w-full max-w-3xl lg:max-w-7xl m-auto flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl text-accent-purple dark:text-primary/80 font-medium text-center lg:text-left">
          {title || `We would love to help!`}
        </h1>
        <p className="text-primary/80 text-center lg:text-left">
          {description ||
            `reach out and we'll get in touch within 24 hours, ingshaAllah!`}
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4 w-full">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input className="dark:border border-primary/20" {...field} id="name" placeholder="your name" />
                  <FormMessage>
                    {form.formState.errors.name?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input className="dark:border border-primary/20"
                    {...field}
                    id="email"
                    placeholder="youremail@mail.com"
                  />
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="phone">Phone number</FormLabel>
                  <Input className="dark:border border-primary/20" {...field} id="phone" placeholder="01*********" />
                  <FormMessage>
                    {form.formState.errors.phone?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea
                    {...field}
                    id="message"
                    placeholder="your text message here..."
                    className="min-h-60 dark:border border-primary/20"
                  />
                  <FormMessage>
                    {form.formState.errors.message?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <Button variant={"secondary"} size={"lg"}>
            Send message
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
