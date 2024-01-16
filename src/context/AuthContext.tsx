import { useState, createContext, ReactNode, useContext } from "react";
import UserLoggedData from "../model/forms/UserLoggedData";

interface AuthContextProps {
    user: UserLoggedData | null;
    login: (userData: UserLoggedData) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserLoggedData | null>(null);
    const login = (userData: any) => {
        setUser(userData);
    }
    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return ctx;
}

export default { AuthProvider, useAuth };