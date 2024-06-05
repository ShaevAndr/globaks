import { User } from "@/shared/lib/serverApi/types";
import { create } from "zustand";

type UserStore = {
    users: User[];
    currentUser: User | null;
    isLoading: boolean;
    setCurrentUser: (user: User | null) => void;
    setUsers: (users: User[]) => void;
    setIsLoading: (isLoading: boolean) => void;
};

export const useUserStore = create<UserStore>((set) => ({
    users: [],
    isLoading: false,
    currentUser: null,
    setCurrentUser: (user) => set({ currentUser: user }),
    setUsers: (users) => set({ users }),
    setIsLoading: (isLoading) => set({ isLoading }),
}))