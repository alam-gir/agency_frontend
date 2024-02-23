import { FC } from "react";

interface PgageBannerProps {
  title: string;
  description: string;
}

const PgageBanner: FC<PgageBannerProps> = ({ title, description }) => {
  return (
    <div className="h-fit min-h-60 bg-primary-foreground dark:bg-secondary-foreground/10 p-4">
      <div className="h-full min-h-56 w-full lg:max-w-7xl lg:px-4 m-auto flex flex-col gap-2 justify-center items-center lg:items-start">
        <h1 className="text-3xl text-primary/80 font-medium">{title}</h1>
        <div className="h-0.5 w-2/6 bg-accent rounded-lg opacity-70"></div>
        <p className="text-primary/70">{description}</p>
      </div>
    </div>
  );
};

export default PgageBanner;
