import { connectDB } from "@/db/connectDB";
import User from "@/models/User";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session({session}) {
      const sessionUser = await User.findOne({email: session.user.email})
      session.user.image = sessionUser.image
      session.user.name = sessionUser.name

      return session
    },
    async signIn({profile}) {      
      try {
        await connectDB()  
        const user = await User.findOne({email: profile.email})
        if (!user) {
          await User.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture,
          })
        }
        return true
      } catch (error) {        
        console.log(error);
        return false
      }

    },    
  },
  pages: {
    signIn: "/signin",
  },
})

export { handler as GET, handler as POST }