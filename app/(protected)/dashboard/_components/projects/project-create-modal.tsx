"use client";
import Modal from "@/components/modal";
import { FC, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Input } from "@/components/ui/input";
import { ProjectCreateSchema } from "@/schemas/projectSchema";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaSpinner } from "react-icons/fa";

import { useCreateProjectMutation } from "@/redux/features/project/projectSlice";
import { useGetCategoriesQuery } from "@/redux/features/category/categorySlice";
import { useToast } from "@/components/ui/use-toast";

interface ProjectCreateModalProps {}

const ProjectCreateModal: FC<ProjectCreateModalProps> = ({}) => {
  //<-------------React hooks-------------->
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isOpen, setOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  //<-------------Shadcn hooks-------------->
  const { toast } = useToast();

  //<-------------Redux hooks-------------->
  const { data: categories } = useGetCategoriesQuery();
  const [
    createProject,
    {
      isLoading: createLoading,
      isError,
      isSuccess,
      data: createResponse,
      error: createError,
      reset,
    },
  ] = useCreateProjectMutation();

  //<-------------Forms things-------------->
  const form = useForm<z.infer<typeof ProjectCreateSchema>>({
    resolver: zodResolver(ProjectCreateSchema),
    defaultValues: {
      title: "",
      category: "",
    },
  });

  //<-------------Form submit-------------->
  const onSubmit = async (values: z.infer<typeof ProjectCreateSchema>) => {
    try {
      await createProject({
        title: values.title,
        category_id: values.category,
      });
    } catch (error: any) {
      toast({
        title: error.message,
        description: new Date().toLocaleTimeString(),
      });
    }
  };

  //<-------------Functions-------------->
  const onClose = () => {
    router.push("?");
  };

  //<-------------callbacks-------------->
  const openCallback = useCallback(() => {
    if (searchParams.get("create-project") === "true") setOpen(true);
    else setOpen(false);
  }, [searchParams]);

  const createProjectCallback = useCallback(() => {
    if (createLoading) setLoading(true);
    else setLoading(false);

    if (isSuccess) {
      toast({
        title: createResponse?.message,
        description: new Date().toLocaleTimeString(),
      });
      form.reset();
      reset();
      router.push(`/dashboard/projects/${createResponse?.data._id}`);
    }
    if (isError) {
      toast({
        title: (createError as any)?.message,
        description: new Date().toLocaleTimeString(),
      });
    }
  }, [
    createLoading,
    isSuccess,
    isError,
    createResponse,
    createError,
    router,
    form,
    reset,
    toast,
  ]);

  //<-------------useEffects-------------->
  useEffect(() => {
    openCallback();
    createProjectCallback();
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isOverlayCloseable={false}
      title="Create a new project"
      description="Add new project to manage."
    >
      <div className="h-full w-full p-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-6"
          >
            <div className="flex flex-col gap-y-4">
              {/*  //<-------------Title input--------------> */}
              <FormField
                name="title"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        {...field}
                        type="text"
                        placeholder="Project title"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.title?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

              {/*  //<-------------Category--------------> */}
              <FormField
                name="category"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="category">Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger disabled={isLoading}>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <ScrollArea>
                          <SelectGroup>
                            <SelectLabel>All Categories</SelectLabel>
                            {categories?.data?.map(
                              (category: any, index: number) => (
                                <SelectItem key={index} value={category._id}>
                                  {category.title}
                                </SelectItem>
                              )
                            )}
                          </SelectGroup>
                        </ScrollArea>
                      </SelectContent>
                    </Select>

                    <FormMessage>
                      {form.formState.errors.category?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <Button
              disabled={isLoading}
              type="submit"
              variant={"outline"}
              size={"lg"}
            >
              {isLoading ? (
                <FaSpinner className={cn("animate-spin")} />
              ) : (
                "Create project"
              )}
            </Button>
            <FormDescription>
              After successful creation, you will be redirected to the project.
            </FormDescription>
          </form>
        </Form>
      </div>
    </Modal>
  );
};

export default ProjectCreateModal;
