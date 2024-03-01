
import { FC } from 'react'
import { Button } from '@nextui-org/react'
import { Heart, Share2 } from 'lucide-react'
import RedirectButton from '../navbar/redirect-button'

interface ServiceViewActionButtonsProps {
  
}

const ServiceViewActionButtons: FC<ServiceViewActionButtonsProps> = ({}) => {
  return <div className=' h-full w-full flex gap-4 px-4 '>
    <RedirectButton title='View works' redirectTo='/our-works' varient='faded' className='w-full' />
    <Button variant={"faded"} className='w-full' ><Heart /></Button>
    <Button variant={"faded"} className='w-full' ><Share2 /></Button>
  </div>
}

export default ServiceViewActionButtons