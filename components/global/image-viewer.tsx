import { FC, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { X } from "lucide-react";
import Image from "next/image";
import { FaSpinner } from "react-icons/fa";

interface ImageViewerProps {
  onClose?: () => void;
  isOpen: boolean;
  image_url: string;
}

const ImageViewer: FC<ImageViewerProps> = ({ onClose, isOpen, image_url }) => {
  const closeHandle = () => {
    if (onClose) onClose();
  };

  useEffect(() => {
    window.document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return isOpen ? (
    <div
      onClick={() => {
        closeHandle();
      }}
      className=" flex items-center justify-center h-screen w-screen z-50 fixed top-0 left-0 rounded-md overflow-hidden"
    >
      <div className="absolute h-screen w-screen bg-black top-0 opacity-70"></div>

      {/* field */}
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" flex relative h-auto w-auto min-h-[500px] max-w-screen bg-primary-foreground rounded-md z-50"
      >
        {/* close button */}

        <X onClick={closeHandle} className="absolute right-4 top-4 text-red-300 hover:text-red-400 duration-300" size={20} />
        {/* image */}
        {image_url ? (
          <Image
            src={image_url}
            alt="Picture of the works"
            height={720}
            width={1280}
            className="h-[70vh] w-auto rounded-md object-cover"
          />
        ) : (
          <FaSpinner className="animate-spinner-ease-spin" />
        )}
      </div>
    </div>
  ) : null;
};

export default ImageViewer;
