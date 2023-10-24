import SignInForm from "@/components/SignInForm";
import React from "react";

const SignIn = () => {
  return (
    <div className="contenedor">
      <div className="flex flex-col items-center justify-center w-full h-full mt-8">
        <h1 className="select-none text-center font-josefin text-2xl lg:text-4xl border-b-2 border-naranja w-full">
          Iniciar Sesión
        </h1>

        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
