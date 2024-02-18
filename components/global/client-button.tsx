"use-client"
import { FC } from 'react'

interface ClientButtonProps extends React.HTMLProps<HTMLSpanElement> {
    children: React.ReactNode
}

const ClientButton: FC<ClientButtonProps> = ({children, ...props}) => {
  return <span {...props} className={`${props.className}`}>
    {children}
  </span>
}

export default ClientButton