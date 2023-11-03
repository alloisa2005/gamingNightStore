import { connectDB } from "@/db/connectDB"
import Juego from "@/models/Juego";
import { NextResponse } from "next/server"

const GET = async (req, context) => {        
  
  const { juegoId } = context.params;

  try {    
    await connectDB();       
    const juego = await Juego.findById(juegoId);
    if(!juego) return NextResponse.json({message: `No existe el juego id: ${juegoId}`}, {status: 500})

    return NextResponse.json(juego, {status: 201})
  } catch (error) {
    return NextResponse.json({msg: error}, {status: 500})
  }

}


export { GET }