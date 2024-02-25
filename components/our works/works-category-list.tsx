"use client";
import { Category } from "@/@types/types";
import { updateQuerySearch } from "@/lib/update-query-search";
import { useGetCategoriesQuery } from "@/redux/features/category/categorySlice";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

interface WorksCategoryListProps {}

const WorksCategoryList: FC<WorksCategoryListProps> = ({}) => {
  //-------------------react hook---------------------
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams().get("category");
  const [isLoadingCategories, setLoadingCategories] = useState<boolean>(false);

  //-------------------redux hook---------------------
  const {
    data: categoriesData,
    error: categoriesError,
    isSuccess: categoriesIsSuccess,
    isError: categoriesIsError,
    isLoading: categoriesIsLoading,
  } = useGetCategoriesQuery();

  //-------------------callbacks---------------------
  const setLoadingCallbacks = useCallback(() => {
    if (categoriesIsLoading) {
      setLoadingCategories(true);
    } else {
      setLoadingCategories(false);
    }
  }, [categoriesIsLoading]);

  const totalProjects = categoriesData?.data?.reduce(
    (acc, category) => acc + category.project_count,
    0
  );

  //-------------------useEffects---------------------
  useEffect(() => {
    setLoadingCallbacks();
  });

  //-------------------variables---------------------
  const categories = categoriesData?.data as Category[];

  //-------------------functions---------------------
  const clickHandle = (category: string) => {
    const newParams = `${pathName}?${updateQuerySearch({ category })}`;
    router.push(newParams);
  };
  //-------------------JSX---------------------
  const List = categories?.length
    ? categories?.map((category, index) => {
        return (
          <li
            key={index}
            className={`${
              searchParams === category.title
                ? "bg-accent hover:bg-accent "
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            } cursor-pointer flex items-center gap-2 p-4 text-sm font-medium text-gray-900 dark:text-gray-100 rounded duration-300`}
            onClick={() => clickHandle(category.title)}
          >
            {category.title}
            <span className="ml-auto text-gray-500">
              {category.project_count}
            </span>
          </li>
        );
      })
    : null;

  if (isLoadingCategories)
    return (
      <div className="h-24 w-full flex items-center justify-center">
        <FaSpinner className=" animate-spin" />
      </div>
    );
  if (categoriesIsError)
    return (
      <div className="h-24 w-full flex items-center justify-center">
        <p className="text-muted-foreground">Something went wrong</p>
      </div>
    );
  return (
    <nav className="flex-1 overflow-y-scroll">
      {/* -------------------side bar ----------------- */}
      <div className="grid gap-1">
        <li
          className={`${
            searchParams === "all"
              ? "bg-accent hover:bg-accent"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
          } cursor-pointer flex items-center gap-2 p-4 text-sm font-medium text-gray-900 dark:text-gray-100 rounded`}
          onClick={() => clickHandle("all")}
        >
          All
          <span className="ml-auto text-gray-500">
            {totalProjects || <FaSpinner className=" animate-spin" />}
          </span>
        </li>
        {List}
      </div>
    </nav>
  );
};

export default WorksCategoryList;
