import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FC } from "react";

interface TooltipButtonProps {
    children: React.ReactNode;
    tipText: string;
}

const TooltipButton: FC<TooltipButtonProps> = ({children, tipText}) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {children}
          </TooltipTrigger>
          <TooltipContent>
            <p>{tipText}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default TooltipButton;
