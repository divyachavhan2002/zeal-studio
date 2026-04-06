import { create } from "zustand";

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (dark: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: false,
  toggleTheme: () =>
    set((state) => {
      const newDark = !state.isDark;
      if (typeof window !== "undefined") {
        document.documentElement.classList.toggle("dark", newDark);
        localStorage.setItem("theme", newDark ? "dark" : "light");
      }
      return { isDark: newDark };
    }),
  setTheme: (dark: boolean) => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", dark);
      localStorage.setItem("theme", dark ? "dark" : "light");
    }
    set({ isDark: dark });
  },
}));

interface ModalState {
  isOpen: boolean;
  content: React.ReactNode | null;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  openModal: (content) => set({ isOpen: true, content }),
  closeModal: () => set({ isOpen: false, content: null }),
}));

interface AdminState {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  isAuthenticated: false,
  token: null,
  login: (token) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("admin_token", token);
    }
    set({ isAuthenticated: true, token });
  },
  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("admin_token");
    }
    set({ isAuthenticated: false, token: null });
  },
}));
