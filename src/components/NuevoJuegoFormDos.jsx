"use client";

import { uploadGameImage } from "@/utils/uploadImage";
import Image from "next/image";
import { useState } from "react";
import { FaCloudUploadAlt } from 'react-icons/fa'
import Spinner from "./Spinner";

const NuevoJuegoFormDos = () => {      

  const [juego, setJuego] = useState({titulo: '', categoria: '', descripcion: '', price: 0 });

  const [boxImage, setBoxImage] = useState(''); 
  const [boxImagePreview, setBoxImagePreview] = useState('');

  const [posterImage, setPosterImage] = useState('');
  const [posterImagePreview, setPosterImagePreview] = useState('');

  const [image1, setImage1] = useState('');
  const [image1Preview, setImage1Preview] = useState('');

  const [image2, setImage2] = useState('');
  const [image2Preview, setImage2Preview] = useState('');

  const [image3, setImage3] = useState('');
  const [image3Preview, setImage3Preview] = useState('');

  const [image4, setImage4] = useState('');
  const [image4Preview, setImage4Preview] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  

  const handleInputImage = (e) => {   
    if(e.target.name === 'boxImage') {
      setBoxImage(e.target.files[0]);
      setBoxImagePreview(URL.createObjectURL(e.target.files[0]))            
    }

    if(e.target.name === 'posterImage') {
      setPosterImage(e.target.files[0]);
      setPosterImagePreview(URL.createObjectURL(e.target.files[0]))
    }

    if(e.target.name === 'image1') {
      setImage1(e.target.files[0]);
      setImage1Preview(URL.createObjectURL(e.target.files[0]))
    }

    if(e.target.name === 'image2') {
      setImage2(e.target.files[0]);
      setImage2Preview(URL.createObjectURL(e.target.files[0]))
    }

    if(e.target.name === 'image3') {
      setImage3(e.target.files[0]);
      setImage3Preview(URL.createObjectURL(e.target.files[0]))
    }

    if(e.target.name === 'image4') {
      setImage4(e.target.files[0]);
      setImage4Preview(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleInput = (e) => {
    setJuego({
      ...juego,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();    
    
    setError('');
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

    if(!boxImage || !posterImage) {
      setLoading(false);
      setError('Imágen Portada y Background son requeridas.');
      return;
    }

    if(!image1 && !image2 && !image3 && !image4) {
      setLoading(false);
      setError('Al menos debe ingresar una imágen de detalle.');
      return;
    }    
    
    let res = await uploadGameImage(boxImage);
    if(res.error){
      setLoading(false);
      setError(res.error);
      return;
    }    
    const boxImageURL = res.imgUrl;

    res = await uploadGameImage(posterImage);
    if(res.error){
      setLoading(false);
      setError(res.error);
      return;
    }    
    const posterImageURL = res.imgUrl;    

    res = await uploadGameImage(image1);
    if(res.error){
      setLoading(false);
      setError(res.error);
      return;
    }
    const image1URL = res.imgUrl;
    
    res = await uploadGameImage(image2);
    if(res.error){
      setLoading(false);
      setError(res.error);
      return;
    }
    const image2URL = res.imgUrl;
    
    res = await uploadGameImage(image3);
    if(res.error){
      setLoading(false);
      setError(res.error);
      return;
    }
    const image3URL = res.imgUrl;
    
    res = await uploadGameImage(image4);
    if(res.error){
      setLoading(false);
      setError(res.error);
      return;
    }
    const image4URL = res.imgUrl;    

    const newGame = {
      ...juego,
      boxImage: boxImageURL,
      posterImage: posterImageURL,
      image1: image1URL,
      image2: image2URL,
      image3: image3URL,
      image4: image4URL
    }
    const response = await fetch('http://localhost:3000/api/juegos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGame)
    });

    if(!response.ok) {
      setLoading(false);
      setError('Error al crear el juego');
      return;
    }


    setLoading(false);        
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
          Imágenes
        </label>

        <div className="w-full mt-6 flex flex-col lg:flex-row gap-2 lg:gap-3 items-center lg:justify-evenly mb-4">
          <div className="flex flex-col w-full lg:w-[230px] mb-6 lg:mb-3">
            <label className="select-none font-josefin font-bold text-lg text-black/80 italic">Imágen Portada (Cards)</label>
            <input onChange={handleInputImage} name="boxImage" type='file' accept="image/*" 
              className="mb-4 outline-none font-josefin text-md border-2 px-2 py-1 rounded-md" />                  
              <div className="w-full lg:w-[230px] h-[230px] border shadow-md rounded-md overflow-hidden">
                {boxImagePreview && (
                  <Image src={boxImagePreview} alt="boxImage" width={200} height={200} className="w-full h-full object-contain" />
                )}
              </div>
          </div>             
          
          <div className="flex flex-col w-full lg:w-[550px]">
            <label className="select-none font-josefin font-bold text-lg text-black/80 italic">Imágen Background</label>
            <input onChange={handleInputImage} name="posterImage" type='file' accept="image/*" 
              className="mb-4 outline-none font-josefin text-md border-2 px-2 py-1 rounded-md" />                  
            <div className="w-full lg:w-[550px] h-[230px] border shadow-md rounded-md overflow-hidden">
              {posterImagePreview && (
                <Image src={posterImagePreview} alt="boxImage" width={200} height={200} className="w-full h-full object-cover" />
              )}
            </div>
          </div>           
        </div>

        <div className="mb-3 lg:my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="flex flex-col gap-1">
            <label className="select-none font-josefin font-bold text-lg text-black/80 italic">Imágen Detalle 1</label>
            <input onChange={handleInputImage} name="image1" type='file' accept="image/*" 
              className="mb-4 outline-none font-josefin text-md border-2 px-2 py-1 rounded-md" />                  

            <div className="w-full h-[230px] border shadow-md rounded-md overflow-hidden">
              {image1Preview && (
                <Image src={image1Preview} alt="image1" width={200} height={200} className="w-full h-full object-cover" />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="select-none font-josefin font-bold text-lg text-black/80 italic">Imágen Detalle 2</label>
            <input onChange={handleInputImage} name="image2" type='file' accept="image/*" 
              className="mb-4 outline-none font-josefin text-md border-2 px-2 py-1 rounded-md" />                  

            <div className="w-full h-[230px] border shadow-md rounded-md overflow-hidden">
              {image2Preview && (
                <Image src={image2Preview} alt="image2" width={200} height={200} className="w-full h-full object-cover" />
              )}
            </div>
          </div>
          
          <div className="flex flex-col gap-1">
            <label className="select-none font-josefin font-bold text-lg text-black/80 italic">Imágen Detalle 3</label>
            <input onChange={handleInputImage} name="image3" type='file' accept="image/*" 
              className="mb-4 outline-none font-josefin text-md border-2 px-2 py-1 rounded-md" />                  

            <div className="w-full h-[230px] border shadow-md rounded-md overflow-hidden">
              {image3Preview && (
                <Image src={image3Preview} alt="image3" width={200} height={200} className="w-full h-full object-cover" />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="select-none font-josefin font-bold text-lg text-black/80 italic">Imágen Detalle 4</label>
            <input onChange={handleInputImage} name="image4" type='file' accept="image/*" 
              className="mb-4 outline-none font-josefin text-md border-2 px-2 py-1 rounded-md" />                  

            <div className="w-full h-[230px] border shadow-md rounded-md overflow-hidden">
              {image4Preview && (
                <Image src={image4Preview} alt="image4" width={200} height={200} className="w-full h-full object-cover" />
              )}
            </div>
          </div>

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

export default NuevoJuegoFormDos;
