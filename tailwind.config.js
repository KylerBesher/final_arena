/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
                background: 'var(--color-background)',
                text: 'var(--color-text)',
            },
            typography: (theme) => ({
                DEFAULT: {
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
