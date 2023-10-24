import { connectDB } from "@/db/connectDB"
import { NextResponse } from "next/server"

const GET = async (req, res) => {    
  try {
    await connectDB();    
    return NextResponse.json({msg: 'Holaaaaa'}, {status: 201})
  } catch (error) {
    return NextResponse.json({msg: 'Error'}, {status: 500})
  }

}

export { GET }