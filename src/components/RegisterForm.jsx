"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {

  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email || !password || !nombre || !address) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, password, address }),
      });      

      if(res.ok) {        
        setNombre("");
        setEmail("");
        setPassword("");
        setAddress("");
        router.push('/signin');
      }else {
        const data = await res.json();
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mt-8 border rounded-lg px-4 md:px-5 py-4 lg:py-6 max-w-[550px] shadow-md">
      {
        error && (
          <div className="bg-red-500 text-white rounded-lg px-3 py-2 mb-4 flex items-center shadow-lg">
            <p className="font-josefin">{error}</p>
          </div>
        )
      }
      <div className="flex flex-col">
        <label className="select-none font-josefin text-lg font-bold">Nombre</label>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          onFocus={() => setError('')}
          type="text"
          placeholder="John Doe"
          className="outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
        />
      </div>

      <div className="flex flex-col my-6">
        <label className="select-none font-josefin text-lg font-bold">Email</label>
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
        <label className="select-none font-josefin text-lg font-bold">Dirección</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onFocus={() => setError('')}
          type="text"
          placeholder="Calle 123"
          className="outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
        />
      </div>

      <div className="flex flex-col my-6">
        <label className="select-none font-josefin text-lg font-bold">Password</label>
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
        className="bg-naranja w-full py-2 text-white rounded-lg text-xl font-josefin hover:scale-105 ease-out duration-300 hover:shadow-md hover:bg-naranja/90"
      >
        Crear Cuenta
      </button>         

      <div className="flex items-center justify-end gap-3 mt-4">
        <p>¿Ya tienes una cuenta?</p>
        <Link href={"/signin"} className="text-blue-500 border-b border-blue-500 hover:text-naranja hover:border-naranja ease-out duration-300">Inicia Sesión</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
