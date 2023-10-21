import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Inter, Josefin_Sans, Russo_One } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const josefin = Josefin_Sans({ subsets: ['latin'], variable: '--font-josefin', weight: '400' })
const russo = Russo_One({ subsets: ['latin'], variable: '--font-russo', weight: '400' })

export const metadata = {
  title: 'Gaming Night Store',
  description: 'Developed by aallois',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.variable} ${russo.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
