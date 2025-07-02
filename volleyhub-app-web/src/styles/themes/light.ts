// src/theme/lightTheme.ts
import { ThemeType } from '@/types/types';

const lightTheme: ThemeType = {
  name: 'light',

  colors: {
    primary: '#fddb3a',      // cor principal (ex: botões, destaques)
    secondary: '#001788',    // cor secundária (ex: textos importantes)

    background: '#FFFFFF',   // fundo principal
    surface: '#F5F5F5',      // fundo de cartões, listas, etc.

    text: '#1A1A1A',         // cor padrão de texto
    textSecondary: '#4F4F4F',

    border: '#E0E0E0',
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FFC107',
  },
};

export default lightTheme;
