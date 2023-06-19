import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react'; 

import ClientOnly from "./components/clientOnly";
import "./globals.css"; 
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/navbar";
import getCurrentUser from "./actions/getCurrentUser";
import LoginModal from     "@/src/app/components/modals/LoginModal";
import RegisterModal from  "@/src/app/components/modals/Registermodal";
import ToasterProvider from "./components/toast";
import Add_me from "./components/modals/mobile_modals/add_me";
import GridList from './components/product/gridlist';
 
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Mobi e-katalog",
  description: "Mobi e-katalog telefona",
};

 

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
  

        <ClientOnly>
          <ToasterProvider />
          {!currentUser ? (<>
          <LoginModal   />
          <RegisterModal />
          </>
  ) : (<>
    {currentUser.admin == 1 ? (<><Add_me currentUser={currentUser}></Add_me></>):(<></>)}
  </>)}
          <Navbar currentUser={currentUser} />
      
         
          <GridList currentUser={currentUser}  /> 

          </ClientOnly> 
 
        {children}
      </body>
    </html>
  );
}
