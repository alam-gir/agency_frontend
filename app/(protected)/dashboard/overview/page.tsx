import DashboardOverview from '@/components/page/dashboardOverview'
import { Metadata } from 'next'
import { FC } from 'react'

interface pageProps {
  
}

export const metadata: Metadata = {
  title: "Dashboard | Agency",
  description: "Dashboard page for management."
}

const page: FC<pageProps> = ({}) => {
  return <main>
    <DashboardOverview/>
  </main>
}

export default page