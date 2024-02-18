"use client"
import { FC } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

interface DashboardButtonProps {
  
}

const DashboardButton: FC<DashboardButtonProps> = ({}) => {
    const router = useRouter()

    const clickhandle = () => {
        router.push('/dashboard')
    }

  return <Button variant={"destructive"} className='bg-purple-500' onClick={clickhandle}>Dashboard</Button>
}

export default DashboardButton