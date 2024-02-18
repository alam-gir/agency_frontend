"use client";
import { FC, useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useGetCategoriesQuery } from "@/redux/features/category/categorySlice";
import CategoryList from "./category-list";

interface CategoryTableProps {}

const CategoryTable: FC<CategoryTableProps> = ({}) => {

  const [isLoading, setLoading] = useState<boolean>(true);

  const {
    data: categories,
    isLoading: isCategoriesLoading,
  } = useGetCategoriesQuery();

  // Component functions
  const categoryLoading = useCallback(() => {
    if (isCategoriesLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isCategoriesLoading]);

  useEffect(() => {
    categoryLoading();
  });

  return (
    <div className="h-[75vh] w-full md:max-w-[80vw] m-auto">
      <div className=" h-[65vh] max-h-[65vh] w-full overflow-y-scroll">
        {isLoading ? (
          <div className="h-full w-full flex items-center justify-center">
            <BeatLoader color="gray" />
          </div>
        ) : categories ? (
          <CategoryList category={categories?.data} />
        ) : null}
      </div>
    </div>
  );
};
export default CategoryTable;
