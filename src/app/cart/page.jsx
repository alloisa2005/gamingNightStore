import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import CartItem from '@/components/CartItem'

const Cart = async () => {

  const session = await getServerSession(authOptions)  

  if(!session) {
    redirect('/signin')
  }

  return (
    <div className='contenedor'>
      <p className='font-josefin text-3xl w-full border-b-2 border-b-naranja'>Mi Carrito</p>

      <div className='mt-3 w-full flex flex-col md:flex-row-reverse gap-4 md:gap-2 font-josefin'>
        <div className='flex-1 border p-2 rounded-md shadow-md'>
          <p className='text-lg italic'>Resumen de Compra</p>          
        </div>

        <div className='w-full md:w-[70%] border p-2 rounded-md shadow-md flex flex-col gap-3 py-4'>             
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </div>
  )
}

export default Cart