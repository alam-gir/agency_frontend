import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  useDeleteProjectFilesMutation,
  useUploadProjectFilesMutation,
} from "@/redux/features/project/projectSlice";
import { FileIcon, TrashIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { IFile } from "./project-form-images";
import { FaFileUpload } from "react-icons/fa";
import { Input } from "@/components/ui/input";

import { io } from "socket.io-client";
import { set } from "zod";

interface ProjectFormFilesProps {
  files: IFile[];
}

const ProjectFormFiles: FC<ProjectFormFilesProps> = ({ files }) => {
  //<----------------------React Hooks---------------------------->
  const project_id = useParams().id;
  const inputRef = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isUploading, setUploading] = useState<boolean>(false);
  const [isFileDeleting, setFileDeleting] = useState<boolean>(false);
  const [deletingFileId, setDeletingFileId] = useState<string[]>([]);

  //<----------------------Shadcn Hooks---------------------------->
  const { toast } = useToast();

  //<----------------------Redux Hooks---------------------------->
  const [upload, { data, isLoading, isError, isSuccess, error, reset }] =
    useUploadProjectFilesMutation();
  const [
    deleteFileMutation,
    {
      data: FileDeleteData,
      isLoading: isFileDeleteLaoding,
      isError: isFileDeleteError,
      isSuccess: isFileDeleteSuccess,
      error: fileDeleteError,
      reset: fileDeleteReset,
    },
  ] = useDeleteProjectFilesMutation();

  //<----------------------Functions---------------------------->
  const clickInput = () => inputRef.current?.click();

  const uploadFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = inputRef.current?.files;
    if (files?.length) {
      const formData = new FormData();
      for (let file of files) {
        formData.append("files", file);
      }
      await upload({ id: project_id as string, files: formData });
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      setProgress(0);
    }
  };

  const deleteFile = async ({ file_id }: { file_id: string }) => {
    if (file_id) {
      //to show delete spinner
      setDeletingFileId((prev) => [...prev, file_id]);

      await deleteFileMutation({ id: project_id as string, file_id: file_id });
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

  const fileDeletingCallback = useCallback(() => {
    if (isFileDeleteLaoding) setFileDeleting(true);
    else setFileDeleting(false);
    if (isFileDeleteSuccess) {
      toast({
        title: FileDeleteData?.message,
        description: new Date().toLocaleString(),
      });
      fileDeleteReset();
    }

    if (isFileDeleteError) {
      toast({
        variant: "destructive",
        title: (fileDeleteError as any)?.message,
        description: new Date().toLocaleString(),
      });
      fileDeleteReset();
    }
  }, [
    isFileDeleteLaoding,
    isFileDeleteError,
    isFileDeleteSuccess,
    FileDeleteData,
    fileDeleteError,
    fileDeleteReset,
    toast,
  ]);

  //<----------------------React useEffects---------------------------->
  useEffect(() => {
    uploadingCallback();
    fileDeletingCallback();
  });
  useEffect(() => {
    // Socket.IO connection setup
    const socket = io("http://localhost:4000", {
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
    });

    // Event handler for file upload progress
    socket.on("file-upload-progress", (data) => {
      setProgress(data);
    });

    // Clean up the effect by disconnecting the socket when the component unmounts
    return () => {
      console.log("Disconnecting socket");
      setProgress(0);
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <Label className="text-sm text-primary/80">Files</Label>
      <div className="grid gap-2">
        {!files?.length ? (
          <div
            onClick={clickInput}
            className="h-full w-full flex items-center justify-center min-h-32"
          >
            <FaFileUpload className="h-8 w-8 md:h-10 md:w-10 text-primary/80 hover:text-primary cursor-pointer" />
          </div>
        ) : (
          files?.map((file, index) => {
            const isthisDeleting =
              isFileDeleting && deletingFileId.includes(file._id);
            return (
              <div
                key={index}
                className={`${
                  isthisDeleting
                    ? " bg-red-400 rounded-md pl-2 animate-pulse duration-1000 "
                    : ""
                } flex items-center gap-2 h-auto`}
              >
                <FileIcon className=" h-4 w-4 text-primary/80" />
                <span className="text-sm text-primary/80 font-medium">
                  {file.title.length > 35
                    ? file.title.slice(0, 35) + "..." + file.title.slice(-4)
                    : file.title}
                </span>
                <Button
                  className="ml-auto border-primary/20"
                  size="icon"
                  variant="outline"
                >
                  <TrashIcon
                    onClick={() => deleteFile({ file_id: file._id })}
                    className="w-4 h-4 text-primary/80"
                  />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>
            );
          })
        )}
        {isUploading ? (
          <div className="w-full h-8 flex items-center justify-left p-2 bg-secondary rounded-md animate-pulse duration-700">
            {`uploading ${progress}% `}
          </div>
        ) : null}
      </div>
      <div className="mt-4">
        <Button
          onClick={clickInput}
          disabled={isUploading || progress != 0}
          className="mr-2"
          size="sm"
        >
          Add File
        </Button>
      </div>
      <Input
        ref={inputRef}
        onChange={uploadFiles}
        multiple
        type="file"
        className="hidden"
        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip,.rar,.7z, .ai,.psd,.eps,.svg"
      />
    </div>
  );
};

export default ProjectFormFiles;
