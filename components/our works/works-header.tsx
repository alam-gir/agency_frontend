"use client";
import { FC } from "react";
import WorksCategoryDropdown from "./works-category-dropdown";
import WorksSearchInput from "./works-search-input";
import { useSearchParams } from "next/navigation";

interface WorksHeaderProps {}

const WorksHeader: FC<WorksHeaderProps> = ({}) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  return (
    <header className="flex items-center justify-between h-fit p-4 border-b border-gray-200 dark:border-gray-800 sticky top-[6vh] md:top-[6.8vh] backdrop-blur-xl z-50">
      <div className="flex gap-2">
        <div className="md:hidden">
          <WorksCategoryDropdown />
        </div>
        <div className="hidden md:flex flex-col">
          <p>
            category: <span>{category || "all"}</span>
          </p>
          {search ? (
            <p>
              search for: <span>{search}</span>
            </p>
          ) : null}
        </div>
      </div>
      <WorksSearchInput />
    </header>
  );
};

export default WorksHeader;
