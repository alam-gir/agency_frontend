import { FC } from "react";
import PageHeader from "../../_components/dashboard-page-header";
import ProjectForm from "../../_components/projects/project-form";

interface pageProps {}

const page: FC<pageProps> = ({}) => {


  return (
    <div>
      <PageHeader title="Update project" description="update this project, if status is published then  peoples can see, otherwise it will held in archived." />
      <div className="h-ful w-full px-4">
        <ProjectForm />
      </div>
    </div>
  );
};

export default page;
