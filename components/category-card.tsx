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
      className="group dark:border dark:border-primary/15 relative w-56 h-56 shadow-lg hover:bg-purple-100 hover:rounded-3xl dark:hover:bg-primary-foreground hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-primary-foreground/10 hover:scale-105 hover:rotate-6 cursor-pointer duration-300 flex items-center justify-center"
      >
        <Link href={hRef}>
      <Image
        alt=""
        className="object-cover group-hover:-rotate-12 group-hover:scale-110 duration-300"
        height={160}
        width={160}
        src={icon}
        />
        <h3 className="text-center font-bold text-lg text-primary/80 w-full group-hover:-rotate-12 duration-300">
          {title}
        </h3>
        </Link>
    </Card>
  );
};

export default CategoryCard;
