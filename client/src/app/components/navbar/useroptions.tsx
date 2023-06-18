'use client'

import { AiOutlineBars } from 'react-icons/ai' 
import { useCallback, useState } from 'react'; 
import { User } from "@prisma/client"
import { signOut } from "next-auth/react"
import MenuItem from         '@/src/app/components/navbar/MenuItem'
import Avatar from           '@/src/app/components/Avatar';
import useLoginModal from    '@/src/app/components/hoooooks/useLoginModal';
import useRegisterModal from '@/src/app/components/hoooooks/Useregistermodal';
import useAdd_me_Modal  from '@/src/app/components/hoooooks/useAdd_me_Modal';
import isAdmin from '@/src/app/components/isAdmin'

interface UserMenuProps {
    currentUser?: User | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => { 
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const add_me = useAdd_me_Modal()
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-2">
                <div
                    onClick={() => { }}
                    className="
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-4
                        px-4
                        rounded-full
                        hover:bg-neutral-200
                        transition
                        cursor-pointer                   
                    "
                >
                  Add new phone
                </div>
                <div
                    onClick={toggleOpen}
                    className="
                        p-4
                        md:py-1
                        md:px-2
                        border-[1px]
                        border-neutral-200
                        flex
                        flex-row
                        items-center
                        gap-2
                        cursor-pointer
                        hover:shadow-md
                        transition
                    "
                >
                    <AiOutlineBars />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="
                        absolute
                        rounded-xl
                        shadow-md
                        w-[40vw]
                        md:w-3/4
                        bg-white
                        overflow-hidden
                        right-0
                        top-11
                        text-sm
                    "
                >
                    <div className=" flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                            {currentUser.admin == 1 ? (<><MenuItem
                                onClick={add_me.isOpen}
                                label="Admin" 
                            /><hr /></>):(<></>)}
                            <MenuItem
                                onClick={() => {}}
                                label="Your phones" 
                            />
                             <MenuItem
                                onClick={() => {}}
                                label="Categoryes" 
                            />
                            
                            <hr />
                            <MenuItem
                                onClick={() => signOut()}
                                label="Logout" 
                            />
                        </>
                        ) : (
                            <>
                                   <MenuItem
                               onClick={loginModal.onOpen}
                                    label="Login" 
                                />
                                <MenuItem
                                    onClick={registerModal.onOpen}
                                    label="Register" 
                                />
                            </>
                        )}
                    </div>
                </div>
            )}

        </div>
    )
}

export default UserMenu;