'use client'

import { User } from "@prisma/client"
import { useEffect, useState } from "react"

interface ClientOnlyProps {
    children: React.ReactNode,
    
}
interface UserMenuProps {
    currentUser?: User | null
}
const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {

    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if(!hasMounted) {
        return null
    }

    return (
        <>
            {children}
        </>
    )
}

export default ClientOnly