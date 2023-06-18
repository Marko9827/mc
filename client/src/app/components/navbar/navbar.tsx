'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "./logo";
import { User } from '@prisma/client'
import Container from "../Container";
import UserMenu from "./useroptions";
interface NavbarProps {
    currentUser?: User | null
}

const Navbar : React.FC<NavbarProps> = ({
    currentUser
}) => {
 
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="
            py-5 border-b-[2px]">
                <Container>
                <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-between
                            gap-2
                            md:gap-0
                        "
                    >
                        <Logo /> 
                        <UserMenu currentUser={currentUser}></UserMenu>
                        </div>
                </Container>
           
            </div>
        </div>
    )
}
export default Navbar