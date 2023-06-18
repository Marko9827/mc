import { create } from 'zustand'

interface useAdd_me_ModalStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const useAdd_me_Modal = create<useAdd_me_ModalStore>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }) 
}))

export default useAdd_me_Modal