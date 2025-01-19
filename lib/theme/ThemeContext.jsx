'use client';

import React, { createContext, useContext, useEffect } from 'react';
import siteConfig from '../../content/settings/site.json';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const { theme, features } = siteConfig;
    const isDarkMode = features.darkMode;

    useEffect(() => {
        // Apply theme colors to CSS variables
        const root = document.documentElement;
        const colors = isDarkMode ? theme.darkMode : theme.colors;

        console.log('Applying theme colors:', colors);

        Object.entries(colors).forEach(([key, value]) => {
            const cssVar = `--color-${key}`;
            root.style.setProperty(cssVar, value);
            console.log(`Setting ${cssVar} to ${value}`);
        });
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