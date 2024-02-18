import { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SidebarMenuSmall from "./sidebarMenuSmall";
interface SidebarSmallScreenProps {}

const SidebarSmallScreen: FC<SidebarSmallScreenProps> = ({}) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="text-primary">Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className=" text-gray-400 dark:text-gray500">
            MAIN MENU
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <SidebarMenuSmall
              href={"/dashboard/overview"}
              title={"Dashboard"}
            />
            <SidebarMenuSmall href={"/dashboard/orders"} title={"Orders"} />
            <SidebarMenuSmall href={"/dashboard/projects"} title={"Projects"} />
            <SidebarMenuSmall
              href={"/dashboard/categories"}
              title={"Categories"}
            />
            <SidebarMenuSmall href={"/dashboard/services"} title={"Services"} />
            <SidebarMenuSmall href={"/dashboard/billings"} title={"Billings"} />
            <SidebarMenuSmall
              href={"/dashboard/customers"}
              title={"Customers"}
            />
          </DropdownMenuGroup>
          <DropdownMenuLabel className="text-gray-400 dark:text-gray500 mt-2">
            ACCOUNT
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <SidebarMenuSmall href={"/profile"} title={"My account"} />
            <SidebarMenuSmall
              href={"/dashboard/help-center"}
              title={"Get help"}
            />
            <SidebarMenuSmall href={"/dashboard/report"} title={"Report"} />
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <SidebarMenuSmall href={"//"} title={"Home"} />
            <SidebarMenuSmall href={"/dashboard/settings"} title={"Settings"} />
            <SidebarMenuSmall href={"/logout"} title={"Logout"} />
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default SidebarSmallScreen;
