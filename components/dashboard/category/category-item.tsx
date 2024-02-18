"use client";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

import { useDeleteCategoryMutation } from "@/redux/features/category/categorySlice";
import { FaSpinner } from "react-icons/fa";

interface CategoryItemProps {
  category: any;
}

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  //<----------------React Hooks-------------------->
  const router = useRouter();
  const [isDeleting, setDeleting] = useState<boolean>(false);

  //<----------------Redux Hooks-------------------->
  const [
    deleteCategory,
    { data, isLoading, isSuccess, isError, error, reset },
  ] = useDeleteCategoryMutation();

  //<----------------Functions-------------------->
  const openEditCategoryHandler = () => {
    router.push(`?category_id=${category._id}`);
  };
  const deleteCategoryhandle = async () => {
    await deleteCategory({ id: category._id });
  };

  //<----------------useCallbacks-------------------->
  const deleteCallbacks = useCallback(() => {
    if (isLoading) setDeleting(true);
    else setDeleting(false);

    if (isSuccess) {
      reset();
    }
    if (isError) {
      alert((error as any).message);
      reset();
    }
  }, [isLoading, isSuccess, isError, error, reset]);

  //<----------------useEffects-------------------->
  useEffect(() => {
    deleteCallbacks();
  });

  return (
    <div className={` border w-full flex items-center justify-between p-4 rounded-sm hover:bg-primary/20 duration-300 cursor-pointer ${isDeleting ? " bg-gray-400 animate-pulse duration-1000 cursor-wait"  : ""}`}>
      <div className="flex gap-x-6">
        <Image
          src={category?.icon?.url || ""}
          alt={category?.title}
          width={50}
          height={50}
          className="rounded-sm"
        />
        <div className="flex flex-col">
          <h4 className="text-sm text-muted-foreground/50">NAME</h4>
          <h1 className="text-primary ">{category?.title}</h1>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal className="w-6 h-6 text-primary/50 hover:text-primary/80 duration-75" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Options</DropdownMenuLabel>
            <Separator />
            <DropdownMenuItem
              onClick={openEditCategoryHandler}
              className="cursor-pointer"
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={deleteCategoryhandle}
              className="cursor-pointer text-red-400"
              disabled={isDeleting}
            >
              {isDeleting ? <FaSpinner className=" animate-spin" /> : "Delete"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default CategoryItem;
