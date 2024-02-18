import { FC } from 'react'
import HomeHero from '../component/home/home-hero'
import OurServicesList from '../component/home/our-services-list'

interface HomePageProps {
  
}

const HomePage: FC<HomePageProps> = ({}) => {
  return <div className='h-full w-full'>
    <HomeHero />
    <OurServicesList />
  </div>
}

export default HomePage