const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addBase }) {
    addBase({
        ':root': {
            '--color-primary': 'initial',
            '--color-secondary': 'initial',
            '--color-accent': 'initial',
            '--color-background': 'initial',
            '--color-text': 'initial',
        },
    });
}); 
