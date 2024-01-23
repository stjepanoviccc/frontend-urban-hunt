import { useState, useEffect, createContext, ReactNode, useContext } from "react";
import UserLoggedData from "../model/forms/UserLoggedData";

interface AuthContextProps {
    user: UserLoggedData | null;
    login: (userData: UserLoggedData) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserLoggedData | null>(null);

    const login = (userTokenState: any) => {
        setUser(userTokenState);
        localStorage.setItem('accessToken', userTokenState.accessToken);
        localStorage.setItem('expiresIn', userTokenState.expiresIn);
        localStorage.setItem('role', userTokenState.role);
        window.location.href = "/";
    }
    const logout = () => {
        setUser(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("expiresIn");
        localStorage.removeItem("role");
        window.location.href = "/";
    }

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        const expiresIn = localStorage.getItem("expiresIn");
        const role = localStorage.getItem("role");

        if (accessToken && expiresIn && role) {
            setUser({ accessToken, expiresIn, role });
        }
    }, []);

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