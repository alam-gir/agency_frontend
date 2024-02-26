import { FC } from 'react'
import { mockServices } from '@/lib/mockdata'
import ServiceCard from './service-card'
interface ServiceCardsProps {
  
}



const ServiceCards: FC<ServiceCardsProps> = ({}) => {
  return <div className='flex flex-wrap justify-center gap-8 w-full h-full md:gap-16'>
    <ServiceCard service = {mockServices[0]} />
    <ServiceCard service = {mockServices[0]}  reverse/>
    <ServiceCard service = {mockServices[0]} />
    <ServiceCard service = {mockServices[0]} reverse/>
  </div>
}

export default ServiceCards