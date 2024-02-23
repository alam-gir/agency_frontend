import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaFacebookF, FaGlobe, FaInstagram } from "react-icons/fa";
import dark_logo from "@/public/dark logo.png";

interface FooterDetailsProps {}

const FooterDetails: FC<FooterDetailsProps> = ({}) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
      }}
      className=" p-8 rounded-t-md"
    >
      <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-6 max-w-6xl m-auto">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div>
            <Link href={"/"}>
              <Image height={80} width={80} src={dark_logo} alt="wafipix" />
            </Link>
          </div>
          <p className="text-primary-foreground/60 dark:text-primary/60 text-sm tracking-wide">
            A agency, where you will get solution of your companies grapics
            solution to spread your company.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2 lg:pt-8">
          <ul className="text-primary-foreground/80 dark:text-primary/80 flex gap-x-4">
            <Link href={""} className="hover:underline hover:text-0100 duration-300">Home</Link>
            <Link href={""} className="hover:underline hover:text-accent duration-300">Our works</Link>
            <Link href={""} className="hover:underline hover:text-accent duration-300">About us</Link>
            <Link href={""} className="hover:underline hover:text-accent duration-300">Contact</Link>
          </ul>
          <ul className="text-primary-foreground/80 dark:text-primary/80 flex gap-x-8">
            <Link href={""}>
              <FaFacebookF className="h-5 w-5 cursor-pointer hover:text-accent duration-300" />
            </Link>
            <Link href={""}>
              <FaInstagram className="h-5 w-5 cursor-pointer hover:text-accent duration-300" />
            </Link>
            <Link href={""}>
              <FaGlobe className="h-5 w-5 cursor-pointer hover:text-accent duration-300" />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterDetails;
