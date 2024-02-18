import DashHeader from '@/components/dashboard/dash-hader'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div>
    <DashHeader actionButtonTitle="Create Billing" selectionBox={false} />
  </div>
}

export default page