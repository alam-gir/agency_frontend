import { FC } from 'react'
import ProjectPage from '../_components/projects/published-projects'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div className='h-full box-border w-full flex flex-col'>
    <ProjectPage />
  </div>
}

export default page