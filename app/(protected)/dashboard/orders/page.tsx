import DashHeader from '@/components/dashboard/dash-hader'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div>
    <DashHeader actionButtonTitle="Entry an Order" />
  </div>
}

export default page