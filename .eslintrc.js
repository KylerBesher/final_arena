module.exports = {
    extends: ['next/core-web-vitals', 'eslint:recommended'],
    env: {
        es6: true,
    },
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'no-unused-vars': ['warn'],
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
};
