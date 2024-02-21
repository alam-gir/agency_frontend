import RegisterForm from '@/components/auth/register-form'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return     <div className="h-full w-full flex items-center justify-center">
  <RegisterForm />
</div>
}

export default page