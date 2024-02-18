import { FC } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

interface FormSuccessProps {
  message?: string
}

const FormSuccess: FC<FormSuccessProps> = ({message}) => {
    if(!message) return null;

  return <div className=' bg-emerald-500/15 text-emerald-500 p-3 text-sm rounded-md gap-x-2 flex items-center'>
    <FaCheckCircle/>
    <p>{message}</p>
  </div>
}

export default FormSuccess