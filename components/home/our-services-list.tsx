import { FC } from "react";
import CategoryCard from "../category-card";
import { mockCategories } from "@/lib/mockdata";
import GridBackground from "../background/grid-bg";

interface OurServicesListProps {}
const CategoryCards = mockCategories.map((category, index) => {
  return (
    <CategoryCard
      key={index}
      title={category.title}
      icon={category.icon}
      hRef=""
    />
  );
});

const OurServicesList: FC<OurServicesListProps> = ({}) => {
  return (
    <div className="h-auto min-h-screen w-full relative">
      <GridBackground />
      <div className="md:pt-[7vh]">
        <div className=" w-full h-full p-4 md:max-w-4xl lg:max-w-7xl  m-auto flex flex-col gap-2">
          <h1 className="text-xl md:text-3xl text-primary/80 font-bold tracking-wide uppercase">
            What we <span className="text-accent-purple">{"PROVIDE >"}</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-widest">Here you will find our recent works.</p>
          <div className="flex flex-wrap w-fit gap-8 items-center justify-center py-24">
            {CategoryCards}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesList;
