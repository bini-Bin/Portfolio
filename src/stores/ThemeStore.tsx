import { create } from 'zustand';

type ThemeStore = {
  theme: string;
  toggleTheme: () => void;
};

const useThemeStore = create<ThemeStore>()((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state: { theme: string }) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
}));

export default useThemeStore;
