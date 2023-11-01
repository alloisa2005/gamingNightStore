import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route'
import { HiArrowNarrowLeft } from 'react-icons/hi'

const AdminPage = async () => {

  const session = await getServerSession(authOptions)    

  if(!session?.user?.isAdmin) {
    redirect('/')
  }

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='hidden md:flex items-center justify-center w-full gap-8'>
        <HiArrowNarrowLeft size={30} className='text-naranja' />
        <h1 className='font-josefin text-3xl'>Seleccione Opción</h1>      
      </div>
    </div>
  )
}

export default AdminPage