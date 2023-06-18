'use client'

import { useEffect, useState } from "react"
import { User } from "@prisma/client"

 interface ClientOnlyProps {
    children: React.ReactNode,
    
}
interface UserMenuProps {
    currentUser?: User | null
}
const isAdmin: React.FC<[UserMenuProps,ClientOnlyProps]> = ([
    currentUser,
    children
]) => {

    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])
    
    
    return (
        <>
            {children}
        </>
    )
}

export default isAdmin