"use client";
import { FC, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { SlidersHorizontal } from "lucide-react";
import { updateQuerySearch } from "@/lib/update-query-search";
import { useRouter } from "next/navigation";

interface ServiceFilterButtonProps {}

const ServiceFilterButton: FC<ServiceFilterButtonProps> = ({}) => {
  //---------------------react hook---------------------
  const router = useRouter();

  const selectHandle = (e: React.SyntheticEvent<HTMLSelectElement, Event>) => {
    const value = ((e.target as unknown) as { value: string }).value;
    router.push(`?${updateQuerySearch({ category: value })}`);
  };

  return (
    <Popover
      placement="bottom"
      showArrow={true}
      className="w-full h-full min-w-96 "
    >
      <PopoverTrigger>
        <Button variant={"light"} size={"sm"}>
          <SlidersHorizontal className="text-primary/80" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-4 flex flex-col gap-4">
        <div className="w-full flex items-start">
          <h3 className="text-xl text-left">Filter services</h3>
        </div>
        <Divider />
        <div className="flex w-full h-full flex-wrap md:flex-nowrap gap-4">
          <Select
            label="By category"
            className="w-full"
            onChange={selectHandle}
            defaultSelectedKeys={["all"]}
          >
            <SelectItem key={"all"} value={"all"}>
              All
            </SelectItem>
            <SelectItem key={"Graphics design"} value={"graphics design"}>
              graphics design
            </SelectItem>
            <SelectItem key={"Logo design"} value={"Logo desing"}>
              Logo desing
            </SelectItem>
            <SelectItem key={"Banner design"} value={"Banner desing"}>
              Banner desing
            </SelectItem>
            <SelectItem key={"Brochure design"} value={"Brochure desing"}>
              Brochure desing
            </SelectItem>
          </Select>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ServiceFilterButton;
