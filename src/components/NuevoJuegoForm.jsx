"use client";

import { useState } from "react";
import { FaCloudUploadAlt } from 'react-icons/fa'
import Spinner from "./Spinner";

const NuevoJuegoForm = () => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [boxImage, setBoxImage] = useState("");
  const [posterImage, setPosterImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCategoria = (e) => setCategoria(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    if(!titulo || !categoria || !descripcion) {
      setLoading(false);
      setError('Título, categoría y descripción son obligatorios');
      return;
    }

    if(!boxImage || !posterImage) {
      setLoading(false);
      setError('Box Image y Poster Image son obligatorios');
      return;
    }

    if(!image1 && !image2 && !image3 && !image4) {
      setLoading(false);
      setError('Al menos debe ingresar una imágen de vista');
      return;
    }

    setError('');
  }

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row items-center w-full gap-2">
        <div className="flex flex-col w-full">
          <label className="select-none font-josefin text-lg text-gray-700 italic">Título</label>
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            type="text"
            placeholder="Nombre del juego"
            className="outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />
        </div>
        <div className="flex flex-col w-full h-full">
          <label className="select-none font-josefin text-lg text-gray-700 italic">Categoría</label>
          <select 
            value={categoria}
            onChange={handleCategoria}
            className="bg-white h-full outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          >
            <option value="s" className="text-lg">
              Seleccione Categoría
            </option>
            <option value="aventura" className="text-lg">
              Aventura
            </option>
            <option value="wargame" className="text-lg">
              War Game
            </option>
            <option value="eurogame" className="text-lg">
              Euro Game
            </option>
            <option value="familiar" className="text-lg">
              Familiar
            </option>
            <option value="partygame" className="text-lg">
              Party Game
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col w-full mt-3">
        <label className="select-none font-josefin text-lg text-gray-700 italic">Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          type="text"
          placeholder="Descripción del juego"
          className="resize-none h-[170px] outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
        />
      </div>

      <div className="flex flex-col w-full mt-3">
        <label className="select-none font-josefin text-lg border-b-2 border-naranja">
          Imágenes (links)
        </label>

        <div className="mt-6 flex flex-col">
          <label className="select-none font-josefin text-lg text-gray-700 italic">
            Box Image (Cards)
          </label>
          <input
            value={boxImage}
            onChange={(e) => setBoxImage(e.target.value)}
            type="text"
            placeholder="Link imágen de las cards"
            className="mb-4 outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />

          <label className="select-none font-josefin text-lg text-gray-700 italic">
            Poster Image (Background)
          </label>
          <input
            value={posterImage}
            onChange={(e) => setPosterImage(e.target.value)}
            type="text"
            placeholder="Link imágen de página de juego"
            className="mb-4 outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />

          <label className="select-none font-josefin text-lg text-gray-700 italic">
            Imágen 1 (Vista de Juego)
          </label>
          <input
            value={image1}
            onChange={(e) => setImage1(e.target.value)}
            type="text"
            placeholder="Link imágen de página de juego"
            className="mb-4 outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />

          <label className="select-none font-josefin text-lg text-gray-700 italic">
            Imágen 2 (Vista de Juego)
          </label>
          <input
            value={image2}
            onChange={(e) => setImage2(e.target.value)}
            type="text"
            placeholder="Link imágen de página de juego"
            className="mb-4 outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />

          <label className="select-none font-josefin text-lg text-gray-700 italic">
            Imágen 3 (Vista de Juego)
          </label>
          <input
            value={image3}
            onChange={(e) => setImage3(e.target.value)}
            type="text"
            placeholder="Link imágen de página de juego"
            className="mb-4 outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />

          <label className="select-none font-josefin text-lg text-gray-700 italic">
            Imágen 4 (Vista de Juego)
          </label>
          <input
            value={image4}
            onChange={(e) => setImage4(e.target.value)}
            type="text"
            placeholder="Link imágen de página de juego"
            className="mb-4 outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />
        </div>
      </div>

      {error && (
        <div className="bg-red-500 text-white rounded-lg px-3 py-2 mb-4 flex items-center shadow-lg">
          <p className="font-josefin text-lg">{error}</p>
        </div>
      )}

      <div className="w-full  flex justify-center">
        <button    
          disabled={loading}    
          type="submit"
          className="min-w-[200px] flex justify-center items-center gap-3 bg-naranja/90 hover:bg-naranja px-2 py-2 rounded-md ease-out duration-300 hover:shadow-md text-white font-josefin"
        >
          {loading ? (
          <Spinner />
        ) : (
          <>
            <FaCloudUploadAlt size={26} className="" />
            <p className="text-lg font-bold">Guardar Juego</p>
          </>
        )}          
        </button>
      </div>
    </form>
  );
};

export default NuevoJuegoForm;
