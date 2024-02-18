"use client";
import { FC } from "react";
import DashHeader from "../dash-hader";
import { useRouter } from "next/navigation";

interface CategoryHeaderProps {}

const CategoryHeader: FC<CategoryHeaderProps> = ({}) => {
  const router = useRouter();
  const openCreateDialog = () => {
    router.push("/dashboard/categories?create=true");
  };

  return (
    <DashHeader actionButtonTitle="Create Category" action={openCreateDialog} />
  );
};

export default CategoryHeader;
