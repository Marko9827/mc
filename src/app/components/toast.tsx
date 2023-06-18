'use client'

import { Toaster } from 'react-hot-toast'

interface toastOptions {
    messsage?:""
}

const ToasterProvider = () => {
    return (
        <Toaster />
    )
}

export default ToasterProvider