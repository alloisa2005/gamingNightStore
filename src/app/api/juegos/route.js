import { connectDB } from "@/db/connectDB"
import Juego from "@/models/Juego";
import User from "@/models/User";
import { NextResponse } from "next/server"

const GET = async (req, res) => {    
  await connectDB();   

  try {    
    const juegos = await Juego.find();
    return NextResponse.json(juegos, {status: 201})
  } catch (error) {
    return NextResponse.json({msg: 'Error'}, {status: 500})
  }

}

export { GET }