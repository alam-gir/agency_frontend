"use client";
import Image from "next/image";
import { FC, useState } from "react";
import ImageViewer from "../global/image-viewer";

interface WorksGalleryCardProps {
  image_url: string;
}

const WorksGalleryCard: FC<WorksGalleryCardProps> = ({ image_url }) => {
  const [isView, setView] = useState<boolean>(false);
  const [viewImageUrl, setViewImageUrl] = useState<string>("");

  const handleView = (url: string) => {
    setViewImageUrl(url);
    setView(true);
  };
  return (
    <div
      onClick={() => handleView(image_url)}
      className="rounded h-full w-full shadow-sm relative group duration-300 cursor-pointer"
    >
      <Image
        className="h-full w-full rounded"
        src={image_url}
        alt="Picture of the works"
        width={500}
        height={500}
      />

      <div className="h-full w-full bg-gray-900 opacity-0 absolute top-0 left-0 z-10 group-hover:opacity-80 duration-300 rounded flex items-center justify-center">
        <h1 className="text-2xl text-gray-200">view</h1>
      </div>
      <ImageViewer
        isOpen={isView}
        onClose={() => setView(false)}
        image_url={viewImageUrl}
      />
    </div>
  );
};

export default WorksGalleryCard;
