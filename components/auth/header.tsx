import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { FC } from "react";

interface HeaderProps {
  label: string;
  bigHeaderLabel?: string
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Header: FC<HeaderProps> = ({ label, bigHeaderLabel }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>{bigHeaderLabel ? bigHeaderLabel : 'Auth'}</h1>
      <p className="text-muted-foreground text-small">
        {label}
      </p>
    </div>
  );
};

export default Header;
