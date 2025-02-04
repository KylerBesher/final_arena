import React from 'react';
import { useTheme } from '../theme/ThemeContext';
// import { sectionStyles } from './styles';

// Helper to merge style arrays with more specific styles taking precedence
function mergeStyles(siteStyles = [], pageStyles = [], componentStyles = []) {
    // Combine all styles, with component styles overriding page styles, 
    // and page styles overriding site styles
    const allStyles = [...siteStyles, ...pageStyles, ...componentStyles];

    // Group by style type to handle overrides
    const merged = allStyles.reduce((acc, style) => {
        Object.entries(style).forEach(([key, value]) => {
            acc[key] = { ...acc[key], ...value };
        });
        return acc;
    }, {});

    return merged;
}

// Higher-order component to wrap section components
export function withSectionStyles(WrappedComponent) {
    return function StyledSection({ style: componentStyles = [], ...props }) {
        const { theme } = useTheme();
        const siteStyles = theme?.styles || [];
        const pageStyles = props.pageStyles || [];

        // Merge styles in order of specificity
        const mergedStyles = mergeStyles(siteStyles, pageStyles, componentStyles);

        // Convert style object to Tailwind classes
        const classes = Object.entries(mergedStyles).map(([key, value]) => {
            switch(key) {
                case 'backgrounds':
                    return sectionStyles.backgrounds[value] || '';
                case 'paddings':
                    return sectionStyles.paddings[value] || '';
                case 'widths':
                    return sectionStyles.widths[value] || '';
                // Add other style categories as needed
                default:
                    return '';
            }
        }).filter(Boolean).join(' ');

        // Wrap the component with a section that has the merged styles
        return (
            <section className={classes}>
                <WrappedComponent {...props} />
            </section>
        );
    };
} 