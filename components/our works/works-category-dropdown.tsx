"use client";
import { FC, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import WorksCategoryList from "./works-category-list";

interface WorksCategoryDropdownProps {}

const WorksCategoryDropdown: FC<WorksCategoryDropdownProps> = ({}) => {
  //-------------------react hook---------------------
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //-------------------functions---------------------
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu onOpenChange={handleOpen} open={isOpen}>
      <DropdownMenuTrigger>
        <ChevronDown className="w-4 h-4 text-primary/80 hove:text-primary cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-72">
        <DropdownMenuLabel>Works Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div onClick={handleOpen} className="flex-1 overflow-y-auto">
          <WorksCategoryList />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorksCategoryDropdown;
