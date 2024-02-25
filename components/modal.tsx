import { FC, useEffect } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface ModalProps {
  children?: React.ReactNode;
  onClose?: () => void;
  isOpen: boolean;
  isOverlayCloseable?: boolean;
  title: string;
  description: string;
}

const Modal: FC<ModalProps> = ({
  children,
  onClose,
  isOpen,
  isOverlayCloseable = true,
  title,
  description,
}) => {
  const closeHandle = () => {
    if (onClose) onClose();
  };

  useEffect(() => {
    window.document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return isOpen ? (
    <div
    onClick={() => {
      if (!isOverlayCloseable) return;
      closeHandle();
    }}
    className=" flex items-center justify-center h-screen w-screen z-30 fixed top-0 left-0"
    >
      <div className="absolute h-screen w-screen bg-black top-0 opacity-70"></div>

      {/* field */}
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" pb-4 flex flex-col relative h-auto w-auto min-h-[100px] min-w-[250px] bg-primary-foreground rounded-md z-50"
      >
        {/* close button */}
        <Button
          onClick={closeHandle}
          variant={"ghost"}
          className="absolute right-0"
        >
          <X size={20} />
        </Button>
        {/* header */}
        <div className="w-full h-auto bg-primary/5 p-4">
          <h1 className=" text-lg font-semibold text-primary/80">{title}</h1>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        {/* body */}
        <div className="px-4">{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
