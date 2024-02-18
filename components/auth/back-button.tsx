import { FC } from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton: FC<BackButtonProps> = ({label, href}) => {
  return <Button variant={"link"}
  size={"sm"} asChild  className='font-normal w-full'>
    <Link href={href}>
        {label}</Link>    
  </Button>
}

export default BackButton