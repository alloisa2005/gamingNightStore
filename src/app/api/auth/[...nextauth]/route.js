
import User from "@/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import { connectDB } from "@/db/connectDB";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},

      async authorize({email, password}) {                
        
        try {
          await connectDB();
          const user = await User.findOne({email});

          if(!user){
            return null;
          }

          const passwordsMatched = await bcrypt.compare(password, user.password);

          if(!passwordsMatched){
            return null;
          }

          return user;
        } catch (error) {
          console.log(error);
        }
      },
      
    }),
  ],
  callbacks: {
    async session({session, token, user}) {                  
      const email = session.user.email;
      
      const userSearch = await User.findOne({email}).select('-password');
      session.user.address = userSearch.address;
      session.user.isAdmin = userSearch.isAdmin;
      session.user.id = userSearch._id;      

      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

