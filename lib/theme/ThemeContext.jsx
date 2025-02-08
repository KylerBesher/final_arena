'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDarkMode } from './DarkModeContext';
import siteConfig from '../../content/settings/site.json';

const ThemeContext = createContext();

function addLoadingAnimation() {
  // Only run on client side
  if (typeof window === 'undefined') return;

  const existingStyle = document.getElementById('theme-loading-animation');
  if (!existingStyle) {
    const styleTag = document.createElement('style');
    styleTag.id = 'theme-loading-animation';
    styleTag.textContent = `
      @keyframes loading {
        0%, 100% { height: 10px; }
        50% { height: 40px; }
      }
    `;
    document.head.appendChild(styleTag);
  }
}

export function ThemeProvider({ children }) {
    const { isDarkMode } = useDarkMode();
    const { style } = siteConfig;
    const [isThemeLoaded, setIsThemeLoaded] = useState(false);
    const [isAdminRoute, setIsAdminRoute] = useState(false);


    useEffect(() => {
        // Add loading animation only on client side
        addLoadingAnimation();
        
        const root = document.documentElement;
        const colors = isDarkMode ? style.colors.darkMode : style.colors.lightMode;

        // Apply dark mode class
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // Set CSS variables for theme colors
        Object.entries(colors).forEach(([key, value]) => {
            const cssVar = `--color-${key}`;
            root.style.setProperty(cssVar, value);
        });

        // setTimeout(() => {
        setIsThemeLoaded(true);
        // }, 2000);
    }, [isDarkMode, style]);

    if (!isThemeLoaded) {
        return (
            <div style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: isDarkMode ? '#1f2937' : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(4px)'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            gap: '8px',
                            height: '40px'
                        }}>
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    style={{
                                        backgroundColor: isDarkMode ? '#22c55e' : 'green',
                                        width: '20px',
                                        animation: 'loading 1s ease-in-out infinite',
                                        animationDelay: `${i * 0.1}s`,
                                        borderRadius: '4px',
                                        alignSelf: 'flex-end'
                                    }}
                                />
                            ))}
                        </div>
                        <span style={{
                            fontSize: '14px',
                            fontWeight: 500,
                            color: isDarkMode ? '#d1d5db' : '#6B7280'
                        }}>
                            Loading...
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <ThemeContext.Provider value={{ style, isDarkMode }}>
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