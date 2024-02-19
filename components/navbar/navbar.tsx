"use client";
import { navigationMenu } from "@/lib/context";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { ModeToggle } from "../modeToggle";
import AuthButton from "./authButton";
import Image from "next/image";
import light_logo from "@/public/light logo.png";
import dark_logo from "@/public/dark logo.png";

interface NavbarProps {}

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

const Navbar: FC<NavbarProps> = ({}) => {
  const [scrolled, setScrolled] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY);
    });
  }, []);

  return (
    <nav
      className={`hidden backdrop-blur-lg bg-transparent md:flex justify-center w-full h-[7vh] sticky top-0 z-50`}
    >
      <div className="flex w-full md:max-w-4xl lg:max-w-7xl justify-between items-center p-4 ">
        <div>
          <Link href={"/"}>
            <Image
              height={70}
              width={70}
              src={dark_logo}
              alt="wafipix"
              className="hidden dark:block"
            />
          </Link>
          <Link href={"/"}>
            <Image
              height={70}
              width={70}
              src={light_logo}
              alt="wafipix"
              className="dark:hidden"
            />
          </Link>
          {/* <h1 className="text-2xl font-bold text-secondary-foreground/80 cursor-pointer ">
            wafipix
          </h1> */}
        </div>
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
