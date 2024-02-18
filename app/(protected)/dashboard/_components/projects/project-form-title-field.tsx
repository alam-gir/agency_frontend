"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useUpdateProjectTitleMutation } from "@/redux/features/project/projectSlice";
import { useParams } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";

interface ProjectFormTitleFieldProps {
  title: string;
}

const ProjectFormTitleField: FC<ProjectFormTitleFieldProps> = ({ title }) => {
  //<-------------------React hooks--------------------->
  const [isUpdating, setUpdating] = useState<boolean>(false);
  const project_id = useParams().id;
  //<-------------------Shadcn hooks--------------------->
  const { toast } = useToast();

  //<-------------------Reduc hooks--------------------->
  const [updateTitle, { data, isLoading, isError, isSuccess, error, reset }] =
    useUpdateProjectTitleMutation();

  //<-------------------Functions--------------------->
  const onBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    if (title !== e.currentTarget.value) {
      updateTitle({ id: project_id as string, title: e.currentTarget.value });
    }
  };
  //<-------------------callbacks--------------------->
  const updateCallbacks = useCallback(() => {
    if (isLoading) setUpdating(true);
    else setUpdating(false);

    if (isSuccess) {
      toast({
        title: data?.message,
        description: new Date().toLocaleTimeString(),
      });
      reset();
    }
    if (isError) {
      toast({
        variant: "destructive",
        title: (error as any)?.message,
        description: new Date().toLocaleTimeString(),
      });
      reset();
    }
  }, [isLoading, isSuccess, data, toast, isError, error, reset]);

  //<-------------------useEffects--------------------->
  useEffect(() => {
    updateCallbacks();
  });

  return (
    <div
      className={`${
        isUpdating ? " opacity-70 animate-pulse duration-1000" : ""
      }flex flex-col gap-2`}
    >
      <Label className="text-sm text-primary/80">Name</Label>
      <Input
        onBlur={onBlur}
        defaultValue={title}
        className="text-primary/80 border-primary/20"
        placeholder="Enter project name"
      />
    </div>
  );
};

export default ProjectFormTitleField;
