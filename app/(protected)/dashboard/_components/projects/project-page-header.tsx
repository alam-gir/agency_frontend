"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface ProjectpageHeaderProps {}

const ProjectpageHeader: FC<ProjectpageHeaderProps> = ({}) => {
    //<-------------React hooks-------------->
    const router = useRouter();
    const pathname = usePathname();
    const [active, setActive] = useState<string | undefined>("")

    //<---------------funtions----------------->
    const activeCallback = useCallback(()=>{
        if(pathname.includes("published")) setActive("published")
        if(pathname.includes("archived")) setActive("archived")
    },[pathname])

    //<---------------useEffects----------------->

    useEffect(()=>{
        activeCallback();
    })

  return (
    <div className="flex items-center justify-between p-4">
      <div>left</div>
      <div className="h-auto w-full flex items-center justify-end gap-x-2">
        <Button variant={"outline"} className={`${active === "published" ? "bg-emerald-300" : ""} text-primary`} asChild>
          <Link href={"/dashboard/projects/published"}>Published</Link>
        </Button>
        <Button variant={"outline"} className={`${active === "archived" ? " bg-red-400" : ""} text-primary`} asChild>
          <Link href={"/dashboard/projects/archived"}>Archived</Link>
        </Button>
        <Button variant={"outline"} className="text-primary"><Link href={"?create-project=true"}>Add project</Link></Button>
      </div>
    </div>
  );
};

export default ProjectpageHeader;
