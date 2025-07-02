export type ThemeType = {
  name: 'light' | 'dark';
  colors: {
    primary: string;
    secondary: string;

    background: string;
    surface: string;

    text: string;
    textSecondary: string;

    border: string;
    success: string;
    error: string;
    warning: string;
  };
};

// src/theme/types.ts