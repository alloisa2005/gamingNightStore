import { connectDB } from "@/db/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

const POST = async (req) => {
  const { email } = await req.json();
  
  try {
    await connectDB();
    const user = await User.findOne({email}).select('_id');        

    if(!user) {
      return NextResponse.json({message: 'Email no registrado'}, {status: 404})
    }

    return NextResponse.json({user}, {status: 201})
  } catch (error) {
    return NextResponse.json({message: `Error: ${error}`}, {status: 500})
  }

};

export { POST };