import React, {
    createContext,
    useContext,
    useState,
    ReactNode
} from 'react';

type ThemeType = 'light' | 'dark';

interface ThemeContextData {
    theme: ThemeType;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData | undefined>(undefined);
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>('dark');
    const toggleTheme = () => { setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')); };

    return (
        <ThemeContext.Provider value = {{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if(!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }

    return context;
};
