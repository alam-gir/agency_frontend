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

import { Button } from "@nextui-org/react";

import { BuyerSchema } from "@/schemas/zodSchemas";
import { FaSpinner } from "react-icons/fa";

interface OrderFormProps {
  onSubmit: (data: z.infer<typeof BuyerSchema>) => void;
  isLoading?: boolean;
  isError?: boolean;
}

const OrderForm: FC<OrderFormProps> = ({ onSubmit, isError, isLoading }) => {
  const form = useForm<z.infer<typeof BuyerSchema>>({
    resolver: zodResolver(BuyerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      details: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof BuyerSchema>) => {
    const res = onSubmit(data);
    console.log("order submit response", { res });
  };

  return (
    <div className="w-full min-w-[300px] h-full max-h-[calc(100vh-30vh)] overflow-y-scroll md:h-fit md:w-[400px] lg:w-[500px] ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4 w-full">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input  disabled={isLoading}
                    className="dark:border border-primary/20"
                    {...field}
                    id="name"
                    placeholder="your name"
                  />
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
                  <Input  disabled={isLoading}
                    className="dark:border border-primary/20"
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
                  <Input  disabled={isLoading}
                    className="dark:border border-primary/20"
                    {...field}
                    id="phone"
                    placeholder="01*********"
                  />
                  <FormMessage>
                    {form.formState.errors.phone?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              name="details"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="details">Details</FormLabel>
                  <Textarea  disabled={isLoading}
                    {...field}
                    id="details"
                    placeholder="write somthing briefly about your project, such as : write down idea if you have, or write down what color you choose etcetera..."
                    className="min-h-60 dark:border border-primary/20"
                  />
                  <FormMessage>
                    {form.formState.errors.details?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <Button  disabled={isLoading} type="submit" variant={"flat"} size={"lg"} >
            {isLoading ? <FaSpinner className="animate-spinner-ease-spin" /> : "Place order"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default OrderForm;
