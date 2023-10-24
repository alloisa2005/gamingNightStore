"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react'

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mt-8 border rounded-lg px-4 md:px-5 py-4 lg:py-6 max-w-[550px] shadow-md"
    >
      <div className="flex flex-col">
        <label className="select-none font-josefin text-lg font-bold">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          type="password"
          placeholder="Password"
          className="outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="bg-naranja w-full py-2 text-white rounded-lg text-xl font-josefin hover:scale-105 ease-out duration-300 hover:shadow-md hover:bg-naranja/90"
      >
        Inicia Sesión
      </button>

      <div className="mt-3 flex items-center gap-6">
        <div className="flex-1 h-[1px] bg-gray-400"></div>
        <h1 className="font-josefin font-bold text-2xl">ó</h1>
        <div className="flex-1 h-[1px] bg-gray-400"></div>
      </div>

      <button onClick={() => signIn('google', {callbackUrl: '/'})} className="w-full bg-black/75 flex items-center justify-center gap-4 py-2 text-white font-josefin text-xl mt-3 rounded-lg hover:scale-105 ease-out duration-300 hover:shadow-md">
        <FcGoogle size={28} />
        <h1>Inicia Sesión con Google</h1>
      </button>

      <div className="flex items-center justify-end gap-3 mt-4">
        <p>¿No tienes una cuenta?</p>
        <Link href="#" className="text-blue-500 border-b border-blue-500">Regístrate</Link>
      </div>
    </form>
  );
};

export default SignInForm;
