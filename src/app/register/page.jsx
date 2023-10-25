import React from 'react'
import RegisterForm from '@/components/RegisterForm'

const Register = () => {
  return (
    <div className="contenedor">
      <div className="flex flex-col items-center justify-center w-full h-full mt-8">
        <h1 className="select-none text-center font-josefin text-2xl lg:text-4xl border-b-2 border-naranja w-full">
          Crea tu cuenta
        </h1>

        <RegisterForm />
      </div>
    </div>
  )
}

export default Register