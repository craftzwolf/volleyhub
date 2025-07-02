import { useThemeContext } from '../contexts/ThemeContext';

export const useTheme = () => {
    const { theme, toggleTheme } = useThemeContext();
    const isDark = theme === 'dark';


    return {
        theme, isDark, toggleTheme, colors: {
            background: isDark ? '#121212' : '#FFFFFF',
            text: isDark ? '#FFFFFF' : "#121212",
            primary: '#00c896',
        },
    };
};

