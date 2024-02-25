"use client";
import { ModeToggle } from "@/components/modeToggle";
import { Separator } from "@/components/ui/separator";
import { DashboardIcon } from "@radix-ui/react-icons";
import {
  CreditCard,
  FileTextIcon,
  FileX,
  Folders,
  HelpCircle,
  Home,
  Layers,
  LogOut,
  Settings,
  Tags,
  User,
  Users,
} from "lucide-react";
import { FC } from "react";
import SidebarMenu from "./sidebarMenu";
import { UserAvatar } from "@/components/global/userAvatar";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <>
      {/* for big screens */}
      <aside className="hidden sticky left-0 top-0 md:flex md:w-20 md:h-full lg:w-60 flex-col justify-between  pt-4 bg-secondary z-50">
        {/* navigations */}
        <div>
          {/* Mode toggle */}
          <div className="flex flex-col items-center lg:items-start lg:ml-4">
            <ModeToggle />
          </div>
          <h6 className=" text-[.7rem] text-gray-400 dark:text-gray-500 font-medium text-center lg:text-start lg:ml-4 mt-4">
            MAIN MENU
          </h6>
          <div className="flex flex-col items-center lg:items-start lg:px-4">
            <SidebarMenu
              Icon={DashboardIcon}
              title="Dashbord"
              href="/dashboard/overview"
              tooltipText="Dashboard Overview"
            />
            <SidebarMenu
              Icon={FileTextIcon}
              title="Orders"
              href="/dashboard/orders"
              tooltipText="Orders"
            />
            <SidebarMenu
              Icon={Folders}
              title="Projects"
              href="/dashboard/projects"
              tooltipText="Projects"
            />
            <SidebarMenu
              Icon={Tags}
              title="Categories"
              href="/dashboard/categories"
              tooltipText="Categories"
            />
            <SidebarMenu
              Icon={Layers}
              title="Services"
              href="/dashboard/services"
              tooltipText="Services"
            />
            <SidebarMenu
              Icon={CreditCard}
              title="Billings"
              href="/dashboard/billings"
              tooltipText="Billings"
            />
            <SidebarMenu
              Icon={Users}
              title="Customers"
              href="/dashboard/customers"
              tooltipText="Customers"
            />
          </div>
          <Separator className="my-2" />
          <h6 className=" text-[.7rem] text-gray-400 font-medium text-center lg:text-start lg:ml-4 mt-4 mb-2">
            ACCOUNT
          </h6>
          <div className="flex flex-col items-center lg:items-start lg:px-4">
            <SidebarMenu
              Icon={User}
              title="My account"
              href="/profile"
              tooltipText="My account"
            />
            <SidebarMenu
              Icon={HelpCircle}
              title="Get help"
              href="/dashboard/help-center"
              tooltipText="Get help"
            />
            <SidebarMenu
              Icon={FileX}
              title="Report"
              href="/dashboard/report"
              tooltipText="Report"
            />
          </div>
          <Separator className="my-4" />
          <div className="flex flex-col items-center lg:items-start lg:px-4">
            <SidebarMenu
              Icon={Home}
              title="Home"
              href="//"
              tooltipText="Go to home page"
            />
            <SidebarMenu
              Icon={Settings}
              title="Settings"
              href="/dashboard/settings"
              tooltipText="Settings"
            />
            <SidebarMenu
              Icon={LogOut}
              title="Logout"
              href="/logout"
              tooltipText="Logout"
            />
          </div>
        </div>
        {/* profile */}
        <UserAvatar isNameBox />
      </aside>
    </>
  );
};

export default Sidebar;
