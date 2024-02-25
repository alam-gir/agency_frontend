import Image from "next/image";
import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  image: string;
};

export const Thumb: React.FC<PropType> = ({ selected, index, onClick, image }) => {

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        <Image
          src={image}
          alt={`work ${index + 1}`}
          width={1920}
          height={1080}
        />
      </button>
    </div>
  );
};
