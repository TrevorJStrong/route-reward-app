import { create } from 'zustand';

// Zustand store state
export const useStore = create((set) => ({
    isAuthenticated: true,
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
}));