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
