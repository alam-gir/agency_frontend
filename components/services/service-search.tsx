"use client";
import { FC } from "react";
import Searchbar from "../global/searchbar";
import { updateQuerySearch } from "@/lib/update-query-search";
import { useRouter } from "next/navigation";

interface ServiceSearchbarProps {}

const ServiceSearchbar: FC<ServiceSearchbarProps> = ({}) => {
  const router = useRouter();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 2) {
      const query = updateQuerySearch({ search: value });
      router.push(`?${query}`);
    }else{
      const query = updateQuerySearch({ search: '' });
      router.push(`?${query}`);
    }
  };
  return (
    <div className="w-1/2 max-w-[30rem]">
      <Searchbar
        onChange={handleSearch}
        searchPlaceholder="Search services..."
      />
    </div>
  );
};

export default ServiceSearchbar;
