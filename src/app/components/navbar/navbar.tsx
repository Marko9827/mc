'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "./logo";
import { User } from '@prisma/client'
interface NavbarProps {
    currentUser?: User | null
}

const Navbar : React.FC<NavbarProps> = ({
    currentUser
}) => {
 
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            aer
            aerearaerearea
        </div>
    )
}
export default Navbar