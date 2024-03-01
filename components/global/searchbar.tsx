import { FC, InputHTMLAttributes } from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

interface SearchbarProps extends InputHTMLAttributes<HTMLInputElement> {
  searchPlaceholder?: string
  onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void
}

const Searchbar: FC<SearchbarProps> = ({searchPlaceholder, ...props}) => {
  return <div className='relative h-full w-full flex items-center'>
    <Search  className='h-4 w-4 text-secondary-foreground/50 absolute ml-2 pointer-events-none'/>
    <Input {...props} placeholder={searchPlaceholder || "Search..."}  className='text-secondary-foreground pl-8 dark:border-gray-700'/>
  </div>
}

export default Searchbar