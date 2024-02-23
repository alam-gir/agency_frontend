"use client"
import { FC } from "react";
import TooltipButton from "./tooltipButton";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { usePathname } from "next/navigation";

interface SidebarMenuProps extends React.HTMLAttributes<HTMLButtonElement> {
  tooltipText: string;
  href: string;
  Icon:
    | React.ForwardRefExoticComponent<
        IconProps & React.RefAttributes<SVGSVGElement>
      >
    | LucideIcon;
  title: string;
}

const SidebarMenu: FC<SidebarMenuProps> = ({
  className,
  tooltipText,
  href,
  Icon,
  title,
  ...props
}) => {
    const pathname = usePathname();
    const isActive = pathname.includes(href);
  return (
    <>
      <TooltipButton tipText={tooltipText}>
        <button {...props} className={`${className} ${isActive ? "lg:bg-secondary-foreground/10 lg:pl-4" : ""} lg:w-full h-10 rounded-sm flex items-center lg:justify-start hover:opacity-65 cursor-pointer`}>
          <Link href={href} className={`w-full h-12 flex items-center text-primary duration-3000`}>
            <Icon className={` ${isActive ? "text-accent" : ""} h-6 w-6 lg:mr-3 duratio-300`} />
            <h3 className={`${isActive ? "text-accent" : ""} hidden lg:block font-medium text-sm duration-300`}>{title}</h3>
          </Link>
        </button>
      </TooltipButton>
    </>
  );
};

export default SidebarMenu;
