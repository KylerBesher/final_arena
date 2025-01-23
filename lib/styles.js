export const sectionStyles = {
    backgrounds: {
        // Base colors
        white: 'bg-white',
        light: 'bg-gray-50',
        gray: 'bg-gray-100',
        dark: 'bg-gray-900',
        black: 'bg-black',
        transparent: 'bg-transparent',
        
        // Brand colors
        primary: 'bg-primary/10',
        'primary-solid': 'bg-primary',
        secondary: 'bg-secondary/10',
        'secondary-solid': 'bg-secondary',
        accent: 'bg-accent/10',
        'accent-solid': 'bg-accent',
        
        // Utility colors
        success: 'bg-green-100',
        warning: 'bg-yellow-100',
        error: 'bg-red-100',
        info: 'bg-blue-100',
        
        // Gradients
        'gradient-primary': 'bg-gradient-to-br from-primary-100 via-primary-50 to-white',
        'gradient-dark': 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
        'gradient-light': 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    },
    paddings: {
        none: '',
        small: 'py-6',
        default: 'py-12',
        large: 'py-24'
    },
    widths: {
        full: '',
        default: 'max-w-5xl',
        narrow: 'max-w-3xl'
    }
};

export function getBackgroundStyle(background, customBackground) {
    // If it's a custom color and we have a custom background value
    if (background === 'custom' && customBackground?.startsWith('#')) {
        return `bg-[${customBackground}]`;
    }
    
    // If it's a predefined color, return from our map
    if (sectionStyles.backgrounds[background]) {
        return sectionStyles.backgrounds[background];
    }
    
    // Default to transparent if invalid
    return sectionStyles.backgrounds.transparent;
} 