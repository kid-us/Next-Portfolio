import { create } from "zustand";

interface State {
  theme: string;
  setTheme: (theme: string) => void;
}

const useThemeStore = create<State>((set) => ({
  theme: "light",
  setTheme: (theme: string) => set({ theme: theme }),
}));
