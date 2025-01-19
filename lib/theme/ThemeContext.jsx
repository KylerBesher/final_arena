'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { useDarkMode } from './DarkModeContext';
import siteConfig from '../../content/settings/site.json';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const { isDarkMode } = useDarkMode();
    const { theme } = siteConfig;

    useEffect(() => {
        // Apply theme colors to CSS variables
        const root = document.documentElement;
        const colors = isDarkMode ? theme.darkMode : theme.colors;

        // Apply dark mode class
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // Apply colors
        Object.entries(colors).forEach(([key, value]) => {
            const cssVar = `--color-${key}`;
            root.style.setProperty(cssVar, value);
        });

        console.log('Theme updated:', { isDarkMode, colors });
    }, [isDarkMode, theme]);

    return (
        <ThemeContext.Provider value={{ theme, isDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
} 