import type { User } from "../models";

export type Store = {
  user: null | User;
  dispatch: (key: keyof Store, value: any) => void;
};
