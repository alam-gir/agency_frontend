import { Textarea } from "@/components/ui/textarea";
import { FC, useCallback, useEffect, useState } from "react";

interface ProjectFormDescriptionFieldProps {
  description: string;
}

import { Label } from "@/components/ui/label";
import { useParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useUpdateProjectDescriptionMutation } from "@/redux/features/project/projectSlice";

const ProjectFormDescriptionField: FC<ProjectFormDescriptionFieldProps> = ({
  description,
}) => {
  //<-------------------React hooks--------------------->
  const [isUpdating, setUpdating] = useState<boolean>(false);
  const project_id = useParams().id;
  //<-------------------Shadcn hooks--------------------->
  const { toast } = useToast();

  //<-------------------Reduc hooks--------------------->
  const [updateTitle, { data, isLoading, isError, isSuccess, error, reset }] =
    useUpdateProjectDescriptionMutation();

  //<-------------------Functions--------------------->
  const onBlur = async (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (description !== e.currentTarget.value) {
      updateTitle({
        id: project_id as string,
        description: e.currentTarget.value,
      });
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
      }flex flex-col gap-2 md:gap-3`}
    >
      <Label className="text-sm text-primary/80">Description</Label>
      <Textarea
        onBlur={onBlur}
        defaultValue={description}
        className="text-primary/80 border-primary/20 min-h-[150px]"
        placeholder="Enter description"
      />
    </div>
  );
};

export default ProjectFormDescriptionField;
