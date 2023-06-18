import useRegisterModal from '@/app/components/hoooooks/Useregistermodal'
import { useCallback, useState } from "react"

const RegisterModal = () => {

    const registerModal = useRegisterModal();

    const [isLoading, setIsLoading] = useState(false);
    
}

export default RegisterModal