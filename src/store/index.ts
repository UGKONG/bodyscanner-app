import { create } from "zustand";
import { Store } from "./index.type";

// Create Store
const store = create<Store>((set) => ({
  user: null,
  dispatch: (type: keyof Store, payload: any) =>
    set((state: Store): Store => ({ ...state, [type]: payload })),
}));

// Store Export
export default store;
