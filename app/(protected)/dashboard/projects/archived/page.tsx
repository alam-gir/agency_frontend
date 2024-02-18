import { FC } from 'react'
import ArchivedProjects from '../../_components/projects/archived-projects'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div>
    <ArchivedProjects />
  </div>
}

export default page