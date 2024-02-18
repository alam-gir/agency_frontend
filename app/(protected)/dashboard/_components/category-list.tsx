"use client"
import CategoryItem from "@/components/dashboard/category/category-item";
import { FC } from "react";

interface CategoryListProps {
  category: any;
}

const CategoryList: FC<CategoryListProps> = ({ category }) => {

  const Category = category?.map((item: any, index: number) => {
    return <CategoryItem key={index} category={item} />;
  })


  if(category?.length < 1) return <div className="h-full w-full flex items-center justify-center">
    <p className=" text-muted-foreground font-medium">No category found! Create one.</p>
  </div>
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {Category}
    </div>
  );
};

export default CategoryList;
