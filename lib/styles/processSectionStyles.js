export function processSectionStyles(style, siteSettings) {
    if (!style) return '';

    const classes = [];

    // Get default padding from site settings
    const defaultPadding = siteSettings?.section_style?.layout?.spacing
        ?.contentPadding || {
        type: 'all',
        size: 'medium',
    };

    // Process Layout
    if (style.layout) {
        const { layout } = style;

        // Width
        classes.push(
            layout.width === 'full' ? 'w-full' : 'max-w-5xl mx-auto' // contained width
        );

        // Use section padding if specified, otherwise use site default
        const padding = layout.padding || defaultPadding;
        const paddingSize =
            {
                none: '0',
                small: '4',
                medium: '8',
                large: '16',
            }[padding.size] || '8';

        switch (padding.type) {
            case 'all':
                classes.push(`p-${paddingSize}`);
                break;
            case 'horizontal':
                classes.push(`px-${paddingSize}`);
                break;
            case 'vertical':
                classes.push(`py-${paddingSize}`);
                break;
            case 'custom':
                if (padding.custom.top) classes.push(`pt-${paddingSize}`);
                if (padding.custom.right) classes.push(`pr-${paddingSize}`);
                if (padding.custom.bottom) classes.push(`pb-${paddingSize}`);
                if (padding.custom.left) classes.push(`pl-${paddingSize}`);
                break;
            case 'none':
                classes.push('p-0');
                break;
        }

        // Process margins
        if (layout.margin) {
            const marginSize =
                {
                    none: '0',
                    small: '4',
                    medium: '8',
                    large: '16',
                }[layout.margin.size] || '8';

            switch (layout.margin.type) {
                case 'top':
                    classes.push(`mt-${marginSize}`);
                    break;
                case 'bottom':
                    classes.push(`mb-${marginSize}`);
                    break;
                case 'both':
                    classes.push(`my-${marginSize}`);
                    break;
                // 'none' doesn't need any classes
            }
        }

        // Remove the vertical spacing - sections should touch by default
        // Only add vertical spacing if explicitly specified
        if (layout.verticalSpacing && layout.verticalSpacing !== 'none') {
            classes.push(
                layout.verticalSpacing === 'small'
                    ? 'my-4'
                    : layout.verticalSpacing === 'large'
                      ? 'my-16'
                      : 'my-8'
            );
        }

        // Flex properties
        classes.push(
            'flex',
            layout.flexDirection === 'column'
                ? 'flex-col'
                : layout.flexDirection === 'row-reverse'
                  ? 'flex-row-reverse'
                  : layout.flexDirection === 'column-reverse'
                    ? 'flex-col-reverse'
                    : 'flex-row',

            layout.justifyContent === 'center'
                ? 'justify-center'
                : layout.justifyContent === 'end'
                  ? 'justify-end'
                  : layout.justifyContent === 'between'
                    ? 'justify-between'
                    : layout.justifyContent === 'around'
                      ? 'justify-around'
                      : layout.justifyContent === 'evenly'
                        ? 'justify-evenly'
                        : 'justify-start',

            layout.alignItems === 'center'
                ? 'items-center'
                : layout.alignItems === 'end'
                  ? 'items-end'
                  : layout.alignItems === 'baseline'
                    ? 'items-baseline'
                    : 'items-stretch'
        );
    }

    // Process Appearance
    if (style.colors) {
        const { lightMode, darkMode } = style.colors;

        if (lightMode) {
            // Background color - add detailed logging
            if (lightMode.background) {
                const bgColor = lightMode.background.toUpperCase();
                const bgClass = `bg-[#${bgColor.replace('#', '')}]`;

                // Debug log each color attempt

                classes.push(bgClass);
                classes.push(
                    `dark:bg-[${darkMode?.background.toUpperCase() || lightMode.background.toUpperCase()}]`
                );
            }

            // Text color
            if (lightMode.text) {
                const textColor = lightMode.text.toUpperCase();
                classes.push(`text-[#${textColor.replace('#', '')}]`);
            }

            // Background image - handle URLs safel2y
            if (lightMode.backgroundImage) {
                classes.push(
                    'bg-cover bg-center bg-no-repeat',
                    // Use url() without the bg-[] syntax for dynamic images
                    `style="background-image: url('${lightMode.backgroundImage}')"`,
                    darkMode?.backgroundImage &&
                        `dark:style="background-image: url('${darkMode.backgroundImage}')"`
                );
            }

            // Background overlay
            if (lightMode.backgroundOverlay?.overlayColor) {
                classes.push('relative');
                // Add a pseudo-element for the overlay in the component
            }

            if (darkMode) {
                if (darkMode.background) {
                    const darkBgColor = darkMode.background.toUpperCase();
                    classes.push(`dark:bg-[#${darkBgColor.replace('#', '')}]`);
                }
                if (darkMode.text) {
                    const darkTextColor = darkMode.text.toUpperCase();
                    classes.push(
                        `dark:text-[#${darkTextColor.replace('#', '')}]`
                    );
                }
            }
        }
    }

    // Process Typography
    if (style.typography) {
        const { typography } = style;

        // Font size
        classes.push(
            typography.fontSize === 'small'
                ? 'text-sm'
                : typography.fontSize === 'large'
                  ? 'text-xl'
                  : 'text-base'
        );

        // Font weight
        if (typography.fontWeight) {
            classes.push(`font-[${typography.fontWeight}]`);
        }

        // Line height
        classes.push(
            typography.lineHeight === 'tight'
                ? 'leading-tight'
                : typography.lineHeight === 'relaxed'
                  ? 'leading-relaxed'
                  : 'leading-normal'
        );

        // Text alignment
        classes.push(
            typography.textAlign === 'center'
                ? 'text-center'
                : typography.textAlign === 'right'
                  ? 'text-right'
                  : typography.textAlign === 'justify'
                    ? 'text-justify'
                    : 'text-left'
        );

        // Custom font color (if different from appearance)
        if (typography.fontColor) {
            classes.push(`text-[${typography.fontColor}]`);
        }
    }

    return classes.filter(Boolean).join(' ');
}

// Also export as default
export default processSectionStyles;
