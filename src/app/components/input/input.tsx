'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { BiEuro } from "react-icons/bi"

interface InputProps {
    id: string
    label: string
    type?: string
    disabled?: boolean
    formatPrice?: boolean
    required?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "tekst",
    disabled,
    formatPrice,
    register,
    required,
    errors
}) => {
    return(
        <div className="w-full relative">
            {formatPrice && (
                <BiEuro 
                    size={20}
                    className="
                        text-neutral-900
                        absolute
                        top-7
                        left-3
                    "
                />
            )}
            
        </div>
    )
}

export default Input