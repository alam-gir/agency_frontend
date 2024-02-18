import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface SidebarMenuSmallProps
  extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  href: string;
  title: string;
}

const SidebarMenuSmall: FC<SidebarMenuSmallProps> = ({
  className,
  href,
  title,
  ...props
}) => {
    const pathname = usePathname();
    const isActive = pathname.includes(href);
  return (
    <>
      <Link className={className} {...props} href={href}>
        <DropdownMenuItem className={`${isActive ? "bg-secondary" : ""} cursor-pointer hover:bg-secondary`}>
          {title}
        </DropdownMenuItem>
      </Link>
    </>
  );
};

export default SidebarMenuSmall;
