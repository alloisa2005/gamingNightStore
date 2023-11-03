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
      if(query === 'orderNombre'){
        juegos = await Juego.find().sort({nombre: 1});
      }else{
        juegos = await Juego.find().sort({createdAt: -1});
      }
    }
    return NextResponse.json(juegos, {status: 201})
  } catch (error) {
    return NextResponse.json({msg: 'Error'}, {status: 500})
  }

}

const POST = async (req, res) => {      

  const juegoReq = await req.json();
  console.log(juegoReq)

   try {    
     await connectDB();   
     const juego = await Juego.create({
        nombre: juegoReq.titulo,
        category: juegoReq.categoria,
        description: juegoReq.descripcion,
        boxImage: juegoReq.boxImage,
        poster: juegoReq.posterImage,
        image1: juegoReq.image1,
        image2: juegoReq.image2,
        image3: juegoReq.image3,
        image4: juegoReq.image4,
        price: juegoReq.price,

     });
     return NextResponse.json(juego, {status: 201})
   } catch (error) {
     return NextResponse.json({msg: `${error.message}`}, {status: 404})
   }

}

export { GET, POST }