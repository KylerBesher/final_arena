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
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        accent: 'bg-accent',
        
        // Utility colors
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
        error: 'bg-red-500',
        info: 'bg-blue-500'
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