import Link from 'next/link'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div className='flex flex-col items-center justify-center gap-6 h-screen w-screen'>
    <h1 className='text-2xl text-primary/80 font-medium'>May be you searched a wrong page. Which is not found!</h1>
    <h1 className='text-lg text-accent cursor-pointer'><Link href={"/"}>Go to home</Link></h1>
  </div>
}

export default page