"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FC } from "react";
import { Separator } from "../ui/separator";

interface CustomDialogrops {
  onClose: () => void;
  isOpen: boolean;
  title: string,
  description: string;
  children: React.ReactNode;
}
const CustomDialog: FC<CustomDialogrops> = ({
  onClose,
  isOpen,
  title,
  description,
  children,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[40rem]">
      <DialogHeader>
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogDescription>
          {description}
        </DialogDescription>
      </DialogHeader>
      
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
