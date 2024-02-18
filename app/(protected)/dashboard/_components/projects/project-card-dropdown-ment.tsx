"use client"
import { FC } from 'react'
import {
DropdownMenu,
DropdownMenuTrigger,
DropdownMenuContent,
DropdownMenuLabel,
DropdownMenuItem,
DropdownMenuSeparator,
DropdownMenuGroup
} from "@/components/ui/dropdown-menu"

interface ProjectOptionsProps {
  children?: React.ReactNode
}

const ProjectOptions: FC<ProjectOptionsProps> = ({children}) => {
  return <DropdownMenu>
    <DropdownMenuTrigger>
        {children}
    </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuLabel className='select-none'>Project options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='cursor-pointer'>Edit</DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer'><p className='text-red-400 hover:text-red-500'>Delete</p></DropdownMenuItem>

    </DropdownMenuContent>
  </DropdownMenu>
}

export default ProjectOptions