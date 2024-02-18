import { FC } from 'react'

interface DashboardPageHeadeProps {
  title: string;
  description: string;
}

const DashboardPageHeade: FC<DashboardPageHeadeProps> = ({title, description}) => {
  return <header className=" py-4 px-4 flex justify-between items-center h-[10vh]">
  <div>
    <h1 className="text-2xl font-semibold text-primary/80">{title}</h1>
    <p className="text-sm text-primary/70">{description}</p>
  </div>
</header>
}

export default DashboardPageHeade