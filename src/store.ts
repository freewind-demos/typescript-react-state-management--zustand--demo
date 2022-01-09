import create from 'zustand'

export type Store = {
  message: string;
  updateStore: (newState: Partial<Store> | ((store: Store) => Partial<Store>)) => void;
}

export const useStore = create<Store>(set => ({
  message: 'aaa',
  updateStore: (newStateOrFn: Partial<Store> | ((store: Store) => Partial<Store>)) =>
    set((store) => {
      const newState = typeof newStateOrFn === 'function' ? newStateOrFn(store) : newStateOrFn;
      return ({...store, ...newState})
    })
}))
