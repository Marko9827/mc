import useRegisterModal from '@/app/components/hoooooks/Useregistermodal'
import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'


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
}

export default RegisterModal