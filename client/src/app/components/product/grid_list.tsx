'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "@/src/app/components/navbar/logo"
import { User } from '@prisma/client'
import Container from "../Container"; 
interface grid_list {
    currentUser?: User | null
}

const grid_list : React.FC<grid_list> = ({
    currentUser
}) => {
 
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="
            py-5 border-b-[2px]">
                <Container>
                <div
                   >
                        </div>
                </Container>
           
            </div>
        </div>
    )
}
export default grid_list