/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2563eb', // Blue 600
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
                secondary: {
                    DEFAULT: '#7c3aed', // Violet 600
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                },
                accent: {
                    DEFAULT: '#db2777', // Pink 600
                    50: '#fdf2f8',
                    100: '#fce7f3',
                    200: '#fbcfe8',
                    300: '#f9a8d4',
                    400: '#f472b6',
                    500: '#ec4899',
                    600: '#db2777',
                    700: '#be185d',
                    800: '#9d174d',
                    900: '#831843',
                },
                background: 'var(--color-background)',
                text: 'var(--color-text)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.text'),
                        '--tw-prose-body': theme('colors.text'),
                        '--tw-prose-headings': theme('colors.text'),
                        '--tw-prose-lead': theme('colors.text'),
                        '--tw-prose-links': theme('colors.primary'),
                        '--tw-prose-bold': theme('colors.text'),
                        '--tw-prose-counters': theme('colors.text'),
                        '--tw-prose-bullets': theme('colors.text'),
                        '--tw-prose-hr': theme('colors.text'),
                        '--tw-prose-quotes': theme('colors.text'),
                        '--tw-prose-quote-borders': theme('colors.primary'),
                        '--tw-prose-captions': theme('colors.text'),
                        '--tw-prose-code': theme('colors.text'),
                        '--tw-prose-pre-code': theme('colors.text'),
                        '--tw-prose-pre-bg': theme('colors.background'),
                        '--tw-prose-th-borders': theme('colors.text'),
                        '--tw-prose-td-borders': theme('colors.text'),
                        a: {
                            color: theme('colors.primary'),
                            '&:hover': {
                                color: theme('colors.secondary'),
                            },
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme('colors.text'),
                        a: {
                            color: theme('colors.primary'),
                            '&:hover': {
                                color: theme('colors.secondary'),
                            },
                        },
                        h1: {
                            color: theme('colors.text'),
                        },
                        h2: {
                            color: theme('colors.text'),
                        },
                        h3: {
                            color: theme('colors.text'),
                        },
                        h4: {
                            color: theme('colors.text'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('./lib/theme/tailwind-theme'),
    ],
};
