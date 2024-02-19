import { FC } from "react";
import { Card, CardFooter, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  icon: string;
  hRef: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ title, icon, hRef }) => {
  return (
      <Card
      isFooterBlurred
      radius="lg"
      className="group border dark:border-primary/15 relative w-60 h-60 backdrop-blur-sm hover:bg-purple-100 hover:rounded-3xl dark:hover:bg-primary/10 hover:shadow-2xl hover:shadow-purple-200 dark:hover:shadow-primary/10 hover:scale-105 hover:rotate-6 cursor-pointer duration-300 flex items-center justify-center"
      >
        <Link href={hRef}>
      <Image
        alt="Woman listing to music"
        className="object-cover group-hover:-rotate-12 group-hover:scale-110 duration-300"
        height={170}
        width={170}
        src={icon}
        />
      <CardFooter>
        <h3 className="text-center font-bold text-lg text-primary/80 w-full group-hover:-rotate-12 duration-300">
          {title}
        </h3>
      </CardFooter>
        </Link>
    </Card>
  );
};

export default CategoryCard;
