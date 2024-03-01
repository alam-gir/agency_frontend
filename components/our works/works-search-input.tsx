"use client";
import { Search } from "lucide-react";
import { FC, useCallback, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { updateQuerySearch } from "@/lib/update-query-search";
import Searchbar from "../global/searchbar";

interface WorksSearchInputProps {}

const WorksSearchInput: FC<WorksSearchInputProps> = ({}) => {
  //-------------------React hooks---------------------
  const router = useRouter();
  const pathName = usePathname();

  const [search, setSearch] = useState<string | undefined>("");

  //-------------------function---------------------
  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  //-------------------useEffect---------------------
  useEffect(() => {
    if (search?.length! > 2) {
      const newParams = `${pathName}?${updateQuerySearch({ search: search! })}`;
      router.push(newParams);
    } else {
      const newParams = `${pathName}?${updateQuerySearch({ search: "" })}`;
      router.push(newParams);
    }
  }, [search, pathName, router]);

  return (
    <div className="flex items-center relative min-w-[16rem] md:min-w-[20rem] lg:min-w-[24rem]">
      <Searchbar
        onChange={changeHandle}
        type="text"
        placeholder="search works"
        className="pr-10"
      />

    </div>
  );
};

export default WorksSearchInput;
