"use client";

import { navigationMenu } from "@/lib/context";
import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";

const NavList = navigationMenu.map((menu) => {
  return (
    <li key={menu.path} className="ml-4 first:ml-0">
      <Link
        href={menu.path}
        className="text-lg text-secondary-foreground hover:text-secondary-foreground/90 hover:bg-seconday"
      >
        {menu.name}
      </Link>
    </li>
  );
});

interface MobileNavbarProps {}

const MobileNavbar: FC<MobileNavbarProps> = ({}) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    window.document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <>
      <div
        onClick={handleOpen}
        className={`md:hidden fixed top-4 cursor-pointer group ${isOpen ? "z-10 right-10" : "left-10"}`}
      >
        <div className={`flex flex-col gap-1 ${isOpen ? " rotate-180" : ""}`}>
          <div className={`w-7 h-1 rounded-lg bg-primary/60 group-hover:w-6 duration-300 ${isOpen ? "" : ""}`}></div>
          <div className={`w-7 h-0.5 rounded-lg bg-primary/60 group-hover:w-8 duration-300 ${isOpen ? "" : ""}`}></div>
          <div className={`w-7 h-1 rounded-lg bg-primary/60 group-hover:w-6 duration-300 ${isOpen ? "" : ""}`}></div>
        </div>
      </div>
      <div
      onClick={handleOpen}
        className={` ${
          isOpen ? "top-full -translate-y-full" : "-top-full"
        } md:hidden duration-300 h-screen w-full fixed backdrop-blur-xl`}
      >
        <ul>{NavList}</ul>
      </div>
    </>
  );
};

export default MobileNavbar;
