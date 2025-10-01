import { create } from 'zustand';

interface AppState {
  // Example state
  selectedNumber: number | null;
  setSelectedNumber: (num: number | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedNumber: null,
  setSelectedNumber: (num) => set({ selectedNumber: num }),
}));
