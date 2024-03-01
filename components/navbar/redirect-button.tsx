"use client";
import { FC } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

interface RedirectButtonProps extends React.HTMLProps<HTMLButtonElement> {
  title?: string;
  redirectTo: string;
  varient?:
    | "faded"
    | "flat"
    | "ghost"
    | "light"
    | "shadow"
    | "solid"
    | "bordered"
    | undefined;
}

const RedirectButton: FC<RedirectButtonProps> = ({
  title,
  redirectTo,
  varient,
  className,
}) => {
  return (
    <Link href={redirectTo} className={`${className} w-full`}>
      <Button variant={varient} className="w-full h-full">
        {title}
      </Button>
    </Link>
  );
};

export default RedirectButton;
