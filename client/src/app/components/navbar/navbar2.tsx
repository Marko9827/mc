
'use client'

'use client'

import { AiOutlineBars } from 'react-icons/ai' 
// import { useCallback, useState , useEffect} from 'react';  
import { signOut } from "next-auth/react"
import MenuItem from         '@/src/app/components/navbar/MenuItem'
import Avatar from           '@/src/app/components/Avatar';
import useLoginModal from    '@/src/app/components/hoooooks/useLoginModal';
import useRegisterModal from '@/src/app/components/hoooooks/Useregistermodal';
import useAdd_me_Modal  from '@/src/app/components/hoooooks/useAdd_me_Modal';
import { Navbar, Button, Link, Text } from "@nextui-org/react"; 
import { User } from '@prisma/client'
import * as React from "react";
import axios from "axios";
 
import { useEffect, useState, useCallback } from "react";
import Logo from './logo'
interface NavbarProps {
  currentUser?: User | null,
  children?: React.ReactNode
}

const Navbar3 : React.FC<NavbarProps> = ({
  currentUser,
  children
}) => {
 
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const add_me = useAdd_me_Modal()
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCategory, setIsOpenCategory] = useState(false)

  const toggleOpen = useCallback(() => {
      setIsOpen((value) => !value)
      setIsOpenCategory(false)
  }, [])
  const toggleOpenCategory = useCallback(() => {
      setIsOpenCategory((value) => !value)
      setIsOpen(false);
  }, [])
  const [data, setData] = useState([]);

  const categorytmp = (ct = "") => { 
      axios.get("http://localhost:3001/products_ct/"+String(ct))
      .then((response) => {
        const jsonData = response.data;
        setData(jsonData); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });  
    }
  
useEffect(() => {
  var url = "http://localhost:3001/products/";
  
  axios
    .get(url)
    .then((response) => {
      const jsonData = response.data;
      setData(jsonData);
      // setfilterDJenerator(jsonData);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);

  
    return ( 
        <Navbar isBordered variant="sticky">
          <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" />
          
         
            <Logo    color="inherit" hideIn="xs"></Logo>
          </Navbar.Brand>
          <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
             {currentUser ? (
                            <>
                            {currentUser.admin == 1 ? (<>  <Navbar.Link  
                    onClick={add_me.onOpen}
                    className="
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-4
                        px-4
                        rounded-full
                        hover:bg-neutral-200
                        transition
                        cursor-pointer                   
                    "
                >
                  Add new phone
                </Navbar.Link> </>) : (<></>)}
           </> ):(<>
            <Navbar.Link  
                    onClick={() => { }}
                    className="
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-4
                        px-4
                        rounded-full
                        hover:bg-neutral-200
                        transition
                        cursor-pointer                   
                    "
                >
                Phone catalog
                </Navbar.Link>

           </>) }
          </Navbar.Content>
          {!currentUser ? (
          <Navbar.Content>
            <Navbar.Link color="inherit" onClick={loginModal.onOpen}>
              Login
            </Navbar.Link>
            <Navbar.Item>
              <Button auto flat onClick={registerModal.onOpen}>
                Sign Up
              </Button>
            </Navbar.Item>
          </Navbar.Content>
          ):(
            <Navbar.Content>
              <Navbar.Item>
                <Button  onClick={() => signOut()}
                                label="Logout" 
                            >
                 Logout</Button>
              </Navbar.Item>
            </Navbar.Content>
          )}
          <Navbar.Collapse>
          {data.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Button
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                onAuxClick={categorytmp(item?.category.toLowerCase())}
              
              >
                {item?.category}
              </Button>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
        </Navbar> 
    )
  }

  export default Navbar3