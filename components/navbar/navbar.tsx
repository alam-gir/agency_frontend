"use client";
import { navigationMenu } from "@/lib/context";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { ModeToggle } from "../modeToggle";
import AuthButton from "./authButton";
import Image from "next/image";
import light_logo from "@/public/light logo.png";
import dark_logo from "@/public/dark logo.png";
import { usePathname } from "next/navigation";
import Logo from "../global/logo";

interface NavbarProps {}
const Navbar: FC<NavbarProps> = ({}) => {
  const pathName = usePathname();

  const NavList = navigationMenu.map((menu) => {
    const isActive = pathName === menu.path;
    return (
      <li key={menu.path} className='ml-4 first:ml-0'>
        <Link
          href={menu.path}
          className={`text-lg ${isActive ? "text-accent font-medium" : "text-primary/80 hover:text-primary duration-300"}`}
        >
          {menu.name}
        </Link>
      </li>
    );
  });

  return (
    <nav
      className={`hidden backdrop-blur-lg bg-transparent md:flex justify-center w-full h-fit sticky top-0 z-50`}
    >
      <div className="flex w-full md:max-w-4xl lg:max-w-7xl justify-between items-center p-4 ">
        <Logo />
        <div className="">
          <ul className="flex justify-end">{NavList}</ul>
        </div>
        <div className="flex gap-x-2 items-center">
          <AuthButton />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
