'use client'

import { signIn } from "next-auth/react"
import Modal from '@/app/components/modals/modal'

import { useRouter } from "next/navigation"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import useRegisterModal from "../hoooooks/Useregistermodal" 
import useLoginModal from "../hoooooks/useLoginModal"
import { useState } from "react"

const LoginModal = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal()
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
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        signIn('credentials', {
            ...data,
            redirect: false
        })
        .then((callback) => {
            setIsLoading(false)

            if(callback?.ok){
               
            }
            if(callback?.error){ 
            }
        })
    }

    const bodyContent = (
        <div className="flex flex-col gap-5">
          

            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            
            <Inputt
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
         
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-3 mt-2">
           
           
            <div
                className="
                text-blue-600
                text-center
                mt-3
                font-light
                "
            >
                <div className="justify-center flex flex-row items-center gap-3">
                    <div>
                       Do you existing user?
                    </div>
                    <div 
                        onClick={registerModal.onClose}
                        className="text-neutral-700 cursor pointer hover:underline">
                        Login 
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Prijavi se"
            actionLabel="Nastavi proces"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal 