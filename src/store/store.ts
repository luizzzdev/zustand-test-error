import { create } from 'zustand';

export interface CountStore {
  count: number;
  add: () => void;
}

export const useCountStore = create<CountStore>()((set) => ({
  count: 0,
  add: () => {
    set((prev) => {
      return {
        ...prev,
        count: prev.count + 1,
      };
    });
  },
}));
