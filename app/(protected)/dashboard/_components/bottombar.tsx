"use client"
import { FC } from "react";
import SidebarSmallScreen from "./sidebarSmallScreen";
import { ModeToggle } from "@/components/modeToggle";
import { UserAvatar } from "@/components/global/userAvatar";

interface BottombarProps {}

const Bottombar: FC<BottombarProps> = ({}) => {
  return (
    <>
      {/* for small screen */}
      <aside className=" md:hidden sticky bottom-0 w-full h-20 bg-secondary">
        <div className="flex items-center justify-between w-full h-full px-4">
          <div className="flex items-center gap-2">
            <SidebarSmallScreen />
            <ModeToggle />
          </div>
          <div className="flex items-center">
            <UserAvatar />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Bottombar;
