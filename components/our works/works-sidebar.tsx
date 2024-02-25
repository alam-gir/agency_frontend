"use client"
import { FC } from "react";
import WorksCategoryList from "./works-category-list";

interface WorksSidebarProps {}

const WorksSidebar: FC<WorksSidebarProps> = ({}) => {
  return (
    <div className="hidden md:flex flex-col border-r border-gray-200 dark:border-gray-800 h-[93vh] sticky top-[7vh]">
      <div className="flex items-center justify-between p-4">
          <span className="text-primary font-medium">Works category</span>
      </div>
      <WorksCategoryList  />
    </div>
  );
};

export default WorksSidebar;
