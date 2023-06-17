import ClientOnly from './components/clientOnly'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import getCurrentUser from './actions/getCurrentUser'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mobi e-katalog',
  description: 'Mobi e-katalog telefona',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly> 
          <Navbar currentUser={currentUser} ></Navbar>
        </ClientOnly>
        {children}</body>
    </html>
  )
}
