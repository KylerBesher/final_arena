'use client';

import { processSectionStyles } from '../../lib/styles/processSectionStyles';
import debug from '../../lib/utils/debug';

import { Hero } from './hero';
import RichText from './rich-text';

const components = {
    richText: RichText,
};

export function SectionComponent({ section, pageStyle, siteStyle }) {
    debug.group('Section Styles Debug');

    const Component = (() => {
        switch (section.type) {
            case 'richText':
                return RichText;
            case 'hero':
                return Hero;
            default:
                console.warn(`Unknown section type: ${section.type}`);
                return () => null;
        }
    })();

    const finalStyle = siteStyle;
    const overrideStyles = [
        // Site-wide styles (lowest priority)
        ...(pageStyle || []), // Page-level styles
        ...(section.style || []), // Section-specific styles (highest priority)
    ];
    function mergeDeep(target, source) {
        Object.keys(source).forEach((key) => {
            const sourceValue = source[key];
            if (sourceValue === null || sourceValue === undefined) return;
            if (Array.isArray(sourceValue)) {
                if (!Array.isArray(target[key])) {
                    target[key] = sourceValue;
                } else {
                    sourceValue.forEach((item, index) => {
                        if (item === null || item === undefined) return;
                        if (
                            index in target[key] &&
                            typeof target[key][index] === 'object' &&
                            target[key][index] !== null &&
                            typeof item === 'object'
                        ) {
                            mergeDeep(target[key][index], item);
                        } else {
                            target[key][index] = item;
                        }
                    });
                }
            } else if (typeof sourceValue === 'object') {
                if (!target[key] || typeof target[key] !== 'object') {
                    target[key] = sourceValue;
                } else {
                    mergeDeep(target[key], sourceValue);
                }
            } else {
                target[key] = sourceValue;
            }
        });
    }

    overrideStyles.forEach((style) => {
        // eslint-disable-next-line no-unused-vars
        const { type, classification: _classification, ...rest } = style;
        // debug.log('Merging style type:', type);
        // debug.log('Merging style content:', rest);
        mergeDeep(finalStyle[type], rest);
    });
    const classes = processSectionStyles(finalStyle);

    const combinedClasses = [` ${classes.toString()}`]
        .filter(Boolean)
        .join(' ');

    debug.log('Final Combined Classes:', combinedClasses);
    debug.groupEnd();

    // Special case for hero - don't wrap it in container
    // if (section.type === 'hero') {
    //     return (
    //         <section id={section.classification?.id}>
    //             <Component {...section} />
    //         </section>
    //     );
    // }

    // Normal section wrapper for other components
    return (
        <div>
            <section
                id={section.classification?.id}
                className={section.type === 'hero' ? '' : combinedClasses}
            >
                <div
                    className={
                        section.style?.find((s) => s.type === 'layout')
                            ?.fullContent
                            ? ''
                            : 'container max-w-5xl mx-auto'
                    }
                >
                    <Component {...section} />
                </div>
            </section>
        </div>
    );
}

// Export base versions for admin preview
export {
    RichText,
    // BaseFeatures,
    // BaseLogos
};

export // Hero,
// TextWithImage,
// Stats,
// Team,
// CTA,
// TwoColumnText,
// FAQ,
// Testimonials,
// Timeline,
// Gallery,
// Video,
// Pricing,
// ContactForm,
 {};
