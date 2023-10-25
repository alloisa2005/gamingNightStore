"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!email || !password ) {
      setError("Ingresa tu email y contraseña");
      return;
    }

    try {
      const res = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if(!res.ok) {        
        const data = await res.json();
        setError(data.message);
        return;
      }

      const resSignIn = await signIn('credentials', {email, password, redirect: false});

      if(resSignIn.error){
        setError('Email o password incorrectos');
        return;
      }

      router.push("/");      

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full mt-8 border rounded-lg px-4 md:px-5 py-4 lg:py-6 max-w-[550px] shadow-md">
    
      <form onSubmit={handleSubmit} >
        {
          error && (
            <div className="bg-red-500 text-white rounded-lg px-3 py-2 mb-4 flex items-center">
              <p className="font-josefin">{error}</p>
            </div>
          )
        }

        <div className="flex flex-col">
          <label className="select-none font-josefin text-lg font-bold">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setError('')}
            type="email"
            placeholder="john@gmail.com"
            className="outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />
        </div>

        <div className="flex flex-col my-6">
          <label className="select-none font-josefin text-lg font-bold">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setError('')}
            type="password"
            placeholder="Password"
            className="outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-naranja/90 hover:bg-naranja w-full py-2 text-white rounded-lg text-xl font-josefin ease-out duration-300 hover:shadow-md"
        >
          Iniciar Sesión
        </button>

        <div className="mt-3 flex items-center gap-6">
          <div className="flex-1 h-[1px] bg-gray-400"></div>
          <h1 className="font-josefin font-bold text-xl">ó</h1>
          <div className="flex-1 h-[1px] bg-gray-400"></div>
        </div>      
      </form>

      <button className="w-full bg-black/75 flex items-center justify-center gap-4 py-2 text-white font-josefin text-xl mt-3 rounded-lg ease-out duration-300 hover:shadow-md hover:bg-black/90">
        <FcGoogle size={28} />
        <h1>Inicia Sesión con Google</h1>
      </button>

      <div className="flex items-center justify-end gap-3 mt-4">
        <p>¿No tienes una cuenta?</p>
        <Link href={"/register"} className="text-blue-500 border-b border-blue-500 hover:text-naranja hover:border-naranja ease-out duration-300">Regístrate</Link>
      </div>
    </div>
  );
};

export default SignInForm;
