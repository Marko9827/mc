'use client'

import useAdd_me_Modal from '@/src/app/components/hoooooks/useAdd_me_Modal'
import { useCallback, useState } from "react" 
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios';
import Button from '@/src/app/components/Butoon'
import Heading from '@/src/app/components/Heading' //'../../Heading'; 
import { toast } from 'react-hot-toast'
import Input from '@/src/app/components/input/input' //'../input/input';
import Modal from '@/src/app/components/modals/modal'
const Add_me = () => {

    const add_me_Modal = useAdd_me_Modal(); 
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
            add_me_Modal.onClose()
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
        isOpen={add_me_Modal.isOpen}
        title="Register"
        actionLabel="Regsiter"
        onClose={add_me_Modal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent} ></Modal>
    )

}

export default useAdd_me_Modal