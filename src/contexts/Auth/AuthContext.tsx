import { createContext } from "react";
import { User } from "../../types/user";

export interface AuthContextType {
    user: User | null;
}


export const AuthContext = createContext()