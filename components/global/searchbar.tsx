import { FC } from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

interface SearchbarProps {
  searchPlaceholder?: string
}

const Searchbar: FC<SearchbarProps> = ({searchPlaceholder}) => {
  return <div className='relative h-full w-full flex items-center'>
    <Search  className='h-4 w-4 text-secondary-foreground/50 absolute ml-2 pointer-events-none'/>
    <Input placeholder={searchPlaceholder || "Search..."}  className='text-secondary-foreground pl-8 dark:border-gray-700'/>
  </div>
}

export default Searchbar