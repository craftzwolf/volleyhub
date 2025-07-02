import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode
} from 'react';

import { User } from '../types/User';

interface AuthContextData {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const signIn = async (email: string, password: string) => {
        if(email && password) {
            const fakeUser: User = {
                id: '1',
                name: 'treinador exemplo',
                email,
                role: 'coach'
            };

            setUser(fakeUser);
        }
    };

    const signOut = () => { setUser(null); };

    return (
        <AuthContext.Provider value = {{ user, signIn, signOut }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }

    return context;
};
