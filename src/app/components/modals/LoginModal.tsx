'use client'

import { signIn } from "next-auth/react"
import modal from './modal'
import { useRouter } from "next/router"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import useRegisterModal from "../hoooooks/Useregistermodal"
import useLoginModal from "../hoooooks/useLoginModal"
import { useState } from "react"

const LoginModal = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const LoginModal = useLoginModal()
    const [isLoading, setIsLoading] = useState(false);
   const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    })
}

export default LoginModal