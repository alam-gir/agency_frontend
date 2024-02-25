"use client"
import { FC } from 'react'
import {
DropdownMenu,
DropdownMenuTrigger,
DropdownMenuContent,
DropdownMenuLabel,
DropdownMenuItem,
DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

interface ProjectOptionsProps {
  children?: React.ReactNode,
  editHandle?: () => void
  deleteHandle?: () => void
}

const ProjectOptions: FC<ProjectOptionsProps> = ({children, editHandle, deleteHandle}) => {
  return <DropdownMenu>
    <DropdownMenuTrigger>
        {children}
    </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuLabel className='select-none'>Project options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={editHandle} className='cursor-pointer'>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={deleteHandle} className='cursor-pointer'><p className='text-red-400 hover:text-red-500'>Delete</p></DropdownMenuItem>

    </DropdownMenuContent>
  </DropdownMenu>
}

export default ProjectOptions