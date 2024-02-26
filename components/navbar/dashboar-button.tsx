"use client"
import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'

interface DashboardButtonProps {
  
}

const DashboardButton: FC<DashboardButtonProps> = ({}) => {
    const router = useRouter()

    const clickhandle = () => {
        router.push('/dashboard')
    }

  return <Button variant={"flat"} className='bg-accent-purple text-gray-200' onClick={clickhandle}>Dashboard</Button>
}

export default DashboardButton