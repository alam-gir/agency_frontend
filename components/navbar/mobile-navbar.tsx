"use client";

import { navigationMenu } from "@/lib/context";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import AuthButton from "./authButton";
import { ModeToggle } from "../modeToggle";
import { usePathname } from "next/navigation";
import Logo from "../global/logo";

interface MobileNavbarProps {}

const MobileNavbar: FC<MobileNavbarProps> = ({}) => {
  const pathName = usePathname();
  const [isOpen, setOpen] = useState<boolean>(false);

  const NavList = navigationMenu.map((menu) => {
    const isActive = pathName === menu.path;
    return (
      <li key={menu.path}>
        <Link
          href={menu.path}
          className={`text-2xl ${
            isActive
              ? "text-accent-purple font-medium"
              : "text-primary/80 hover:text-primary duration-300"
          }`}
        >
          {menu.name}
        </Link>
      </li>
    );
  });

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    window.document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <>
      <div
        className={`md:hidden sticky top-0 z-50 w-full h-[6vh] flex items-center justify-between px-4 py-2 ${
          !isOpen ? "backdrop-blur-xl" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <div
            onClick={handleOpen}
            className={`flex flex-col gap-1 cursor-pointer group duration-500 ${
              isOpen ? " -rotate-180" : "rotate-0"
            }`}
          >
            <div
              className={`w-7 h-1 rounded-lg bg-primary/80 group-hover:w-6 duration-300 ${
                isOpen ? "" : ""
              }`}
            ></div>
            <div
              className={`w-7 h-0.5 rounded-lg bg-primary/80 group-hover:w-8 duration-300 ${
                isOpen ? "" : ""
              }`}
            ></div>
            <div
              className={`w-7 h-1 rounded-lg bg-primary/80 group-hover:w-6 duration-300 ${
                isOpen ? "" : ""
              }`}
            ></div>
          </div>
          <Logo />
        </div>
        <div className="flex gap-2">
          <AuthButton />
          <ModeToggle />
        </div>
      </div>
      <div
        onClick={handleOpen}
        className={` ${
          isOpen ? "top-0 left-0" : "-top-[200%] -left-[200%]"
        } md:hidden duration-500 h-screen w-full fixed backdrop-blur-xl z-40 `}
      >
        <div className="h-[80%] w-full">
          <ul className=" h-full w-full flex flex-col items-center justify-center gap-4">
            {NavList}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
