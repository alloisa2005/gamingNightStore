'use client'

import { useSession } from 'next-auth/react'
import React from 'react'
import { useRouter } from 'next/navigation'

const Datos = () => {
  const router = useRouter()

  const {data: session} = useSession()
  
  if(!session){
    router.push('/')   
    return;
  }

  return (
    <div>Datos</div>
  )
}

export default Datos