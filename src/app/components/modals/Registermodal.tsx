'use client'

import useRegisterModal from '@/app/components/hoooooks/Useregistermodal'
import { useCallback, useState } from "react" 
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios';
import Button from '@/app/components/Butoon'
import Heading from '../Heading'; 
import { toast } from 'react-hot-toast'
import Input from '../input/input';
import Modal from './modal';
const RegisterModal = () => {

    const registerModal = useRegisterModal(); 
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        axios.post('api/register', data)
        .then(() => {
            registerModal.onClose()
        })
        .catch((error) => {
            toast.error('Error, fill all inputs or try again latter.')
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    const bodyContent = (
        <div className="flex flex-col gap-5">
              <Heading
                title="Mobi E-Katalog"
                subtitle="Chose your phone  "
            />

            <Input
                id="email"
                label="Email"
                placeholder="Email"

                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                label="Name"
                placeholder="Name"

                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                type="password"
                placeholder="Password"

                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    return (
        <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Register"
        actionLabel="Regsiter"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent} ></Modal>
    )

}

export default RegisterModal