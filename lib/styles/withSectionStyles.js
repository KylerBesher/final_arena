import React from 'react';

import { processSectionStyles } from './processSectionStyles';

export function withSectionStyles(WrappedComponent) {
    return function StyledSection({ style, classification, ...props }) {
        // Process styles from all levels
        const classes = processSectionStyles(style);

        // Combine with any classification classes
        const combinedClasses = [classes, ...(classification?.classes || [])]
            .filter(Boolean)
            .join(' ');

        return (
            <section id={classification?.id} className={combinedClasses}>
                <WrappedComponent {...props} />
            </section>
        );
    };
}
