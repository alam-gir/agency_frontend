"use client"
import { FC } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation';

interface RedirectButtonProps extends React.HTMLProps<HTMLButtonElement> {
  title?: string;
  redirectTo: string;
  varient?: "default" | "secondary" | "destructive" | "outline" | "link";
}


const RedirectButton: FC<RedirectButtonProps> = ({title, redirectTo, varient, className}) => {
  const router = useRouter()
    const clickHandle = () => {
        router.push(redirectTo)
    }
  return <Button variant={varient} onClick={clickHandle} className={`${className}`}>{title}</Button>
}

export default RedirectButton