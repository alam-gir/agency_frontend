/* eslint-disable @next/next/no-img-element */

import { FC, useRef, useState } from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { CategorySchema } from "@/schemas/categorySchema";

import {
  Form,
  FormField,
  FormLabel,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthorView from "@/app/(protected)/dashboard/_components/authorView";
import { FaSpinner } from "react-icons/fa";
import FormSuccess from "@/components/auth/form-success";
import FormError from "@/components/auth/form-error";
import { Trash2, Upload } from "lucide-react";

interface CategoryFormProps {
  category?: any;
  mode: "create" | "edit";
  onSubmit: (
    values: z.infer<typeof CategorySchema>
  ) => Promise<
    | void
    | { success: string; error?: undefined }
    | { error: any; success?: undefined }
  >;
  disabled?: boolean;
  error?: string;
  success?: string;
}

const CategoryForm: FC<CategoryFormProps> = ({
  category,
  onSubmit,
  mode,
  disabled,
}) => {
  //loading states
  const [isLoading, setLoading] = useState<boolean>(false);

  const titleRef = useRef<HTMLInputElement | null>(null);
  const iconRef = useRef<HTMLInputElement | null>(null);

  const [newIcon, setNewIcon] = useState<File | undefined>();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof CategorySchema>>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      title: category?.title || "",
    },
  });

  //<----------------------submit handler for submit the values-------------------->
  const submitHandler = async (values: z.infer<typeof CategorySchema>) => {
    try {
      // start loading state
      setLoading(true);

      // prevent to submit empty
      if (!category?.icon && !newIcon) {
        // stop loadin
        setLoading(false);

        // return icon error if icon is empty
        return form.setError("icon", { message: "Icon is required!" });
      }

      // set icon to form state
      if (newIcon) {
        values.icon = newIcon;
      }

      // submit
      const res = (await onSubmit(values)) as
        | { success: string; error?: undefined }
        | { error: any; success?: undefined };
      if (res.error) {
        setError(res.error);
      }
      if (res.success) {
        setSuccess(res.success);
      }

      // stop loadin
      setLoading(false);
    } catch (error) {
      // stop laodin
      setLoading(false);
    }
  };

  const iconFieldClickHandle = () => {
    iconRef?.current?.click();
  };

  const iconChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewIcon(file);
    }
  };

  const iconDeleteClickHandle = () => {
    setNewIcon(undefined);
    iconRef.current!.value = "";
    form.setValue("icon", undefined);
  };

  //<--------for showing in image separet icon image------>
  const showIcon = newIcon ? URL?.createObjectURL(newIcon) : category?.icon.url;
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="flex flex-col gap-y-6"
        >
          <div className="gap-y-4">
            <FormField
              control={form.control}
              name={"title"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={disabled}
                      placeholder="category title"
                      type="text"
                      {...field}
                      ref={titleRef}
                      className="text-secondary-foreground"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.title?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              name={"icon"}
              render={() => (
                <FormItem>
                  <FormLabel>Icon</FormLabel>
                  <Input
                    disabled={disabled}
                    placeholder="category icon"
                    type="file"
                    ref={iconRef}
                    className="hidden"
                    onChange={iconChangeHandler}
                  />
                  <div className=" h-40 w-full border rounded overflow-hidden relative flex">
                    <div
                      onClick={iconFieldClickHandle}
                      className="h-full w-full cursor-pointer group flex items-center justify-center bg-primary/10 hover:bg-primary/5 transition-colors duration-300 ease-in-out"
                    >
                      {newIcon || category?.icon ? (
                        <img
                          src={showIcon || ""}
                          alt=""
                          className="h-full w-full object-contain bg-primary/5 group-hover:opacity-70 transition-opacity duration-300 ease-in-out"
                        />
                      ) : (
                        <Upload className="h-12 w-12 text-primary/50 group-hover:opacity-70 transition-opacity duration-300 ease-in-out" />
                      )}
                    </div>
                    <div
                      onClick={iconDeleteClickHandle}
                      className="group h-full w-10 bg-destructive/20 flex items-center justify-center cursor-pointer hover:opacity-70"
                    >
                      <Trash2 className="h-6 w-6 text-destructive group-hover:opacity-70" />
                    </div>
                  </div>
                  <FormMessage>
                    {form.formState.errors.icon?.message?.toString()}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-x-4">
            <Button
              disabled={isLoading || disabled}
              type="submit"
              variant="outline"
              size="lg"
            >
              {isLoading ? (
                <FaSpinner className=" animate-spin" />
              ) : mode === "create" ? (
                "Create"
              ) : (
                "Update"
              )}
            </Button>
            <FormSuccess message={success} />
            <FormError message={error} />
          </div>
        </form>
      </Form>
      {/* author view */}
      {category?.author ? (
        <div className="mt-8">
          <AuthorView author={category?.author!} />
        </div>
      ) : null}
    </div>
  );
};

export default CategoryForm;
