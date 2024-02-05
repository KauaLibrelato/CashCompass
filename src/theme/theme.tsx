import React, {ReactNode, createContext, useEffect, useState} from 'react';
import {ThemeProvider as ThemeProviderStyled} from 'styled-components';
import {storage} from '../utils';
import {darkTheme} from './darkTheme';
import {lightTheme} from './lightTheme';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const themes = {
  [ThemeType.light]: lightTheme,
  [ThemeType.dark]: darkTheme,
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: ThemeType.light,
  toggleTheme: () => {},
});

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(ThemeType.light);

  useEffect(() => {
    loadTheme();
  }, []);

  async function loadTheme() {
    const savedTheme = await storage.getString('theme');
    if (savedTheme) {
      setTheme(savedTheme === 'dark' ? ThemeType.dark : ThemeType.light);
    }
  }

  function toggleTheme() {
    let newTheme;
    if (theme === ThemeType.light) {
      newTheme = ThemeType.dark;
    } else {
      newTheme = ThemeType.light;
    }
    setTheme(newTheme);
    storage.set('theme', newTheme === ThemeType.dark ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
