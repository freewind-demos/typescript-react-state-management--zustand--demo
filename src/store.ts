import create from 'zustand'

export type Store = {
  message: string;
  update: (newState: Partial<Store>) => void;
}

export const useStore = create<Store>(set => ({
  message: 'aaa',
  update: (newState: Partial<Store>) => set((store) => ({...store, ...newState}))
}))
