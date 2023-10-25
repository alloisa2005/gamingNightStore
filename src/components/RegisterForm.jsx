"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Spinner from "./Spinner";

const RegisterForm = () => {
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState("/images/click.png");
  const [fileImg, setFileImg] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!email || !password || !nombre || !address) {
      setLoading(false);
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      if (fileImg.size / 1024 / 1024 > 1.2) {
        setLoading(false);
        setError("La imagen no debe pesar más de 1.2MB");
        return;
      }

      const formData = new FormData();
      formData.append("file", fileImg);

      const responseImg = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!responseImg.ok) {
        setLoading(false);
        setError("Error al subir la imagen");
        return;
      }

      const { imgUrl } = await responseImg.json();

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, password, address, imgUrl }),
      });

      if (res.ok) {
        setNombre("");
        setEmail("");
        setPassword("");
        setAddress("");
        setLoading(false);
        router.push("/signin");
      } else {
        const data = await res.json();
        setLoading(false);
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSelectImage = () => {
    setError("");
    document.getElementById("fileInput").click();
  };

  const handleSelectedImage = (e) => {
    const file = e.target.files[0];
    setFileImg(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mt-8 border rounded-lg px-4 md:px-5 py-4 lg:py-6 max-w-[550px] shadow-md"
    >
      {error && (
        <div className="bg-red-500 text-white rounded-lg px-3 py-2 mb-4 flex items-center shadow-lg">
          <p className="font-josefin">{error}</p>
        </div>
      )}
      <div className="flex flex-col items-center mb-4">
        <div className="flex justify-center mb-1">
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            hidden
            onChange={handleSelectedImage}
          />
          <div
            onClick={handleSelectImage}
            className="rounded-full w-[140px] h-[140px] border-2 overflow-hidden"
          >
            {selectedImage && (
              <Image
                src={selectedImage}
                width={140}
                height={140}
                className="object-cover w-full h-full "
                alt="Img User"
              />
            )}
          </div>
        </div>
        <p className="font-josefin text-sm font-bold">Seleccione Imagen</p>
      </div>

      <div className="flex flex-col">
        <label className="select-none font-josefin text-lg font-bold">
          Nombre
        </label>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          onFocus={() => setError("")}
          type="text"
          placeholder="John Doe"
          className="outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
        />
      </div>

      <div className="flex flex-col my-6">
        <label className="select-none font-josefin text-lg font-bold">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setError("")}
          type="email"
          placeholder="john@gmail.com"
          className="outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
        />
      </div>

      <div className="flex flex-col my-6">
        <label className="select-none font-josefin text-lg font-bold">
          Dirección
        </label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onFocus={() => setError("")}
          type="text"
          placeholder="Calle 123"
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
          onFocus={() => setError("")}
          type="password"
          placeholder="Password"
          className="outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-naranja w-full py-2 text-white rounded-lg text-xl font-josefin hover:scale-105 ease-out duration-300 hover:shadow-md hover:bg-naranja/90"
      >
        {loading ? (
          <Spinner />
        ) : (
          "Crear Cuenta"
        )}
      </button>

      <div className="flex items-center justify-end gap-3 mt-4">
        <p>¿Ya tienes una cuenta?</p>
        <Link
          href={"/signin"}
          className="text-blue-500 border-b border-blue-500 hover:text-naranja hover:border-naranja ease-out duration-300"
        >
          Inicia Sesión
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
