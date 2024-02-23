import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import dark_logo from '@/public/dark logo.png'
import light_logo from '@/public/light logo.png'

interface LogoProps {
  
}

const Logo: FC<LogoProps> = ({}) => {
  return         <div>
  <Link href={"/"}>
    <Image
      height={70}
      width={70}
      src={dark_logo}
      alt="wafipix"
      className="hidden dark:block"
    />
  </Link>
  <Link href={"/"}>
    <Image
      height={70}
      width={70}
      src={light_logo}
      alt="wafipix"
      className="dark:hidden"
    />
  </Link>
  {/* <h1 className="text-2xl font-bold text-secondary-foreground/80 cursor-pointer ">
    wafipix
  </h1> */}
</div>
}

export default Logo