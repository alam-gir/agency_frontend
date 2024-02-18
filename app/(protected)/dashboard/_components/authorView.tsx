import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { FC } from 'react'

export interface Author {
    _id: string,
    name: string,
    email: string,
    phone: string,
    role: string,
}
interface AuthorViewProps {
  author: Author
}

const AuthorView: FC<AuthorViewProps> = ({author}) => {
  return <div className='flex flex-col gap-y-4'>
        <h1 className='text-gray-500 font-medium text-base text-center'>Author Details</h1>
    <Table>
        <TableBody>
        <TableRow>
           <TableHead>ID</TableHead> <TableCell className='text-secondary-foreground/50'>{author._id}</TableCell>
        </TableRow>
        <TableRow>
           <TableHead>Name</TableHead> <TableCell className='text-secondary-foreground/50'>{author.name}</TableCell>
        </TableRow>
        <TableRow>
           <TableHead>Email</TableHead> <TableCell className='text-secondary-foreground/50'>{author.email}</TableCell>
        </TableRow>
        <TableRow>
           <TableHead>Phone</TableHead> <TableCell className='text-secondary-foreground/50'>{author.phone}</TableCell>
        </TableRow>
        <TableRow>
           <TableHead>Role</TableHead> <TableCell className='text-secondary-foreground/50'>{author.role}</TableCell>
        </TableRow>
        </TableBody>
    </Table>
  </div>
}

export default AuthorView