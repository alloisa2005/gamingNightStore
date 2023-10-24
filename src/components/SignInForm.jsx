"use client";

import React, { useState } from "react";

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
    </form>
  );
};

export default SignInForm;
