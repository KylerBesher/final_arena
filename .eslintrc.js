module.exports = {
    extends: ['next/core-web-vitals', 'prettier'],
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-unused-vars': 'error',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'react/prop-types': 'off', // Since you're using TypeScript
        'react/react-in-jsx-scope': 'off', // Not needed in Next.js
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
