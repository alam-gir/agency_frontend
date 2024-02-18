import { FC } from "react";
import { MenuLink } from "../menuLink";

interface DashboardNavbarProps {}

const DashboardNavbar: FC<DashboardNavbarProps> = async ({}) => {
  return (
    <nav className=" p-3 border-b border-b-gray-200 dark:border-b-gray-700">
        <MenuLink href={"/dashboard"} title={"Overview"}/>
        <MenuLink href={"/dashboard/projects"} title={"Projects"}/>
        <MenuLink href={"/dashboard/services"} title={"Services"}/>
        <MenuLink href={"/dashboard/categories"} title={"Categories"}/>
        <MenuLink href={"/dashboard/packages"} title={"Packages"}/>
        <MenuLink href={"/dashboard/customers"} title={"Customers"}/>
        <MenuLink href={"/dashboard/orders"} title={"Orders"}/>
    </nav>
  );
};

export default DashboardNavbar;
