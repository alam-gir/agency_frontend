import { FC } from 'react'
import { Button } from '@nextui-org/react'
import { Heart, Share2 } from 'lucide-react'


interface ServiceViewActionButtonsProps {
  
}

const ServiceViewActionButtons: FC<ServiceViewActionButtonsProps> = ({}) => {
  return <div className=' h-full w-full flex gap-4 px-4 '>
    <Button variant={"faded"} className='w-full text-base font-medium' >View works</Button>
    <Button variant={"faded"} className='w-full' ><Heart /></Button>
    <Button variant={"faded"} className='w-full' ><Share2 /></Button>
  </div>
}

export default ServiceViewActionButtons