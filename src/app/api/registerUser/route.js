import { connectDB } from "@/db/connectDB";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import User from "@/models/User";

const POST = async (req) => {
  const { email, password } = await req.json();

  try {
    await connectDB();
    const user = await User.findOne({email});

    if(user) {
      return NextResponse.json({message: 'Usuario ya existe'}, {status: 400})
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({email, password: hashedPassword});

    return NextResponse.json({message: 'Usuario creado'}, {status: 201})

  } catch (error) {
    return NextResponse.json({message: `Error: ${error}`}, {status: 500})
  }
}

export { POST };