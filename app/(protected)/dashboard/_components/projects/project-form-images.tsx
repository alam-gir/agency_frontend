import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  useDeleteProjectImageMutation,
  useUploadProjectImagesMutation,
} from "@/redux/features/project/projectSlice";
import { Trash2, UploadIcon } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { FaSpinner } from "react-icons/fa";

export interface IFile {
  _id: string;
  title: string;
  url: string;
  public_id: string;
}
interface ProjectFormImagesProps {
  images: IFile[];
}

const ProjectFormImages: FC<ProjectFormImagesProps> = ({ images }) => {
  //<----------------------React Hooks---------------------------->
  const project_id = useParams().id;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setUploading] = useState<boolean>(false);
  const [isImageDeleting, setImageDeleting] = useState<boolean>(false);
  const [deletingImageId, setDeletingImageId] = useState<string[]>([]);

  //<----------------------Shadcn Hooks---------------------------->
  const { toast } = useToast();

  //<----------------------Redux Hooks---------------------------->
  const [upload, { data, isLoading, isError, isSuccess, error, reset }] =
    useUploadProjectImagesMutation();
  const [
    deleteImageMutation,
    {
      data: ImageDeleteData,
      isLoading: isImgaeDeleteLaoding,
      isError: isImageDeleteError,
      isSuccess: isImageDeleteSuccess,
      error: imageDeleteError,
      reset: imageDeleteReset,
    },
  ] = useDeleteProjectImageMutation();

  //<----------------------Functions---------------------------->
  const clickInput = () => inputRef.current?.click();

  const uploadImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = inputRef.current?.files;
    if (files?.length) {
      const formData = new FormData();
      for (let image of files) {
        formData.append("files", image);
      }
      
      await upload({ id: project_id as string, images: formData });
    }
  };

  const deleteImage = async ({ file_id }: { file_id: string }) => {
    if (file_id) {
      //to show delete spinner
      setDeletingImageId((prev) => [...prev, file_id]);

      await deleteImageMutation({ id: project_id as string, file_id: file_id });
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  //<----------------------React callbacks---------------------------->
  const uploadingCallback = useCallback(() => {
    if (isLoading) setUploading(true);
    else setUploading(false);
    if (isSuccess) {
      toast({
        title: data?.message,
        description: new Date().toLocaleString(),
      });
      reset();
    }

    if (isError) {
      toast({
        variant: "destructive",
        title: (error as any)?.message,
        description: new Date().toLocaleString(),
      });
      reset();
    }
  }, [isLoading, isSuccess, data, isError, toast, error, reset]);

  const imageDeletingCallback = useCallback(() => {
    if (isImgaeDeleteLaoding) setImageDeleting(true);
    else setImageDeleting(false);
    if (isImageDeleteSuccess) {
      toast({
        title: ImageDeleteData?.message,
        description: new Date().toLocaleString(),
      });
      imageDeleteReset();
    }

    if (isImageDeleteError) {
      toast({
        variant: "destructive",
        title: (imageDeleteError as any)?.message,
        description: new Date().toLocaleString(),
      });
      imageDeleteReset();
    }
  }, [
    isImgaeDeleteLaoding,
    isImageDeleteError,
    isImageDeleteSuccess,
    ImageDeleteData,
    imageDeleteError,
    imageDeleteReset,
    toast,
  ]);

  //<----------------------React useEffects---------------------------->
  useEffect(() => {
    uploadingCallback();
    imageDeletingCallback();
  });
  
  return (
    <div>
      <Label className="text-sm text-primary/80">Images</Label>
      <div className="flex flex-wrap items-center gap-4 mt-2 min-h-[100px]">
        {!images?.length ? (
          <div
            onClick={clickInput}
            className="h-full w-full flex items-center justify-center"
          >
            <UploadIcon className="h-8 w-8 md:h-10 md:w-10 text-primary/80 hover:text-primary cursor-pointer" />
          </div>
        ) : (
          images?.map((image, index) => {
            const isthisDeleting =
              isImageDeleting && deletingImageId.includes(image._id);
            return (
              <div
                key={index}
                className={`${
                  isthisDeleting ? " animate-pulse duration-1000" : ""
                } relative`}
              >
                <Trash2
                  onClick={() => deleteImage({ file_id: image._id })}
                  className="h-5 w-5 text-red-400 hover:text-red-500 absolute top-1 right-1 cursor-pointer"
                />
                <Image
                  src={image.url}
                  alt="project image"
                  width={100}
                  height={100}
                  className=" rounded-lg aspect-square object-cover border border-primary/20"
                />
              </div>
            );
          })
        )}
        {isUploading ? (
          <div className="h-[100px] w-[100px] rounded-md flex items-center justify-center bg-secondary animate-pulse duration-1000">
            <FaSpinner className="h-1- w-10 animate-spin duration-700" />
          </div>
        ) : null}
      </div>
      <div className="mt-4">
        <Button className="mr-2" size="sm" onClick={clickInput}>
          Add Image
        </Button>
      </div>
      <Input
        ref={inputRef}
        onChange={uploadImages}
        multiple
        type="file"
        className="hidden"
      />
    </div>
  );
};

export default ProjectFormImages;
