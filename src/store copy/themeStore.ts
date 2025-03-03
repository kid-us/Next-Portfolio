import { create } from "zustand";

interface State {
  theme: string;
  setTheme: (theme: string) => void;
}

const useThemeStore = create<State>((set) => ({
  theme: localStorage.getItem("theme") || "light",
  setTheme: (theme: string) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));

export default useThemeStore;
