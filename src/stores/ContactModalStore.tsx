import { create } from 'zustand';

type ContactModalStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useContactModalStore = create<ContactModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useContactModalStore;
