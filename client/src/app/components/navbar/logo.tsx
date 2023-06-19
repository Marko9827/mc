'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            alt="logo"
            className="hidden md:block cursor-pointer"
            height="25"
            
            width="25"
            src="/img/logo.png"
        />
    )
}

export default Logo;