import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route'


const AdminPage = async () => {

  const session = await getServerSession(authOptions)    

  if(!session?.user?.isAdmin) {
    redirect('/')
  }

  return (
    <div className='w-full bg-red-600'>            
      JAJA222
    </div>
  )
}

export default AdminPage