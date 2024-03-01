"use client";
import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface ProjectOptionsProps {
  children?: React.ReactNode;
  editHref?: string;
  deleteHref?: string;
}

const ProjectOptions: FC<ProjectOptionsProps> = ({
  children,
  editHref,
  deleteHref,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="select-none">
          Project options
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={editHref || ""}>
          <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
        </Link>
        <Link
          href={deleteHref || ""}
          className="text-red-400 hover:text-red-500"
        >
          <DropdownMenuItem className="cursor-pointer">Delete</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectOptions;
