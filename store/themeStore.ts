// import { create } from "zustand";

// interface State {
//   theme: string;
//   setTheme: (theme: string) => void;
// }

// const useThemeStore = create<State>((set) => ({
//   theme: localStorage.getItem("theme") || "light",
//   setTheme: (theme: string) => {
//     localStorage.setItem("theme", theme);
//     set({ theme });
//   },
// }));

// export default useThemeStore;

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  theme: string;
  setTheme: (theme: string) => void;
}

const useThemeStore = create<State>()(
  persist(
    (set) => ({
      theme: "light", // Default theme
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme-storage", // Key for localStorage
    }
  )
);

export default useThemeStore;
