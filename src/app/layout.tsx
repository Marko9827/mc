import ClientOnly from './components/clientOnly'
import './globals.css'
import { Inter } from 'next/font/google'
import navbar from './components/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mobi e-katalog',
  description: 'Mobi e-katalog telefona',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly> 
        </ClientOnly>
        {children}</body>
    </html>
  )
}
