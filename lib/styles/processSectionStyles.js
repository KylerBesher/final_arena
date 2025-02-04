export function processSectionStyles(styles = []) {
  let classes = [];

  styles.forEach(style => {
    // Process Layout
    if (style.layout) {
      const layout = style.layout;
      
      // Width
      classes.push(
        layout.width === 'full' ? 'w-full' :
        layout.width === 'narrow' ? 'max-w-3xl mx-auto' :
        'max-w-5xl mx-auto'
      );

      // Padding
      classes.push(
        layout.padding === 'none' ? 'p-0' :
        layout.padding === 'small' ? 'p-4' :
        layout.padding === 'large' ? 'p-16' :
        'p-8'
      );

      // Vertical Spacing
      classes.push(
        layout.verticalSpacing === 'none' ? 'my-0' :
        layout.verticalSpacing === 'small' ? 'my-4' :
        layout.verticalSpacing === 'large' ? 'my-16' :
        'my-8'
      );

      // Flex properties
      classes.push(
        'flex',
        layout.flexDirection === 'column' ? 'flex-col' :
        layout.flexDirection === 'row-reverse' ? 'flex-row-reverse' :
        layout.flexDirection === 'column-reverse' ? 'flex-col-reverse' :
        'flex-row',
        
        layout.justifyContent === 'center' ? 'justify-center' :
        layout.justifyContent === 'end' ? 'justify-end' :
        layout.justifyContent === 'between' ? 'justify-between' :
        layout.justifyContent === 'around' ? 'justify-around' :
        layout.justifyContent === 'evenly' ? 'justify-evenly' :
        'justify-start',
        
        layout.alignItems === 'center' ? 'items-center' :
        layout.alignItems === 'end' ? 'items-end' :
        layout.alignItems === 'baseline' ? 'items-baseline' :
        'items-stretch'
      );
    }

    // Process Appearance
    if (style.appearance) {
      const { lightMode, darkMode } = style.appearance;
      
      if (lightMode) {
        // Background color
        if (lightMode.background) {
          classes.push(`bg-[${lightMode.background}] dark:bg-[${darkMode?.background || lightMode.background}]`);
        }

        // Text color
        if (lightMode.text) {
          classes.push(`text-[${lightMode.text}] dark:text-[${darkMode?.text || lightMode.text}]`);
        }

        // Background image
        if (lightMode.backgroundImage) {
          classes.push(
            'bg-cover bg-center bg-no-repeat',
            `bg-[url('${lightMode.backgroundImage}')] dark:bg-[url('${darkMode?.backgroundImage || lightMode.backgroundImage}')]`
          );
        }

        // Background overlay
        if (lightMode.backgroundOverlay?.overlayColor) {
          classes.push('relative');
          // Add a pseudo-element for the overlay in the component
        }
      }
    }

    // Process Typography
    if (style.typography) {
      const typography = style.typography;
      
      // Font size
      classes.push(
        typography.fontSize === 'small' ? 'text-sm' :
        typography.fontSize === 'large' ? 'text-xl' :
        'text-base'
      );

      // Font weight
      if (typography.fontWeight) {
        classes.push(`font-[${typography.fontWeight}]`);
      }

      // Line height
      classes.push(
        typography.lineHeight === 'tight' ? 'leading-tight' :
        typography.lineHeight === 'relaxed' ? 'leading-relaxed' :
        'leading-normal'
      );

      // Text alignment
      classes.push(
        typography.textAlign === 'center' ? 'text-center' :
        typography.textAlign === 'right' ? 'text-right' :
        typography.textAlign === 'justify' ? 'text-justify' :
        'text-left'
      );

      // Custom font color (if different from appearance)
      if (typography.fontColor) {
        classes.push(`text-[${typography.fontColor}]`);
      }
    }
  });

  return classes.filter(Boolean).join(' ');
} 