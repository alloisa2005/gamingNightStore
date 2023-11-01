import { connectDB } from "@/db/connectDB"
import Juego from "@/models/Juego";
import { NextResponse } from "next/server"

const GET = async (req, res) => {        
  
  // Leo el query de la url, si es latest, devuelvo solo los 4 ultimos juegos agregados
  const url = new URL(req.url);
  const query = url.searchParams.get('query');  

  try {    
    await connectDB();   
    let juegos;
    if(query === 'latest') {
      juegos = await Juego.find().sort({createdAt: -1}).limit(4);
    }else{
      juegos = await Juego.find().sort({createdAt: -1});
    }
    return NextResponse.json(juegos, {status: 201})
  } catch (error) {
    return NextResponse.json({msg: 'Error'}, {status: 500})
  }

}

const POST = async (req, res) => {    
  
  const {nombre, description, boxImage, poster, image1, image2, image3, image4, price, category} = await req.json();

  try {    
    await connectDB();   
    const juego = await Juego.create({nombre, description, boxImage, poster, image1, image2, image3, image4, price, category});
    return NextResponse.json(juego, {status: 201})
  } catch (error) {
    return NextResponse.json({msg: `${error.message}`}, {status: 500})
  }

}

export { GET, POST }