import Navbar from '@/components/navbar/navbar';
import { FC } from 'react'

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({children}) => {

  return <div className='h-full flex flex-col items-center'>
    <Navbar />
    {children}
  </div>
}

export default layout