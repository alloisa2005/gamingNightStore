"use client";

import { useState } from "react";
import { FaCloudUploadAlt } from 'react-icons/fa'
import Spinner from "./Spinner";

const NuevoJuegoForm = () => {      

  const [juego, setJuego] = useState({
    titulo: '',    categoria: '',    descripcion: '',    boxImage: '', price: 0, 
    posterImage: '',    image1: '',    image2: '',    image3: '',    image4: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  

  const handleInput = (e) => {
    setJuego({
      ...juego,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();    
    
    setLoading(true);

    if(!juego.titulo || !juego.categoria || !juego.descripcion) {
      setLoading(false);
      setError('Título, categoría y descripción son obligatorios');
      return;
    }

    if(isNaN(juego.price) || juego.price < 0) {
      setLoading(false);
      setError('Ingrese un precio válido');
      return;
    }

    if(!juego.boxImage || !juego.posterImage) {
      setLoading(false);
      setError('Box Image y Poster Image son obligatorios');
      return;
    }

    if(!juego.image1 && !juego.image2 && !juego.image3 && !juego.image4) {
      setLoading(false);
      setError('Al menos debe ingresar una imágen de vista');
      return;
    }

    const res = await fetch('/api/juegos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(juego)
    });
    const data = await res.json();
    console.log(data);

    setLoading(false);
    // setError('');
  }

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row items-center w-full gap-2">
        <div className="flex flex-col w-full">
          <label className="select-none font-josefin text-lg text-gray-700 italic">Título</label>
          <input
            // value={titulo}
            value={juego.titulo}
            name='titulo'
            onChange={handleInput}
            type="text"
            placeholder="Nombre del juego"
            className="outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />
        </div>
        <div className="flex flex-col w-full h-full">
          <label className="select-none font-josefin text-lg text-gray-700 italic">Categoría</label>
          <select 
            // value={categoria}
            value={juego.categoria}
            name='categoria'
            onChange={ handleInput}
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
        <div className="flex flex-col w-full">
          <label className="select-none font-josefin text-lg text-gray-700 italic">Precio ($)</label>
          <input            
            value={juego.price}
            name='price'
            onChange={handleInput}
            type="number"
            placeholder="Nombre del juego"
            className="outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-col w-full mt-3">
        <label className="select-none font-josefin text-lg text-gray-700 italic">Descripción</label>
        <textarea          
          value={juego.descripcion}
          name='descripcion'
          onChange={handleInput}
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
            value={juego.boxImage}
            name='boxImage'
            onChange={handleInput}
            type="text"
            placeholder="Link imágen de las cards"
            className="mb-4 outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />

          <label className="select-none font-josefin text-lg text-gray-700 italic">
            Poster Image (Background)
          </label>
          <input            
            value={juego.posterImage}
            name='posterImage'
            onChange={handleInput}
            type="text"
            placeholder="Link imágen de página de juego"
            className="mb-4 outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />

          <label className="select-none font-josefin text-lg text-gray-700 italic">
            Imágen 1 (Vista de Juego)
          </label>
          <input            
            value={juego.image1}
            name='image1'
            onChange={handleInput}
            type="text"
            placeholder="Link imágen de página de juego"
            className="mb-4 outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />

          <label className="select-none font-josefin text-lg text-gray-700 italic">
            Imágen 2 (Vista de Juego)
          </label>
          <input            
            value={juego.image2}
            name='image2'
            onChange={handleInput}
            type="text"
            placeholder="Link imágen de página de juego"
            className="mb-4 outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />

          <label className="select-none font-josefin text-lg text-gray-700 italic">
            Imágen 3 (Vista de Juego)
          </label>
          <input            
            value={juego.image3}
            name='image3'
            onChange={handleInput}
            type="text"
            placeholder="Link imágen de página de juego"
            className="mb-4 outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />

          <label className="select-none font-josefin text-lg text-gray-700 italic">
            Imágen 4 (Vista de Juego)
          </label>
          <input            
            value={juego.image4}
            name='image4'
            onChange={handleInput}
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
