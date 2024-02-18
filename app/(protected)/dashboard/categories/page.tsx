import { FC } from "react";
import { Metadata } from "next";
import CategoryTable from "../_components/categoryTable";
import EditCategory from "@/components/dashboard/category/edit-category";
import CreateCategory from "@/components/dashboard/category/create-category-dialog";
import CategoryHeader from "@/components/dashboard/category/category-header";
import PageHeader from "../_components/dashboard-page-header";

interface pageProps {}
export const metadata: Metadata = {
  title: "Categories | Agency",
  description: "Categories page for management.",
};

const page: FC<pageProps> = ({}) => {
  return (
    <section className="relative w-full h-[90vh]">
      <CategoryHeader />
      <PageHeader
        title="Categories"
        description="Manage your categories with ease"
      />
      <div className="h-full w-full p-4">
        <div className=" min-h-[70vh] max-h-[80vh] w-full">
          <CategoryTable />
        </div>
      </div>
      <CreateCategory />
      <EditCategory />
    </section>
  );
};

export default page;
