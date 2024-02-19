import { navigationMenu } from '@/lib/context';
import Link from 'next/link';
import { FC } from 'react'


const NavList = navigationMenu.map((menu) => {
    return (
      <li key={menu.path} className="ml-4 first:ml-0">
        <Link
          href={menu.path}
          className="text-lg text-secondary-foreground hover:text-secondary-foreground/90 hover:bg-seconday"
        >
          {menu.name}
        </Link>
      </li>
    );
  });


interface MobileNavbarProps {
  
}

const MobileNavbar: FC<MobileNavbarProps> = ({}) => {
  return <div className='fixed top-4 left-4 cursor-pointer group'>
    <div className='flex flex-col gap-1'>
        <div className='w-7 h-1 rounded-lg bg-primary/60 group-hover:w-6 duration-300'></div>
        <div className='w-7 h-0.5 rounded-lg bg-primary/60 group-hover:w-8 duration-300'></div>
        <div className='w-7 h-1 rounded-lg bg-primary/60 group-hover:w-6 duration-300'></div>
    </div>
    
  </div>
}

export default MobileNavbar