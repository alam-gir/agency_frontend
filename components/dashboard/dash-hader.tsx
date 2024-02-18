import { FC } from "react";
import Searchbar from "../global/searchbar";
import { SlidersHorizontal } from "lucide-react";
import SelectionBox from "./selection-box";
import { Button } from "../ui/button";
import ClientButton from "../global/client-button";

interface DashHeaderProps {
  actionButtonTitle?: string;
  selectionBoxTitle?: string;
  selectionBox?: boolean;
  action?: () => void;
}

const DashHeader: FC<DashHeaderProps> = ({
  action,
  actionButtonTitle,
  selectionBoxTitle,
  selectionBox,
}) => {
  return (
    <div className=" h-[8vh] flex justify-between items-center p-4 border-b top-0">
      <div className="hidden md:block">
        <Searchbar searchPlaceholder="Search categories" />
      </div>
      <div className=" w-full flex items-center justify-between md:justify-end md:gap-x-4">
        {/* filter icon */}
        <SlidersHorizontal className="hidden md:block md h-5 w-5 md:h=6 md:w-6 text-gray-500 hover:text-secondary-foreground cursor-pointer" />
        {/* dropdown menu */}
        {selectionBox && (
          <div className="">
            <SelectionBox title={selectionBoxTitle} />
          </div>
        )}
        {/* action button */}
        <ClientButton onClick={action}>
          <Button variant={"outline"}>{actionButtonTitle || "Create"}</Button>
        </ClientButton>
      </div>
    </div>
  );
};

export default DashHeader;
