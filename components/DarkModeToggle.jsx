'use client';

import React from 'react';
import { useDarkMode } from '../lib/theme/DarkModeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDarkMode ? (
                <SunIcon className="w-5 h-5 text-yellow-500" />
            ) : (
                <MoonIcon className="w-5 h-5 text-gray-500" />
            )}
        </button>
    );
} 