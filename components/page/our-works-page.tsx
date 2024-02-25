import { FC } from "react";
import WorksSidebar from "../our works/works-sidebar";
import WorksHeader from "../our works/works-header";
import WorkCards from "../our works/work-cards";

interface OurWorksPageProps {}

const OurWorksPage: FC<OurWorksPageProps> = ({}) => {
  return (
    <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] h-full">
      <WorksSidebar />
      <div className="flex flex-col min-h-full">
        <WorksHeader />
        <WorkCards />
      </div>
    </div>
  );
};

export default OurWorksPage;
