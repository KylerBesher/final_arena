'use client';

// import { Hero } from './hero';
// import { TextWithImage } from './text-with-image';
// import { Stats } from './stats';
// import { Team } from './team';
// import { Features as BaseFeatures } from './Features';
// import { CTA } from './cta';
// import { TwoColumnText } from './two-column-text';
// import { FAQ } from './faq';
// import { Testimonials } from './testimonials';
// import { Timeline } from './timeline';
// import { Gallery } from './gallery';
// import { Video } from './video';
// import { Pricing } from './pricing';
// import { ContactForm } from './contact-form';
// import { Logos as BaseLogos } from './Logos';
import { processSectionStyles } from '../../lib/styles/processSectionStyles';
import debug from '../../lib/utils/debug';

import { RichText as BaseRichText } from './rich-text';

const components = {
    // hero: Hero,
    // textWithImage: TextWithImage,
    // stats: Stats,
    // team: Team,
    // features: BaseFeatures,
    // cta: CTA,
    richText: BaseRichText,
    // twoColumnText: TwoColumnText,
    // faq: FAQ,
    // testimonials: Testimonials,
    // timeline: Timeline,
    // gallery: Gallery,
    // video: Video,
    // pricing: Pricing,
    // contactForm: ContactForm,
    // logos: BaseLogos
};

export function SectionComponent({ section, pageStyle, siteStyle }) {
    debug.group('Section Styles Debug');

    const Component = components[section.type];
    if(!Component) {
        debug.warn('Missing section type:', section.type);
        debug.groupEnd();
        return null;
    }

    const finalStyle = siteStyle;
    const overrideStyles = [
        // Site-wide styles (lowest priority)
        ...(pageStyle || []), // Page-level styles
        ...(section.style || []), // Section-specific styles (highest priority)
    ];
    function mergeDeep(target, source) {
        Object.keys(source).forEach((key) => {
            const sourceValue = source[key];
            if(sourceValue === null || sourceValue === undefined) return;
            if(Array.isArray(sourceValue)) {
                if(!Array.isArray(target[key])) {
                    target[key] = sourceValue;
                } else {
                    sourceValue.forEach((item, index) => {
                        if(item === null || item === undefined) return;
                        if(
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
            } else if(typeof sourceValue === 'object') {
                if(!target[key] || typeof target[key] !== 'object') {
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
        debug.log('Merging style type:', type);
        debug.log('Merging style content:', rest);
        mergeDeep(finalStyle[type], rest);
    });

    debug.log('Final Style Object:', finalStyle);
    const classes = processSectionStyles(finalStyle);
    debug.log('Processed Classes:', classes);

    const combinedClasses = [
        // ' bg-[#1ee054]',  // This works,
        ` ${classes.toString()}`,

        // ...(section.classification?.classes || []),
        // 'bg-[#621EE0]'  // This works
    ]
        .filter(Boolean)
        .join(' ');

    debug.log('Final Combined Classes:', combinedClasses);
    debug.groupEnd();

    return (
        <section id={section.classification?.id} className={combinedClasses}>
            <pre>{JSON.stringify(combinedClasses, null, 2)}</pre>
            <Component {...section} />
        </section>
    );
}

// Export base versions for admin preview
export {
    BaseRichText,
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
{ };
