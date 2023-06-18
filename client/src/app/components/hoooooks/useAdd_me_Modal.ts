import { create } from 'zustand'

interface RegisterModalStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const useAdd_me_Modal = create<RegisterModalStore>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }) 
}))

export default useAdd_me_Modal