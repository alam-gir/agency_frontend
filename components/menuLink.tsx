"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {Button } from "@/components/ui/button";

export const MenuLink = ({ href, title }: {href: string, title: string}) => {
    const pathname = usePathname();
    const isActive = pathname.endsWith(href);
    return(
        <Button className={`${isActive ? " bg-secondary underline" : null}`} variant={"link"}><Link href={href} legacyBehavior passHref>{title}</Link></Button>
    )
}